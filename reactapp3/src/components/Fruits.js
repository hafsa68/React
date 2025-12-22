import React from 'react'

function Fruits() {
    const fruits = ["Mango","Orange","Grape","Guava"];
  return (
    <div>
        <table border={1}>
            <tr>
                <th>Fruits Name</th>
            </tr>
        
       {fruits.map(fruit =>  {
        return (<tr><td>{fruit}</td></tr>)
       })}
        
</table>
    </div>
  )
}

export default Fruits