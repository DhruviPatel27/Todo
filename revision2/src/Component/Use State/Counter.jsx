import React, { useState } from 'react'

export default function Counter() {
    const[count,setCount] = useState(0) 

    function Inc(){
        setCount(count+1)
    }

    function Dec(){
        setCount(count-1)
    }

    function Reset(){
        setCount(count*0)
    }
  return (
    <div>
      <h3>Counter is: {count}</h3>
      <button onClick={Inc}>Increase</button>
      <button onClick={Dec}>Decrease</button>
      <button onClick={Reset}>Reset</button>
    </div>
  )
}
