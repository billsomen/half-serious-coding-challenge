import { BaseController } from "./_miscellaneous.controller"
import apiSwapi from "@services/apis/apiSwapi"
import { IStarshipListDTO } from "@services/dtos/starships.dto"
import { IStarshipController } from "@services/types/starship"
import axios, { AxiosError } from "axios"

export default class StarshipController
  extends BaseController
  implements IStarshipController
{
  constructor() {
    super()
    this.resource = "starships"
  }

  public getAllStarship = async (page?: string): Promise<IStarshipListDTO> => {
    try {
      const response = await apiSwapi.get(this.resource, {
        params: {
          page: page ?? 1,
        },
      })

      return response.data
    } catch (error: unknown | Error | AxiosError) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          "Error while getting the Starship list: " + error.message
        )
      }

      throw error
    }
  }
}
