import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className='h-full flex flex-nowrap overflow-x-auto gap-10 w-3/4 p-6' >
        {props.users.map(function(n, idx){
          return <RightCard key={idx} id={idx} img={n.img} tag={n.tag}/>
        })}
        
    </div>
    
  )
}

export default RightContent