/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// You can delete this file if you're not using it
const path = require("path")
const categories = require("./static/categories.json")
const content = require("./static/content.json")

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path === "/category/" || page.path === "/project/") return

  const categoriess = Object.keys(categories)
  const contents = Object.keys(content)
  categoriess.forEach(category => {
    createPage({
      path: `/category/${category}`,
      component: path.resolve("./src/templates/category.js"),
      context: {
        id: category,
      },
    })
    content[category].forEach(({ id }) => {
      createPage({
        path: `/project/${id}`,
        component: path.resolve("./src/templates/project.js"),
        context: {
          category: category,
          id: id,
        },
      })
    })
  })

  createPage(page)
}
