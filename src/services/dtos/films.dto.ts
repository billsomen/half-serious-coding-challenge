export interface IFilmsDTO {
  characters: string[]
  created: string
  director: string
  edited: string
  episode_id: string
  opening_crawl: string
  planets: string
  producer: string
  release_date: string
  species: string[]
  starships: string[]
  title: string
  url: string
  vehicles: string[]
}

export interface IFilmListDTO {
  count: string
  next: string | null
  previous: string | null
  results: IFilmsDTO[]
}
