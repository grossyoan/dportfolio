import React, { useState, useRef } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Hero from "../components/Hero/Hero"
import HeroImage from "../components/Hero/HeroImage"
import HeroBackgroundFront from "../../static/images/hero/Background_Character.png"
import HeroBackgroundBack from "../../static/images/hero/Background_Back.png"
import Particles from "../components/Hero/Particles"
import CursorText from "../components/Hero/CursorText"
import Layout from "../components/layout"

const Landing = () => {
  const [heroButtonClicked, setHeroButtonClicked] = useState(false)
  const parallaxRef = useRef("parallax")
  const cursorTextRef = useRef("cursorText")

  return (
    <Layout>
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Link to="/menu" style={{}}>
          <Hero heroButtonClicked={heroButtonClicked}>
            <CursorText ref={cursorTextRef}>Click to enter</CursorText>
            <HeroImage
              onClick={() => {
                setHeroButtonClicked(!heroButtonClicked)
              }}
              parallax
              src={HeroBackgroundFront}
            />
            <HeroImage
              transform="scale(1.1)"
              ref={parallaxRef}
              src={HeroBackgroundBack}
            />
            <Particles />
          </Hero>
        </Link>
      </div>
    </Layout>
  )
}

Landing.propTypes = {
  heroButtonClicked: PropTypes.bool,
}
Landing.defaultProps = {
  heroButtonClicked: false,
}

export default Landing
