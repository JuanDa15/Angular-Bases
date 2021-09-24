export enum colors{
  red = 0,
  gray = 1,
  blue = 2,
  green = 3
}

export interface hero{
  name:string,
  fly: boolean,
  color: colors
}