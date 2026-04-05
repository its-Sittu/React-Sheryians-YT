import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const PageContent = (props) => {
  return (
    <div className='py-10 flex items-center justify-between h-[90vh] '>
        <LeftContent/>
        <RightContent users={props.users}/> 
    </div>
  )
}

export default PageContent