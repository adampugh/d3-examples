import React, { Component } from 'react';

import Basic1 from "./components/basic1";
import Basic2 from "./components/basic2";
import Basic3 from "./components/basic3";
import Basic4 from "./components/basic4";
import Basic5 from "./components/basic5";
import Basic6 from "./components/basic6";
import Basic7 from "./components/basic7";
import Basic8 from "./components/basic8";
import NewFeature from "./components/newFeature";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <h1>D3.js Examples</h1>
        <Basic1 />
        <Basic2 />
        <Basic3 />
        <Basic4 />
        <Basic5 />
        <Basic6 />
        <Basic7 />
        <Basic8 />
        <NewFeature />
      </div>
    );
  }
}

export default App;
