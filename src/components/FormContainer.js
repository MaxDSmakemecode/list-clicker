import React from 'react'
import FormComponent from './FormComponent'


// only business logic of form here
class Form extends React.Component {
    constructor(){
      super()
  
      this.state = {
        firstName: "",
        lastName: "",
        gender: "",
        age: "",
        destination: "",
        vegetarian: "",
        kosher: "",
        lactoseFree: "",
      }
  
      this.handleChange = this.handleChange.bind(this)
    }
  
    handleChange(event){
      const { name, value, type, checked } = event.target
  
      type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }
  
    render(){
        return(
            <FormComponent 
                handleChange={this.handleChange}
                {...this.state}
                // otherwise you can do: data={this.state}
            />
        )
    }
  }

  export default Form