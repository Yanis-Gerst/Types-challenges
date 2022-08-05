type AppendArgument<Fn, A> = Fn extends (...args: infer Arg) => infer ReturnFn
  ? (...args: [...Arg, A]) => ReturnFn
  : never;
