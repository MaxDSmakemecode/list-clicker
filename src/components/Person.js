import React from 'react'
import persons from '../client_data/persons'

class Person extends React.Component{
    render(){
        return(
            <React.Fragment>
                <li>{this.props.name}<br />
                    <small>
                        {this.props.age}<br />
                        {this.props.description}<br />
                        <br/>
                    </small>
                </li>
            </React.Fragment>
        )
    }
}

export default Person