import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Hobby from './Person/Hobby';

class App extends Component {
  render() {
    return (
      <div className = "APP">
        <Person name = "JZ" age = "28"/>
        <Person name = "ZK" age = "29">
          <Hobby hobby = "dancing" />
        </Person>
        <Person name = "PP" age = "26"/>
      </div>
    );
  }
}

export default App;
