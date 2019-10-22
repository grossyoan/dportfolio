const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/yoangross/Desktop/dporfolio/dportfolio/.cache/dev-404-page.js"))),
  "component---src-pages-category-js": hot(preferDefault(require("/Users/yoangross/Desktop/dporfolio/dportfolio/src/pages/category.js"))),
  "component---src-pages-project-js": hot(preferDefault(require("/Users/yoangross/Desktop/dporfolio/dportfolio/src/pages/project.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/yoangross/Desktop/dporfolio/dportfolio/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/yoangross/Desktop/dporfolio/dportfolio/src/pages/index.js"))),
  "component---src-pages-menu-js": hot(preferDefault(require("/Users/yoangross/Desktop/dporfolio/dportfolio/src/pages/menu.js")))
}

