import React, { Component } from 'react';
import classes from './App.css'; //import whatever the name
import Person from './Person/Person';

class App extends Component {        // ----- Established  way of creating component with class
    /* ----- Established  way of creating component with class */

  state = {  // state is a reserved key word for managing component
    persons: [
    { id:'top' , name: 'Max', age: 28 },
    { id:'ten' , name: 'Strix', age: 18 },
    { id:'tip' , name: 'Manou', age: 22 },
  ],

  othertState: 'some other value',
  showPersons: false,
};

  
    //OR <button onClick={ () => {this.switchNameHandler()}}> wrapped in brackets for multiple line
    // <button onClick={ () => this.switchNameHandler()}> FOR ONE LINE :
    // what it means : return this.switchNameHandler()
    
    nameChangeHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id; //if that is equal to the ID I received as an argument to this function
      });

      const person = {
        ...this.state.persons[personIndex]
      };
      //const person = Object.assign({}, this.state.persons[personIndex]);

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState( { persons: persons} )
    }
  
    deletePersonHandler = (personIndex) => {
      //const persons = this.state.persons.slice(); we want to create a copy of the original array instead of changing the origninal data
      const persons =  [...this.state.persons]; // NOW WE HAVE A NEW ARRAY
      persons.splice(personIndex, 1); //This removes one element from the array
      this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
    }


    render() {
      const btnStyle = {
          backgroundColor : 'green',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          color: 'white',
          borderRadius: '3px',
          cursor: 'pointer'
      };

      let persons = null;

      if (this.state.showPersons) { // this.state.Persons === true
        persons = (   // persons is a variable
                      // Map simply maps every element in a given array such as our persons array here INTO ANOTHER ARRAY WITH JSX objects inside
          
          
          <div> 
            {this.state.persons.map((person, index) => {
              return <Person 
                tucliques = {() => this.deletePersonHandler(index)} //use the arrow function so we can pass the index like this
                name={person.name} 
                age={person.age} 
                key = {person.id} 
                changed = {(event) => this.nameChangeHandler(event, person.id)} />
            })} 

          </div>
        );

            btnStyle.backgroundColor = 'red';
      }

      const assignedClasses = [];       // ['red', 'bold'].join(' '); // 'red bold' at the end
      if(this.state.persons.length <= 2) {
        assignedClasses.push(classes.red);
      }
      if(this.state.persons.length <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red', 'bold']
      }

      return (

        <div className={classes.App}>
          <h1>I'm a React App</h1>
          <p className={assignedClasses.join(' ')}>This is really working</p>
          <button 
              style = {btnStyle}
              onClick={this.togglePersonsHandler}>Toggle Persons
            </button> 
            {persons}
        </div>

      );
   };

     // Note 1 : Dont'add () on switchNameHandler : we don't want it to be executed immediately;

     // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'This is awesome'));

     //Note 2 : <button  onClick={ () => this.switchNameHandler('Strix')}>Switch Name</button> 
  };

//};

 export default App;

 //   export default app;


   




/*




const app = props => { //This is a normal functional component




  const [personsState, setPeronsState] = useState( {  // state is a reserved key word for managing component
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Strix', age: 18 },
        { name: 'Manou', age: 22 },
      ]
    });
  
    const [othertState, setOtherState] = useState({othertState: 'some other value'});
  
    console.log(personsState, othertState);
  
  
       const switchNameHandler = () => {
        setPeronsState( {
          persons: [
            { name: 'Strix', age: 23 },
            { name: 'Drag', age: 8 },
            { name: 'Boule', age: 23 }
          ]
  
        } );
    };
  
   // render() {
       return (
        <div className="App">
          <h1>I'm a React App</h1>
          <button onClick={switchNameHandler}>Switch Name</button> 
          <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
          <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My hobbies : basketball, programming </Person>
          <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
        </div> 
       );


*/

/*

    switchNameHandler = (newName) => {
    //alert('Was cliked!');
    // DON T DO THIS : this.state.persons[0].name = 'Dragsteal';
    this.setState( {
      persons: [
        { name: newName, age: 23 },
        { name: 'Drag', age: 8 },
        { name: 'Boule', age: 23 },
      ]
    } )
    }

                <Person 
                  name={this.state.persons[0].name} 
                  age={this.state.persons[0].age} 
                  tucliques={this.switchNameHandler.bind(this,'Strix!')}>My hobbies : basketball, programming </Person>
                <Person 
                  name={this.state.persons[1].name} 
                  age={this.state.persons[1].age} 
                  changed={this.nameChangeHandler}/> 
                <Person 
                  name={this.state.persons[2].name} 
                  age={this.state.persons[2].age} />

*/