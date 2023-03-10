import PilotNames from "@components/PilotName/pilotNames"
import { Starship } from "@services/models/starship.model"
import { LanguageEnum } from "@utils/constants/_index"
import { Dictionary } from "@utils/interfaces"
import { ColumnsType } from "antd/es/table"
import * as React from "react"

const useSpaceshipFields = (
  pageAssets: Dictionary,
  language?: LanguageEnum
) => {
  const [columns, setColumns] = React.useState<ColumnsType<Starship>>()

  React.useEffect(() => {
    setColumns([
      {
        title: pageAssets?.label_name,
        key: "name",
        dataIndex: "name",
      },
      {
        title: pageAssets?.label_starship_class,
        key: "starshipClass",
        dataIndex: "starshipClass",
      },
      {
        title: pageAssets?.label_model,
        dataIndex: "model",
        key: "model",
      },
      {
        title: pageAssets?.label_pilots,
        key: "pilots",
        render: (_, { pilots, uri, name }) => (
          <PilotNames
            pilotList={pilots}
            starshipUri={uri}
            starshipName={name}
          />
        ),
      },
    ])
  }, [pageAssets, language])

  return { columns }
}

export default useSpaceshipFields
