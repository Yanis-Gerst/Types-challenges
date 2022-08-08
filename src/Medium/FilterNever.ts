type filterNever<Obj extends Object> = {
  [P in keyof Obj as Obj[P] extends never ? never : P]: Obj[P];
};
