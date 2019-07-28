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
        transformOrigin:"bottom left",
        animationDuration: ".5s",
        animationDelay: animationDelay,
        animationFillMode:"forwards",
        animationName: heightAnimation ?
         {
            from: {
              height: "0%",
            },
            to: {
              height:"100%",
            }
          }  
          :
        {
            from: {
              width: "0%",
            },
            to: {
              width: "100%",
            }
        },
        ":hover":{
            transform: "scale(1.05)",
            opacity: "0.8",
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