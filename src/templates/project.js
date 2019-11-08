import React from "react"
import { Link } from "gatsby"
import { StyledLink } from "baseui/link"
import { Block } from "baseui/block"
import { Helmet } from "react-helmet"

import importVideos from "../helpers/importVideos"
import categories from "../../static/categories.json"

import SocialMedias from "../components/SocialMedias"

import importImages from "../helpers/importImages"

const Project = ({ pageContext, ...props }) => {
  const content = pageContext.item
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
      <Link
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
            fontFamily: "Merienda",
            fontSize: ".7em",
            margin: "0",
            lineHeight: "1em",
          }}
        >
          Back to gallery <br />
          &#10229;
        </p>
      </Link>
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
              fontFamily: "Merienda",
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
                      width: "100%",
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
                <img
                  src={content.src}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
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
                    opacity: "0.9",
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
                Technique: {content.technique}
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
