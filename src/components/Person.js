import React from 'react'

class Person extends React.Component{
    render(){
        return(
            <React.Fragment>
                <li>{this.props.name}</li>
            </React.Fragment>
        )
    }
}

export default Person