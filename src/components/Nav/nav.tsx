import images from "@images/index"
import { Row, Col, Image, Button } from "antd"
import { navigate } from "gatsby"
import * as React from "react"
import { imageContainer, imageStyle, rowStyle } from "./__nav.utils"
import AppStateContext from "@services/context/appStateContext"
import { LanguageEnum } from "@utils/constants/_index"

const Nav: React.FC = () => {
  const { language, setLanguage } = React.useContext(AppStateContext)

  const languages = {
    [LanguageEnum.EN]: "FR",
    [LanguageEnum.FR]: "EN",
  }

  const defineLang = () => {
    if (language == LanguageEnum.EN) {
      setLanguage(LanguageEnum.FR)
    }

    if (language == LanguageEnum.FR) {
      setLanguage(LanguageEnum.EN)
    }
  }

  return (
    <Row style={rowStyle}>
      <Col span={24}>
        <div style={imageContainer}>
          <Image
            onClick={() => navigate("/")}
            preview={false}
            src={images.starWarLogo}
            style={imageStyle}
            width={200}
          />
        </div>
        <Button onClick={defineLang}> {languages[language!]} </Button>
      </Col>
    </Row>
  )
}

export default Nav
