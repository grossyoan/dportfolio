import React from "react"
import { Link } from "gatsby"
import { StyledLink } from "baseui/link"
import { Block } from "baseui/block"
import { Helmet } from "react-helmet"

import importVideos from "../helpers/importVideos"
import categories from "../../static/categories.json"

import SocialMedias from "../components/SocialMedias"

import importImages from "../helpers/importImages"

import Carousel from "react-images"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Project = ({ pageContext, ...props }) => {
  const content = pageContext.item
  const views = []
  for (const element in content) {
    if (element.substring(0, 3) === "src") {
      if (content[element] != null) {
        views.push({ src: content[element] })
      }
    }
  }
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        minHeight: "100vh",
        userSelect: "none",
        zIndex: "5",
        backgroundSize: "cover",
        backgroundImage: `url("${importImages(
          categories[content.category.toLowerCase()][0].background
        )}"`,
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
        to={"../../category/" + content.category.toLowerCase()}
        style={{
          color: "transparent",
          marginTop: "40px",
          marginLeft: "5%",
          display: "inline-block",
        }}
      >
        <p
          style={{
            color: "white",
            fontFamily: "Coming Soon",
            fontSize: ".7em",
            margin: "0",
            lineHeight: "1em",
          }}
        >
          Retour à la catégorie <br />
          &#10229;
        </p>
      </AniLink>
      <div>
        <div
          style={{
            width: "70%",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              color: "white",
              fontFamily: "Coming Soon",
              fontSize: "1.4em",
            }}
          >
            {content.title}
          </h1>
          <Block
            overrides={{
              Block: {
                style: {
                  display: "flex",
                  justifyContent: "flex-start",
                  flexWrap: "wrap",
                  flexDirection: "row",
                  "@media screen and (max-width: 880px)": {
                    flexDirection: "column",
                  },
                },
              },
            }}
          >
            <Block
              overrides={{
                Block: {
                  style: {
                    maxWidth: "60%",
                    "@media screen and (max-width: 880px)": {
                      maxWidth: "100%",
                    },
                  },
                },
              }}
            >
              {content.isVideo ? (
                <video
                  style={{ width: "100%", height: "auto" }}
                  preload="auto"
                  autoPlay="true"
                  controls
                  loop
                  src={importVideos(content.src)}
                ></video>
              ) : (
                <Carousel isModal={true} views={views} />
              )}
            </Block>
            <Block
              overrides={{
                Block: {
                  style: {
                    marginLeft: "2%",
                    width: "38%",
                    "@media screen and (max-width: 880px)": {
                      marginTop: "2%",
                      width: "100%",
                    },
                    opacity: "1",
                    fontSize: ".7em",
                    color: "white",
                  },
                },
              }}
            >
              <p
                style={{
                  margin: "0",
                }}
              >
                Technique(s) utilisée(s): {content.technique}
              </p>
              <p
                style={{
                  margin: "0",
                }}
              >
                Date: {content.date}
              </p>
              <p
                style={{
                  margin: "0",
                }}
              >
                Type: {content.type}
              </p>
              <p
                style={{
                  marginTop: "20px",
                }}
              >
                {content.description}
              </p>
            </Block>
          </Block>
        </div>
      </div>
      <SocialMedias />
      <Link to="/">
        <div
          style={{
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
      </Link>
      <div
        style={{
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
        <StyledLink href="https://grossyoan.fr">
          Developed with ❤️by Yoan Gross
        </StyledLink>
      </div>
    </div>
  )
}

Project.propTypes = {}
Project.defaultProps = {}

export default Project
