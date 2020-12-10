import React, {Component} from 'react'
import TodoItem from './components/TodoItem'

class App extends Component{
  constructor(){
    super()

    this.state = {
      // isChecked: false,
    }
  }

  render(){
    return(
      <div className="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    )
  }
}

export default App