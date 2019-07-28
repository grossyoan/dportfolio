import React from "react";
import PropTypes from "prop-types";
import {Block} from 'baseui/block';
const ImageCardWrapper = ({gridArea, children, ...props}) => {
    return(
        <Block
        overrides={{
            Block:{
                style:{
                    position: "relative",
                    background:"black",
                    gridArea: gridArea,
                    overflow: "hidden",
                }
            }
        }}
        {...props}
        >
            {children}
        </Block>
    )
}



ImageCardWrapper.propTypes={
    children: PropTypes.object,
}

ImageCardWrapper.defaultProps={
    children: {},
}




export default ImageCardWrapper;