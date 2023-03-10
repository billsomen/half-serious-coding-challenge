import { Films, FilmsList } from "@services/models/films.models"
import { Pilot, PilotList } from "@services/models/pilot.model"
import { Starship, StarshipList } from "@services/models/starship.model"

export const fetchPilots = async (
  setPilots: React.Dispatch<React.SetStateAction<Pilot[]>>,
  pageId?: string
) => {
  const res = await PilotList.build(pageId)
  const newList = res.results

  if (newList) {
    setPilots((oldList) => [...oldList, ...newList])
  }

  if (res.next) {
    const id = res.next.split("page=").pop()
    fetchPilots(setPilots, id)
  }
}

export const fetchStarship = async (
  setStarshipList: React.Dispatch<React.SetStateAction<Starship[]>>,
  pageId?: string
) => {
  const res = await StarshipList.build(pageId)
  const newList = res.results as unknown as Starship[]

  if (newList) {
    setStarshipList((oldList) => [...oldList, ...newList])
  }

  if (res.next) {
    const id = res.next.split("page=").pop()
    fetchStarship(setStarshipList, id)
  }
}

export const fetchFilmList = async (
  setFilmList: React.Dispatch<React.SetStateAction<Films[]>>,
  pageId?: string
) => {
  const res = await FilmsList.build(pageId)
  const newList = res.results

  if (newList) {
    setFilmList((oldList) => [...oldList, ...newList])
  }

  if (res.next) {
    const id = res.next.split("page=").pop()
    fetchFilmList(setFilmList, id)
  }
}
