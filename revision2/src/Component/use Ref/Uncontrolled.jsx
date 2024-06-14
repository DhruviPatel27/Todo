import React, { useRef } from 'react'

export default function Uncontrolled() {
    const name = useRef(null)
    const email = useRef(null)

    function addText(){
        console.log({
            name:name.current.value,
            email:email.current.value,
        })
    }
  return (
    <div>
      <input type="text" placeholder='enter name' ref={name}/>
      <input type="text" placeholder='enter name' ref={email}/>
      <button onClick={addText}>Click</button>
    </div>
  )
}
