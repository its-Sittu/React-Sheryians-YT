// import React from 'react'
import React, { useState } from 'react';

const Context = () => {
    const [count , setCount] = useState(0);
  return (
    <div>
         <h1>{count}</h1>
         <button onClick={() => setCount(count + 1)}>
                Click me 
         </button>
       </div>
  )
}

export default Context