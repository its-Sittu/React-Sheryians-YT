import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-8 px-16'>
        <h4 className='bg-black text-white uppercase px-6 py-2 rounded-full'> Target Audience</h4>
        <button className='bg-gray-900 text-white px-6 py-2 uppercase rounded-full tracking-widest text-sm'>Digital Banking</button>
    </div>
  )
}

export default Navbar