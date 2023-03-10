import { TransformFnParams } from "class-transformer"

export const transformStringToNumber = (Obj: TransformFnParams): number => {
  return parseInt(Obj.value)
}

export const transformStringToDate = (Obj: TransformFnParams): Date => {
  return new Date(Obj.value)
}

export const transformStringToId = (Obj: TransformFnParams): string => {
  const value = Obj.obj.url as string
  const idExist = value.match(/\d+/)

  if (idExist) {
    return idExist[0]
  }

  return value
}
