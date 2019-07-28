import React from 'react';
import LandingWrapper from "components/layouts/LandingCardWrapper"
import ImageCardWrapper from "components/components/ImageCardWrapper"
import ImageCard from "components/components/ImageCard"
import ImageText from "components/components/ImageText"
import Link from "components/components/Link"
import LandingImage3D from "assets/img/landing/landingImage3D.jpg";
import LandingImageTradi from "assets/img/landing/landingImageTradi.jpg";
import LandingImageChara from "assets/img/landing/landingImageChara.jpg";
import LandingImageIllu from "assets/img/landing/landingImageIllu.jpg";
import LandingImageResume from "assets/img/landing/landingImageResume.jpg";
import LandingImageAbout from "assets/img/landing/landingImageAbout.jpg";

const Landing = () => {
    return(
        <LandingWrapper>
        <ImageCardWrapper gridArea="1 / 17 / 33 / 33">
        <ImageCard  src={LandingImage3D} animationDelay="1.1s" />
        <ImageText animationDelay="1.3s"font="font900">3D</ImageText>
        </ImageCardWrapper>
        <ImageCardWrapper gridArea="1 / 1 / 17 / 17">
        <ImageCard  src={LandingImageTradi} heightAnimation animationDelay=".9s"/>
        <ImageText animationDelay="1.1s"font="font800">Old school</ImageText>
        </ImageCardWrapper>
        <ImageCardWrapper gridArea="17 / 9 / 33 / 17">
        <ImageCard  src={LandingImageIllu} animationDelay=".6s"/>
        <ImageText animationDelay=".8s"font="font600">Illustration</ImageText>
        </ImageCardWrapper>
        <ImageCardWrapper gridArea="17 / 1 / 25 / 9">
        <ImageCard src={LandingImageChara} heightAnimation animationDelay=".4s"/>
        <ImageText animationDelay=".6s"font="font600">Chara Design</ImageText>
        </ImageCardWrapper>
        <ImageCardWrapper gridArea="25 / 5 / 33 / 9">
        <ImageCard  src={LandingImageResume} animationDelay=".2s"/>
        <ImageText animationDelay=".4s"font="font600">Resume</ImageText>
        </ImageCardWrapper>
        <ImageCardWrapper gridArea="25 / 1  / 33 / 5">
        <ImageCard  src={LandingImageAbout} animationDelay="0s"/>
        <ImageText animationDelay=".2s" font="font600">About</ImageText>
        </ImageCardWrapper>
        </LandingWrapper>
    )
}

export default Landing;