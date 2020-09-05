import React, {Component} from 'react';
import './App.css';
import Person from './components/Person'
import persons from './client_data/persons'

class App extends Component {
  constructor(){
    super()
    this.state = {
      personObject: persons
    }
  }

  render(){
    const personMap = this.state.personObject.map(item => <Person key={item.id} name={item.name} age={item.age} description={item.description} />)

    return (
      <React.Fragment>
        {personMap}
      </React.Fragment>
    );
  }
}

export default App;
