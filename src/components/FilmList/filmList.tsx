/* eslint-disable react/no-unescaped-entities */
import * as React from "react"
import { Card, Col, Row, Table } from "antd"
import { Films } from "@services/models/films.models"
import useFilmsFields from "@hooks/useFilmsFields"
import { DesktopOutlined } from "@ant-design/icons"
import { Typography } from "antd"
import AppStateContext from "@services/context/appStateContext"

type filmFilsProps = {
  filmList: Films[]
  name?: string
}

const FilmList: React.FC<filmFilsProps> = ({ filmList, name }) => {
  const { pageData } = React.useContext(AppStateContext)
  const { columns } = useFilmsFields(pageData.assets)
  return (
    <Row style={{ marginTop: "25px", minWidth: "372px" }}>
      <Col span={24}>
        <Table
          locale={{
            emptyText: (
              <Card>
                <DesktopOutlined size={48} />
                <Typography.Title level={5}>
                  {name}{" "}
                  {pageData.assets?.label_does_not_appears_in_out_list_of_film}
                </Typography.Title>
              </Card>
            ),
          }}
          key={"uri"}
          columns={columns}
          dataSource={filmList}
          pagination={false}
        />
      </Col>
    </Row>
  )
}

export default FilmList
