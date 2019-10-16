import React, {useState, useRef} from 'react';
import PropTypes from "prop-types"
import {Block} from "baseui/block"
import { Link } from "@reach/router";
import Hero from "components/layouts/Hero"
import HeroImage from "components/components/Hero/HeroImage"
import HeroBackgroundFront from "assets/img/hero/Background_Character.png"
import HeroBackgroundBack from "assets/img/hero/Background_Back.png"
import Particles from "components/components/Hero/Particles";
import LandingWrapper from "components/layouts/LandingCardWrapper"
import ImageCardWrapper from "components/components/ImageCard/ImageCardWrapper"
import LandingImage3D from "assets/img/landing/landingImage3D.jpg";
import LandingImageTradi from "assets/img/landing/landingImageTradi.jpg";
import LandingImageChara from "assets/img/landing/landingImageChara.jpg";
import LandingImageIllu from "assets/img/landing/landingImageIllu.jpg";
import LandingImageResume from "assets/img/landing/landingImageResume.jpg";
import LandingImageAbout from "assets/img/landing/landingImageAbout.jpg";
import CursorText from "components/components/Hero/CursorText"

const Landing = () => {
    const [heroButtonClicked, setHeroButtonClicked] = useState(false)
    const parallaxRef = useRef("parallax");
    const cursorTextRef = useRef("cursorText")
    return(
        <Block
        overrides={{
            Block:{
                style:{
                    width: "100%",
                    height: "100%",

                }
            }
        }}
        >
        <Hero
        heroButtonClicked={heroButtonClicked}
        >
            <CursorText ref={cursorTextRef}>Click to enter</CursorText>
            <HeroImage onClick={()=>{
                setHeroButtonClicked(!heroButtonClicked)
            }} parallax src={HeroBackgroundFront}/>
            <HeroImage transform="scale(1.1)"ref={parallaxRef} src={HeroBackgroundBack}/>
            <Particles />
        </Hero>
        {
            heroButtonClicked ? 
                <LandingWrapper>
                    <Link to="/azezae">
                        <ImageCardWrapper gridArea="1 / 17 / 33 / 33" src={LandingImage3D} imageAnimationDelay="1.1s" textAnimationDelay="1.3s"font="font900">
                            3D
                        </ImageCardWrapper>
                        </Link>
                    <ImageCardWrapper gridArea="1 / 1 / 17 / 17" src={LandingImageTradi} heightAnimation imageAnimationDelay=".9s" textAnimationDelay="1.1s"font="font800">
                        Old School
                    </ImageCardWrapper>
                    <ImageCardWrapper gridArea="17 / 9 / 33 / 17" src={LandingImageIllu} imageAnimationDelay=".6s" textAnimationDelay=".8s"font="font600">
                        Illustration
                    </ImageCardWrapper>
                    <ImageCardWrapper gridArea="17 / 1 / 25 / 9" src={LandingImageChara} heightAnimation imageAnimationDelay=".4s" textAnimationDelay=".6s"font="font600">
                        Chara Design
                    </ImageCardWrapper>
                    <ImageCardWrapper gridArea="25 / 5 / 33 / 9" src={LandingImageResume} imageAnimationDelay=".2s" textAnimationDelay=".4s"font="font600">
                        Resume
                    </ImageCardWrapper>
                    <ImageCardWrapper gridArea="25 / 1  / 33 / 5" src={LandingImageAbout} imageAnimationDelay="0s" textAnimationDelay=".2s" font="font600">
                        About
                    </ImageCardWrapper>
                </LandingWrapper>
            : null }
        </Block>

    )
}

Landing.propTypes={
    heroButtonClicked: PropTypes.bool,
}
Landing.defaultProps={
    heroButtonClicked: false,
}

export default Landing;