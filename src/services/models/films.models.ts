import { IFilmListDTO, IFilmsDTO } from "@services/dtos/films.dto"
import { IFilmList, IFilms } from "@services/types/films"
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
import FilmController from "@services/controllers/films.controllers"

export class Films implements IFilms {
  @Expose({ name: "characters" })
  characters: string[] = []

  @Expose({ name: "created" })
  @Transform(transformStringToDate)
  created?: Date

  @Expose({ name: "director" })
  director = ""

  @Expose({ name: "edited" })
  @Transform(transformStringToDate)
  edited?: Date

  @Expose({ name: "episode_id" })
  @Transform(transformStringToNumber)
  episodeId?: number

  @Expose({ name: "opening_crawl" })
  openingCrawl = ""

  @Expose({ name: "planets" })
  planets = ""

  @Expose({ name: "producer" })
  producer = ""

  @Expose({ name: "release_date" })
  @Transform(transformStringToDate)
  releaseDate?: Date

  @Expose({ name: "species" })
  species: string[] = []

  @Expose({ name: "starships" })
  starships: string[] = []

  @Expose({ name: "title" })
  title = ""

  @Expose({ name: "url" })
  uri = ""

  @Expose({ name: "vehicles" })
  vehicles: string[] = []

  @Exclude()
  public parse(dto: IFilmsDTO) {
    Object.assign(this, plainToInstance(Films, dto))
  }

  @Exclude()
  public getIdFromUri() {
    const idExist = this.uri?.match(/\d+/)

    if (idExist) {
      return idExist[0]
    }

    return this.uri
  }

  constructor(dto?: IFilmsDTO) {
    if (dto) {
      this.parse(dto)
    }
  }
}

export class FilmsList implements IFilmList {
  @Expose({ name: "count" })
  @Transform(transformStringToNumber)
  count?: number

  @Expose({ name: "next" })
  next?: string

  @Expose({ name: "previous" })
  previous?: string

  @Expose({ name: "previous" })
  @Type(() => Films)
  results?: Films[]

  @Exclude()
  public parse(dto: IFilmListDTO) {
    Object.assign(this, plainToInstance(FilmsList, dto))
  }

  constructor(dto?: IFilmListDTO) {
    if (dto) {
      this.parse(dto)
    }
  }

  @Exclude()
  static build = async (page?: string) => {
    const controller = new FilmController()
    const filmList = await controller.getAllFilms(page)

    return new FilmsList(filmList)
  }
}
