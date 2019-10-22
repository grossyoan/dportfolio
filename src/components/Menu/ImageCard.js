import React from "react"
import PropTypes from "prop-types"
import { styled } from "styletron-react"

const StyledImageCard = styled(
  "img",
  ({ $theme, animationdelay, heightanimation, src, ishovered, ...props }) => ({
    position: "absolute",
    left: "0",
    bottom: "0",
    width: heightanimation ? "100%" : "0%",
    height: heightanimation ? "0%" : "100%",
    objectFit: "cover",
    transform: ishovered ? "scale(1.05)" : "scale(1)",
    opacity: ishovered ? "0.5" : "1",
    transition: "transform 2s ease, opacity 1s ease",
    transitionDelay: "0.05s",
    animationDuration: ".5s",
    animationDelay: animationdelay,
    animationFillMode: "forwards",
    animationTimingFunction: "ease",
    animationName: heightanimation
      ? {
          from: {
            height: "0%",
            // transform: "translateY(100%) scale(1)"
          },
          to: {
            height: "100%",
            // transform: "translateY(0%) scale(1)"
          },
        }
      : {
          from: {
            width: "0%",
            // transform: "translateX(-100%) scale(1)"
          },
          to: {
            width: "100%",
            // transform: "translateX(0%) scale(1)"
          },
        },
  })
)

const ImageCard = ({
  src,
  animationdelay,
  heightanimation,
  ishovered,
  ...props
}) => {
  return (
    <StyledImageCard
      ishovered={ishovered}
      heightanimation={heightanimation}
      animationdelay={animationdelay}
      src={src}
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
