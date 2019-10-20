import React from "react";
import { Block } from "baseui/block";
import { Link } from "@reach/router";

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
            fontSize: "1em",
            margin: "0"
          }}
        >
          Back to gallery
        </p>
        <span
          style={{
            color: "white",
            fontSize: "1.1em",
            marginTop: "-100px",
            display: "inline-block"
          }}
        >
          &#10229;
        </span>
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
                  <img
                    src={item.src}
                    alt=""
                    style={{ width: "100%", height: "auto" }}
                  />
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
                        }
                      }
                    }
                  }}
                >
                  <p
                    style={{
                      color: "white",
                      fontSize: "1em",
                      margin: "0",
                      opacity: "0.6"
                    }}
                  >
                    Technique: {item.technique}
                  </p>
                  <p
                    style={{
                      color: "white",
                      fontSize: "1em",
                      margin: "0",
                      opacity: "0.6"
                    }}
                  >
                    Date: {item.date}
                  </p>
                  <p
                    style={{
                      color: "white",
                      fontSize: "1em",
                      margin: "0",
                      opacity: "0.6"
                    }}
                  >
                    Type: {item.type}
                  </p>
                  <p
                    style={{
                      color: "white",
                      fontSize: "1em",
                      marginTop: "20px",
                      opacity: "0.6"
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
    </Block>
  );
};

Project.propTypes = {};
Project.defaultProps = {};

export default Project;
