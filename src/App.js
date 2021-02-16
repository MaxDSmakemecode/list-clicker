import React, {useState} from 'react'
// import Header from './components/Header'
// import MemeGenerator from './components/MemeGenerator'

function App(){
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    destination: "",
    vegetarian: "",
    kosher: "",
    lactoseFree: "",
  })

  const handleChange = inputName => ({target}) => setInputs(state => ({...state, [inputName]:target.value }))

  const handleCheck = inputCheck => ({target}) => setInputs(state => ({...state, [inputCheck]:target.checked}))

  const wrapper = {
    width: 300,
    margin: 1 + "rem auto"
  }

  const inputStyle = {
    width: 100 + "%",
    padding: .5 + "rem"
  }

  return(
    <div style={wrapper}>
      <form>
        <input 
          style={inputStyle}
          type="text"
          key="firstName"
          name="firstName"
          value={inputs.firstName}
          placeholder="First name"
          onChange={handleChange("firstName")}
        />
        <br/><br/>
        <input 
          style={inputStyle}
          type="text"
          key="lastName"
          name="lastName"
          value={inputs.lastName}
          placeholder="Last name"
          onChange={handleChange("lastName")}
        />
        <br/><br/>
        <label>
          <input 
            type="radio"
            key="Male"
            name="gender"
            value="Male"
            checked={inputs.gender === "Male"}
            onChange={handleChange("gender")}
          /> Male
        </label>
        <br/>
        <label>
          <input 
            type="radio"
            key="Female"
            name="gender"
            value="Female"
            checked={inputs.gender === "Female"}
            onChange={handleChange("gender")}
          /> Female
        </label>
        <br/><br/>
        <input 
          style={inputStyle}
          type="number"
          name="age"
          value={inputs.age}
          placeholder="Age"
          onChange={handleChange("age")}
        />
        <br/><br/>
        <select 
          style={inputStyle}
          name="destination"
          value={inputs.destination}
          onChange={handleChange("destination")}
        >
          <option value="Tokyo">Tokyo</option>
          <option value="Berlin">Berlin</option>
          <option value="Cancun">Cancun</option>
        </select>
        <br/><br/>
        Dietry restricitons:
        <br/>
        <label>
          <input 
            type="checkbox"
            name="vegetarian"
            checked={inputs.vegetarian}
            onChange={handleCheck("vegetarian")}
          /> Vegetarian
        </label>
        <br/>
        <label>
          <input 
            type="checkbox"
            name="kosher"
            checked={inputs.kosher}
            onChange={handleCheck("kosher")}
          /> Kosher
        </label>
        <br/>
        <label>
          <input 
            type="checkbox"
            name="lactoseFree"
            checked={inputs.lactoseFree}
            onChange={handleCheck("lactoseFree")}
          /> Lactose free
        </label>
        <br/>
      </form>
      <br/><br/>
      <p>Your name: {inputs.firstName} {inputs.lastName}</p>
      <p>Your gender: {inputs.gender}</p>
      <p>Your age: {inputs.age}</p>
      <p>Your destination: {inputs.destination}</p>
      <p>Your dietry restrictions: <br/>
      Vegetarian? {inputs.vegetarian ? "Yes" : "No"}<br/>
      Kosher? {inputs.kosher ? "Yes" : "No"}<br/>
      Lactose free? {inputs.lactoseFree ? "Yes" : "No"}
      </p>
    </div>
  )
}

export default App