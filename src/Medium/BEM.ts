type ElementParser<B extends string, E extends string[]> = E extends [
  infer Element
]
  ? Element extends string
    ? `${B}__${Element}`
    : never
  : never;

type HandleModifier<M> = M extends [infer First, ...infer Rest]
  ? First extends string
    ? `--${First}` | HandleModifier<Rest>
    : never
  : M extends [infer First]
  ? First extends string
    ? `--${First}`
    : never
  : never;

type BEM<
  B extends string,
  E extends string[],
  M extends string[]
> = M["length"] extends 0
  ? E["length"] extends 0
    ? undefined
    : ElementParser<B, E>
  : E["length"] extends 0
  ? `${B}${HandleModifier<M>}`
  : `${ElementParser<B, E>}${HandleModifier<M>}`;
