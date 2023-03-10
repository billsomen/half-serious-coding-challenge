import * as React from "react"
import { Card, Carousel, Image, Skeleton } from "antd"
import { UnsplashImage } from "@services/models/image.model"
import { contentStyle } from "./__carousel.utils"

type CarouselProps = {
  images: UnsplashImage[]
}

const HeroCarousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <Carousel dots={false} autoplay style={contentStyle}>
      {images.map((image) => (
        <Card key={image.uriList.thumb} style={{ width: "100%" }}>
          <Image
            width="100%"
            src={image.uriList.full}
            alt={image.altDescription}
            preview={false}
            placeholder={<Skeleton.Image />}
          />
        </Card>
      ))}
    </Carousel>
  )
}

export default HeroCarousel
