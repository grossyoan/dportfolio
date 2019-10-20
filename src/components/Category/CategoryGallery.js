import React from "react";
import PropTypes from "prop-types";
import { Block } from "baseui/block";

const CategoryGallery = ({ children, heroButtonClicked, ...props }) => {
  return (
    <Block
      overrides={{
        Block: {
          style: {
            display: "flex",
            flexWrap: "wrap",
            padding: "4px 4px",
            marginBottom: "100px"
          }
        }
      }}
    >
      {children}
    </Block>
  );
};

CategoryGallery.propTypes = {
  children: PropTypes.object
};

CategoryGallery.defaultProps = {
  children: {}
};

export default CategoryGallery;
