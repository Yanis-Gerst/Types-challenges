type TupleToNestedObject<T extends any[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? {
      [P in First as P extends PropertyKey ? P : never]: TupleToNestedObject<
        Rest,
        U
      >;
    }
  : U;
