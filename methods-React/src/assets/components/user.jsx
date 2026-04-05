import React from 'react'

const User = () => {
    const arr = [10,29,38,28,48,58,68,78,88,98];
  return (
    <div>
        <h1>{arr.map(function(item) {
            return item + " ";
        })}</h1>
    </div>
  )
}

export default User