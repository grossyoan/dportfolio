import React from 'react';
import './App.css';
import LandingCardWrapper from "./components/layouts/LandingCardWrapper"
import ImageCardWrapper from "./components/components/ImageCardWrapper"
import ImageCard from "./components/components/ImageCard"
import ImageText from "./components/components/ImageText"
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider, styled} from 'baseui';
import LandingImage3D from "assets/img/landing/landingImage3D.jpg";
import LandingImageTradi from "assets/img/landing/landingImageTradi.jpg";
import LandingImageChara from "assets/img/landing/landingImageChara.jpg";
import LandingImageIllu from "assets/img/landing/landingImageIllu.jpg";

const engine = new Styletron();


function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <LandingCardWrapper>
          <ImageCardWrapper gridArea="1 / 17 / 33 / 33">
           <ImageCard  src={LandingImage3D} animationDelay="1s" />
           <ImageText font="font900">3D</ImageText>
          </ImageCardWrapper>
          <ImageCardWrapper gridArea="1 / 1 / 17 / 17">
           <ImageCard  src={LandingImageTradi} heightAnimation animationDelay=".8s"/>
           <ImageText font="font800">Old school</ImageText>
          </ImageCardWrapper>
          <ImageCardWrapper gridArea="17 / 9 / 33 / 17">
           <ImageCard  src={LandingImageIllu} animationDelay=".6s"/>
           <ImageText font="font600">Illustration</ImageText>
          </ImageCardWrapper>
          <ImageCardWrapper gridArea="17 / 1 / 25 / 9">
           <ImageCard src={LandingImageChara} heightAnimation animationDelay=".4s"/>
           <ImageText font="font600">Chara Design</ImageText>
          </ImageCardWrapper>
          <ImageCardWrapper gridArea="25 / 5 / 33 / 9">
           <ImageCard  animationDelay=".2s"/>
           <ImageText font="font600">Resume</ImageText>
          </ImageCardWrapper>
          <ImageCardWrapper gridArea="25 / 1  / 33 / 5">
           <ImageCard  animationDelay="0s"/>
           <ImageText font="font600">About</ImageText>
          </ImageCardWrapper>
        </LandingCardWrapper>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
