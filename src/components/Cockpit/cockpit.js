import React from 'react';
import classes from './cockpit.css';
const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    
    if(props.showPerson){
        btnClass = classes.red;
    }
    if(props.persons.length <= 2 ){
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if(props.persons.length<=1){
      assignedClasses.push(classes.bold); // classes = ['bold]
    }
    return (
        <div>
        <p>Hi, I am a react App</p>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button 
       className={btnClass}
       onClick={props.clicked}>Toggle Person</button>
        </div>
    );
}

export default cockpit;