type Flip<T extends object> = {
  [Key in keyof T as T[Key] extends PropertyKey
    ? T[Key]
    : T[Key] extends boolean
    ? `${T[Key]}`
    : never]: Key;
};
