import React from "react";
import PropTypes from "prop-types";
import {styled} from 'baseui';



const StyledImageCard = styled('img', ({$theme, animationDelay, heightAnimation,src, ...props}) => 
    ({
        position: "absolute",
        left: "0",
        bottom: "0",
        width: heightAnimation ? "100%" : "0%",
        height: heightAnimation ? "0%" : "100%",
        objectFit:"cover",
        transition: "transform 2s ease, opacity 1s ease",
        transitionDelay:"0.05s",
        animationDuration: ".5s",
        animationDelay: animationDelay,
        animationFillMode:"forwards",
        animationTimingFunction: "ease", 
        animationName: heightAnimation ?
         {
            from: {
              height: "0%",
              // transform: "translateY(100%) scale(1)"
            },
            to: {
              height:"100%",
              // transform: "translateY(0%) scale(1)"
            }
          }  
          :
        {
            from: {
              width: "0%",
              // transform: "translateX(-100%) scale(1)"

            },
            to: {
              width: "100%",
              // transform: "translateX(0%) scale(1)"
            }
        },
        ":hover":{
            transform: "scale(1.05)",
            opacity: "0.5",
        },
    }),
)

const ImageCard = ({src, animationDelay, heightAnimation, ...props}) =>{
    console.log(src)
    return(
        <StyledImageCard  heightAnimation={heightAnimation} animationDelay={animationDelay} src={src}/>
    )
}


ImageCard.propTypes={
    src: PropTypes.string,
    animationDelay: PropTypes.string,
    heightAnimation: PropTypes.bool,
}

ImageCard.defaultProps={
    src: "",
    animationDelay: "0s",
    heightAnimation: false,
}



export default ImageCard;