import useSpaceshipFields from "@hooks/useSpaceshipFields"
import { Starship } from "@services/models/starship.model"
import AppStateContext from "@services/context/appStateContext"
import { Breadcrumb, Col, Row, Table, Typography } from "antd"
import { Link, PageProps } from "gatsby"
import * as React from "react"
import { whiteColor } from "@pages/pilots/__pilots.utils"
import FilmList from "@components/FilmList/filmList"
import { Films } from "@services/models/films.models"
import { Helmet } from "react-helmet"
import { RocketOutlined } from "@ant-design/icons"

const starshipInfo: React.FC<PageProps> = ({ params: { id } }) => {
  const [currentShip, setCurrentShip] = React.useState<Starship>()
  const [currentFilmList, setCurrentFilmList] = React.useState<Films[]>([])

  const { starshipList, filmList, pageData } = React.useContext(AppStateContext)
  const { columns } = useSpaceshipFields(pageData?.assets)

  React.useEffect(() => {
    const tempStarship = starshipList.find((tempShip) => {
      const tempId = tempShip.getIdFromUri()

      return tempId == id
    })

    setCurrentShip(tempStarship)
  }, [id, starshipList])

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
          {pageData.title} {currentShip?.name || ""}
        </title>
      </Helmet>
      <Row gutter={[16, 32]}>
        <Col span={24}>
          <Typography.Title style={{ color: "white", textAlign: "center" }}>
            {pageData.assets?.label_starship}
          </Typography.Title>
        </Col>
      </Row>
      <Row gutter={[8, 24]}>
        <Col span={24}>
          <Breadcrumb
            items={[
              {
                title: (
                  <>
                    <RocketOutlined />
                    <Link to="/starship" style={whiteColor}>
                      {pageData.assets?.label_starship}
                    </Link>
                  </>
                ),
              },
              {
                title: (
                  <span style={{ color: "grey" }}>{currentShip?.name}</span>
                ),
              },
            ]}
          />
        </Col>
        <Col span={24}>
          <Table
            columns={columns as any}
            dataSource={[currentShip ?? {}]}
            pagination={false}
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
            {currentShip?.name} {pageData.assets?.label_appear}
          </Typography.Title>
        </Col>
      </Row>
      <FilmList name={currentShip?.name} filmList={currentFilmList} />
    </div>
  )
}

export default starshipInfo
