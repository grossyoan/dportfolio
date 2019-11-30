import React from "react"
import PropTypes from "prop-types"
const Hero = ({ children, heroButtonClicked, ...props }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: heroButtonClicked ? "translateX(100%)" : "",
        opacity: heroButtonClicked ? "0" : "1",
        transition: "transform 1s ease, opacity .6s ease",
        zIndex: "0",
        overflow: "hidden",
        userSelect: "none",
      }}
    >
      {children}
    </div>
  )
}

Hero.propTypes = {
  children: PropTypes.array,
  heroButtonClicked: PropTypes.bool,
}

Hero.defaultProps = {
  children: [],
  heroButtonClicked: false,
}

export default Hero
