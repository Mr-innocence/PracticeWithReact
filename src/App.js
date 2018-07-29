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
    ],
    showUser: false

  })

}

toggleHandler = () =>{
  const doesShow = this.state.showUser;
  this.setState({
    showUser: !doesShow   
  })

}

deleteHandler = (index) => {
  const persons = this.state.persons;
  persons.splice(index,1);
  this.setState({
    persons : persons
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



  let testPersons = null;
  if(this.state.showUser){
    testPersons =
      <div>
        {/* <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age} />
        <Person 
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age}>
          <Hobby hobby = "dancing" />
        </Person>
        <Person 
          name = {this.state.persons[2].name} 
          age = {this.state.persons[2].age}
          click = {this.switchHandler}/> */}
        {this.state.persons.map((person, index) => {
          return <Person 
            click = {() => this.deleteHandler(index)}
            name = {person.name}
            age = {person.age} />
        })}
      </div>
    
  }
    return (

      <div className = "APP">
        <button 
        style = {style}
        onClick ={this.toggleHandler}>Show User</button>
        {testPersons}
  
      </div>
    );
  }
}

export default App;
