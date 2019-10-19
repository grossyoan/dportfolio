import React from "react";
import PropTypes from "prop-types";
import { Block } from "baseui/block";
import { Link } from "@reach/router";

import categories from "../../assets/categories.json";
import content from "../../assets/content.json";

import CategoryGallery from "../Gallery/CategoryGallery";
import GalleryImage from "components/Gallery/GalleryImage";

const Gallery = ({ galleryId, children, ...props }) => {
  return (
    <Block
      overrides={{
        Block: {
          style: {
            background: "black",
            position: "absolute",
            width: "100%",
            minHeight: "100vh",
            userSelect: "none"
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
            fontFamily: "Gabriela",
            fontSize: "28px",
            margin: "0"
          }}
        >
          Back to menu
        </p>
        <span
          style={{
            color: "white",
            fontSize: "30px",
            marginTop: "-100px",
            display: "inline-block"
          }}
        >
          &#10229;
        </span>
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
            fontSize: "40px",
            fontFamily: "Gabriela",
            fontWeight: "normal",
            marginBottom: "0",
            marginTop: "60px"
          }}
        >
          {
            categories.filter(categories => categories.id === galleryId)[0]
              .title
          }
        </h1>
        <p
          style={{
            color: "white",
            fontSize: "28px",
            fontFamily: "Gabriela",
            marginTop: "20px",
            marginBottom: "90px"
          }}
        >
          {
            categories.filter(categories => categories.id === galleryId)[0]
              .description
          }
        </p>
        <CategoryGallery>
          {content
            .filter(content => content.category === galleryId)
            .map(item => (
              <Link to={"../../project/" + item.id}>
                <GalleryImage src={item.src} />
              </Link>
            ))}
        </CategoryGallery>
      </Block>
    </Block>
  );
};

Gallery.propTypes = {
  children: PropTypes.object,
  heroButtonClicked: PropTypes.bool
};

Gallery.defaultProps = {
  children: {},
  heroButtonClicked: false
};

export default Gallery;
