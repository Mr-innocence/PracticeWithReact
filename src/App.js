import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Hobby from './Person/Hobby';

class App extends Component {
state = {
  persons: [
    {name: 'Jz', age : 25},
    {name: 'ZK', age : 26},
    {name: 'PP', age : 27},
  ]
}

switchHandler = (newName) =>{
  this.setState({
    persons: [
      {name: newName, age : 25},
      {name: 'ZK', age : 26},
      {name: 'PP', age : 30},
    ]

  })

}

changeHandler = (event) => {
  this.setState({
    persons: [
      {name: event.target.value, age : 25},
      {name: 'ZK', age : 26},
      {name: 'PP', age : 30},
    ]

  })

}



  render() {
    const style = {
      backgroundColor: 'White',
      font: 'inherit',
      margin: 'auto',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'        
    }
    return (

      <div className = "APP">
        <button 
        style = {style}
        onClick ={() => this.switchHandler('marshmallow')}>Switch Info</button>
        <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age}
          change = {this.changeHandler} />
        <Person 
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age}>
          <Hobby hobby = "dancing" />
        </Person>
        <Person 
          name = {this.state.persons[2].name} 
          age = {this.state.persons[2].age}
          click = {this.switchHandler}/>
      </div>
    );
  }
}

export default App;
