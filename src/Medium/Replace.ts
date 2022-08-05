type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer Rest}${From}`
  ? Rest extends `${infer Rest2}${From}`
    ? `${Replace<Rest, From, To>}${From}`
    : `${Rest}${To}`
  : S;
