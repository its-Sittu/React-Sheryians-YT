import React from 'react'

const RightCardContent = (props) => {
  return (
   <div className='absolute top-0 left-0 h-full w-full p-6
      flex flex-col justify-between'>
        <h2 className='text-2xl font-bold bg-white rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
        <div className='text-xl leading-normal text-white mt-50'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo doloribus, laboriosam nesciunt dolorem esse voluptatibus.
        </div>
        <div className='flex justify-between'>
          <button className='bg-blue-600 text-white font-medium px-4 py-3 rounded-full'>{props.tag}</button>
          <button className='bg-blue-600 text-white font-medium px-4 py-3 rounded-full'><i className="ri-arrow-right-line"></i></button>
        </div>
      </div>
  )
}

export default RightCardContent