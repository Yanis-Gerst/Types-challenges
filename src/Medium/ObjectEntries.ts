//Lesson: Pour retourner un Array avec les clé d'un objet, on revoie un objet qui auto utiliser ses propre clé avec les
// valeurs qui sont les array désirée

//J'ai inverser le baile
//Prend une liste et la retourne un objet
// type ObjectEntries<T> = T extends [infer First, infer Rest]
//   ? First extends string
//     ? { [P in First]: First extends P ? Rest : never }
//     : never
//   : never;

// Si la valeur est uniquement undefined alors on retourne undefined
type RemoveUndefined<T> = [undefined] extends [T]
  ? Exclude<T, undefined> extends never
    ? T
    : Exclude<T, undefined>
  : T;

//Prend un objet et retourne une liste
type ObjectEntries<T extends object> = {
  [K in keyof T]-?: [K, RemoveUndefined<T[K]>];
}[keyof T];
