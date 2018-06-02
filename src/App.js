import React, { Component } from 'react';

import './App.css';
import 'typeface-roboto'
import AppBar from './AppBar/AppBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <p className="App-intro">
            Página en construcción
        </p>
      </div>
    );
  }

}

export default App;
