type Diff<
  FirstObject extends object,
  SecondObject extends object
> = filterNever<{
  [P in keyof FirstObject | keyof SecondObject]: P extends keyof FirstObject
    ? P extends keyof SecondObject
      ? never
      : FirstObject[P]
    : P extends keyof SecondObject
    ? SecondObject[P]
    : never;
}>;
