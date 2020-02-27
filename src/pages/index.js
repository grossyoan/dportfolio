import React, { useState, useRef } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import Hero from "../components/Hero/Hero"
import HeroImage from "../components/Hero/HeroImage"
import HeroBackgroundFront from "../../static/images/hero/Background_Character.png"
import HeroBackgroundBack from "../../static/images/hero/Background_Back.jpg"
import Particles from "../components/Hero/Particles"

import CursorText from "../components/Hero/CursorText"
import Layout from "../components/layout"
import PageTransition from "gatsby-plugin-page-transitions"

import Demo2020 from "../../static/videos/Demo_2020.mp4"

const Landing = () => {
  const [heroButtonClicked, setHeroButtonClicked] = useState(false)
  const parallaxRef = useRef("parallax")
  const cursorTextRef = useRef("cursorText")

  return (
    <PageTransition>
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Doriane Olivier - Portfolio</title>
          <link rel="canonical" href="https://dorianeolivier.fr" />
          <meta
            name="description"
            content="Doriane Olivier is a french student at ECV, and an artist."
          />
        </Helmet>
        <div
          css={{
            width: "100%",
            height: "100%",
          }}
        >
          <Link to="/menu">
            <Hero heroButtonClicked={heroButtonClicked}>
              <CursorText ref={cursorTextRef}>Cliquer pour entrer</CursorText>
              <div
                css={{
                  position: "absolute",
                  right: "3%",
                  top: "3%",
                  fontFamily: "Coming Soon",
                  color: "white",
                  fontSize: "1em",
                }}
              >
                D. Olivier - Portfolio
              </div>
              <video
                style={{
                  position: "absolute",
                  right: "0",
                  bottom: "0",
                  minWidth: "100%",
                  minHeight: "100%",
                  width: "auto",
                  height: "auto",
                  backgroundSize: "cover",
                  zIndex: "-10",
                  overflow: "hidden",
                }}
                autoPlay
                loop
                muted
              >
                <source src={Demo2020} type="video/mp4" />
              </video>
            </Hero>
          </Link>
        </div>
      </Layout>
    </PageTransition>
  )
}

Landing.propTypes = {
  heroButtonClicked: PropTypes.bool,
}
Landing.defaultProps = {
  heroButtonClicked: false,
}

export default Landing
