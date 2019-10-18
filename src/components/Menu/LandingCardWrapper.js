import React from "react";
import PropTypes from "prop-types";
import {Block} from 'baseui/block';

const LandingWrapper = ({children, ...props}) => {
    return(
        <Block
        overrides={{
            Block:{
                style:{
                    display: "grid",
                    position: "absolute",
                    left: "0",
                    top: "0",
                    width: "100%",
                    height: "100%",
                    zIndex:"-1"
                }
            }
        }}
        {...props}
        >
            {children}
        </Block>
    )
}



LandingWrapper.propTypes={
    children: PropTypes.object,
}

LandingWrapper.defaultProps={
    children: {},
}




export default LandingWrapper;