import React from 'react'

const UserFunction = ({name}) => {
  return (
    <div className='user-card'>
        <h2>Name : {name}</h2>
        <h2>Location: Pune</h2>
        <h2>Contact: 9764824078</h2>
    </div>
  )
}

export default UserFunction
