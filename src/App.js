import React, {Component} from 'react'
import Header from './components/Header'
import MemeGenerator from './components/MemeGenerator.js'

function App(){
  return(
    <React.Fragment>
      <Header />
      <br/>
      <MemeGenerator />
    </React.Fragment>
  )
}

export default App