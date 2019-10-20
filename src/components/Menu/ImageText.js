import React from "react";
import PropTypes from "prop-types";
import { Block } from "baseui/block";
import customTheme from "theme/customTheme";
const ImageText = ({ children, font, animationDelay, ...props }) => {
  return (
    <Block
      overrides={{
        Block: {
          style: {
            ":before": {
              content: "3D"
            },
            textAlign: "center",
            position: "absolute",
            zIndex: "50",
            overflow: "hidden",
            top: "50%",
            left: "50%",
            color: "white",
            transform: "translate(-50%, -50%)",
            fontFamily: customTheme.typography.font600.fontFamily,
            animationDuration: "1.5s",
            animationDelay: animationDelay,
            animationFillMode: "forwards",
            animationTimingFunction: "ease",
            opacity: "0",
            fontSize: font,
            userSelect: "none",
            animationName: {
              from: {
                opacity: "0"
              },
              to: {
                opacity: "1"
              }
            }
          }
        }
      }}
    >
      {children}
    </Block>
  );
};

ImageText.propTypes = {
  children: PropTypes.string
};

ImageText.defaultProps = {
  children: "Sample Text"
};

export default ImageText;
