import React from "react";
import PropTypes from "prop-types";
import {Block} from 'baseui/block';

const LandingCardWrapper = ({children, ...props}) => {
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
                }
            }
        }}
        >
            {children}
        </Block>
    )
}



LandingCardWrapper.propTypes={
    children: PropTypes.object,
}

LandingCardWrapper.defaultProps={
    children: {},
}




export default LandingCardWrapper;