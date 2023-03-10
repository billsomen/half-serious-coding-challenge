import { IPilotListDTO } from "@services/dtos/pilots.dto"
import { BaseController } from "./_miscellaneous.controller"
import { IPilotController } from "@services/types/pilot"
import apiSwapi from "@services/apis/apiSwapi"
import axios, { AxiosError } from "axios"

export default class PilotsController
  extends BaseController
  implements IPilotController
{
  constructor() {
    super()
    this.resource = "people"
  }

  public getAllPilots = async (page?: string): Promise<IPilotListDTO> => {
    try {
      const response = await apiSwapi.get(this.resource, {
        params: {
          page: page ?? 1,
        },
      })

      return response.data
    } catch (error: unknown | Error | AxiosError) {
      if (axios.isAxiosError(error)) {
        throw new Error("Error while getting the pilots list: " + error.message)
      }

      throw error
    }
  }
}
