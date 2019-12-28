import React from "react"
import { Helmet } from "react-helmet"
import LandingWrapper from "../components/Menu/LandingCardWrapper"
import ImageCardWrapper from "../components/Menu/ImageCardWrapper"
import LandingImage3D from "../../static/images/landing/landingImage3D.jpg"
import LandingImageOldSChool from "../../static/images/landing/landingImageOldSchool.jpg"
import LandingImageChara from "../../static/images/landing/landingImageChara.jpg"
import LandingImageIllu from "../../static/images/landing/landingImageIllu.jpg"
import LandingImageConcept from "../../static/images/landing/landingImageConcept.jpg"
import LandingImageAbout from "../../static/images/landing/landingImageAbout.jpg"
import { Link } from "gatsby"

import PageTransition from "gatsby-plugin-page-transitions"

const Menu = () => {
  return (
    <PageTransition>
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
          to="category/illustration"
          categoryid="illustration"
          style={{
            display: "contents",
          }}
        >
          <ImageCardWrapper
            gridArea="1 / 17 / 33 / 33"
            src={LandingImageIllu}
            imageAnimationDelay="1.3"
            textAnimationDelay="1.5"
            font="1em"
          >
            Illustration
          </ImageCardWrapper>
        </Link>
        <Link
          to="category/conceptart"
          categoryid="conceptart"
          style={{
            display: "contents",
          }}
        >
          <ImageCardWrapper
            gridArea="1 / 1 / 17 / 17"
            src={LandingImageConcept}
            heightanimation
            imageAnimationDelay="1.1"
            textAnimationDelay="1.3"
            font="1em"
          >
            Concept Art
          </ImageCardWrapper>
        </Link>
        <Link
          to="category/3d"
          categoryid="3d"
          style={{
            display: "contents",
          }}
        >
          <ImageCardWrapper
            gridArea="17 / 9 / 33 / 17"
            src={LandingImage3D}
            imageAnimationDelay=".8"
            textAnimationDelay="1"
            font="1em"
          >
            3D
          </ImageCardWrapper>
        </Link>
        <Link
          to="category/charadesign"
          categoryid="charadesign"
          style={{
            display: "contents",
          }}
        >
          <ImageCardWrapper
            gridArea="17 / 1 / 25 / 9"
            src={LandingImageChara}
            heightanimation
            imageAnimationDelay=".6"
            textAnimationDelay=".8"
            font="1em"
          >
            Chara Design
          </ImageCardWrapper>
        </Link>
        <Link
          to="category/oldschool"
          categoryid="oldschool"
          style={{
            display: "contents",
          }}
        >
          <ImageCardWrapper
            gridArea="25 / 5 / 33 / 9"
            src={LandingImageOldSChool}
            imageAnimationDelay=".4"
            textAnimationDelay=".6"
            font="1em"
          >
            Old School
          </ImageCardWrapper>
        </Link>
        <ImageCardWrapper
          gridArea="25 / 1  / 33 / 5"
          src={LandingImageAbout}
          imageAnimationDelay=".2"
          textAnimationDelay=".4"
          font="1em"
        >
          À propos
        </ImageCardWrapper>
      </LandingWrapper>{" "}
    </PageTransition>
  )
}

export default Menu
