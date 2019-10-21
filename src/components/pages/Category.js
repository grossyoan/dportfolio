import React from "react";
import PropTypes from "prop-types";
import { Block } from "baseui/block";
import { Link } from "@reach/router";
import { StyledLink } from "baseui/link";

import categories from "../../assets/categories.json";
import content from "../../assets/content.json";
import SocialMedias from "../SocialMedias";

import CategoryGallery from "../Category/CategoryGallery";
import GalleryImage from "components/Category/GalleryImage";

const Category = ({ categoryId, children, ...props }) => {
  let customBackground = categories.filter(
    categories => categories.id === categoryId
  )[0].background;
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
            backgroundImage: `url(${customBackground})`
          }
        }
      }}
    >
      <Link
        to="/menu"
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
          Back to categories <br />
          &#10229;
        </p>
      </Link>
      <Block
        overrides={{
          Block: {
            style: { width: "70%", margin: "0 auto" }
          }
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "1.4em",
            fontFamily: "Merienda",
            fontWeight: "normal",
            marginBottom: "0"
          }}
        >
          {
            categories.filter(categories => categories.id === categoryId)[0]
              .title
          }
        </h1>
        <p
          style={{
            color: "white",
            fontSize: ".8em",
            fontFamily: "Gabriela",
            marginTop: "20px",
            marginBottom: "5%"
          }}
        >
          {
            categories.filter(categories => categories.id === categoryId)[0]
              .description
          }
        </p>
        <CategoryGallery>
          {content
            .filter(content => content.category === categoryId)
            .map(item => (
              <Link to={"../../project/" + item.id}>
                <Block
                  overrides={{
                    Block: {
                      style: {
                        width: "350px",
                        padding: "4px 4px",

                        "@media screen and (max-width: 880px)": {
                          width: "100%"
                        }
                      }
                    }
                  }}
                >
                  {item.isVideo ? (
                    <GalleryImage src={item.thumbnail} />
                  ) : (
                    <GalleryImage src={item.src} />
                  )}
                </Block>
              </Link>
            ))}
        </CategoryGallery>
      </Block>
      <SocialMedias />
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

Category.propTypes = {
  children: PropTypes.object,
  heroButtonClicked: PropTypes.bool
};

Category.defaultProps = {
  children: {},
  heroButtonClicked: false
};

export default Category;
