import React from 'react'

export default function Child(props) {
  console.log(props,"Child")
  return (
    <>
      <div>Child: {props.parentData}</div>
      <div>{props.test}</div>
    </>
  )
}
