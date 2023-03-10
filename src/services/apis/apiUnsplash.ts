import { Colors } from "@utils/constants/colors"
import { NUMBER_OF_IMAGES_PER_PAGES } from "@utils/constants/unsplash"
import axios from "axios"

const apiUnsplash = axios.create({
  baseURL: process.env.GATSBY_UNSPLASH_BASE_URL,
  headers: {
    Authorization: `Client-ID ${process.env.GATSBY_UNSPLASH_ACCESS_KEY}`,
  },
  params: {
    per_page: NUMBER_OF_IMAGES_PER_PAGES,
    color: Colors.black,
    orientation: "landscape",
    w: "1600",
    h: "900",
  },
})

export default apiUnsplash
