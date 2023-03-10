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
import { IStarship, IStarshipResult } from "@services/types/starship"
import { IStarshipListDTO, IStarshipDTO } from "@services/dtos/starships.dto"
import StarshipController from "@services/controllers/starship.controller"

export class Starship implements IStarship {
  @Expose({ name: "name" })
  name = ""

  @Expose({ name: "model" })
  model = ""

  @Expose({ name: "manufacturer" })
  manufacturer = ""

  @Expose({ name: "cost_in_credits" })
  @Transform(transformStringToNumber)
  costInCredits?: number

  @Expose({ name: "length" })
  length?: number

  @Expose({ name: "max_atmosphering_speed" })
  @Transform(transformStringToNumber)
  maxAtmospheringSpeed?: number

  @Expose({ name: "crew" })
  @Transform(transformStringToNumber)
  crew?: number

  @Expose({ name: "passengers" })
  @Transform(transformStringToNumber)
  passengers?: number

  @Expose({ name: "gender" })
  gender = ""

  @Expose({ name: "cargo_capacity" })
  @Transform(transformStringToNumber)
  cargoCapacity?: number

  @Expose({ name: "consumables" })
  consumables = ""

  @Expose({ name: "hyperdrive_rating" })
  @Transform(transformStringToNumber)
  hyperdriveRating?: number

  @Expose({ name: "MGLT" })
  @Transform(transformStringToNumber)
  MGLT?: number

  @Expose({ name: "starship_class" })
  starshipClass = ""

  @Expose({ name: "films" })
  films: string[] = []

  @Expose({ name: "pilots" })
  pilots: string[] = []

  @Expose({ name: "birth_year" })
  @Transform(transformStringToDate)
  created?: Date

  @Expose({ name: "birth_year" })
  @Transform(transformStringToDate)
  edited?: Date

  @Expose({ name: "url" })
  uri = ""

  @Exclude()
  public parse(dto: IStarshipDTO) {
    Object.assign(this, plainToInstance(Starship, dto))
  }

  @Exclude()
  public getIdFromUri() {
    const idExist = this.uri?.match(/\d+/)

    if (idExist) {
      return idExist[0]
    }

    return this.uri
  }

  constructor(dto?: IStarshipDTO) {
    if (dto) {
      this.parse(dto)
    }
  }
}

export class StarshipList implements IStarshipResult {
  @Expose({ name: "count" })
  @Transform(transformStringToNumber)
  count?: number

  @Expose({ name: "next" })
  next?: string

  @Expose({ name: "previous" })
  previous?: string

  @Expose({ name: "previous" })
  @Type(() => Starship)
  results?: IStarship[]

  @Exclude()
  public parse(dto: IStarshipListDTO) {
    Object.assign(this, plainToInstance(StarshipList, dto))
  }

  constructor(dto?: IStarshipListDTO) {
    if (dto) {
      this.parse(dto)
    }
  }

  @Exclude()
  static build = async (page?: string) => {
    const controller = new StarshipController()
    const starshipList = await controller.getAllStarship(page)

    return new StarshipList(starshipList)
  }
}
