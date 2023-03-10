import { IFilmListDTO } from "@services/dtos/films.dto"

export interface IFilms {
  characters: string[]
  created?: Date
  director: string
  edited?: Date
  episodeId?: number
  openingCrawl: string
  planets: string
  producer: string
  releaseDate?: Date
  species: string[]
  starships: string[]
  title: string
  uri: string
  vehicles: string[]
}

export interface IFilmList {
  count?: number
  next?: string | null
  previous?: string | null
  results?: IFilms[]
}

export interface IFilmController {
  getAllFilms: (page?: string) => Promise<IFilmListDTO>
}
