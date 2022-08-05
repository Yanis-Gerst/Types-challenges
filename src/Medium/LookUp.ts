//Extends -> détermine une contrainte
//On recupère les type de U sous forme x | y
//On contraint selon T donc U gardera un seul type car ces derniers ont subi une contrainte
type LookUp<U, T extends string> = U extends { type: infer UT }
  ? UT extends T
    ? U
    : never
  : never;
