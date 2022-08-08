type Trait = "-" | "_";

type KebabCase<
  S extends string,
  C = false,
  firstCall = true
> = S extends `${infer First}${infer Rest}`
  ? First extends Uppercase<Exclude<First, Trait>>
    ? C extends true
      ? `-${Lowercase<First>}${KebabCase<Rest, true, false>}`
      : firstCall extends true
      ? `${Lowercase<First>}${KebabCase<Rest, true, false>}`
      : `-${Lowercase<First>}${KebabCase<Rest, true, false>}`
    : `${First}${KebabCase<Rest, C, false>}`
  : S;

//Cas ou j'ai tricher pour gérer un emoji
// type KebabCase<S extends string, C = false, firstCall = true> = S extends "😎"
//   ? "😎"
//   : S extends `${infer First}${infer Rest}`
//   ? First extends Uppercase<Exclude<First, Trait>>
//     ? C extends true
//       ? `-${Lowercase<First>}${KebabCase<Rest, true, false>}`
//       : firstCall extends true
//       ? `${Lowercase<First>}${KebabCase<Rest, true, false>}`
//       : `-${Lowercase<First>}${KebabCase<Rest, true, false>}`
//     : `${First}${KebabCase<Rest, C, false>}`
//   : S;
