import React, {Component} from 'react'
import Conditional from './components/Conditional'

class App extends Component{
  constructor(){
    super()
    this.state = {
      isLoading: true
    }
  }

  // imagine a loading icon appearing when the website is making an API call and it takes longer. That would be a case to use conditional rendering
  // in this case we don't have any API so below code just simulates a loading time with classic setTimeout
  // once loading has finished after 1.5 seconds the
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500)
  }

  render(){
    return(
      <div>
        {this.state.isLoading ?
        <h1>Loading...</h1> :
        <Conditional />}
      </div>
    )
  }
}

export default App