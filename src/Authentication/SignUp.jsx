import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const [username,setUsername] = useState("");
    const [email, setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();

    function adduser(e){
        e.preventDefault();
        axios.post("http://localhost:8080/Users/create",{username:username,email:email,password:password})
        .then(()=>navigate("/"))
        .catch(err=>alert("error!"));
    };

  return (
    <>
        <form class="form">
       <p class="form-title">Sign in to your account</p>
       <div class="input-container">
          <input type="text" placeholder="Enter Username" onChange={(e)=>setUsername(e.target.value)}/>
          <span>
          </span>
      </div>
        <div class="input-container">
          <input type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
          <span>
          </span>
      </div>
      <div class="input-container">
          <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
         <button class="submit" onClick={adduser}>
        Sign Up
      </button>

      <p class="signup-link">
        Already have an account?
        <a href="/">Sign In</a>
      </p>
   </form>
    </>
  )
}
