import { Films } from "@services/models/films.models"
import { LanguageEnum } from "@utils/constants/_index"
import { Dictionary } from "@utils/interfaces"
import { ColumnsType } from "antd/es/table"
import * as React from "react"

const useFilmsFields = (pageAssets: Dictionary, language?: LanguageEnum) => {
  const [columns, setColumns] = React.useState<ColumnsType<Films>>()

  React.useEffect(() => {
    setColumns([
      {
        title: pageAssets?.label_title,
        key: "title",
        dataIndex: "title",
      },
      {
        title: pageAssets?.label_opening_crawl,
        key: "openingCrawl",
        dataIndex: "openingCrawl",
      },
      {
        title: pageAssets?.label_release_date,
        key: "releaseDate",
        render: (_, { releaseDate }) => <>{releaseDate?.toUTCString()}</>,
      },
      {
        title: pageAssets?.label_producer,
        dataIndex: "producer",
        key: "producer",
      },
    ])
  }, [pageAssets, language])

  return { columns }
}

export default useFilmsFields
