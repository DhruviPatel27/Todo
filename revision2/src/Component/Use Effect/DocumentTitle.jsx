import React, { useEffect, useState } from 'react'

export default function DocumentTitle() {
    const[state,setState] = useState(0)

    // useEffect(()=>{
    //   document.title=state
    // })

    function Inc(){
        setState(state+1)
    }
  return (
    <div>
      <h3>Counter is {state}</h3>
      <button onClick={Inc}>Click</button>
    </div>
  )
}
