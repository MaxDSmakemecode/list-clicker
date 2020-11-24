import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      isSelected: true,
      isChecked: false,
      diet: "",
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
            onChange={this.handleChange}
          />
          Female
        </label>
        <br />
        <br />
        <select name="places" style={{ width: 300 }}>
          <option name="destination" value="Tokyo" onChange={this.handleChange}>
            Tokyo
          </option>
          <option
            name="destination"
            value="Berlin"
            onChange={this.handleChange}
          >
            Berlin
          </option>
          <option
            name="destination"
            value="Cancun"
            onChange={this.handleChange}
          >
            Cancun
          </option>
        </select>
        <br />
        <br />
        <label>
          Diet restrtictions: <br />
          <input
            type="checkbox"
            name="isChecked"
            checked={this.state.isChecked}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <br />
        <textarea style={{ width: 300 }} />
        <h1>First name: {this.state.firstName}</h1>
        <h1>Last name: {this.state.lastName}</h1>
        <h3>Age: {this.state.age}</h3>
        <h3>Gender: {this.state.gender}</h3>
        <h3>Destination: {this.state.destination}</h3>
        <h3>Diet restrictions: {this.state.diet}</h3>
      </form>
    );
  }
}

export default App;

// class App extends Component {
//     constructor(){
//         super()

//         this.state = {
//             firstName: "",
//             lastName: "",
//             age: "",
//             gender: "",
//             travelLocation: "",
//             isChecked: false,
//             vegetarian: "",
//             kosher: "",
//             lactoseFree: "",
//         }

//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange(event){
//         const {name, value, type, checked} = event.target

//         // last session has ended here: try to figure out the condition so the checkboxes work as expected
//         type === "checkbox" ? this.setState({ [checked]: true }) : this.setState({ [name]: value })
//     }

//     render(){
//         return(
//             <main>
//                 <form>
//                     <input
//                         type="text"
//                         name="firstName"
//                         value={this.state.firstName}
//                         placeholder="First Name"
//                         onChange={this.handleChange}
//                     />
//                     <br />
//                     <br />
//                     <input
//                         type="text"
//                         name="lastName"
//                         value={this.state.lastName}
//                         placeholder="Last Name"
//                         onChange={this.handleChange}
//                     />
//                     <br />
//                     <br />
//                     <input
//                         type="number"
//                         name="age"
//                         value={this.state.age}
//                         placeholder="Age"
//                         onChange={this.handleChange}
//                     />
//                     <br />
//                     <br />
//                     <label>
//                         <input
//                             type="radio"
//                             name="gender"
//                             value="male"
//                             checked={this.state.gender === "male"}
//                             onChange={this.handleChange}
//                         /> Male
//                     </label>
//                     <br />
//                     <br />
//                     <label>
//                         <input
//                             type="radio"
//                             name="gender"
//                             value="female"
//                             checked={this.state.gender === "female"}
//                             onChange={this.handleChange}
//                         /> Female
//                     </label>
//                     <br />
//                     <br />
//                     <select name="travelLocation">
//                         <option value="belize">Belize Airport</option>
//                         <option value="tokyo">Narita International Airport</option>
//                         <option value="india">Bangalore Airport</option>
//                     </select>
//                     <br />
//                     <br />
//                     <label>
//                         <input
//                             name="diet"
//                             type="checkbox"
//                             value="vegetarian"
//                             checked={this.state.diet === "vegetarian"}
//                             onChange={this.handleChange}
//                         /> Vegetarian
//                     </label>
//                     <label>
//                         <input
//                             name="diet"
//                             type="checkbox"
//                             value="kosher"
//                             checked={this.state.diet === "kosher"}
//                             onChange={this.handleChange}
//                         /> Kosher
//                     </label>
//                     <label>
//                         <input
//                             name="diet"
//                             type="checkbox"
//                             value="lactoseFree"
//                             checked={this.state.diet === "lactoseFree"}
//                             onChange={this.handleChange}
//                         /> Lactose free
//                     </label>
//                     <h1>{this.state.firstName} {this.state.lastName}</h1>
//                     <h3>You are {this.state.age} years old.</h3>
//                     <h4>You are a {this.state.gender}</h4>
//                     <h4>Your current destination is {this.state.airport.value}</h4>
//                 </form>
//             </main>
//         )
//     }
// }
