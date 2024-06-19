import React, { useState } from 'react';

const Login = () => {
  // const base_url = import.meta.env.REACT_APP_URL;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitUser = async (event) => {
    event.preventDefault();
    let url= "https://apis.ccbp.in/login";

    let userDetail={
      username:"rahul",
      password:"rahul@2021"
    }
    const option ={
      method:"POST",
      body:JSON.stringify(userDetail)
    }
    let response=await fetch(url, option)
    let fetchData= await response.json();


    console.log(fetchData.jwt_token );



   };




















    
    // try {
      // const res = await fetch(`${base_url}/login`, {
      //   method: "POST",
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({ username, password })
      // });

      // console.log(res)

      // if (!res.ok) {
      //   throw new Error('Network response was not ok');
      // }

      // const data = await res.json();
      // console.log(data);
    // } catch (error) {
    //   console.error('Error during fetch:', error);
    // }


  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-t from-gray-200 via-gray-400 to-gray-600">
      <div className="bg-amber-200 py-5 px-10 w-[350px] rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <img className="mx-auto h-[30px] w-[70px] mb-4" src="./img/jobimg.png" alt="Your Company" />
          <h2 className="text-2xl font-bold mb-6">Sign In</h2>
        </div>
        <form onSubmit={handleSubmitUser} id='my-form'>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 mb-2">Username</label>
            <input 
              type="text" 
              id="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="email" 
              className="w-full p-3 border border-gray-300 rounded-md" 
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="password" 
              className="w-full p-3 border border-gray-300 rounded-md" 
            />
          </div>
          <div>
            <button type="submit" form="my-form" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
