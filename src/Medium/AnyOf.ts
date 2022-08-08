type isFalse = "" | [] | { [p: string]: never } | 0 | false;
type AnyOf<T extends readonly any[]> = T extends Array<isFalse> ? false : true;
