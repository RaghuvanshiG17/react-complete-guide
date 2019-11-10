import React, { Component, Fragment } from 'react';
import classes from './person.css';
import Auxx from '../../../hoc/Auxx';
import widthClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';
class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    static contextType = AuthContext;
    componentDidMount() {
        // this.inputElement.focus();
        console.log(this.context.authenticated);
    }
    render() {
        return (
            <Auxx>
                {this.context.authenticated ?
                    (<p>Authenticated</p>) :
                    (<p>Please Login</p>)
                }
                <div className={classes.person}>
                    <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} year old</p>
                    <p>{this.props.children}</p>
                    <input
                        // ref={ (inputEl)=>{this.inputElement = inputEl} }
                        ref={this.inputElementRef}
                        type="text"
                        onChange={this.props.changed}
                        value={this.props.name} />
                </div>
            </Auxx>
        );
    }
};

export default widthClass(Person, classes.Person);