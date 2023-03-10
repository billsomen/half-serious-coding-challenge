import { Card, Col, Row, Typography } from "antd"
import AppStateContext from "@services/context/appStateContext"
import * as React from "react"
import { navigate } from "gatsby"
import { getIdFromUri } from "@utils/methods"
import { rowMargin, titleStyle } from "./__pilots.utils"

const PilotList: React.FC = () => {
  const { pilots, pageData } = React.useContext(AppStateContext)

  return (
    <div className="space">
      <Row gutter={[16, 32]}>
        <Col span={24}>
          <Typography.Title style={titleStyle}>
            {pageData.assets?.label_pilots}
          </Typography.Title>
        </Col>
      </Row>
      <Row gutter={[16, 32]} style={rowMargin}>
        {pilots.map((pilot) => {
          return (
            <Col span={8} key={pilot.uri}>
              <Card
                hoverable
                title={pilot.name}
                bordered={false}
                onClick={() => navigate(`${getIdFromUri(pilot.uri)}`)}
              >
                {pilot.starships.length} {pageData.assets?.label_starship}
              </Card>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default PilotList
