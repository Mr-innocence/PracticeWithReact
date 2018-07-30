import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Hobby from './Person/Hobby';

class App extends Component {
state = {
  persons: [
    {id: '123', name: 'Jz', age : 25},
    {id: '456', name: 'ZK', age : 26},
    {id: '789', name: 'PP', age : 27},
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
  const persons = this.state.persons.slice();
  persons.splice(index,1);
  this.setState({
    persons : persons
  })
}

nameChangeHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  }); 
  const person = [...this.state.persons[personIndex]];
  person.name = event.target.value;
  const persons = [...this.state.persons];
  persons[personIndex] = person;
  this.setState({
    persons: persons
  })
}

// nameChangeHandler = (event, index) => {
//   const person = [...this.state.persons[index]];
//   person.name = event.target.value;
//   const persons = [...this.state.persons];
//   persons[index] = person;
//   this.setState({
//     persons: persons
//   })
// }


  render() {
    const style = {
      backgroundColor: 'White',
      font: 'inherit',
      margin: 'auto',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'        
    }


    console.log(this.state.persons);



  let testPersons = null;
  if(this.state.showUser){
    testPersons =
      <div>
        {this.state.persons.map((person, index) => {
          return <Person 
            click = {() => this.deleteHandler(index)}
            name = {person.name}
            age = {person.age}
            id = {person.id}
            change = {(event) => this.nameChangeHandler(event, person.id)}
            // change = {(event) => this.nameChangeHandler(event, index)}

            />
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
