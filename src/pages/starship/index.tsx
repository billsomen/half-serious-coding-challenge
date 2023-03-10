import { Card, Col, Row, Typography } from "antd"
import AppStateContext from "@services/context/appStateContext"
import * as React from "react"
import { navigate } from "gatsby"
import { getIdFromUri } from "@utils/methods"
import { titleStyle } from "@pages/pilots/__pilots.utils"
import { Helmet } from "react-helmet"

const Starships: React.FC = () => {
  const { starshipList, pageData } = React.useContext(AppStateContext)

  return (
    <div className="space">
      <Helmet>
        <title>{pageData.title}</title>
      </Helmet>
      <Row gutter={[16, 32]}>
        <Col span={24}>
          <Typography.Title style={titleStyle}>
            {pageData.title}
          </Typography.Title>
        </Col>
      </Row>
      <Row gutter={[16, 32]}>
        {starshipList.map((ship) => {
          return (
            <Col span={8} key={ship.uri} xs={24} sm={12} md={6}>
              <Card
                hoverable
                title={ship.name}
                bordered={false}
                onClick={() => navigate(`${getIdFromUri(ship.uri)}`)}
              >
                {ship.model}
                <br />
                {ship.pilots.length} {pageData.assets?.label_pilots}
              </Card>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default Starships
