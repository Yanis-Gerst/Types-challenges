type Flat<T extends any[], U extends any[] = []> = T extends [
  infer First,
  ...infer Rest
]
  ? First extends any[]
    ? Flat<Rest, [...U, ...First]>
    : Flat<Rest, [...U, First]>
  : U;

type FlattenDepth<
  T extends any[],
  U extends number = 1,
  Counter extends any[] = []
> = Counter["length"] extends U
  ? T
  : Flat<T> extends T
  ? T
  : FlattenDepth<Flat<T>, U, [...Counter, any]>;
