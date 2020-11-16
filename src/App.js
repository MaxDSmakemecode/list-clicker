import React, {Component} from 'react'

class App extends Component{
    constructor(){
        super()
        this.state = {
            firstName: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    // on change function
    handleChange(event){
        const firstNameName =

        this.setState({
            firstName: event.target.value
        })
    }

    render(){

        return(
            <form action="">
                <input name={this.firstNameName} type="text" placeholder="First Name" onChange={this.handleChange} />
                <br/>
                <input name={this.lastNameName} type="text" placeholder="Last Name" onChange={this.handleChange} />
                <h1>{this.state.firstName}</h1>
            </form>
        )
    }
}

export default App