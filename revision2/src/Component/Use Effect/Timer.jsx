import React, { useEffect, useState } from 'react'

export default function Timer() {
  const[state,setState] = useState(0)
    
  useEffect(()=>{
    setInterval(()=>{
      setState(prevState=>prevState+1)
    },1000)
  },[])
  return (
    <div>
      <h3>Timer : {state}</h3>
    </div>
  )
}
