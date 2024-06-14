import React from 'react'
import { useSelector } from 'react-redux'

export default function Display() {
    const data = useSelector((store)=>{return store})
  return (
    <div>
      <h3>Add Data</h3>
      {
        data.map((el,i)=>{
            return <li>{el}</li>
        })
      }
    </div>
  )
}
