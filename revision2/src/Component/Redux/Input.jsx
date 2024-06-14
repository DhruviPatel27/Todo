import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { Action } from './Action'

export default function Input() {
    const[state,setState] = useState('') 
    const dispatch = useDispatch()

    function addText(e){
        setState(e.target.value)
    }

    function addTodo(){
        dispatch(Action(state))
    }
  return (
    <div>
      <input type="text" placeholder='enter name' onChange={addText}/>
      <button onClick={addTodo}>Click</button>
    </div>
  )
}
