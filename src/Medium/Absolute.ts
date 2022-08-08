//Lesson: Convert string with ${Type} this is the best method

type Absolute<T extends number | string | bigint> =
  `${T}` extends `-${infer Number}` ? Number : `${T}`;
