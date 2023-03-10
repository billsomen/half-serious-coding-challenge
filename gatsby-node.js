/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@images": path.resolve(__dirname, "src/images"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@services": path.resolve(__dirname, "src/services"),
        "@layouts": path.resolve(__dirname, "src/layouts"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
      },
    },
  })

  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  createPage({
    path: "/404",
    component: require.resolve("./src/pages/404.tsx"),
  })
}
