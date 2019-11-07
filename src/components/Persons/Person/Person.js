import React from 'react'; 
import classes from  './person.css'


const person = (props) => {
    const  rnd = Math.random();
    if(rnd > 0.7){
        throw new Error('somthing went wrong');
    }
    return (
        <div className={classes.person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} year old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>

    )
    
};

export default person;