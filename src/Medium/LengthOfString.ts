//Lesson: Utiliser la réscursivité avec les generics pour ajouter des elements a une liste au depart vide

type LengthOfString<
  S extends string,
  T extends string[] = []
> = S extends `${infer A}${infer B}`
  ? LengthOfString<B, [...T, A]>
  : T["length"];
