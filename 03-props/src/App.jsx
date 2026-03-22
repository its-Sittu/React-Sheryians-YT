import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      
      <Card user='Sittu Singh' age='21' img='https://images.unsplash.com/photo-1773918490998-541aa0e33984?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8SnI2ZkFNdGZjaVV8fGVufDB8fHx8fA%3D%3D'/>
      <Card user ='Bill Gates' age='65' img='https://images.unsplash.com/photo-1749852407433-392487b0688e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8SnI2ZkFNdGZjaVV8fGVufDB8fHx8fA%3D%3D'/>
      <Card user ='Elon Musk' age='52'img ='https://images.unsplash.com/photo-1773408071027-fb7b3a69ec0e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYwfEpyNmZBTXRmY2lVfHxlbnwwfHx8fHw%3D'/>
    </div>
  )
}

export default App