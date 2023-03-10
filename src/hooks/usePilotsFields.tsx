import { Pilot } from "@services/models/pilot.model"
import { LanguageEnum } from "@utils/constants/_index"
import { Dictionary } from "@utils/interfaces"
import { ColumnsType } from "antd/es/table"
import * as React from "react"

const usePilotsFields = (pageAssets: Dictionary, language?: LanguageEnum) => {
  const [columns, setColumns] = React.useState<ColumnsType<Pilot>>()

  React.useEffect(() => {
    setColumns([
      {
        title: pageAssets?.label_name,
        key: "name",
        dataIndex: "name",
      },
      {
        title: pageAssets?.label_gender,
        key: "gender",
        dataIndex: "gender",
      },
      {
        title: pageAssets?.label_birth_year,
        dataIndex: "birthYear",
        key: "birthYear",
      },
      {
        title: pageAssets?.label_hear_color,
        dataIndex: "hairColor",
        key: "hairColor",
      },
    ])
  }, [pageAssets, language])

  return { columns }
}

export default usePilotsFields
