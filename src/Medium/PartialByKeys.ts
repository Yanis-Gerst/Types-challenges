type PartialByKeys<T, K = keyof T> = {
  [Key in keyof T as Key extends K ? never : Key]: T[Key];
} & { [Key in keyof T as Key extends K ? Key : never]?: T[Key] } extends infer O
  ? { [Key in keyof O]: O[Key] }
  : never;
