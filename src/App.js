// import React, { useState } from 'react'
// // import Header from './components/Header'
// // import MemeGenerator from './components/MemeGenerator'

// const App = () => {
//   const [inputs, setInputs] = useState({
//     firstName: "",
//     lastName: "",
//     gender: "",
//     age: "",
//     destination: "",
//     vegetarian: "",
//     kosher: "",
//     lactoseFree: "",
//   })

//   const handleChange = inputValues => ({target}) => setInputs(state => ({...state, [inputValues]:target.value}))

//   const handleCheck = inputValues => ({target}) => setInputs(state => ({...state, [inputValues]:target.checked}))

//   const wrapper = {
//       width: 300,
//       margin: 1 + "rem auto"
//   }

//   const inputStyle = {
//     width: 100 + "%",
//     padding: .5 + "rem",
//   }

//   return(
//     <div style={wrapper}>
//       <form
//       >
//         <input
//           style={inputStyle}
//           type="text"
//           key="firstName"
//           name="firstName"
//           value={inputs.firstName}
//           placeholder="First name"
//           onChange={handleChange("firstName")}
//         />
//         <br/><br/>
//         <input
//           style={inputStyle}
//           type="text"
//           key="lastName"
//           name="lastName"
//           value={inputs.lastName}
//           placeholder="Last name"
//           onChange={handleChange("lastName")}
//         />
//         <br/><br/>
//         <label>
//           <input
//             type="radio"
//             key="gender"
//             name="gender"
//             value="Male"
//             checked={inputs.gender === "Male"}
//             onChange={handleChange("gender")}
//           /> Male
//         </label>
//         <br/>
//         <label>
//           <input
//             type="radio"
//             key="gender"
//             name="gender"
//             value="Female"
//             checked={inputs.gender === "Female"}
//             onChange={handleChange("gender")}
//           /> Female
//         </label>
//         <br/><br/>
//         <input
//           style={inputStyle}
//           type="number"
//           key="age"
//           name="age"
//           value={inputs.age}
//           placeholder="Age"
//           onChange={handleChange("age")}
//         />
//         <br/><br/>
//         <select
//           style={inputStyle}
//           name="destination"
//           value={inputs.destination}
//           onChange={handleChange("destination")}
//         >
//           <option value="Tokyo">Tokyo</option>
//           <option value="Berlin">Berlin</option>
//           <option value="Cancun">Cancun</option>
//         </select>
//         <br/><br/>
//         Dietry restrictions: <br/>
//         <label>
//           <input
//             type="checkbox"
//             key="vegetarian"
//             name="vegetarian"
//             checked={inputs.vegetarian}
//             onChange={handleCheck("vegetarian")}
//           /> Vegetarian
//         </label>
//         <br/>
//         <label>
//           <input
//             type="checkbox"
//             key="kosher"
//             name="kosher"
//             checked={inputs.kosher}
//             onChange={handleCheck("kosher")}
//           /> Kosher
//         </label>
//         <br/>
//         <label>
//           <input
//             type="checkbox"
//             key="lactoseFree"
//             name="lactoseFree"
//             checked={inputs.lactoseFree}
//             onChange={handleCheck("lactoseFree")}
//           /> Lactose free
//         </label>
//         <br/><br/><br/>
//       </form>
//       <p>Your name: {inputs.firstName} {inputs.lastName}</p>
//       <p>Your gender: {inputs.gender}</p>
//       <p>Your age: {inputs.age}</p>
//       <p>Your destination: {inputs.destination}</p>
//       <p>Your dietry restrictions: <br/>
//       Vegetarian? {inputs.vegetarian ? "Yes" : "No"}<br/>
//       Kosher? {inputs.kosher ? "Yes" : "No"}<br/>
//       Lactose free? {inputs.lactoseFree ? "Yes" : "No"}
//       </p>
//     </div>
//   )
// }

// export default App

// PRACTICE AREA ******************************************************************************

import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      gender: "",
      age: "",
      destination: "",
      vegetarian: "",
      kosher: "",
      lactoseFree: "",
    };

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    const { name, value, type, checked } = e.target

    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  render() {
    const wrapper = {
      width: 300,
      margin: 1 + "rem auto",
    };

    const inputStyle = {
      width: 100 + "%",
      padding: .5 + "rem"
    }

    return (
      <>
        <div style={wrapper}>
          <form>
            <input 
              style={inputStyle}
              type="text" 
              name="firstName"
              key="firstName"
              value={this.firstName}
              placeholder="First name"
              onChange={this.handleChange}
            />
            <br/><br/>
            <input 
              style={inputStyle}
              type="text" 
              name="lastName"
              key="lastName"
              value={this.lastName}
              placeholder="Last name"
              onChange={this.handleChange}
            />
            <br/><br/>
            <label>
              <input 
                type="radio" 
                name="gender"
                key="Male"
                value="Male"
                checked={this.state.gender === "Male"}
                onChange={this.handleChange}
              /> Male
            </label>
            <br/>
            <label>
              <input 
                type="radio" 
                name="gender"
                key="Female"
                value="Female"
                checked={this.state.gender === "Female"}
                onChange={this.handleChange}
              /> Female
            </label>
            <br/><br/>
            <input 
              style={inputStyle}
              type="number" 
              name="age"
              key="age"
              value={this.age}
              placeholder="Age"
              onChange={this.handleChange}
            />
            <br/><br/>
            <select 
              style={inputStyle}
              name="destination"
              value={this.state.destination}
              onChange={this.handleChange}
            >
              <option value="Tokyo">Tokyo</option>
              <option value="Berlin">Berlin</option>
              <option value="Cancun">Cancun</option>
            </select>
            <br/><br/>
            <p>Your dietry restrictions:</p>
            <label>
              <input 
                type="checkbox" 
                name="vegetarian"
                key="vegetarian"
                value={this.state.vegetarian}
                onChange={this.handleChange}
              /> Vegetarian
            </label>
            <br/>
            <label>
              <input 
                type="checkbox" 
                name="kosher"
                key="kosher"
                value={this.state.kosher}
                onChange={this.handleChange}
              /> Kosher
            </label>
            <br/>
            <label>
              <input 
                type="checkbox" 
                name="lactoseFree"
                key="lactoseFree"
                value={this.state.lactoseFree}
                onChange={this.handleChange}
              /> Lactose free
            </label>
            <br/>
          </form>
          <br/><br/>
          <p>Your name: {this.state.firstName} {this.state.lastName}</p>
          <p>Your gender: {this.state.gender}</p>
          <p>Your age: {this.state.age}</p>
          <p>Your destination: {this.state.destination}</p>
          <p>Your dietry restrictions:</p>
          <p style={{paddingLeft: 1 + "rem"}}>
          Vegetarian? {this.state.vegetarian ? "Yes" : "No"}<br/>
          Kosher? {this.state.kosher ? "Yes" : "No"}<br/>
          Lactose free? {this.state.lactoseFree ? "Yes" : "No"}
          </p>
        </div>
      </>
    );
  }
}

export default App;