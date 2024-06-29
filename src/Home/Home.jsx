import React from 'react'
import "./Home.css"
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate=useNavigate();
  return (
    <center className='home'>
        <h2 style={{fontWeight:"bolder",color:"white"}}>HOTEL BOOKING</h2>
        <div>
            <button className='btn btn-warning' onClick={()=>navigate("/show")}>All Hotels</button>
        </div>
        <button className='btn btn-light' style={{position:"absolute",left:"20px",bottom:"50px"}}>SignOut</button>
    </center>
  )
}
