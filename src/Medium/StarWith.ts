//My version
// type StartsWith<
//   T extends string,
//   U extends string,
//   Starter extends string = "",
//   L = LengthOfString<U>
// > = LengthOfString<Starter> extends L
//   ? Starter extends U
//     ? true
//     : false
//   : T extends `${infer First}${infer Rest}`
//   ? StartsWith<Rest, U, `${Starter}${First}`>
//   : false;

//Plus simple Version
type StartsWith<T extends string, U extends string> = T extends `${U}${string}`
  ? true
  : false;
