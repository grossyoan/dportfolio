import React from "react";
import PropTypes from "prop-types";
import {Display} from 'baseui/typography';
import customTheme from "theme/customTheme";
const ImageText = ({children, font, ...props}) =>{
    return(
        <Display
        font={font}
        overrides={{
            Block:{
                style: {
                    textAlign: "center",
                    position: "absolute",
                    zIndex:"50",
                    top:"50%",
                    left:"50%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    fontFamily: customTheme.typography.font600.fontFamily,
                }
            }
        }}
        >{children}</Display>
        
    )
}


ImageText.propTypes={
    children: PropTypes.string,
}

ImageText.defaultProps={
    children: "Sample Text"
}



export default ImageText;