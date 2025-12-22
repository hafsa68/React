import React, { useState } from 'react'

function Loginform() {
   const [inputs,setInputs] = useState({})
  

   
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]:value


        }))
    }
  return (
    <>
    <h1>Loginform</h1>

    <form>

        <input type='text' name='name' onChange={handleChange} placeholder='Enter Name'/><br/>
        <input type='number' name='age' onChange={handleChange} placeholder='Enter age'/><br/>
        <select name='district'>
            <option>Select one</option>
            <option>Barishal</option>
            <option>Dhaka</option>
            <option>Sylhet</option>
        </select>
    </form>
{console.log(inputs)}
</>
  )
}

export default Loginform