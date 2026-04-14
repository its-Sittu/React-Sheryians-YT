import React from 'react'
import { useState } from 'react';

const App = () => {



const [title, setTitle] = useState('');

const submithandler =(elem)=>{
  elem.preventDefault();
  console.log('form submitted by', title);
  setTitle('');
}




  return (
    <div>
      <form onSubmit={ (elem) =>{
        submithandler(elem);
       
      }}>
        <input 
        type="text" 
        placeholder='Type your name'
        value={title}
        onChange={(elem)=>{
          setTitle(elem.target.value);
        }}
         />
        <button> click me</button>
      </form>
    </div>
  )
}

export default App