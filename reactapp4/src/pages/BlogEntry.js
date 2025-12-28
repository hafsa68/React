import axios from 'axios';
import React, {useState } from 'react'


function BlogEntry() {
    const [inputs,setInputs] = useState({});
function handleChange(e){
  let name=   e.target.name
  let value =  e.target.value
  setInputs(values => ({...values, [name]:value}) )
}

// useEffect(() =>{
       
//     }, []);


function handleSubmit(e){
e.preventDefault();
 blogPost();
}

function blogPost(){
    axios.post("http://localhost/pwad68/ReactUs/reactapp4/api/blog/addBlog.php",inputs).then(function(response){
alert(response.data)
    })
}
  return (
    <div className='container'>
    
    <h3>Bog Entry</h3>
    <form className='form' onSubmit={handleSubmit}>
<input type='text' name='title' value={inputs.title} className='form-control' onChange={handleChange} placeholder='Enter title'/> <br/>
<textarea className='form-control' name='description' value={inputs.description} onChange={handleChange}></textarea> <br/>
<input type='submit' className='btn btn-primary'/>
    </form>
    
    {console.log(inputs)}
    </div>
  )
}

export default BlogEntry