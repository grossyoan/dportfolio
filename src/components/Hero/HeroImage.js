import React, { forwardRef, useEffect } from "react"
import parallaxEffect from "../../helpers/parallaxEffect"

const StyledHeroImage = ({
  $theme,
  animationdelay,
  heightanimation,
  src,
  ref,
  parallax,
  ...props
}) => {
  return (
    <img
      src={src}
      ref={ref}
      parallax={parallax}
      css={{
        height: "100%",
        position: "absolute",
        zIndex: parallax ? "-1" : "-3",
        transform: "scale(1.1)",
        boxShadow: "inset 10px 10px 5px 0px rgba(0,0,0,0.75)",
      }}
    />
  )
}

const HeroImage = forwardRef(({ src, parallax, ...props }, ref) => {
  // useEffect(() => {
  //   if (ref) parallaxEffect(ref.current)
  // }, [])
  return <StyledHeroImage src={src} ref={ref} parallax={parallax} {...props} />
})

export default HeroImage
