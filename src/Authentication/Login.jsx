import React, { useState } from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {

    const [email, setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();

    function login(e){
        e.preventDefault();
        try {
            const response = axios.post('http://localhost:8080/Users/login', { email:email, password:password });
            const user = response.data;
            if (user.role === 'ADMIN') {
                navigate('/admin');
            } else {
                navigate('/home');
            }
        } catch (error) {
            alert('Invalid credentials');
        }
    }

  return (
    <center>
     <form class="form">
       <p class="form-title">Sign in to your account</p>
       
        <div class="input-container">
          <input type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
          <span>
          </span>
      </div>
      <div class="input-container">
          <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
         <button class="submit" onClick={login}>
        Sign in
      </button>

      <p class="signup-link">
        No account?
        <a href="/signup">Sign up</a>
      </p>
    </form>

    </center>
  )
}
