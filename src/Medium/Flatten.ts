type Flatten<T extends any[]> = T extends [infer FirstElem, ...infer Rest]
  ? FirstElem extends any[]
    ? [...Flatten<FirstElem>, ...Flatten<Rest>]
    : [FirstElem, ...Flatten<Rest>]
  : T;
