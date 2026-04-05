import React from 'react'
import Navbar from './components/Section1/Navbar'
import Section1 from './components/Section1/Section1'

const users =[
  {
    img: 'https://images.unsplash.com/photo-1560748755-b4bfcd82e410?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: '',
    tag: 'Satisfied'
  },
  {
    img: 'https://images.unsplash.com/photo-1553845757-677a58d78127?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: '',
    tag: 'UnderServed'
  },
  {
    img: 'https://images.unsplash.com/photo-1586377769469-1a7f0d023b06?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: '',
    tag: 'Underbanked'
  }
]
const App = () => {
  return (
    <><div></div>
    
    <Section1 users={users}/>
    </>
  )
}

export default App