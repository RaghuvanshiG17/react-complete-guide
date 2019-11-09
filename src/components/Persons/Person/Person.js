import React, { Component, Fragment } from 'react'; 
import classes from  './person.css';
import Auxx from '../../../hoc/Auxx';
import widthClass from '../../../hoc/withClass';

class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount(){
        // this.inputElement.focus();
    }
    render(){
        return (
            <Auxx>
             <div className={classes.person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} year old</p>
                <p>{this.props.children}</p>
                <input 
                // ref={ (inputEl)=>{this.inputElement = inputEl} }
                ref={this.inputElementRef}
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name}/>
             </div>
            </Auxx>
        );
    }
};

export default widthClass(Person, classes.Person);