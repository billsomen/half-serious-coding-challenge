import { IImagesController } from "@services/types/images"
import { BaseController } from "./_miscellaneous.controller"
import { IImageListDTO } from "@services/dtos/images.dto"
import apiUnsplash from "@services/apis/apiUnsplash"
import axios, { AxiosError } from "axios"

export default class UnsplashImageController
  extends BaseController
  implements IImagesController
{
  constructor() {
    super()
    this.resource = "/search/photos"
  }

  public getImages = async (query: string): Promise<IImageListDTO> => {
    try {
      const response = await apiUnsplash.get(this.resource, {
        params: {
          query,
        },
      })

      return response.data
    } catch (error: unknown | Error | AxiosError) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          `Error while getting the images of ${query}: ` + error.message
        )
      }

      throw error
    }
  }
}
