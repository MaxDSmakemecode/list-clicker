import React, { Component } from "react";

class App extends Component {
  constructor(){
    super()

    this.state = {
      firstName: "",
      lastName: "",
      gender: "",
      age: "",
      vegetarian: "",
      kosher: "",
      lactoseFree: "",
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const { name, value, type, checked} = event.target

    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  render(){
    const formWrapper = {
      width: 300,
      margin: 2 + "rem auto",
    }

    const inputWrapper = {
      width: 100 + "%",
      padding: 0.5 + "rem",
    }

    const selectWrapper = {
      width: 321,
      padding: 0.5 + "rem",
    }

    return(
      <form style={formWrapper}>
        <input style={inputWrapper}
          type="text"
          name="firstName"
          value={this.state.firstName}
          placeholder="First name"
          onChange={this.handleChange}
        />
        <br/>
        <br/>
        <input style={inputWrapper}
          type="text"
          name="lastName"
          value={this.state.lastName}
          placeholder="Last name"
          onChange={this.handleChange}
        />
        <br/>
        <br/>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={this.state.gender === "Male"}
            onChange={this.handleChange}
          /> Male
        </label>
        <br/>
        <br/>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={this.state.gender === "Female"}
            onChange={this.handleChange}
          /> Female
        </label>
        <br/>
        <br/>
        <input style={inputWrapper}
          type="number"
          name="age"
          value={this.state.age}
          placeholder="Age"
          onChange={this.handleChange}
        />
        <br/>
        <br/>
        <select style={selectWrapper}
          name="destination"
          value={this.state.destination}
          onChange={this.handleChange}
        >
          <option value="Tokyo">Tokyo</option>
          <option value="Berlin">Berlin</option>
          <option value="Cancun">Cancun</option>
        </select>
        <br/>
        <br/>
        <label>
          <input
            type="checkbox"
            name="vegetarian"
            checked={this.state.vegetarian}
            onChange={this.handleChange}
          /> vegetarian
        </label>
        <br/>
        <br/>
        <label>
          <input
            type="checkbox"
            name="kosher"
            checked={this.state.kosher}
            onChange={this.handleChange}
          /> kosher
        </label>
        <br/>
        <br/>
        <label>
          <input
            type="checkbox"
            name="lactoseFree"
            checked={this.state.lactoseFree}
            onChange={this.handleChange}
          /> lactose free
        </label>
        <p>Your name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your sex: {this.state.gender}</p>
        <p>Your age: {this.state.age}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>Your dietry restrictions:
          <br/>Vegetarian? {this.state.vegetarian ? "Yes" : "No"}
          <br/>Kosher? {this.state.kosher ? "Yes" : "No"}
          <br/>Lactose free? {this.state.lactoseFree ? "Yes" : "No"}
        </p>
      </form>
    )
  }
}

export default App;
