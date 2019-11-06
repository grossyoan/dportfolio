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

  categoriess.forEach(category => {
    createPage({
      path: `/category/${category}`,
      component: path.resolve("./src/templates/category.js"),
      context: {
        id: category,
        item: contents.filter(
          contents => contents.category.toLowerCase() === category
        ),
      },
    }),
      contents
        .filter(contents => contents.category.toLowerCase() === category)
        .map(item =>
          createPage({
            path: `/project/${item.id}`,
            component: path.resolve("./src/templates/project.js"),
            context: {
              category: category,
              id: item.id,
              item: item,
            },
          })
        )
    createPage(page)
  })
}
