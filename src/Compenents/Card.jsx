import React from 'react'

function Card(props) {
  return (
    <>
      <h1>Student Card</h1>
      <p>name:{props.name}</p>
      <p>department:{props.department}</p>
      <p>cgpa:{props.cgpa}</p>
    </>
  )
}

export default Card
