import {
  CrystalButton,
  MachinedFrame,
  PanelWell,
  RaisedCard,
  RecessedControl,
  TechnicalLabel,
  TechnicalOverlay,
} from "../src";
import "../src/material-system.css";

const approaches = [
  ["teal", "Category Redefined", "Create a category the audience can name."],
  ["copper", "Problem, Solved", "Make the mechanism and outcome inspectable."],
  ["sapphire", "Technology Edge", "Show why the engine compounds."],
  ["violet", "Market Momentum", "Connect timing to measurable demand."],
] as const;

export default function MaterialLab() {
  return (
    <main className="instrument-shell it-canvas" data-accent="teal">
      <TechnicalOverlay />
      <MachinedFrame style={{ padding: "var(--it-space-8)" }}>
        <TechnicalLabel>Canonical material specimen</TechnicalLabel>
        <h1>One physical grammar for every InTelluric surface.</h1>
        <PanelWell style={{ padding: "var(--it-space-4)" }}>
          <div style={{ display: "grid", gap: "var(--it-space-4)" }}>
            {approaches.map(([accent, title, body], index) => (
              <RaisedCard
                key={title}
                accent={accent}
                active={index === 0}
                style={{ padding: "var(--it-space-5)" }}
              >
                <TechnicalLabel>{String(index + 1).padStart(2, "0")}</TechnicalLabel>
                <h2>{title}</h2>
                <p>{body}</p>
              </RaisedCard>
            ))}
          </div>
        </PanelWell>
        <RecessedControl style={{ marginTop: "var(--it-space-5)" }}>
          <span aria-hidden="true">⌕</span>
          <input aria-label="Project description" placeholder="Describe the project" />
        </RecessedControl>
        <CrystalButton style={{ marginTop: "var(--it-space-5)" }}>
          Choose this approach →
        </CrystalButton>
      </MachinedFrame>
    </main>
  );
}
