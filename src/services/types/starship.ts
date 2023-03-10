import { IStarshipListDTO } from "@services/dtos/starships.dto"

export interface IStarship {
  id?: number
  name: string
  model: string
  manufacturer: string
  costInCredits?: number
  length?: number
  maxAtmospheringSpeed?: number
  crew?: number
  passengers?: number
  cargoCapacity?: number
  consumables: string
  hyperdriveRating?: number
  MGLT?: number
  starshipClass: string
  pilots: string[]
  films: string[]
  created?: Date
  edited?: Date
  uri: string
}

export interface IStarshipResult {
  count?: number
  next?: string | null
  previous?: string | null
  results?: IStarship[]
}

export interface IStarshipController {
  getAllStarship: (page?: string) => Promise<IStarshipListDTO>
}
