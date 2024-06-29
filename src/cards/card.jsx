import React from 'react'
import "./card.css"

export default function Cardd(props) {
  return (
    <div class="card">
    <img src={props.imgurl} class="image"/>
    <div class="content">
     <div style={{display:"flex",justifyContent:"space-around"}}>
     <span class="title">
        {props.name}
      </span><br/>
      <span class="title">
      ₹{props.price} |{props.category}|
      </span>
     </div><hr/>
      <div>{props.address}</div>

    <p class="desc">
      {props.desc} 
    </p>

    <button class="action" href="#" className='btn btn-warning'>
      Book
      <span aria-hidden="true">
        →
      </span>
    </button>
  </div>
</div>
  )
}
