import React from 'react'

function Car(props) {
 const {brand, year ,color} = props
 const welcome = ()=>{
    alert("Hello From Arrom")
 }
 const cars =["BMW","Tyota","Odi"]
    return (
    <>
    <h1>About car</h1>
    {/* <p>Brand: {props .carinfo.brand}</p>
    <p>Brand: {props.model}</p>
    <p>Brand: {props.color}</p>
    <p>Brand: {props.wheels}</p> */}

    {/* <p>Brand: {props .carinfo.brand}</p>
    <p>Brand: {props .carinfo.year}</p> */}
    {/* <p>Brand: {props .carinfo.color}</p> */}
    <p>Brand: {brand}</p>
    <p>Brand: {year}</p>
    <p>Brand: {color}</p>

<button onClick={welcome}>Click Here</button>
<ul>
    {cars.map((car)=><li>I am a {car}</li>)}
</ul>
    </>
  )
}

export default Car