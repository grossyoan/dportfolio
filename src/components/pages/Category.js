import React from "react";
import PropTypes from "prop-types";
import { Block } from "baseui/block";

import content from "../../assets/content.json";
import CategoryGallery from "../layouts/CategoryGallery";
import GalleryImage from "components/components/Gallery/GalleryImage.js";

const Category = ({ categoryId, children, ...props }) => {
  return (
    <Block
      overrides={{
        Block: {
          style: {
            margin: "0 auto",
            background: "black",
            position: "absolute",
            left: "0",
            top: "0",
            width: "100%",
            height: "100%",
            zIndex: "0",
            userSelect: "none"
          }
        }
      }}
    >
      <CategoryGallery>
        {content
          .filter(content => content.category === categoryId)
          .map(item => (
            <GalleryImage src={item.src} />
          ))}
      </CategoryGallery>
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
