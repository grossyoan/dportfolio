import React from "react"
import { Helmet } from "react-helmet"

import importVideos from "../helpers/importVideos"
import categories from "../../static/categories.json"

import SocialMedias from "../components/SocialMedias"

import importImages from "../helpers/importImages"

import Carousel from "react-images"
import { Link } from "gatsby"
import PageTransition from "gatsby-plugin-page-transitions"

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
  const mq = "@media screen and (max-width: 880px)"
  const bg = importImages(
    categories[content.category.toLowerCase()][0].background
  )
  return (
    <PageTransition>
      <div
        css={{
          position: "absolute",
          width: "100%",
          minHeight: "100vh",
          userSelect: "none",
          zIndex: "5",
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
        <Link
          to={"../../category/" + content.category.toLowerCase()}
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
            Retour à la catégorie <br />
            &#10229;
          </p>
        </Link>
        <div>
          <div
            css={{
              width: "70%",
              margin: "0 auto",
            }}
          >
            <h1
              css={{
                color: "white",
                fontFamily: "Coming Soon",
                fontSize: "1.4em",
              }}
            >
              {content.title}
            </h1>
            <div
              css={{
                display: "flex",
                justifyContent: "flex-start",
                flexWrap: "wrap",
                flexDirection: "row",
                [mq]: {
                  flexDirection: "column",
                },
              }}
            >
              <div
                css={{
                  maxWidth: "60%",
                  [mq]: {
                    maxWidth: "100%",
                  },
                }}
              >
                {content.isVideo ? (
                  <video
                    css={{ width: "100%", height: "auto" }}
                    preload="auto"
                    autoPlay="true"
                    controls
                    loop
                    src={importVideos(content.src)}
                  />
                ) : (
                  <Carousel isModal={true} views={views} />
                )}
              </div>
              <div
                css={{
                  marginLeft: "2%",
                  width: "38%",
                  opacity: "1",
                  fontSize: ".7em",
                  color: "white",

                  [mq]: {
                    marginTop: "2%",
                    width: "100%",
                  },
                }}
              >
                <p
                  css={{
                    margin: "0",
                  }}
                >
                  Technique(s) utilisée(s): {content.technique}
                </p>
                <p
                  css={{
                    margin: "0",
                  }}
                >
                  Date: {content.date}
                </p>
                <p
                  css={{
                    margin: "0",
                  }}
                >
                  Type: {content.type}
                </p>
                <p
                  css={{
                    marginTop: "20px",
                  }}
                >
                  {content.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <SocialMedias />
        <Link to="/">
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
        </Link>
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
    </PageTransition>
  )
}

Project.propTypes = {}
Project.defaultProps = {}

export default Project
