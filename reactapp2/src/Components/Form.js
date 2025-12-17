import React, { useState } from 'react'

function Form() {
     const [name,setName]=useState("")
    function handleChange(e){
       setName(e.target.value)
    }  
  return (
    <>
    <h1>Form</h1>
    <form>
        <input type="text" onChange={handleChange} />
        <button>submit</button>
    </form>
    <br/>
    Current Value: {name}
    </>
  )
}

export default Form