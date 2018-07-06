import React, { Component } from 'react';

import Basic1 from "./components/basic1";
import Basic2 from "./components/basic2";


class App extends Component {
  render() {
    return (
      <div className="App container">
        <h1>D3.js Examples</h1>
        <Basic1 />
        <Basic2 />
      </div>
    );
  }
}

export default App;
