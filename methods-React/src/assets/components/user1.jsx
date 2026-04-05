import React from 'react'

const User1 = () => {
    const arr1 =[{
        naam : "Salman Khan",
        email : "Salman@654gmail.com",
        city : "Mumbai",
        phoneno : "123-456-7890"
    },
    {
        naam : "Shahrukh Khan",
        email : "Shahrukh@654gmail.com",
        city : "Mumbai",
        phoneno : "098-765-4321"

    }]
  return (
    <div>
         {arr1.map((elem, index) => (
        <div key={index}>
          <h2>{elem.naam}</h2>
          <p>{elem.email}</p>
          <p>{elem.city}</p>
          <p>{elem.phoneno}</p>
        </div>
      ))}
    </div>
  )
}

export default User1