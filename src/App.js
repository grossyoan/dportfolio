import React from 'react';
import './App.css';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider, styled} from 'baseui';
import { Router, Link } from "@reach/router";
import Landing from "./components/pages/Landing"

const engine = new Styletron();

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Router>
          <Landing path="/"/>
        </Router>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
