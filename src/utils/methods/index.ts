import {
  Dictionary,
  PageDataType,
  allStrapiHfsrAsset,
  strapiContent,
} from "@utils/interfaces"

export const getIdFromUri = (uri: string): string => {
  const id = uri?.match(/\d+/)

  return id ? id[0] : uri
}

export const pathToPageName = (pathname: string) => {
  const pathLength = pathname?.length

  if (pathLength) {
    const lastChar = pathname[pathLength - 1]

    if (pathLength > 1 && lastChar === "/") {
      pathname = pathname.substring(0, pathLength - 1)
    }
  }

  if (pathname?.includes("/starship/")) {
    pathname = "/starship/:id"
  } else if (pathname?.includes("/pilots/")) {
    pathname = "/pilots/:id"
  }

  return (
    {
      "/": "home",
      "/starship": "starship",
      "/pilots": "pilots",
      "/starship/:id": "starship-details",
      "/pilots/:id": "pilots-details",
    }[pathname] || "home"
  )
}

export const transformStrapiData = (data: strapiContent) => {
  const lib = {} as { [key: string]: { [key: string]: PageDataType } }
  const pages = data.allStrapiHfsrPage

  pages.nodes.forEach((node) => {
    const { locale, name, hfsr_assets: assets, ...res } = node

    if (locale) {
      if (!lib[locale]) {
        lib[locale] = {}
      }

      if (!lib[locale][name]) {
        lib[locale][name] = {
          name,
          assets: assetsWithLocalesToDict(assets),
          ...res,
        }
      }
    }
  })

  return lib
}

export const assetsWithLocalesToDict = (
  data: allStrapiHfsrAsset["nodes"]
): Dictionary => {
  const lib = {}

  data.forEach((node) => {
    const { key, ...res } = node

    if (!lib[key]) {
      lib[key] = res.value.data.value
    }
  })

  return lib
}
