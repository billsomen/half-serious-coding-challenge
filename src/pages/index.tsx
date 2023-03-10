import { Button, Col, Image, Row, Typography } from "antd"
import * as React from "react"
import images from "@images/index"
import "./index.css"
import { navigate } from "gatsby"
import { UnsplashImage, UnsplashImageList } from "@services/models/image.model"
import HeroCarousel from "@components/HeroCarousel/carousel"
import { Helmet } from "react-helmet"
import {
  colStyle,
  divStyle,
  getStartedButton,
  mainTitle,
  rowContainer,
  secondTitle,
} from "./__index.utils"
import AppStateContext from "@services/context/appStateContext"

const App: React.FC = () => {
  const [landingPageImage, setLandingPageImage] =
    React.useState<UnsplashImage[]>()

  const { pageData } = React.useContext(AppStateContext)

  const fetchLandingPageImage = async () => {
    const images = await UnsplashImageList.build("star war starship")
    if (images.results.length) {
      setLandingPageImage(images.results)
    }
  }

  React.useEffect(() => {
    fetchLandingPageImage()
  }, [])

  return (
    <>
      <Helmet>
        <title>{pageData.title}</title>
      </Helmet>
      <Row style={rowContainer}>
        {landingPageImage?.length ? (
          <Col xs={24} sm={12}>
            <HeroCarousel images={landingPageImage || []} />
          </Col>
        ) : (
          <Col xs={24} sm={12}>
            <div style={divStyle}>
              <Image
                preview={false}
                src={landingPageImage?.[0].uriList.full || images.starshipImage}
                width={700}
                style={{ rotate: "-10deg" }}
              />
            </div>
          </Col>
        )}
        <Col xs={24} sm={12} style={colStyle}>
          <Typography.Title level={1} style={mainTitle}>
            {
              pageData.assets
                ?.homePage_discover_the_legendary_vessels_of_star_war
            }
          </Typography.Title>
          <Typography.Title level={3} style={secondTitle}>
            {pageData.assets?.homePage_where_the_force_meets_the_fleet}
          </Typography.Title>
          <Button
            size="large"
            type="primary"
            onClick={() => {
              navigate("/starship")
            }}
            style={getStartedButton}
          >
            {pageData.assets?.button_get_started}
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default App
