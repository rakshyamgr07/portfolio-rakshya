import React from 'react'

function StudentCard(props) {
  return (
    <div className='border border-gray-400 m-5 p-4 text-center'>
      <h1>Name : {props.name}</h1>
      <h2>Address: {props.address}</h2>
      <h3>Faculty: {props.faculty}</h3>
    </div>
  )
}

export default StudentCard
