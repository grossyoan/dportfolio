/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const fs = require("fs")
const categories = require("./static/categories.json")

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path === "/category/" || page.path === "/project/") return

  const basePath = path.resolve("./contents")
  const allFiles = fs.readdirSync(basePath)

  const contents = []
  allFiles.forEach(file => {
  const content = fs.readFileSync(basePath + "/" + file, { encoding: "utf8" })
  contents.push(JSON.parse(content))
  })
  const categoriess = Object.keys(categories)
  const content = require("./static/content.json")

  categoriess.forEach(category => {
    createPage({
      path: `/category/${category}`,
      component: path.resolve("./src/templates/category.js"),
      context: {
        id: category,
      },
    }),
    content.filter(content => content.id === category).map(item => (
      createPage({
        path: `/project/${id}`,
        component: path.resolve("./src/templates/project.js"),
        context: {
          category: category,
          id: item.id,
        },
      })
    ))
  createPage(page)
}}
