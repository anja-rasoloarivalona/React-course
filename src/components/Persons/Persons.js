import React, { Component } from 'react';

import Person from './Person/Person';
 
// Map simply maps every element in a given array such as our persons array here INTO ANOTHER ARRAY WITH JSX objects inside

//Props will contain an array of persons which we want to transform into an array of JSX elements

//We got our persons which we expect to receive on our props and then we still map persons into an array of JSX elements

class Persons extends Component {
    //static getDerivedStateFromProps(props, state) {
    //console.log('[Person.js] getDerivedStateFromProps' )
    //return state;
    //}
      //  componentWillReceiveProps(props) {
        //    console.log('[Persons.js] componentWillReceiveProps', props);
        //}
    

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shoudComponentUpdate');
        if(
            nextProps.persons !== this.props.persons || 
            nextProps.changed !== this.props.changed || 
            nextProps.clicked !== this.props.clicked ) {
            return true;
          } else {
            return false;
          }

          //return true;
    }



    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Person.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Person.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount')
    }
     
    render() {
        console.log('[Person.js] rendering...');
        return this.props.persons.map((person, index) => {   
            return ( 
            <Person 
                tucliques = {() => this.props.clicked(index)} //use the arrow function so we can pass the index like this
                name={person.name} 
                age={person.age} 
                key = {person.id}
                changed = {(event) => this.props.changed(event, person.id)}/>
            );    
        });
    }
}


    

export default Persons;




