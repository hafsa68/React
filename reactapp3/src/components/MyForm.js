import React, { useState } from 'react'


function MyForm() {
    const[name,setName]= useState("fdf");
    const handleChange =(e)=>{
setName(e.target.value)
    }
    function handleSubmit(e){
e.preventDefault()
alert(name)
    }

  return (
    <>
    <div>MyForm</div>
    <form onSubmit={handleSubmit}>

        <input type='text' onChange={handleChange} value={name} placeholder='Enter your name'/>
        <input type='submit'/>
    </form>
    </>

  )
}

export default MyForm