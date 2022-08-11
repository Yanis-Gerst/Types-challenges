type FlipArguments<T extends (...args: any) => any> = T extends (
  ...args: infer FirstArg
) => infer ReturnType
  ? (...args: Reverse<FirstArg>) => ReturnType
  : false;
