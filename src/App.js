import React, { Component } from "react";

const userInput = document.getElementById('name').value
document.querySelector('.text-field').addEventListener("click", function(){
  document.getElementById('output').textContent = userInput
})

class App extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      vegetarian: false,
      kosher: false,
      lactoseFree: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;

    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <form style={{ margin: 1 + "rem " + " auto", width: 50 + "%" }}>
        <input
          style={{ width: 300 }}
          type="text"
          name="firstName"
          value={this.state.firstName}
          placeholder="First name"
          onChange={this.handleChange}
        />
        <br />
        <br />
        <input
          style={{ width: 300 }}
          type="text"
          name="lastName"
          value={this.state.lastName}
          placeholder="Last name"
          onChange={this.handleChange}
        />
        <br />
        <br />
        <input
          style={{ width: 300 }}
          type="number"
          name="age"
          value={this.state.age}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={this.state.gender === "Male"}
            onChange={this.handleChange}
          />
          Male
        </label>
        <br />
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={this.state.gender === "Female"}
            onChange={this.handleChange}
          />
          Female
        </label>
        <br />
        <br />
        <label>
          <input 
            type="number"
            name="age"
            onChange={this.handleChange}
          />
        </label>
        <br />
        <br />
        <select name="destination" value={this.state.value} onChange={this.handleChange} style={{ width: 300 }}>
          <option 
            defaultValue="Destination" 
          >
            Destination
          </option>
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
            value="Cancun"
          >
            Cancun
          </option>
        </select>
        <br />
        <br />
        Diet restrtictions: <br />
        <label>
          <input
            type="checkbox"
            name="vegetarian"
            value={this.state.vegetarian}
            checked={this.state.vegetarian}
            onChange={this.handleChange}
          /> vegetarian
        </label>
        <br/>
        <label>
          <input
            type="checkbox"
            name="kosher"
            value={this.state.kosher}
            checked={this.state.kosher}
            onChange={this.handleChange}
          /> kosher
        </label>
        <br/>
        <label>
          <input
            type="checkbox"
            name="lactoseFree"
            value={this.state.lactoseFree}
            checked={this.state.lactoseFree}
            onChange={this.handleChange}
          /> lactose free
        </label> 
        <br />
        <br />
        <textarea style={{ width: 300 }} />
        <br />
        <br />
        <p><span style={{fontWeight: "bold"}}>Your name: {this.state.firstName} {this.state.lastName}</span></p>
        <p><span style={{fontWeight: "bold"}}>Your age: {this.state.age}</span></p>
        <p><span style={{fontWeight: "bold"}}>Your gender: {this.state.gender}</span></p>
        <p><span style={{fontWeight: "bold"}}>Your flight destination: {this.state.destination}</span></p>
        <p><span style={{fontWeight: "bold"}}>Your dietary restrictions:  </span>
          <br />
          Vegetarian: {this.state.vegetarian ? "Yes" : "No"} <br/>
          Kosher: {this.state.kosher ? "Yes" : "No"}<br/>
          Lactose Free: {this.state.lactoseFree ? "Yes" : "No"}<br/>
        </p>
      </form>
    );
  }
}

export default App;