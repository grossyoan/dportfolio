import React from "react";
import { Block } from "baseui/block";
import { Link } from "@reach/router";
import { StyledLink } from "baseui/link";

import importVideos from "../../helpers/importVideos";
import content from "../../assets/content.json";
import SocialMedias from "../SocialMedias";

const Project = ({ projectId, ...props }) => {
  return (
    <Block
      overrides={{
        Block: {
          style: {
            background: "black",
            position: "absolute",
            width: "100%",
            minHeight: "100vh",
            userSelect: "none",
            zIndex: "5"
          }
        }
      }}
    >
      <Link
        to={
          "../../category/" +
          content.filter(content => content.id === projectId)[0].category
        }
        style={{
          color: "transparent",
          marginTop: "40px",
          marginLeft: "5%",
          display: "inline-block"
        }}
      >
        <p
          style={{
            color: "white",
            fontFamily: "Merienda",
            fontSize: ".7em",
            margin: "0",
            lineHeight: "1em"
          }}
        >
          Back to gallery <br />
          &#10229;
        </p>
      </Link>
      <Block>
        {content
          .filter(content => content.id === projectId)
          .map(item => (
            <Block
              overrides={{
                Block: {
                  style: {
                    width: "70%",
                    margin: "0 auto"
                  }
                }
              }}
            >
              <h1
                style={{
                  color: "white",
                  fontFamily: "Merienda",
                  fontSize: "1.4em"
                }}
              >
                {item.title}
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
                        flexDirection: "column"
                      }
                    }
                  }
                }}
              >
                <Block
                  overrides={{
                    Block: {
                      style: {
                        width: "60%",
                        "@media screen and (max-width: 880px)": {
                          width: "100%"
                        }
                      }
                    }
                  }}
                >
                  {item.isVideo ? (
                    <video
                      style={{ width: "100%", height: "auto" }}
                      preload="auto"
                      autoPlay="true"
                      controls
                      loop
                      src={importVideos(item.src)}
                    ></video>
                  ) : (
                    <img
                      src={item.src}
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
                          width: "100%"
                        },
                        opacity: "0.9",
                        fontSize: ".7em",
                        color: "white"
                      }
                    }
                  }}
                >
                  <p
                    style={{
                      margin: "0"
                    }}
                  >
                    Technique: {item.technique}
                  </p>
                  <p
                    style={{
                      margin: "0"
                    }}
                  >
                    Date: {item.date}
                  </p>
                  <p
                    style={{
                      margin: "0"
                    }}
                  >
                    Type: {item.type}
                  </p>
                  <p
                    style={{
                      marginTop: "20px"
                    }}
                  >
                    {item.description}
                  </p>
                </Block>
              </Block>
            </Block>
          ))}
      </Block>
      <SocialMedias />
      <Link to="/">
        <Block
          overrides={{
            Block: {
              style: {
                position: "absolute",
                right: "50px",
                top: "40px",
                fontFamily: "Cookie",
                color: "white",
                fontSize: "1em"
              }
            }
          }}
        >
          D.O
        </Block>
      </Link>
      <Block
        overrides={{
          Block: {
            style: {
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              width: "100%",
              right: "0",
              bottom: "2%",
              fonSize: "inherit",
              fontSize: ".4em"
            }
          }
        }}
      >
        <StyledLink href="https://grossyoan.fr">
          Developed with ❤️by Yoan Gross
        </StyledLink>
      </Block>
    </Block>
  );
};

Project.propTypes = {};
Project.defaultProps = {};

export default Project;
