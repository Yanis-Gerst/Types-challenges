type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer Arg
) => any
  ? Arg
  : undefined;
