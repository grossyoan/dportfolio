import React, { forwardRef, useEffect } from "react"
import PropTypes from "prop-types"
import { styled } from "baseui"
import parallaxEffect from "../../helpers/parallaxEffect"
const StyledHeroImage = styled(
  "img",
  ({
    $theme,
    animationdelay,
    heightanimation,
    src,
    ishovered,
    ref,
    parallax,
    transform,
    ...props
  }) => ({
    position: "absolute",
    zIndex: parallax ? "-1" : "-3",
    transform: transform,
    boxShadow: "inset 10px 10px 5px 0px rgba(0,0,0,0.75)",
  })
)

const HeroImage = forwardRef(({ src, parallax, ...props }, ref) => {
  useEffect(() => {
    if (ref) parallaxEffect(ref.current)
  })
  return <StyledHeroImage src={src} ref={ref} parallax={parallax} {...props} />
})

HeroImage.propTypes = {
  src: PropTypes.string,
  transform: PropTypes.string,
}

HeroImage.defaultProps = {
  transform: "scale(1)",
}

export default HeroImage
