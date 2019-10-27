import React from "react"
import { Link } from "gatsby"
import { StyledLink } from "baseui/link"
import { Block } from "baseui/block"
import importVideos from "../helpers/importVideos"
import content from "../../static/content.json"
import categories from "../../static/categories.json"

import SocialMedias from "../components/SocialMedias"

import importImages from "../helpers/importImages"

const Project = ({ pageContext, ...props }) => {
  const projectid = pageContext.id
  const categoryid = pageContext.category
  const contentArray = content[categoryid].filter(
    content => content.id === projectid
  )[0]
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
          categories[categoryid][0].background
        )}"`,
      }}
    >
      <Link
        to={"../../category/" + contentArray.category}
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
            {contentArray.title}
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
                    width: "60%",
                    "@media screen and (max-width: 880px)": {
                      width: "100%",
                    },
                  },
                },
              }}
            >
              {contentArray.isVideo ? (
                <video
                  style={{ width: "100%", height: "auto" }}
                  preload="auto"
                  autoPlay="true"
                  controls
                  loop
                  src={importVideos(contentArray.src)}
                ></video>
              ) : (
                <img
                  src={contentArray.src}
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
                Technique: {contentArray.technique}
              </p>
              <p
                style={{
                  margin: "0",
                }}
              >
                Date: {contentArray.date}
              </p>
              <p
                style={{
                  margin: "0",
                }}
              >
                Type: {contentArray.type}
              </p>
              <p
                style={{
                  marginTop: "20px",
                }}
              >
                {contentArray.description}
              </p>
            </Block>
          </Block>
        </div>
        ))}
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
          D.O
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
