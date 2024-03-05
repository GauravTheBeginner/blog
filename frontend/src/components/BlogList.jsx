import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
function BlogList() {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('http://localhost:8000/user/blogs/');
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);
    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:8000/user/blogs/${id}`, {
                method: 'DELETE'
            });
            // After successful deletion, you may want to update the UI to reflect the change
            setBlogs(prevBlogs => prevBlogs.filter(blog => blog._id !== id));
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };
    return (<>
   
             <button onClick={()=> navigate('/AddingBlogs')} className="border-2 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">Add</button>
        <div className="flex justify-center px-4 py-9 flex-wrap gap-7  items-center">
            {blogs.map((item, index) => (
                <div className="border border-black rounded overflow-hidden shadow-lg w-80" key={index}>
                    <img className="w-full h-48 object-cover" src={item.image} alt={item.title} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{item.title}</div>
                        <p className="text-gray-700 truncate text-base">{item.description}</p>
                    </div>
                    <div className="px-6 py-4 flex gap-2">
                        <button onClick={()=> navigate('/AddingBlogs')} className="border-2 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">Add</button>
                        <button className="border-2 px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600">Read</button>
                        <button  onClick={() => handleDelete(item._id)} className="border-2 px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600">Delete</button>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
}

export default BlogList;
