import React from 'react'

const flexBox = {
    display: 'flex',
    padding: '1rem'
}

const uncompleteStyle = {
    paddingLeft: '1rem', 
    marginTop: '-0.05rem',
    color: '#f53653',
    textTransform: 'uppercase',
    fontWeight: 'bold'
}

const completedStyle = {
    paddingLeft: '1rem', 
    marginTop: '-0.05rem',
    color: '#19d477',
    textTransform: 'uppercase',
    fontWeight: 'bold'
}

const TodoItem = (props) => {
    return(
        <div style={flexBox} className="todo-item">
            <input 
                type="checkbox"
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={props.item.completed ? completedStyle : uncompleteStyle}>
                {props.item.text}
            </p>
        </div>
    )
}

export default TodoItem