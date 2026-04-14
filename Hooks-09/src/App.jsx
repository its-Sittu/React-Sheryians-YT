import React from 'react'
import { useState } from 'react'

const App = () => {

const [no, nextno] = useState(20)
const [name,secondname] = useState('Sittu')
  
function changeno(){
  nextno(30);
  secondname('Sagar');
  
}
  return (
    <div>

      <h1>Value of number is {no}</h1>
      <h1>My name is {name}</h1>
      <button onClick={changeno}>Click me </button>
    </div>
  )
}

export default App