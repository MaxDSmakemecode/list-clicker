import React from 'react'
import persons from './client_data/persons'
import Person from './components/Person'

function App(){
  const personMap = persons.map(person => <Person key={person.id} name={person.name} />)

  return(
    <div>
      <ul style={{ margin: 1 + "rem " + 2 + "rem" }}>
        {personMap}
      </ul>
    </div>
  )
}

export default App