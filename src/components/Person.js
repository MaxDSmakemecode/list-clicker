import React from 'react'

function Person(props){
    return(
        <React.Fragment>
            <li>{props.name}</li>
        </React.Fragment>
    )
}

export default Person