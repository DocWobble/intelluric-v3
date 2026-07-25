import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
const here = dirname(fileURLToPath(import.meta.url));
const packageRoot = dirname(here);
const sourceRoot = join(packageRoot, "src");
const outputRoot = join(packageRoot, "dist");
const checkOnly = process.argv.includes("--check");
const sourceFiles = ["primitives.json", "semantic.json", "components.json"];
const isObject = (v) => v !== null && typeof v === "object" && !Array.isArray(v);
function merge(target, source) { for (const [k,v] of Object.entries(source)) { if (isObject(v) && isObject(target[k]) && !("$value" in v)) merge(target[k],v); else target[k]=v; } return target; }
function collect(node,path=[],inheritedType,result=new Map()) { const groupType=node?.$type??inheritedType; for (const [k,v] of Object.entries(node)) { if (k.startsWith("$")) continue; const p=[...path,k]; if (isObject(v)&&"$value" in v) result.set(p.join("."),{path:p,type:v.$type??groupType??"unknown",value:v.$value}); else if(isObject(v)) collect(v,p,v.$type??groupType,result); } return result; }
const ref=/^\{([^}]+)\}$/;
const cssName=(p)=>`--it-${p.split(".").map(x=>x.replace(/_/g,"-")).join("-")}`;
function resolve(value,tokens,stack=[]) { if(typeof value!=="string") return value; const m=value.match(ref); if(!m) return value; const p=m[1]; if(!tokens.has(p)) throw new Error(`Unknown token reference: ${value}`); if(stack.includes(p)) throw new Error(`Circular token reference: ${[...stack,p].join(" -> ")}`); return resolve(tokens.get(p).value,tokens,[...stack,p]); }
function cssValue(value,tokens) { if(typeof value!=="string") return String(value); const m=value.match(ref); if(!m) return value; if(!tokens.has(m[1])) throw new Error(`Unknown token reference: ${value}`); return `var(${cssName(m[1])})`; }
function setNested(target,path,value){ let c=target; for(const k of path.slice(0,-1)){c[k]??={};c=c[k];} c[path.at(-1)]=value; }
const readJson=async(p)=>JSON.parse(await readFile(p,"utf8"));
const merged={}; for(const file of sourceFiles) merge(merged,await readJson(join(sourceRoot,file)));
const themes=await readJson(join(sourceRoot,"themes.json")); const tokens=collect(merged);
for(const [p,t] of tokens) resolve(t.value,tokens,[p]);
for(const mappings of Object.values(themes)) for(const value of Object.values(mappings)) resolve(value,tokens);
const declarations=[...tokens.entries()].sort(([a],[b])=>a.localeCompare(b)).map(([p,t])=>`  ${cssName(p)}: ${cssValue(t.value,tokens)};`);
const themeBlocks=Object.entries(themes).map(([name,m])=>`[data-accent="${name}"] {\n${Object.entries(m).map(([p,v])=>`  ${cssName(p)}: ${cssValue(v,tokens)};`).join("\n")}\n}`);
const css=`/* Generated. Do not edit. */\n:root {\n${declarations.join("\n")}\n}\n\n${themeBlocks.join("\n\n")}\n`;
const resolved={}; for(const token of tokens.values()) setNested(resolved,token.path,resolve(token.value,tokens));
const ts=`export const tokens = ${JSON.stringify(resolved,null,2)} as const;\nexport type IntelluricTokens = typeof tokens;\nexport default tokens;\n`;
const json=`${JSON.stringify(resolved)}\n`;
await mkdir(outputRoot,{recursive:true});
if(checkOnly){
  const existingCss=await readFile(join(outputRoot,"tokens.css"),"utf8");
  if(existingCss!==css) throw new Error("Generated CSS token output is stale");
  const existingJson=JSON.parse(await readFile(join(outputRoot,"tokens.resolved.json"),"utf8"));
  if(JSON.stringify(existingJson)!==JSON.stringify(resolved)) throw new Error("Generated JSON token output is stale");
  const existingTs=await readFile(join(outputRoot,"tokens.ts"),"utf8");
  const match=existingTs.match(/^export const tokens = ([\s\S]+) as const;\nexport type/);
  if(!match || JSON.stringify(JSON.parse(match[1]))!==JSON.stringify(resolved)) throw new Error("Generated TypeScript token output is stale");
}else{
  await writeFile(join(outputRoot,"tokens.css"),css,"utf8");
  await writeFile(join(outputRoot,"tokens.ts"),ts,"utf8");
  await writeFile(join(outputRoot,"tokens.resolved.json"),json,"utf8");
}
console.log(checkOnly?`Token outputs are current (${tokens.size} tokens).`:`Generated ${tokens.size} tokens.`);
