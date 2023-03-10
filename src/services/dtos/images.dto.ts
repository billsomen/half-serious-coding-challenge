import { URLs } from "@services/types/images"

export interface IImageDTO {
  alt_description: string
  urls: URLs
}

export interface IImageListDTO {
  results: IImageDTO[]
}
