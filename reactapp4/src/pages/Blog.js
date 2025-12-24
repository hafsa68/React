import axios from 'axios'
import React, { useEffect, useState } from 'react'


function Blog() {
    const[blogs,setBlogs] = useState([]);

    useEffect(() =>{
        getBlogs();
    }, []);
    function getBlogs (){
        axios.get("http://localhost/pwad68/ReactUs/reactapp4/api/blog/").then(function(response){
            
            setBlogs(response.data)
        })
    }
    return (
        <div className='container-fluid py-5'>

            <div className='container'>
                <h1>Blog Items</h1>
<table className='table table-bordered'>
<tr>
    <th>ID</th>
    <th>Title</th>
    <th>Details</th>
</tr>
{blogs.map((blog) => (
    <tr>
        <td>{blog.id}</td>
        <td>{blog.title}</td>
        <td>{blog.description}</td>
    </tr>
))}
</table>
            </div>


        </div>
    )
}

export default Blog