import { List } from "antd"
import { Link } from "gatsby"
import * as React from "react"
import AppStateContext from "@services/context/appStateContext"
import { getIdFromUri } from "@utils/methods"

type pilotNamesProps = {
  pilotList: string[]
  starshipUri?: string
  starshipName?: string
}

const PilotNames: React.FC<pilotNamesProps> = ({
  pilotList,
  starshipUri,
  starshipName,
}) => {
  const { pilots } = React.useContext(AppStateContext)

  const setState = () => {
    if (starshipUri && starshipName) {
      return {
        from: starshipName,
        link: `/starship/${getIdFromUri(starshipUri)}`,
      }
    }

    return undefined
  }

  return (
    <>
      {pilotList?.length ? (
        <>
          <List
            itemLayout="horizontal"
            dataSource={pilotList}
            renderItem={(item) => {
              const id = getIdFromUri(item)
              const tmpPilot = pilots.find((pilot) => pilot.uri == item)
              return (
                <List.Item>
                  <List.Item.Meta
                    title={
                      <Link
                        key={tmpPilot?.uri}
                        state={setState()}
                        to={`/pilots/${id}`}
                      >
                        {tmpPilot?.name}
                      </Link>
                    }
                  />
                </List.Item>
              )
            }}
          />
        </>
      ) : (
        <i>No pilots found for this ship</i>
      )}
    </>
  )
}

export default PilotNames
