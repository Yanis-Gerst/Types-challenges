type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer Head}${From}${infer Tail}`
  ? `${ReplaceAll<Head, From, To>}${To}${ReplaceAll<Tail, From, To>}`
  : S;
