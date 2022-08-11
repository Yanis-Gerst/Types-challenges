type AllCombinations<S extends string, U extends string = StringToUnion<S>> = [
  S
] extends [never]
  ? ""
  :
      | ""
      | {
          [Letter in U]: `${Letter}${AllCombinations<
            S,
            `${Exclude<U, Letter>}`
          >}`;
        }[U];
