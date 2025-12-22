import React from 'react'

function Vehicals() {
    const vehicals =["Rickshaw","Bus","Truck","Bike","CNG"];
    const[x, y, z] = vehicals;  //Destructing
  return (
    <>
    <div>
<h1>Vehicals</h1>
Our First vehicals is {x} <br/>
Our Second vehicals is {y} <br/>
Our Third vehicals is {z} 
    </div>
    </>
  )
}

export default Vehicals