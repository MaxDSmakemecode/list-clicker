import React, {Component} from 'react'
import Header from './components/Header'
import MemeGenerator from './components/MemeGenerator'

class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Header />
        <MemeGenerator />
      </React.Fragment>
    )
  }
}

export default App