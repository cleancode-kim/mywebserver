import React, { Component } from 'react';
import TOC from './components/TOC';
import Bus from './components/Bus';
import './App.css';


class Subject extends Component {
  render() {
    return (
      <header>
        <h1> {this.props.title} </h1>
             {this.props.sub}
      </header>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Bus message="Msg Test"></Bus>

        <Subject title="Young" sub="Betttt"></Subject>

        <TOC></TOC>
        
        <h3> ~~ TESTING JONGSUB~ React 22 ~~ </h3>
      </div>
    );
  }
}

export default App;
