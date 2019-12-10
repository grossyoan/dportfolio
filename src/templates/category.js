import React from "react"
import PropTypes from "prop-types"
import { StyledLink } from "baseui/link"
import { Helmet } from "react-helmet"

import categories from "../../static/categories.json"
import SocialMedias from "../components/SocialMedias"

import CategoryGallery from "../components/Category/CategoryGallery"
import GalleryImage from "../components/Category/GalleryImage"

import importImages from "../helpers/importImages"

import AniLink from "gatsby-plugin-transition-link/AniLink"

const Category = ({ children, pageContext, ...props }) => {
  const categoryid = pageContext.id
  const content = pageContext.item
  const mq = "@media screen and (max-width: 880px)"
  const bg = importImages(categories[categoryid][0].background)
  return (
    <div
      css={{
        position: "absolute",
        width: "100%",
        minHeight: "100vh",
        userSelect: "none",
        backgroundSize: "cover",
        backgroundImage: `url("${bg}")`,
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Doriane Olivier - Portfolio</title>
        <link rel="canonical" href="https://dorianeolivier.fr" />
        <meta
          name="description"
          content="Doriane Olivier is a french student at ECV, and an artist."
        />
      </Helmet>
      <AniLink
        cover
        to="/menu"
        css={{
          color: "transparent",
          marginTop: "40px",
          marginLeft: "5%",
          display: "inline-block",
        }}
      >
        <p
          css={{
            color: "white",
            fontFamily: "Coming Soon",
            fontSize: ".7em",
            margin: "0",
            lineHeight: "1em",
          }}
        >
          Retour au menu <br />
          &#10229;
        </p>
      </AniLink>
      <div
        css={{
          width: "70%",
          margin: "0 auto",
        }}
      >
        <h1
          css={{
            color: "white",
            fontSize: "1.4em",
            fontFamily: "Coming Soon",
            fontWeight: "bold",
            marginBottom: "0",
          }}
        >
          {categories[categoryid][0].title}
        </h1>
        <p
          css={{
            color: "white",
            fontSize: ".8em",
            fontFamily: "News Cycle",
            marginTop: "20px",
            marginBottom: "5%",
          }}
        >
          {categories[categoryid][0].description}
        </p>
        <CategoryGallery>
          {content.map(item => (
            <AniLink
              cover
              bg="#000000"
              to={
                "../../project/" + item.title.toLowerCase().replace(/ /g, "-")
              }
            >
              <div
                css={{
                  height: "200px",
                  width: "auto",
                  padding: "4px 4px",
                  [mq]: {
                    width: "100%",
                    height: "auto",
                  },
                }}
              >
                {item.isVideo ? (
                  <GalleryImage src={item.thumbnail} />
                ) : (
                  <GalleryImage src={item.src} />
                )}
              </div>
            </AniLink>
          ))}
        </CategoryGallery>
      </div>
      <SocialMedias />
      <div
        css={{
          position: "absolute",
          right: "50px",
          top: "40px",
          fontFamily: "Cookie",
          color: "white",
          fontSize: "1em",
        }}
      >
        D.o
      </div>
      <div
        css={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          right: "0",
          bottom: "2%",
          fonSize: "inherit",
          fontSize: ".4em",
        }}
      >
        <a
          css={{
            color: "white",
            textDecoration: "none",
          }}
          href="https://grossyoan.fr"
        >
          Developed with ❤️ by Yoan Gross
        </a>
      </div>
    </div>
  )
}

Category.propTypes = {
  children: PropTypes.object,
  heroButtonClicked: PropTypes.bool,
}

Category.defaultProps = {
  children: {},
  heroButtonClicked: false,
}

export default Category
