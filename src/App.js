import React, {Component} from 'react'

class App extends Component {
    constructor(){
        super()

        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            isChecked: false,
            vegetarian: "",
            kosher: "",
            lactoseFree: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value, type, checked} = event.target

        // last session has ended here: try to figure out the condition so the checkboxes work as expected
        type === "checkbox" ? this.setState({ [checked]: true }) : this.setState({ [name]: value })
    }

    render(){
        return(
            <main>
                <form>
                    <input
                        type="text"  
                        name="firstName"
                        value={this.state.firstName}
                        placeholder="First Name"
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <input 
                        type="text" 
                        name="lastName"
                        value={this.state.lastName}
                        placeholder="Last Name"
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <input 
                        type="number"
                        name="age"
                        value={this.state.age}
                        placeholder="Age"
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <label>
                        <input 
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        /> Male
                    </label>
                    <br />
                    <br />
                    <label>
                        <input 
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        /> Female
                    </label>
                    <br />
                    <br />
                    <select name="travelLocation">
                        <option value="belize">Belize Airport</option>
                        <option value="tokyo">Narita International Airport</option>
                        <option value="india">Bangalore Airport</option>
                    </select>
                    <br />
                    <br />
                    <label>
                        <input 
                            name="vegetarian"
                            type="checkbox"
                            checked={this.state.isChecked}
                            onChange={this.handleChange}
                        /> Vegetarian
                    </label>
                    <label>
                        <input 
                            name="kosher"
                            type="checkbox"
                            checked={this.state.isChecked}
                            onChange={this.handleChange}
                        /> Kosher
                    </label>
                    <label>
                        <input 
                            name="lactoseFree"
                            type="checkbox"
                            checked={this.state.isChecked}
                            onChange={this.handleChange}
                        /> Lactose free
                    </label>
                    <h1>{this.state.firstName} {this.state.lastName}</h1>
                    <h3>You are {this.state.age} years old.</h3>
                    <h4></h4>
                </form>
            </main>
        )
    }
}

export default App