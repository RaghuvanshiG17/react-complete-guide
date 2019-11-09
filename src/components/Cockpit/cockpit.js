import React , {useEffect, useRef} from 'react';
import classes from './cockpit.css';

const cockpit = (props) => {
    const togglebtnRef = useRef(null);
    
    useEffect( ()=>{
      console.log("this is useEffect hooks");
      // setTimeout(()=>{
      //     alert("Saved data to cloud!");
      // },1000);
      togglebtnRef.current.click();
      return () =>{
      // clearTimeout(timer);
      console.log("cleanup work is useEffect");
      }
    },[]);

    useEffect(()=>{
      console.log("2nd useEffect");
      return () => {
        console.log("cleanup work in 2nd useEffect");
      }
    });
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
    <p>{props.title}</p>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button 
      ref={togglebtnRef}
       className={btnClass}
       onClick={props.clicked}>Toggle Person</button>
        </div>
    );
}

export default React.memo(cockpit);