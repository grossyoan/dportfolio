import React, { useState } from "react";
import useHover from "helpers/useHover";
import PropTypes from "prop-types";
import { Block } from "baseui/block";
import ImageCard from "components/components/ImageCard/ImageCard";
import ImageText from "components/components/ImageCard/ImageText";
const ImageCardWrapper = ({
  gridArea,
  children,
  src,
  imageAnimationDelay,
  textAnimationDelay,
  font,
  heightAnimation,
  ...props
}) => {
  const [hoverRef, isHovered] = useHover();
  const [selected, setSelected] = useState(false);
  return (
    <Block
      ref={hoverRef}
      onClick={() => {
        setSelected(!selected);
      }}
      overrides={{
        Block: {
          style: {
            position: "relative",
            background: "black",
            gridArea: gridArea,
            overflow: "hidden",
            transition: "transform 1s ease",
            width: "100%"
          }
        }
      }}
      {...props}
    >
      <ImageCard
        heightAnimation={heightAnimation}
        src={src}
        animationDelay={imageAnimationDelay}
        isHovered={isHovered}
        isSelected
      />
      <ImageText animationDelay={textAnimationDelay} font={font}>
        {children}{" "}
      </ImageText>
    </Block>
  );
};

ImageCardWrapper.propTypes = {
  children: PropTypes.object
};

ImageCardWrapper.defaultProps = {
  children: {}
};

export default ImageCardWrapper;
