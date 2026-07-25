export const tokens = {
  "color": {
    "ink": {"750":"#102431","800":"#0A1B27","850":"#071621","900":"#041019","950":"#02070C","1000":"#010407"},
    "ivory": {"50":"#FAF6EF","100":"#F1E9DD","200":"#D8CFC3"},
    "steel": {"100":"#D8DFE7","200":"#BBC5D0","300":"#96A3B0","400":"#758391","500":"#536473","600":"#344754","700":"#223541"},
    "copper": {"200":"#E0AF88","300":"#C98B62","400":"#AD6946","500":"#7E4934","600":"#4D3027"},
    "teal": {"200":"#9DECE2","300":"#65D9CC","400":"#38BCAF","500":"#177E78","600":"#0D514F"},
    "sapphire": {"200":"#B8D5FF","300":"#7DB2FF","400":"#4B8FE8","500":"#285FA8","600":"#183C6E"},
    "violet": {"200":"#D9C5FF","300":"#B397F2","400":"#8B69D1","500":"#60458F","600":"#3A2C58"},
    "amber": {"200":"#F3CF91","300":"#E6A958","400":"#C9822F","500":"#86551F","600":"#503619"},
    "green": {"300":"#80D5AF","400":"#4CB989","500":"#2A805F","600":"#18503D"},
    "red": {"300":"#F39A9A","400":"#D86464","500":"#923E43","600":"#592B31"},
    "white-alpha": {"10":"rgba(255, 255, 255, 0.10)","16":"rgba(255, 255, 255, 0.16)","04":"rgba(255, 255, 255, 0.04)","06":"rgba(255, 255, 255, 0.06)"},
    "black-alpha": {"24":"rgba(0, 0, 0, 0.24)","40":"rgba(0, 0, 0, 0.40)","56":"rgba(0, 0, 0, 0.56)","72":"rgba(0, 0, 0, 0.72)"},
    "background": {"canvas":"#02070C","canvas-deep":"#010407","canvas-raised":"#041019"},
    "surface": {"frame":"rgba(7, 22, 33, 0.86)","panel":"rgba(7, 22, 33, 0.76)","panel-strong":"rgba(10, 27, 39, 0.92)","control":"rgba(16, 36, 49, 0.72)","control-hover":"rgba(22, 48, 63, 0.82)","scrim":"rgba(0, 0, 0, 0.72)"},
    "text": {"primary":"#FAF6EF","heading":"#F1E9DD","secondary":"#BBC5D0","muted":"#758391","disabled":"#536473","technical":"#96A3B0","on-light":"#02070C"},
    "border": {"frame":"rgba(173, 105, 70, 0.48)","frame-hover":"rgba(201, 139, 98, 0.74)","panel":"rgba(117, 131, 145, 0.30)","panel-strong":"rgba(150, 163, 176, 0.46)","subtle":"rgba(117, 131, 145, 0.18)","separator":"rgba(150, 163, 176, 0.16)"},
    "accent": {"context":"#65D9CC","context-strong":"#9DECE2","context-dim":"#0D514F","context-border":"rgba(101, 217, 204, 0.72)","context-fill":"rgba(56, 188, 175, 0.13)","context-glow":"rgba(56, 188, 175, 0.30)"},
    "status": {"success":{"text":"#80D5AF","border":"rgba(76, 185, 137, 0.50)","fill":"rgba(42, 128, 95, 0.18)"},"warning":{"text":"#F3CF91","border":"rgba(230, 169, 88, 0.50)","fill":"rgba(134, 85, 31, 0.18)"},"danger":{"text":"#F39A9A","border":"rgba(216, 100, 100, 0.52)","fill":"rgba(146, 62, 67, 0.18)"},"info":{"text":"#B8D5FF","border":"rgba(75, 143, 232, 0.52)","fill":"rgba(40, 95, 168, 0.18)"}}
  },
  "font": {"family":{"display":"\"Cormorant Garamond\", \"Iowan Old Style\", Baskerville, Georgia, serif","body":"Inter, \"Helvetica Neue\", Arial, sans-serif","technical":"\"IBM Plex Mono\", \"SFMono-Regular\", Consolas, monospace"},"weight":{"regular":"400","medium":"500","semibold":"600"},"size":{"2xs":"0.6875rem","xs":"0.75rem","sm":"0.875rem","md":"1rem","lg":"1.125rem","xl":"1.375rem","2xl":"1.75rem","3xl":"2.25rem","4xl":"3rem","display-sm":"clamp(2.25rem, 4vw, 3.5rem)","display-md":"clamp(3rem, 5vw, 5rem)","display-lg":"clamp(3.5rem, 6vw, 6.25rem)"},"line-height":{"solid":"1","tight":"1.08","heading":"1.14","body":"1.55","relaxed":"1.7"},"tracking":{"tight":"-0.025em","normal":"0","wide":"0.08em","label":"0.16em","technical":"0.22em"}},
  "space": {"0":"0","1":"0.25rem","2":"0.5rem","3":"0.75rem","4":"1rem","5":"1.25rem","6":"1.5rem","8":"2rem","10":"2.5rem","12":"3rem","16":"4rem","20":"5rem","24":"6rem"},
  "radius": {"none":"0","xs":"0.25rem","sm":"0.5rem","control":"0.625rem","md":"0.75rem","panel":"1rem","frame":"1.375rem","hero":"2rem","pill":"999rem"},
  "border": {"width":{"hairline":"1px","strong":"2px"}},
  "motion": {"duration":{"instant":"90ms","fast":"140ms","normal":"220ms","slow":"360ms"},"ease":{"standard":"cubic-bezier(0.2, 0.8, 0.2, 1)","enter":"cubic-bezier(0.16, 1, 0.3, 1)","exit":"cubic-bezier(0.4, 0, 1, 1)"}},
  "layout": {"content-max":"85.5rem","reading-max":"46rem","gutter-mobile":"1rem","gutter-tablet":"1.5rem","gutter-desktop":"2rem","header-public":"4.5rem","header-instrument":"4rem","rail-instrument":"15.5rem","control-min":"2.75rem"},
  "breakpoint": {"sm":"40rem","md":"48rem","lg":"64rem","xl":"80rem","2xl":"90.5rem"},
  "z": {"base":"0","raised":"10","sticky":"30","overlay":"50","modal":"70","toast":"90"},
  "component": {"shell":{"public":{"max-width":"85.5rem","header-height":"4.5rem","gutter":"2rem"},"instrument":{"max-width":"100%","header-height":"4rem","rail-width":"15.5rem","gutter":"1.25rem"}},"frame":{"radius":"1.375rem","padding":"1.5rem","gap":"1rem"},"panel":{"radius":"1rem","padding":"1.25rem","gap":"1rem"},"button":{"height":"2.75rem","padding-inline":"1.5rem","gap":"0.75rem","radius":"0.625rem","font-size":"1rem","font-weight":"500"},"input":{"height":"2.75rem","padding-inline":"1rem","padding-block":"0.75rem","radius":"0.625rem"},"nav":{"height-public":"4.5rem","height-instrument":"4rem","link-gap":"2rem"},"stepper":{"node-size":"1.875rem","connector-width":"4rem"},"slide":{"aspect-ratio":"1.7777778","radius":"0.5rem","thumbnail-width":"7.25rem","thumbnail-gap":"0.75rem"},"label":{"font-family":"\"IBM Plex Mono\", \"SFMono-Regular\", Consolas, monospace","font-size":"0.6875rem","font-weight":"500","tracking":"0.16em"}}
} as const;
export type IntelluricTokens = typeof tokens;
export default tokens;
