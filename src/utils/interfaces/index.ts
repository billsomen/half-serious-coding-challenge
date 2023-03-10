export interface Dictionary {
  [key: string]: string
}

export interface LinkState {
  from: string
  link: string
}

export interface PageDataType {
  assets: Dictionary
  description: string
  uri: string
  title: string
  name: string
}

export interface allStrapiHfsrAsset {
  nodes: {
    key: string
    locale: string
    value: {
      data: {
        value: string
      }
    }
  }[]
}

export interface allStrapiHfsrPage {
  nodes: {
    description: string
    locale: string
    name: string
    title: string
    uri: string
    hfsr_assets: allStrapiHfsrAsset["nodes"]
  }[]
}

export interface strapiContent {
  allStrapiHfsrAsset: allStrapiHfsrAsset
  allStrapiHfsrPage: allStrapiHfsrPage
}
