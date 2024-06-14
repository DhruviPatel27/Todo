import React, { useRef, useState } from 'react'

export default function Timer2() {
    const[state,setState] = useState(0)
    const id = useRef(null)

    function Start(){
       id.current= setInterval(()=>{
            setState(prevState=>prevState+1)
        },1000)
    }

    function Stop(){
        clearInterval(id.current)
    }

    function Reset(){
        setState(state*0)
    }
  return (
    <div>
      <h3>Timer : {state}</h3>
      <button onClick={Start}>Start</button>
      <button onClick={Stop}>Stop</button>
      <button onClick={Reset}>Reset</button>
    </div>
  )
}
