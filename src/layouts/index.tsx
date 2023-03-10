import "reflect-metadata"
import * as React from "react"
import { PageProps, graphql, useStaticQuery } from "gatsby"
import { Pilot } from "@services/models/pilot.model"
import { Starship } from "@services/models/starship.model"
import { fetchFilmList, fetchPilots, fetchStarship } from "./__index.utils"
import AppStateContext from "@services/context/appStateContext"
import Nav from "@components/Nav/nav"
import { Container } from "@mui/material"
import Loader from "@components/Loader/loader"
import images from "@images/index"
import { Films } from "@services/models/films.models"
import { Helmet } from "react-helmet"
import { LanguageEnum } from "@utils/constants/_index"
import config from "@utils/configs"
import { pathToPageName, transformStrapiData } from "@utils/methods"
import { PageDataType, strapiContent } from "@utils/interfaces/index"

const Layout: React.FC<PageProps> = ({ children, path, location }) => {
  const [language, setLocalLanguage] = React.useState<LanguageEnum>()
  const [pilots, setPilots] = React.useState<Pilot[]>([])
  const [starshipList, setStarshipList] = React.useState<Starship[]>([])
  const [filmList, setFilmList] = React.useState<Films[]>([])
  const [pilotLoading, setPilotLoading] = React.useState<boolean>(true)
  const [starshipLoading, setStarshipLoading] = React.useState<boolean>(true)
  const [dataLoading, setDataLoading] = React.useState<boolean>(true)
  const [pageData, setPageData] = React.useState<PageDataType>(
    {} as PageDataType
  )

  const getLanguage = (): LanguageEnum => {
    const lang: LanguageEnum = (localStorage.getItem(
      config.localStorage.languageKey
    ) || LanguageEnum.FR) as LanguageEnum

    return lang
  }

  const setLanguage = (language: LanguageEnum | undefined) => {
    if (language) {
      localStorage.setItem(config.localStorage.languageKey, language)
      setLocalLanguage(language)
    } else {
      localStorage.removeItem(config.localStorage.languageKey)
      setLocalLanguage(LanguageEnum.FR)
    }
  }

  React.useEffect(() => {
    fetchPilots(setPilots).then(() => {
      setPilotLoading(false)
    })
    fetchStarship(setStarshipList).then(() => {
      setStarshipLoading(false)
    })
    fetchFilmList(setFilmList)
  }, [])

  React.useEffect(() => {
    setLanguage(getLanguage())
  }, [])

  React.useEffect(() => {
    if (!starshipLoading && !pilotLoading) {
      setDataLoading(false)
    } else {
      setDataLoading(true)
    }
  }, [pilotLoading, dataLoading])

  const pathname: string = location?.pathname

  const pageName = pathToPageName(pathname) || "home"

  const strapiContent = useStaticQuery(graphql`
    query GetAllStrapiContent {
      allStrapiHfsrAsset {
        nodes {
          value {
            data {
              value
            }
          }
          key
          locale
        }
      }
      allStrapiHfsrPage {
        nodes {
          uri
          title
          name
          locale
          description
          hfsr_assets {
            key
            locale
            value {
              data {
                value
              }
            }
          }
        }
      }
    }
  `) as strapiContent

  const allText = transformStrapiData(strapiContent)

  React.useEffect(() => {
    if (language && allText) {
      setPageData(allText[language][pageName.trim()])
    }
  }, [language, pageName])

  if (dataLoading) {
    return <Loader />
  }

  return (
    <AppStateContext.Provider
      value={{
        pilots,
        starshipList,
        filmList,
        pathname,
        language,
        pageData,
        setLanguage: setLanguage,
        loading: dataLoading,
      }}
    >
      <div
        className=""
        style={{
          background:
            path == "/"
              ? `url(${images.backgroundDeco}) no-repeat -20px -200px `
              : "",
        }}
      >
        <Helmet>
          <link rel="icon" href={images.starWarLogo} type="image/x-icon" />
          <link
            rel="shortcut icon"
            href={images.starWarLogo}
            type="image/x-icon"
          />
        </Helmet>
        <Container>
          <Nav />
          {children}
        </Container>
      </div>
    </AppStateContext.Provider>
  )
}

export default Layout
