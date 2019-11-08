import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import LandingWrapper from "../components/Menu/LandingCardWrapper"
import ImageCardWrapper from "../components/Menu/ImageCardWrapper"
import LandingImage3D from "../../static/images/landing/landingImage3D.jpg"
import LandingImageOldSChool from "../../static/images/landing/landingImageOldSChool.jpg"
import LandingImageChara from "../../static/images/landing/landingImageChara.jpg"
import LandingImageIllu from "../../static/images/landing/landingImageIllu.jpg"
import LandingImageConcept from "../../static/images/landing/landingImageConcept.jpg"
import LandingImageResume from "../../static/images/landing/landingImageResume.jpg"
import LandingImageAbout from "../../static/images/landing/landingImageAbout.jpg"

const Menu = () => {
  return (
    <LandingWrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Doriane Olivier - Portfolio</title>
        <link rel="canonical" href="https://dorianeolivier.fr/menu" />
        <meta
          name="description"
          content="Doriane Olivier is a french student at ECV, and an artist."
        />
      </Helmet>
      <Link
        to="../category/illustration"
        categoryid="illustration"
        style={{
          display: "contents",
        }}
      >
        <ImageCardWrapper
          gridArea="1 / 17 / 33 / 33"
          src={LandingImageIllu}
          imageAnimationDelay="1.1s"
          textAnimationDelay="1.3s"
          font="1em"
        >
          Illustration
        </ImageCardWrapper>
      </Link>
      <Link
        to="../category/conceptart"
        categoryid="oldschool"
        style={{
          display: "contents",
        }}
      >
        <ImageCardWrapper
          gridArea="1 / 1 / 17 / 17"
          src={LandingImageOldSChool}
          heightanimation
          imageAnimationDelay=".9s"
          textAnimationDelay="1.1s"
          font="font800"
        >
          Concept Art
        </ImageCardWrapper>
      </Link>
      <Link
        to="../category/3d"
        categoryid="3d"
        style={{
          display: "contents",
        }}
      >
        <ImageCardWrapper
          gridArea="17 / 9 / 33 / 17"
          src={LandingImage3D}
          imageAnimationDelay=".6s"
          textAnimationDelay=".8s"
          font="font600"
        >
          3D
        </ImageCardWrapper>
      </Link>
      <Link
        to="../category/charadesign"
        categoryid="illustration"
        style={{
          display: "contents",
        }}
      >
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
      </Link>
      <Link
        to="../category/oldschool"
        categoryid="oldschool"
        style={{
          display: "contents",
        }}
      >
        <ImageCardWrapper
          gridArea="25 / 5 / 33 / 9"
          src={LandingImageConcept}
          imageAnimationDelay=".2s"
          textAnimationDelay=".4s"
          font="font600"
        >
          Old School
        </ImageCardWrapper>
      </Link>
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
