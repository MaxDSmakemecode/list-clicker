/*
Let's make it so our checkbox can actually mark our todo as complete or imcomplete!
This challenge is a little more involved than some of our past ones. Check the comments in the code for some help on accomplishing this one.

Challenge:
1. Create an event handler in the App component for when the checkbox is clicked (which is an 'onChange' event) 
a. This method will be the trickiest part. Check the comments in the stubbed-out method below for some pseudocode to help guide you through this part
2. Pass the method down to the TodoItem component
3. In the TodoItem component, make it so when the onChange event happens, it calls the 'handleChange' and passes the id of the todo into the function
*/

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
    // update state so that the item with the given id flips 'completed' from false to true (or vise versa)
    // remember not to modify prevState directly, but instead to return a new version of state with the change you want included in that update. (Think how you might use the '.map' method to do this)

    // prevState argument will be needed to keep the old state and not modifying it
    this.setState(prevState => {
      // iterate through the items and create new one with map
      const updatedTodos = prevState.todos.map(todo => {
        // check if current id from the todo list file matches the id parameter received by the handleChange function
        if(todo.id === id){
            todo.completed = !todo.completed
        }
        // includes the new todo item to the "updatedTodos" 
        return todo
      })
      // the todos object (old list) gets updated by the new list
      return{
        todos: updatedTodos
      }
    })
  }

  render(){
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
    return(
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }
}

export default App