import React, { useEffect } from 'react';

import classes from './Cockpit.css'

const cockpit = props => { //cockpit constant which is just an arrow function where we simply return JSX 
  
  useEffect(()=>{
    console.log('[Cockpit.js] useEffect');
    //HTTP request
    setTimeout(() => {
        alert ('Saved data to cloud!');
      }, 1000);
      return () => {
        console.log('[Cockpit.js] cleanup work in uesEffect')
      }

  }, []);  //will run only the first time   //[props.persons]); wil run only if we change persons

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  });

  //useEffect more than once allowed
  const assignedClasses = [];    // ['red', 'bold'].join(' '); // 'red bold' at the end
  let btnClass ='';

    if(props.showPersons) {
      btnClass = classes.Red;
    }
    
    if(props.personsLength <= 2) {
        assignedClasses.push(classes.red);
      }
    if(props.personsLength <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red', 'bold']
      }
    
    //We scoped the Cokcpit class into our component
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button 
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
        </div>
    );
}; 

export default React.memo(cockpit);