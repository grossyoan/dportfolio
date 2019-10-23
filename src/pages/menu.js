import React from "react"
import { Link } from "gatsby"
import LandingWrapper from "../components/Menu/LandingCardWrapper"
import ImageCardWrapper from "../components/Menu/ImageCardWrapper"
import LandingImage3D from "../../static/images/landing/landingImage3D.jpg"
import LandingImageTradi from "../../static/images/landing/landingImageTradi.jpg"
import LandingImageChara from "../../static/images/landing/landingImageChara.jpg"
import LandingImageIllu from "../../static/images/landing/landingImageIllu.jpg"
import LandingImageResume from "../../static/images/landing/landingImageResume.jpg"
import LandingImageAbout from "../../static/images/landing/landingImageAbout.jpg"

const Menu = () => {
  return (
    <LandingWrapper>
      <Link
        to="../category/3d"
        categoryid="3d"
        style={{
          display: "contents",
        }}
      >
        <ImageCardWrapper
          gridArea="1 / 17 / 33 / 33"
          src={LandingImage3D}
          imageAnimationDelay="1.1s"
          textAnimationDelay="1.3s"
          font="1em"
        >
          3D
        </ImageCardWrapper>
      </Link>
      <ImageCardWrapper
        gridArea="1 / 1 / 17 / 17"
        src={LandingImageTradi}
        heightanimation
        imageAnimationDelay=".9s"
        textAnimationDelay="1.1s"
        font="font800"
      >
        Old School
      </ImageCardWrapper>
      <ImageCardWrapper
        gridArea="17 / 9 / 33 / 17"
        src={LandingImageIllu}
        imageAnimationDelay=".6s"
        textAnimationDelay=".8s"
        font="font600"
      >
        Illustration
      </ImageCardWrapper>
      <ImageCardWrapper
        gridArea="17 / 1 / 25 / 9"
        src={LandingImageChara}
        heightanimation
        imageAnimationDelay=".4s"
        textAnimationDelay=".6s"
        font="font600"
      >
        Chara Design
      </ImageCardWrapper>
      <ImageCardWrapper
        gridArea="25 / 5 / 33 / 9"
        src={LandingImageResume}
        imageAnimationDelay=".2s"
        textAnimationDelay=".4s"
        font="font600"
      >
        Resume
      </ImageCardWrapper>
      <ImageCardWrapper
        gridArea="25 / 1  / 33 / 5"
        src={LandingImageAbout}
        imageAnimationDelay="0s"
        textAnimationDelay=".2s"
        font="font600"
      >
        About
      </ImageCardWrapper>
    </LandingWrapper>
  )
}

export default Menu
