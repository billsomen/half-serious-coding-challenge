import { BaseController } from "./_miscellaneous.controller"
import apiSwapi from "@services/apis/apiSwapi"
import axios, { AxiosError } from "axios"
import { IFilmController } from "@services/types/films"
import { IFilmListDTO } from "@services/dtos/films.dto"

export default class FilmController
  extends BaseController
  implements IFilmController
{
  constructor() {
    super()
    this.resource = "films"
  }

  public getAllFilms = async (page?: string): Promise<IFilmListDTO> => {
    try {
      const response = await apiSwapi.get(this.resource, {
        params: {
          page: page ?? 1,
        },
      })

      return response.data
    } catch (error: unknown | Error | AxiosError) {
      if (axios.isAxiosError(error)) {
        throw new Error("Error while getting the film list: " + error.message)
      }

      throw error
    }
  }
}
