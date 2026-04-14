// mini project

import React from 'react'
import { useState } from 'react'

const App = () => {

  const [first, setfirst] = useState(0)

  function increase(){
    setfirst(first + 1);
  }

  function decrease(){
    setfirst(first - 1);
  }

  function jumpby5(){
    setfirst(first + 5);
  }

  return (
    <div>
      <h1>{first}</h1>
      <button onClick={increase}>increase</button>
       <button onClick={decrease}>decrease</button>
       <button onClick={jumpby5}>jump Value by 5</button>
    </div>
  )
}

export default App