//Comprend pas pourquoi Le Exclude permet de faire permutation entre les types
//Si Generic D'exclude sont inversé alors ça marche plus

type Permutation<T, U = T> = [T] extends [never]
  ? []
  : T extends U
  ? [T, ...Permutation<Exclude<U, T>>]
  : [];
