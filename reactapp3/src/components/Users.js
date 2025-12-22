import React from 'react'
import { name,age } from './person';

function Users() {

    const users = [
        { id: 1, name: "Fariha", age: 20 },
        { id: 2, name: "Halima", age: 1 },
        { id: 3, name: "Faiza", age: 1 }
    ];
    return (
        <>
            <h1>Users</h1>

            <table border={1}>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                {users.map(user => {
                   return( <tr key={user.id}> 
                   <td>{user.id}</td>
                   <td>{user.name}</td>
                   <td>{user.age}</td>
                     </tr>)
                })
                }
            </table>
            <h1>We imported name:{name} and his age{age}</h1>

        </>

    )
}

export default Users