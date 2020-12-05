import React from 'react'


// only UI elements of form here
function FormComponent(props){
  const formStyle = {
    width: 300,
    margin: 1 + "rem auto",
  }

  const inputStyle = {
    width: 300,
    padding: .5 + "rem",
  }

  const selectStyle = {
    width: 320,
    padding: .5 + "rem",
  }

  return(
    <React.Fragment>
      <form style={formStyle}>
        <input style={inputStyle}
          type="text"
          name="firstName"
          value={props.firstName}
          // if you do data={this.state} in the FormContainer then you have to write value={props.data.firstName} and so forth...
          placeholder="First name"
          onChange={props.handleChange}
        />
        <br/>
        <br/>
        <input style={inputStyle}
          type="text"
          name="lastName"
          value={props.lastName}
          placeholder="Last name"
          onChange={props.handleChange}
        />
        <br/>
        <br/>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={props.gender === "Male"}
            onChange={props.handleChange}
          /> Male
        </label>
        <br/>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={props.gender === "Female"}
            onChange={props.handleChange}
          /> Female
        </label>
        <br/>
        <br/>
        <input style={inputStyle}
          type="number"
          name="age"
          value={props.age}
          onChange={props.handleChange}
        />
        <br/>
        <br/>
        <select style={selectStyle}
          name="destination"
          value={props.destination}
          onChange={props.handleChange}
        >
          <option value="Tokyo">Tokyo</option>
          <option value="Berlin">Berlin</option>
          <option value="New York">New York</option>
        </select>
        <br/>
        <br/>
        <label>
          <input
            type="checkbox"
            name="vegetarian"
            checked={props.vegetarian}
            onChange={props.handleChange}
          /> vegetarian
        </label>
        <br/>
        <label>
          <input
            type="checkbox"
            name="kosher"
            checked={props.kosher}
            onChange={props.handleChange}
          /> kosher
        </label>
        <br/>
        <label>
          <input
            type="checkbox"
            name="lactoseFree"
            checked={props.lactoseFree}
            onChange={props.handleChange}
          /> lactose free
        </label>
        <br/>
        <br/>
        <p>Your name: {props.firstName} {props.lastName}</p>
        <p>Your gender: {props.gender}</p>
        <p>Your age: {props.age}</p>
        <p>Your destination: {props.destination}</p>
        <p>Your dietry restrictions: <br/>
        Vegetarian? {props.vegetarian ? "Yes" : "No"}<br/>
        Kosher? {props.kosher ? "Yes" : "No"}<br/>
        Lactose free? {props.lactoseFree ? "Yes" : "No"}
        </p>
      </form>
    </React.Fragment>
  )
  }

  export default FormComponent