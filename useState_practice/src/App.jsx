import React from 'react'
import { useState } from 'react'

const App = () => {

//Ques 1

// const [first, setfirst] = useState(10)
// const btnClicked = () =>{
//   setfirst(20);
//   console.log(first);
// }




const [numm, setNuum] = useState({username:'Sarthak', age : 20})

const yhaclickk = () =>{
  const newNumm = {...numm};
  setNuum(newNumm.username = 'Sagar');
    setNuum(newNumm.age = 30);  
    setNuum(newNumm);
}



// Ques 2

// used for array of objects
// const data =[
//   {username:'Sarthak', age :20},
//   {username:'Sagar', age :30},
//   {username:'Sittu', age :40},

// ];

// const [hey, hey1] = useState(0);

// const yhaclick =() =>{
//   hey1((prev) => (prev + 1) % data.length);
// }


const [num, setNum] = useState([10, 20 ,30, 40])

const yhaclick = () =>{
  const newNum = [...num];
  newNum.push(80);
  setNum(newNum);
}


// multiple function call by making another function in button to call all
  return (
    <div>
        <h1>{num}</h1>
        <h1>{numm.username}, {numm.age}</h1>
        <button onClick={() =>{
        yhaclick();
        yhaclickk();
        }}> click me</button>

    </div>
  )
}

export default App