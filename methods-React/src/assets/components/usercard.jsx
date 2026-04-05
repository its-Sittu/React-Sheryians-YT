import React from 'react'

const Usercard = (props) => {
  return (
    <div
    style={{
        color: "pink",
        backgroundColor: "black",
        width: "200px",
        height: "200px",
        borderRadius: "10%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        margin: "10px"
     
  
        
    }}>   
      
      <h2>{props.name}</h2>
      <p>{props.emails}</p>
      <p>{props.city}</p>
      <p>{props.phoneno}</p>
    </div>
  )
}

export default Usercard