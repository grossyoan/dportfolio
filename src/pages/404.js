import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Doriane Olivier - Portfolio</title>
      <link rel="canonical" href="https://dorianeolivier.fr/menu" />
      <meta
        name="description"
        content="Doriane Olivier is a french student at ECV, and an artist."
      />
    </Helmet>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
