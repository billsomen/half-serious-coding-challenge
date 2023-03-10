import { IPilot, IPilotList } from "@services/types/pilot"
import {
  Exclude,
  Expose,
  Transform,
  Type,
  plainToInstance,
} from "class-transformer"
import {
  transformStringToDate,
  transformStringToNumber,
} from "./_miscellaneous.models"
import { IPilotDTO, IPilotListDTO } from "@services/dtos/pilots.dto"
import PilotsController from "@services/controllers/pilot.controller"

export class Pilot implements IPilot {
  @Expose({ name: "name" })
  name = ""

  @Expose({ name: "height" })
  @Transform(transformStringToNumber)
  height?: number

  @Expose({ name: "mass" })
  @Transform(transformStringToNumber)
  mass?: number

  @Expose({ name: "hair_color" })
  hairColor = ""

  @Expose({ name: "skin_color" })
  skinColor = ""

  @Expose({ name: "eye_color" })
  eyeColor = ""

  @Expose({ name: "birth_year" })
  birthYear = ""

  @Expose({ name: "gender" })
  gender = ""

  @Expose({ name: "homeworld" })
  homeworld = ""

  @Expose({ name: "films" })
  films: string[] = []

  @Expose({ name: "species" })
  species: string[] = []

  @Expose({ name: "vehicles" })
  vehicles: string[] = []

  @Expose({ name: "starships" })
  starships: string[] = []

  @Expose({ name: "birth_year" })
  @Transform(transformStringToDate)
  created?: Date

  @Expose({ name: "birth_year" })
  @Transform(transformStringToDate)
  edited?: Date

  @Expose({ name: "url" })
  uri = ""

  @Exclude()
  public parse(dto: IPilotDTO) {
    Object.assign(this, plainToInstance(Pilot, dto))
  }

  @Exclude()
  public getIdFromUri() {
    const idExist = this.uri?.match(/\d+/)

    if (idExist) {
      return idExist[0]
    }

    return this.uri
  }

  constructor(dto?: IPilotDTO) {
    if (dto) {
      this.parse(dto)
    }
  }
}

export class PilotList implements IPilotList {
  @Expose({ name: "count" })
  @Transform(transformStringToNumber)
  count?: number

  @Expose({ name: "next" })
  next?: string

  @Expose({ name: "previous" })
  previous?: string

  @Expose({ name: "previous" })
  @Type(() => Pilot)
  results?: Pilot[]

  @Exclude()
  public parse(dto: IPilotListDTO) {
    Object.assign(this, plainToInstance(PilotList, dto))
  }

  constructor(dto?: IPilotListDTO) {
    if (dto) {
      this.parse(dto)
    }
  }

  @Exclude()
  static build = async (page?: string) => {
    const controller = new PilotsController()
    const pilotList = await controller.getAllPilots(page)

    return new PilotList(pilotList)
  }
}
