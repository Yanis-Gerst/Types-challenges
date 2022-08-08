type PrefixeParser<T extends string> = T extends "+"
  ? "+"
  : T extends "-"
  ? "-"
  : "";

type SuffixParser<T extends string> = T extends `${infer Nb}%`
  ? [Nb, "%"]
  : [T, ""];

type PercentageParser<A extends string> = A extends ""
  ? ["", "", ""]
  : A extends `${infer First}${infer Rest}`
  ? PrefixeParser<First> extends ""
    ? ["", ...SuffixParser<A>]
    : [PrefixeParser<First>, ...SuffixParser<Rest>]
  : never;
