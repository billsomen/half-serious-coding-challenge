/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// Conventionnal commit principles: https://www.conventionalcommits.org/
// more: https://blog.tericcabrel.com/apply-conventional-commit-style-on-your-project-with-commitlint/

// eslint-disable-next-line no-undef
const conventionalCommit = require("./conventionalCommit.json")

const typesEnum = Object.keys(conventionalCommit.types)
const scopesEnum = Object.keys(conventionalCommit.scopes)

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", typesEnum],
    "scope-case": [2, "always", ["camel-case"]],
    "scope-enum": [2, "always", scopesEnum],
    "subject-empty": [2, "never"],
    "subject-case": [2, "always", ["lower-case"]],
    "header-max-length": [2, "always", 100],
  },
}
