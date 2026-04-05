import React from 'react'
import Usercard from "./assets/components/usercard.jsx";
import User from "./assets/components/user.jsx";
import User1 from './assets/components/user1.jsx';

const App = () => {
  return (
     <div   
    style={{
    display: "flex",
    gap: "20px",
    flexWrap: "wrap"
  }}>

      <Usercard 
        name="Sarthak Bhaiya" 
        emails="sarthak@example.com" 
        city="New York" 
        phoneno="123-456-7890"
      />
      <Usercard
        name="John Doe"
        emails="john@example.com"
        city="Los Angeles"
        phoneno="098-765-4321"
      />
      <Usercard
        name="Jane Smith"
        emails="jane@example.com"
        city="Chicago"
        phoneno="555-123-4567"
      />

    <User/>
    <User1/>
    </div>
    
  )
}

export default App