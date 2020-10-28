import React from 'react'

const flexBox = {
    display: 'flex',
    padding: '1rem'
}

const paragraphStyle = {
    paddingLeft: '1rem', 
    marginTop: '-0.05rem',
    color: '#f53653',
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
            <p style={paragraphStyle}>
                {props.item.text}
            </p>
        </div>
    )
}

export default TodoItem