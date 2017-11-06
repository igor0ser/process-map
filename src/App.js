import React, { Component } from 'react';
import ProcessMap from './ProcessMap/ProcessMap';
import data from './data.json';
import logo from './logo.svg';
import transformItems from './ProcessMap/utils/transformItems';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ProcessMap items={transformItems(data.items)} />
      </div>
    );
  }
}

export default App;
