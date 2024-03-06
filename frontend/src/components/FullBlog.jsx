import  { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function FullBlog() {

    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch(`http://localhost:8000/user/blogs/${id}`);
                const data = await response.json();
                setBlog(data);
            } catch (error) {
                console.error('Error fetching blog:', error);
            }
        };

        fetchBlog();
    }, [id]);

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <>
          <button onClick={()=> navigate('/blogs')} className="border-2 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">Blogs</button>
        <div className="flex  px-9  py-10 justify-center items-center ">
            <div className="py-9 px-16 border border-gray-300 rounded-lg">
                <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
                <img className=" w-full h-[20rem] object-cover rounded-lg mb-4" src={blog.image} alt={blog.title} />
                <p className="text-lg">{blog.description}</p>
            </div>
        </div>
        </>
    );
}

export default FullBlog;
