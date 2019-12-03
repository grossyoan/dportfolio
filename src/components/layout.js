/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { BaseProvider } from "baseui"
import { Router } from "@reach/router"
import customTheme from "../theme/customTheme"

import Category from "../templates/category"
import Project from "../templates/project"

const Layout = ({ children }) => {
  return (
    <BaseProvider theme={customTheme}>
      <Router>
        <Category path="category/:categoryid" />
        <Project path="project/:projectid" />
      </Router>
      {children}
    </BaseProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
