import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import { useState } from "react"

const ImageCard = ({
  src,
  animationdelay,
  heightanimation,
  ishovered,
  ...props
}) => {
  let [size, setSize] = useState("0%")
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSize("100%")
    }, animationdelay * 1000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <img
      css={css`
        position: absolute;
        left: 0;
        bottom: 0;
        width: ${heightanimation ? "100%" : "0%"};
        height: ${heightanimation ? "0%" : "100%"};
        object-fit: cover;
        transform: scale(${ishovered ? 1.05 : 1});
        opacity: ${ishovered ? 1 : 0.5};
        transition: transform 2s ease 0.05s, opacity 1s ease 0.05s,
          ${heightanimation ? "height" : "width"} 0.5s ease;
      `}
      src={src}
      style={{ [`${heightanimation ? "height" : "width"}`]: size }}
    />
  )
}

ImageCard.propTypes = {
  src: PropTypes.string,
  animationdelay: PropTypes.string,
  heightanimation: PropTypes.bool,
  ishovered: PropTypes.bool,
}

ImageCard.defaultProps = {
  src: "",
  animationdelay: "0s",
  heightanimation: false,
  ishovered: false,
}

export default ImageCard
