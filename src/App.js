import './App.css';
import './Card.css';
import './Select.css';
import React, { Component } from 'react';
import Select from './Select';




class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <div className="navbar-brand mb-0 h1">
              <span className="firs-word">BICE </span>
              <span className="second-word">VIDA</span>
            </div>
          </div>
        </nav>
        <div className="container">
          <br/>
          <Select />
          <br/>
          <div id="insurances"></div>
        </div>
      </div>
    )
  }
}

export default App;
