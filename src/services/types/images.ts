import { IImageListDTO } from "@services/dtos/images.dto"

export interface URLs {
  regular: string
  full: string
  thumb: string
}

export interface IImage {
  altDescription: string
  uriList: URLs
}

export interface IImageList {
  results: IImage[]
}

export interface IImagesController {
  getImages: (query: string) => Promise<IImageListDTO>
}
