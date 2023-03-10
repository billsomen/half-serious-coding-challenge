import UnsplashImageController from "@services/controllers/images.controller"
import { IImageDTO, IImageListDTO } from "@services/dtos/images.dto"
import { IImage, IImageList, URLs } from "@services/types/images"
import { Exclude, Expose, Type, plainToInstance } from "class-transformer"

export class ImageURLs implements URLs {
  @Expose({ name: "regular" })
  regular = ""

  @Expose({ name: "thumb" })
  thumb = ""

  @Expose({ name: "full" })
  full = ""

  @Exclude()
  public parse(dto: URLs) {
    Object.assign(this, plainToInstance(ImageURLs, dto))
  }

  constructor(dto?: URLs) {
    if (dto) {
      this.parse(dto)
    }
  }
}

export class UnsplashImage implements IImage {
  @Expose({ name: "alt_description" })
  altDescription = ""

  @Expose({ name: "urls" })
  @Type(() => ImageURLs)
  uriList: URLs = {} as URLs

  @Exclude()
  public parse(dto: IImageDTO) {
    Object.assign(this, plainToInstance(UnsplashImage, dto))
  }

  constructor(dto?: IImageDTO) {
    if (dto) {
      this.parse(dto)
    }
  }
}

export class UnsplashImageList implements IImageList {
  @Expose({ name: "results" })
  @Type(() => UnsplashImage)
  results: UnsplashImage[] = []

  @Exclude()
  public parse(dto: IImageListDTO) {
    Object.assign(this, plainToInstance(UnsplashImageList, dto))
  }

  constructor(dto?: IImageListDTO) {
    if (dto) {
      this.parse(dto)
    }
  }

  @Exclude()
  static build = async (query: string) => {
    const controller = new UnsplashImageController()
    const imageList = await controller.getImages(query)

    return new UnsplashImageList(imageList)
  }
}
