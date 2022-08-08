// U -> Types étant un union de diff types object
// T -> Les proriétés qu'on veut modifier
// Y -> Un Object représentant la modification ; si correspond pas a T les proprité seront replacer par never

type ReplaceKeys<U, T, Y> = {
  [key in keyof U]: key extends T
    ? key extends keyof Y
      ? Y[key]
      : never
    : U[key];
};
