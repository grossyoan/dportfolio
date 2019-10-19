import React from "react";
import "./App.css";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import { Router } from "@reach/router";
import Landing from "./components/pages/Landing";
import Menu from "./components/pages/Menu";
import Gallery from "./components/pages/Gallery";
import Project from "./components/pages/Project";

const engine = new Styletron();

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Router>
          <Landing path="/" />
          <Menu path="/menu" />
          <Gallery path="gallery/:galleryId" />
          <Project path="project/:projectId" />
        </Router>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
