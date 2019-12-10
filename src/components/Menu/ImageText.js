import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

const ImageText = ({ children, font, animationdelay, ...props }) => {
  let [opacity, setOpacity] = useState("0")
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setOpacity("1")
    }, animationdelay * 1000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div
      css={{
        textAlign: "center",
        position: "absolute",
        zIndex: "50",
        overflow: "hidden",
        top: "50%",
        left: "50%",
        color: "white",
        transform: "translate(-50%, -50%)",
        fontFamily: "Coming Soon",
        fontWeight: "bold",
        transition: "opacity 1.5s ease",
        opacity: "0",
        fontSize: font,
        userSelect: "none",
      }}
      style={{ opacity: opacity }}
    >
      {children}
    </div>
  )
}

ImageText.propTypes = {
  children: PropTypes.string,
}

ImageText.defaultProps = {
  children: "Sample Text",
}

export default ImageText
