import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
        <Aux>
                <p onClick={this.props.tucliques}>
                    I'm {this.props.name} and I'm {this.props.age} years old!
                </p>,
                <p key="i2">{this.props.children}</p>,
                <input 
                    key="i3"
                    type="text" 
                    onChange= {this.props.changed} 
                    value= {this.props.name} 
                /> 
        </Aux>)              
        ;
    }
}


//input : we have our own two bunding set up : 
    // props.changed : we listen to changes, call the change method in the end which refers to the nameChangeHandler
    //props.value : we output the name as the value of the input

// onChange will be fired whenever the value in this input changes

export default withClass(Person, classes.Person);