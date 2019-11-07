import React, { Component } from 'react';
import classes from './App.css';
import Personss from '../components/Persons/persons';
import ErrorBoundary from '../EooroBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/cockpit'
class App extends Component {

  state={
    person : [
      {id:1,name:'MAX', age:28},
      {id:2,name:'MANU',age:29},
      {id:3,name:'stephanie',age:26}
    ]
  }

  nameChangeHandler = (event,id) => {
    const personIndex = this.state.person.findIndex(p=>{
        p.id === id;
    });
    
    const person = {...this.state.person[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.person];
    persons[personIndex] = person;
    this.setState({persons:persons});
    
    this.setState({
      person : [
        {id:1 , name:'Maximilian', age:28},
        {id:2 , name: event.target.value,age:29},
        {id:3 , name:'stephanie',age:30}
      ]
    })
  }

  deletePersonHadler= (personIndex) =>{
    const personInd =  this.state.person;
    personInd.splice(personIndex,1);
    this.setState({personInd:personInd});
  }

  togglePersonHandler  = () => {
      const doesShows = this.state.showPerson;
      this.setState({showPerson:!doesShows});
  }
  render() {
  

    let Persons = null;

    if(this.state.showPerson){
      Persons = 
        <Personss 
          person={this.state.person}
          clicked={this.deletePersonHadler}
          changed={this.nameChangeHandler}/>;
     }

    
    return (
    
      <div className={classes.App}>
        <Cockpit 
        showPerson={this.state.showPerson}
        persons={this.state.person}
        clicked={this.togglePersonHandler}/>
       {Persons}
      </div>
    );
  }
}

export default App;
