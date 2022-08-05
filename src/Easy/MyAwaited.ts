type MyAwaited<T extends Promise<any>> = T extends Promise<infer GenericPromise>
  ? GenericPromise extends Promise<any>
    ? MyAwaited<GenericPromise>
    : GenericPromise
  : never;
