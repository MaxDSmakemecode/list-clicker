import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      gender: "",
      age: 0,
      destination: "",
      vegetarian: "",
      kosher: "",
      lactoseFree: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked} = event.target;

    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
  }

  render() {
    const wrapper = {
      width: 200,
      margin: 2 + "rem" + " auto",
    };

    const inputStyle = {
      minWidth: 200,
      padding: 0.5 + "rem",
    };

    const selectStyle = {
      minWidth: 13.8 + "rem",
      padding: 0.5 + "rem",
    };

    return (
      <div style={wrapper}>
        <form>
          <input
            style={inputStyle}
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="First name"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input
            style={inputStyle}
            type="text"
            name="lastName"
            value={this.state.lastName}
            placeholder="Last name"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={this.state.gender === "Female"}
              onChange={this.handleChange}
            />{" "}
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={this.state.gender === "Male"}
              onChange={this.handleChange}
            />{" "}
            Male
          </label>
          <br />
          <br />
          <label>
            <input
              style={inputStyle}
              type="number"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <br />
          <select 
            style={selectStyle}
            name="destination" 
            value={this.state.destination}
            onChange={this.handleChange}
          >
            <option 
              value="Tokyo"
            >
              Tokyo
            </option>
            <option 
              value="Berlin"
            >
              Berlin
            </option>
            <option 
              name="destination" 
              value="Cancun"
            >
              Cancun
            </option>
          </select>
          <br />
          <br />
          <label>
            <input
                type="checkbox"
                name="vegetarian"
                checked={this.state.dietryRestrictions === "vegetarian"}
                onChange={this.handleChange}
              /> vegetarian
          </label>
          <br />
          <label>
            <input
                type="checkbox"
                name="kosher"
                checked={this.state.dietryRestrictions === "kosher"}
                onChange={this.handleChange}
              /> kosher
          </label>
          <br />
          <label>
            <input
                type="checkbox"
                name="lactoseFree"
                checked={this.state.dietryRestrictions === "lactoseFree"}
                onChange={this.handleChange}
              /> lactose free
          </label>
          <br />
          <br />
          <p>
            Your name: {this.state.firstName} {this.state.lastName}
          </p>
          <p>Your gender: {this.state.gender}</p>
          <p>Your age: {this.state.age}</p>
          <p>Your destination: {this.state.destination}</p>
          <p>Your preferred meal: {this.state.dietryRestrictions}</p>
        </form>
      </div>
    );
  }
}

export default App;
