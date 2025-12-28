import axios from 'axios';
import { useForm } from 'react-hook-form'

function BlogEntry1() {
    const {
        register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        // console.log(data)
        blogPost(data);
    }


    function blogPost(data) {
        axios.post("http://localhost/pwad68/ReactUs/reactapp4/api/blog/addBlog.php", data).then(function (response) {
            alert(response.data)
        })
    }

    return (
        <div className='container'>

            <h3>Bog Entry One</h3>
            <form className='form' onSubmit={handleSubmit(onSubmit)} >
                <input type='text' {...register("title")} defaultValue="" className='form-control' placeholder='Enter title' /> <br />
                <textarea className='form-control' {...register("description")} ></textarea> <br />
                <input type='submit' className='btn btn-primary' />
            </form>


        </div>
    )
}

export default BlogEntry1
