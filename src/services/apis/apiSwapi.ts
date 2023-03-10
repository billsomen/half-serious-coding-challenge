import axios from "axios"

const apiSwapi = axios.create({
  baseURL: process.env.GATSBY_SWAPI_BASE_URL,
})

export default apiSwapi
