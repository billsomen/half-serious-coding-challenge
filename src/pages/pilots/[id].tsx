import * as React from "react"
import { Link, PageProps } from "gatsby"
import { Breadcrumb, Col, Row, Table, Typography } from "antd"
import { Pilot } from "@services/models/pilot.model"
import usePilotsFields from "@hooks/usePilotsFields"
import AppStateContext from "@services/context/appStateContext"
import { LinkState } from "@utils/interfaces"
import { titleStyle, whiteColor } from "./__pilots.utils"
import FilmList from "@components/FilmList/filmList"
import { Films } from "@services/models/films.models"
import { Helmet } from "react-helmet"
import { RocketOutlined } from "@ant-design/icons"

const PilotInto: React.FC<PageProps> = ({
  params: { id },
  location: { state },
}) => {
  const [currentPilot, setCurrentPilot] = React.useState<Pilot>()
  const [currentFilmList, setCurrentFilmList] = React.useState<Films[]>([])
  const {
    pilots: pilotList,
    filmList,
    pageData,
  } = React.useContext(AppStateContext)
  const { columns } = usePilotsFields(pageData.assets)
  const origin = state as LinkState

  React.useEffect(() => {
    const tempPilot = pilotList.find((tempPilot) => {
      const tempId = tempPilot.getIdFromUri()

      return tempId == id
    })

    setCurrentPilot(tempPilot)
  }, [id, pilotList])

  React.useEffect(() => {
    const tempFilms = filmList.filter((tempF) => {
      const tempId = tempF.getIdFromUri()

      return tempId == id
    })

    setCurrentFilmList(tempFilms || [])
  }, [filmList])

  return (
    <div className="space">
      <Helmet>
        <title>
          {pageData.title} {currentPilot?.name || ""}
        </title>
      </Helmet>
      <Row gutter={[16, 32]}>
        <Col span={24}>
          <Link to="/pilots" style={whiteColor}>
            {pageData.assets?.label_pilots}
          </Link>
          <Typography.Title style={titleStyle}>
            {currentPilot?.name}
          </Typography.Title>
        </Col>
      </Row>
      <Row gutter={[8, 12]}>
        <Col span={24}>
          <Breadcrumb
            items={[
              {
                title: (
                  <>
                    <RocketOutlined />
                    <Link to={origin?.link || "/pilots"} style={whiteColor}>
                      {origin?.from || pageData.assets?.label_pilots}
                    </Link>
                  </>
                ),
              },
              {
                title: (
                  <span style={{ color: "grey" }}>{currentPilot?.name}</span>
                ),
              },
            ]}
          />
        </Col>
        <Col span={24}>
          <Table
            dataSource={[currentPilot ?? {}]}
            columns={columns as any}
            pagination={false}
            rowKey="uri"
          />
        </Col>
        <Col span={24}>
          <Typography.Title style={{ color: "white", textAlign: "center" }}>
            {pageData.assets?.label_film}
          </Typography.Title>
          <Typography.Title
            level={3}
            style={{ color: "white", textAlign: "center" }}
          >
            {pageData.assets?.starshipPage_here_is_a_list_of_film_where}{" "}
            {currentPilot?.name} {pageData.assets?.label_appear}
          </Typography.Title>
        </Col>
      </Row>
      <FilmList name={currentPilot?.name} filmList={currentFilmList} />
    </div>
  )
}

export default PilotInto
