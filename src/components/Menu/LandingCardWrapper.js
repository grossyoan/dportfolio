import React from "react"
import PropTypes from "prop-types"

import { Block } from "baseui/block"

const LandingWrapper = ({ children, ...props }) => {
  return (
    <Block
      overrides={{
        Block: {
          style: {
            display: "grid",
            position: "absolute",
            left: "0",
            top: "0",
            width: "100%",
            height: "100%",
            zIndex: "-1",
            flexDirection: "row",
            "@media screen and (max-width: 880px)": {
              display: "flex",
              flexWrap: "wrap",
            },
          },
        },
      }}
      {...props}
    >
      {children}
    </Block>
  )
}

LandingWrapper.propTypes = {
  children: PropTypes.node,
}

LandingWrapper.defaultProps = {
  children: {},
}

export default LandingWrapper
