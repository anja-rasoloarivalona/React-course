import React from 'react';


import './Person.css'; //here we need the css extension. It can be ommited only for JavaScript file

const person = (props) => {
  
    return (
    <div className="Person">
        <p onClick={props.tucliques}>I'm {props.name} and I'm {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange= {props.changed} value= {props.name} /> 
    </div>   
    )
}

//input : we have our own two bunding set up : 
    // props.changed : we listen to changes, call the change method in the end which refers to the nameChangeHandler
    //props.value : we output the name as the value of the input

// onChange will be fired whenever the value in this input changes

export default person;