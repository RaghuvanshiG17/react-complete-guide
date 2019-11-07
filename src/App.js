import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person'


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
    const buttonStyle = {
      backgroundColor:'green',
      color:'whith',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
     
    }

    let Persons = null;

    if(this.state.showPerson){
      Persons = (
        <div>
          { this.state.person.map((per, index) =>{
            return <Person
            click={() => this.deletePersonHadler(index)}
            name={per.name}
            age={per.age} 
            key={per.id}
            changed={(event) => this.nameChangeHandler(event,per.id)}/>
          })}
          </div>
      );
      buttonStyle.backgroundColor='red';
     
    }

    const assignedClasses = [];
    if(this.state.person.length <= 2 ){
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if(this.state.person.length<=1){
      assignedClasses.push(classes.bold); // classes = ['bold]
    }
    return (
    
      <div className={classes.App}>
      <p>Hi, I am a react App</p>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button 
        style={buttonStyle}
       onClick={this.togglePersonHandler}>Toggle Person</button>
       {Persons}
      </div>
    );
  }
}

export default App;
