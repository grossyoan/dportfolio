import React from "react";
import PropTypes from "prop-types";
import {styled} from 'baseui';
import parallaxEffect from "helpers/parallaxEffect";



const StyledHeroImage = styled('img', ({$theme, animationDelay, heightAnimation,src, isHovered, ref,...props}) => 
    ({
        position: "absolute",
        zIndex:"-1",
        left: "0",
        bottom: "0",
        objectFit:"cover",
        opacity:"0.8",
        filter:"blur(2px)",
        width:"100%",
        height:"100%",
    }),
)

const HeroImage = ({src, ref, ...props}) => {
    console.log("ref",ref)
    return(
        <StyledHeroImage 
        src={src}
        ref={ref}
        {...props}
        />
    )
}


HeroImage.propTypes={
    src: PropTypes.string,
}

HeroImage.defaultProps={
    src: "",
}



export default HeroImage;