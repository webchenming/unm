const Key = [
  "H",
  "V",
  "N",
  "D",
  "NE",
  "ID",
  "IOF",
  "IS",
  "LD",
  "LAL",
  "LS",
  "AS",
  "US",
  "RS",
  "LE",
  "UD",
  "ULD",
  "ULOS",
  "UUD",
  "URD",
  "UAD",
  "UAAV",
  "RD",
  "RLD",
  "RUD",
  "RRD",
  "RAD",
  "RAAV",
] as const;

export type LanguageKey = (typeof Key)[number];

export type Language = Record<LanguageKey, string>;
