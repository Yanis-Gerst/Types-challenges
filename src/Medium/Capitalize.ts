type MyCapitalize<S extends string> =
  S extends `${infer FirstLetter}${infer Rest}`
    ? `${Uppercase<FirstLetter>}${Rest}`
    : S;
