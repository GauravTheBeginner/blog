import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
function BlogList() {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/blogposts/');
                
                const data = await response.json();
                console.log(data)
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);
    const handleDelete = async (id) => {
        try {
            await fetch(`http://127.0.0.1:8000/api/blogposts/?id=${id}`, {
                method: 'DELETE'
            });
           
            setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== id));
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

    const handleRead = (id) => {
        navigate(`/fullblog/${id}`);
    };
    const handleUpdate = (id)=>{
        navigate(`/update/${id}`)
    }
    return (<>
   
             <button onClick={()=> navigate('/AddingBlogs')} className="border-2 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">Add</button>
        <div className="flex justify-center px-4 py-9 flex-wrap gap-7  items-center">
            {blogs.map((item, index) => (
                <div className="border border-black rounded overflow-hidden shadow-lg w-80" key={index}>
                    {/* <img className="w-full h-48 object-cover" src={item.image} alt={item.title} /> */}
                    <div className="px-6 py-4">
                        <div className="font-bold truncate text-xl mb-2">{item.title}</div>
                        <p className="text-gray-700 truncate text-base">{item.content}</p>
                    </div>
                    <div className="px-6 py-4 flex gap-2">
                        <button onClick={()=> handleUpdate(item.id)} className="border-2 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">Update</button>
                        <button onClick={() => handleRead(item.id)} className="border-2 px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600">Read</button>
                        <button  onClick={() => handleDelete(item.id)} className="border-2 px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600">Delete</button>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
}

export default BlogList;
