// help: pas compris pourquoi ca veut dire quoi l'enchainement d'extends

type IsUnion<T, U = T> = IsNever<T> extends true
  ? false
  : T extends U
  ? [U] extends [T]
    ? false
    : true
  : never;
