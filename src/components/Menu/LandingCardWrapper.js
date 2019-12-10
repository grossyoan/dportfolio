import React from "react"
import PropTypes from "prop-types"

const mq = "@media screen and (max-width: 880px)"

const LandingWrapper = ({ children, ...props }) => {
  return (
    <div
      css={{
        display: "grid",
        position: "absolute",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        zIndex: "-1",
        flexDirection: "row",
        [mq]: {
          display: "flex",
          flexWrap: "wrap",
        },
      }}
      {...props}
    >
      {children}
    </div>
  )
}

LandingWrapper.propTypes = {
  children: PropTypes.node,
}

LandingWrapper.defaultProps = {
  children: {},
}

export default LandingWrapper
