import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const login = async () => {
    if (!username || !password) {
      alert("Please fill out all fields");
      return;
    }

    try {
        const response = await fetch('http://localhost:8000/user/signin', {
           method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'username': username, 
                'password': password  
            },
            
           
        });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      alert("User logged in");
      setusername('');
      setPassword('');
      navigate('/blogs')
    } catch (error) {
      console.log(error);
    }
  };
        
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-md">
    <label htmlFor="username" className="block mb-2">
      Username
    </label>
    <input
      id="username"
      value={username}
      onChange={(e) => setusername(e.target.value)}
      type="text"
      placeholder="Username"
      className="block w-full px-4 py-2 mb-4 border rounded-md"
    />
    <label htmlFor="password" className="block mb-2">
      Password
    </label>
    <input
      id="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      type="password"
      placeholder="Password"
      className="block w-full px-4 py-2 mb-4 border rounded-md"
    />
    <button
      onClick={login}
      className="block w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
    >
      Sign in
    </button>
  </div>
  );
}

export default Signin;
