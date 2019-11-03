import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
const myHook = props => {

    const [personstate, setPersonState] = useState({
        person : [
            {name:'MAX', age:28},
            {name:'MANU',age:29},
            {name:'stephanie',age:26}
          ],
          otherState: 'some other value'
    });

    constswitchNameHandler = () => {
        // console.log('This is switchNameHandler call....');
        setPersonState({
          person : [
            {name:'Maximilian', age:28},
            {name:'MANU',age:29},
            {name:'stephanie',age:27}
          ]
        })
      }

    return (
      <div className="App">
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personstate.person[0].name} age={this.state.person[0].age}/>
      <Person name={personstate.person[1].name} age={this.state.person[1].age}>My hobbies: Racing</Person>
      <Person name={personstate.person[2].name} age={this.state.person[2].age}/>
      </div>
    );  
}

export default myHook;
