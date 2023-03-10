import { Films } from "@services/models/films.models"
import { Pilot } from "@services/models/pilot.model"
import { Starship } from "@services/models/starship.model"
import { LanguageEnum } from "@utils/constants/_index"
import { PageDataType } from "@utils/interfaces"
import { createContext } from "react"

type AppContextProps = {
  pilots: Pilot[]
  starshipList: Starship[]
  filmList: Films[]
  pathname: string
  loading: boolean
  setLanguage: (language: LanguageEnum | undefined) => void
  language?: LanguageEnum
  pageData: PageDataType
}

const AppStateContext = createContext<AppContextProps>({
  starshipList: [],
  pilots: [],
  filmList: [],
  loading: true,
  pathname: "",
  pageData: {} as PageDataType,
  setLanguage: () => null,
  language: LanguageEnum.FR,
})

export default AppStateContext
