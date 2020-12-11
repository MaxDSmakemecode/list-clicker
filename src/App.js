import React, {Component} from 'react'
import TodoItem from './components/TodoItem'
import todolistItems from './client_data/todolistItems'

class App extends Component{
  constructor(){
    super()

    this.state = {
      todos: todolistItems
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
      this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
          if(todo.id === id){
            todo.completed = !todo.completed
          }
          return todo
        })
        return {
          todos: updatedTodos
        }
      })
  }

  render(){
    const todosMap = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
    
    return(
      <div className="todo-list">
        {todosMap}
      </div>
    )
  }
}

export default App