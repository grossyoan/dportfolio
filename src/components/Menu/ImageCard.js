import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { styled } from "styletron-react"
import { useState } from "react"

const StyledImageCard = styled(
  "img",
  ({ $theme, animationdelay, heightanimation, src, ishovered, ...props }) => {
    const style = {
      position: "absolute",
      left: "0",
      bottom: "0",
      width: heightanimation ? "100%" : "0%",
      height: heightanimation ? "0%" : "100%",
      objectFit: "cover",
      transform: ishovered ? "scale(1.05)" : "scale(1)",
      opacity: ishovered ? "0.5" : "1",
      transition: `transform 2s ease 0.05s, opacity 1s ease 0.05s, ${
        heightanimation ? "height" : "width"
      } .5s ease`,
    }

    return style
  }
)

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
    <StyledImageCard
      ishovered={ishovered}
      heightanimation={heightanimation}
      animationdelay={animationdelay}
      src={src}
      $style={{ [`${heightanimation ? "height" : "width"}`]: size }}
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
