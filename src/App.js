import React from "react";
import "./App.css";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import { Router } from "@reach/router";
import Landing from "./components/pages/Landing";
import Category from "./components/pages/Category";

const engine = new Styletron();

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Router>
          <Landing path="/" />
          <Category path="/category/:categoryId" />
        </Router>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
