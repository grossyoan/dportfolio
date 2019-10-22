/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const categories = require("./src/assets/categories.json")
const content = require("./src/assets/content.json")

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  console.log("=>>>>>>> Page Path", page.path)
  if (page.path === "/category/" || page.path === "/project/") return
  else {
    const categoriess = Object.keys(categories)
    const contents = Object.keys(content)
    categoriess.forEach(category => {
      createPage({
        path: `/category/${category}`,
        component: path.resolve("./src/pages/category.js"),
        context: {
          id: category,
        },
      })
      content[category].forEach(({ id }) => {
        createPage({
          path: `/project/${id}`,
          component: path.resolve("./src/pages/project.js"),
          context: {
            category: category,
            id: id,
          },
        })
      })
    })
    console.log("PAAAAAAAATH", page.path)

    createPage(page)
  }
}
