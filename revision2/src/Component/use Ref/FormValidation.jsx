import React, { useRef } from 'react'

export default function FormValidation() {
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const conPasswordRef = useRef(null)

    function addForm(e){
      e.preventDefault()

        if (nameRef.current.value==="" ||
            emailRef.current.value==="" ||
            passwordRef.current.value===""||
            conPasswordRef.current.value===""
        ) {
            alert("pleasse fill all feild")
            return
        }

        if (passwordRef.current.value !== conPasswordRef.current.value){
          alert("password do not match")
          return
        }

        console.log({
            name:nameRef.current.value,
            email:emailRef.current.value,
            password:passwordRef.current.value,
            conPassword:conPasswordRef.current.value,
        })

        nameRef.current.value=""
        emailRef.current.value=""
        passwordRef.current.value=""
        conPasswordRef.current.value=""
    }
  return (
    <div>
      <form onSubmit={addForm}>
        <input type="text" placeholder='enter name' ref={nameRef} />
        <input type="email" placeholder='enter email' ref={emailRef} />
        <input type="password" placeholder='enter password' ref={passwordRef} />
        <input type="password" placeholder='confirm password' ref={conPasswordRef} />
        <input type="submit" />
      </form>
    </div>
  )
}
