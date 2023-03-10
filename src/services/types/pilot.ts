import { IPilotListDTO } from "@services/dtos/pilots.dto"

export interface IPilot {
  id?: number
  name: string
  height?: number
  mass?: number
  hairColor: string
  skinColor: string
  eyeColor: string
  birthYear: string
  gender: string
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
  created?: Date
  edited?: Date
  uri: string
}

export interface IPilotList {
  count?: number
  next?: string | null
  previous?: string | null
  results?: IPilot[]
}

export interface IPilotController {
  getAllPilots: (page?: string) => Promise<IPilotListDTO>
}
