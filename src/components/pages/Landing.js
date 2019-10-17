import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Block } from "baseui/block";
import { Link } from "@reach/router";
import Hero from "components/layouts/Hero";
import HeroImage from "components/components/Hero/HeroImage";
import HeroBackgroundFront from "assets/img/hero/Background_Character.png";
import HeroBackgroundBack from "assets/img/hero/Background_Back.png";
import Particles from "components/components/Hero/Particles";
import CursorText from "components/components/Hero/CursorText";

const Landing = () => {
  const [heroButtonClicked, setHeroButtonClicked] = useState(false);
  const parallaxRef = useRef("parallax");
  const cursorTextRef = useRef("cursorText");
  return (
    <Block
      overrides={{
        Block: {
          style: {
            width: "100%",
            height: "100%"
          }
        }
      }}
    >
      <Link to="/category" style={{}}>
        <Hero heroButtonClicked={heroButtonClicked}>
          <CursorText ref={cursorTextRef}>Click to enter</CursorText>
          <HeroImage
            onClick={() => {
              setHeroButtonClicked(!heroButtonClicked);
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
    </Block>
  );
};

Landing.propTypes = {
  heroButtonClicked: PropTypes.bool
};
Landing.defaultProps = {
  heroButtonClicked: false
};

export default Landing;
