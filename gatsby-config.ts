/* eslint-disable @typescript-eslint/no-var-requires */
import type { GatsbyConfig } from "gatsby"

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_API_TOKEN,
  collectionTypes: [
    {
      singularName: process.env.STRAPI_API_PAGES,
      pluginOptions: {
        i18n: {
          locale: "all", // Fetch all localizations
        },
      },
    },
    {
      singularName: process.env.STRAPI_API_ASSETS,
      pluginOptions: {
        i18n: {
          locale: "all", // Fetch all localizations
        },
      },
    },
  ],
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: `alfserious`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-tsconfig-paths",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-layout",
    {
      resolve: "@babel/plugin-proposal-decorators",
      options: {
        legacy: true,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@layouts": "src/layouts",
          "@pages": "src/pages",
          "@sass": "src/sass",
          "@templates": "src/templates",
          "@hooks": "src/hooks",
        },
        extensions: ["js", "ts", "tsx", "jsx"],
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/404/*`] },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        mergeSecurityHeaders: false,
        mergeCachingHeaders: false,
      },
    },
    {
      resolve: "gatsby-plugin-no-index",
      options: {
        noIndex: true,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: strapiConfig,
    },
    "gatsby-plugin-react-helmet",
  ],
}

export default config
