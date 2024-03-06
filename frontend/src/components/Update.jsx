import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const updateData = async () => {
    if (!title || !description || !image) {
      alert("Please fill out all fields");
      return;
    }
    try {
      const response = await fetch(`http://localhost:8000/user/blogs/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: title,
          description: description,
          image: image
        })
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
   
      alert("upadated")
      setDescription("")
      setImage("")
      setTitle("")
      navigate('/blogs')
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
      // Handle error
    }
  };
  
  

  return (
    <>
      <button onClick={()=> navigate('/blogs')} className="border-2 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">BLOGS</button>
    <div className=" h-screen px-9 flex py-16">
    <div className=" w-screen  mx-auto p-4 bg-white shadow-md rounded-lg">
      <label htmlFor="title" className="block text-gray-700 font-semibold">Title</label>
      <input 
        required 
        onChange={(e) => setTitle(e.target.value)} 
        value={title} 
        type="text" 
        id="title" 
        className="mt-1 mb-4 p-2 block w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
      />

      <label htmlFor="image" className="block text-gray-700 font-semibold">Image URL</label>
      <input 
        required 
        onChange={(e) => setImage(e.target.value)} 
        value={image} 
        type="text" 
        id="image" 
        className="mt-1 mb-4 p-2 block w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
      />

      <label htmlFor="content" className="block text-gray-700 font-semibold">Content</label>
      <textarea 
        required 
        onChange={(e) => setDescription(e.target.value)} 
        value={description} 
        id="content" 
        className="mt-1 mb-4 p-2 block w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
        rows="5"
      ></textarea>

      <button  
        onClick={updateData} 
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        update 
      </button>
    </div>
    </div>
    </>
  );
}

export default Update;
