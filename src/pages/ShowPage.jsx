import React, { useEffect, useState } from 'react'
import Cardd from '../cards/card'
import axios from 'axios'
import "./ShowPage.css"

export default function ShowPage() {

    const [hotels, setHotels] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8080/Hotels/getAll")
        .then((e=>setHotels(e.data)))
        .catch(err=>console.log(err));
    },[]);

    const hotel=hotels.map((e)=>
    <Cardd name={e.name} price={e.price} imgurl={e.imgurl} address={e.address} contact={e.contact} desc={e.desc} category={e.category} />);
  return (
    <center>
        <h2 style={{fontWeight:"bolder",color:"black",paddingTop:"10px"}}>All Hotels</h2>
        <hr/>
        <div className='dis_flex'>
            {hotel}
        </div>
    </center>
  )
}
