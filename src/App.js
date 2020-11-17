import React, {Component} from 'react'

class App extends Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target

        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <form action="">
                <input 
                    name="firstName"
                    type="text" 
                    placeholder="First Name"
                    value={this.state.firstName} 
                    onChange={this.handleChange} 
                />
                <input 
                    name="lastName"
                    type="text" 
                    placeholder="Last Name" 
                    value={this.state.lastName} 
                    onChange={this.handleChange} 
                />
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
        )
    }
}

export default App