import React from 'react'

class Person extends React.Component {
    render(){
        return(
            <React.Fragment>
                <ul>
                    <li>{this.props.name}</li>
                </ul>
            </React.Fragment>
        )
    }
}

export default Person