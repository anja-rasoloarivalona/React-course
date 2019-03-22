import React, { PureComponent } from 'react';
import classes from './App.css'; //import whatever the name
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass' ;
import Aux from '../hoc/Auxiliary' ;


class App extends PureComponent { 
  
  
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
  
  state = {  // state is a reserved key word for managing component
    persons: [
    { id:'top' , name: 'Max', age: 28 },
    { id:'ten' , name: 'Strix', age: 18 },
    { id:'tip' , name: 'Manou', age: 22 },
  ],

  othertState: 'some other value',
  showPersons: false,
  showCockpit: true,
  changeCounter: 0
}

    static getDerivedStateFromProps(props, state) {
      console.log('[App.js] getDerivedStateFromProps', props);
      return state;
    }

    componentDidMount() {
      console.log('[App.js] componentDidMount');
    }

    PureComponent(nextProps, nextState) {
      console.log('[App.js] shouldComponentUdpate');
      if(nextProps.persons !== this.props.persons) {
        return true;
      } else {
        return false;
      }
     

    }

    componentDidUpdate() {
      console.log('[App.js] componentDidUpdate')
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
          return p.id === id; //if that is equal to the ID I received as an argument to this function
        });

        const person = { //const person = Object.assign({}, this.state.persons[personIndex]);
          ...this.state.persons[personIndex]
        };
        
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState( { 
          persons: persons, 
          changeCounter: this.state.changeCounter + 1 
        } )
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
      console.log('[App.js] render')
      let persons = null;
      
      if (this.state.showPersons) { // this.state.Persons === true  //// persons is a variable
        persons = <Persons //  we reach out our Persons component
              persons={this.state.persons} 
              clicked={this.deletePersonHandler}
              changed={this.nameChangeHandler} />
           //All we have here is our persons component which will render the list
        ;         
      }

      
      return (
        <Aux>
        <button onClick={() => {
            this.setState({ showCockpit: false });
        }}
        >
        Remove Cockpit
        </button>
            {this.state.showCockpit ? (
            <Cockpit
              title = {this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            />
            ) : null }    
            {persons}           
        </Aux>
      );
   };



     // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'This is awesome'));

     //Note 1 : <button  onClick={ () => this.switchNameHandler('Strix')}>Switch Name</button> 
  };

//};

 export default withClass(App, classes.App);

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