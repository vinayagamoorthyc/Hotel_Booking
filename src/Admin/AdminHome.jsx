import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./AdminHome.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AdminHome() {

  const [hotelId, setHotelId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState();
  const [desc, setDesc] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [category, setCategory] = useState("");
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/Hotels/getAll")
    .then((e=>setHotels(e.data)))
    .catch(err=>console.log(err));
    }, []);

    async function save(e){
      e.preventDefault();
      axios.post("http://localhost:8080/Hotels/create",
      {
      name: name,
      price: price,
        address: address,contact:contact,desc:desc,imgurl: imgurl,category:category
      }).then(()=>{
        window.location.reload();
      }).catch((err)=>{
        console.log(err)
        alert("create Failed")
      });
}


async function editHotel(e)
{
  setName(e.name);
  setPrice(e.price);
  setAddress(e.address); 
  setContact(e.contact);
  setDesc(e.desc);
  setImgurl(e.imgurl);
  setCategory(e.category);
}

async function DeleteHotel(id)
{
      await axios.delete("http://localhost:8080/Hotels/delete/" + id).then(()=>{
        alert("Hotel deleted Successfully");
        window.location.reload();
      })
}

async function update(e)
{
    e.preventDefault();
    await axios.put("http://localhost:8080/Hotels/edit/" + hotelId ,
    {name: name,price: price,address: address,contact:contact,desc:desc,imgurl: imgurl,category:category})
    .then(()=>{
      alert("Hotel Details Updated");
      setHotelId("")
      setName("");
      setPrice("");
      setAddress(""); 
      setContact("");
      setDesc("");
      setImgurl("");
      setCategory("");
      window.location.reload();
    }).catch(err=>alert("Hotel Updating Failed"));
}

  return (
    <div>
        <h1 style={{textAlign:"center",padding:"15px",textDecoration:"underline"}}>Hotel Management</h1>
       <div class="container mt-4">
          <form style={{display:"flex",flexDirection:"column",gap:"5px"}}>
             
              <div class="form-group">
                <input  type="text" class="form-control" id="hotelname" placeholder='Hotel Name'
                value={name}
                onChange={(e) =>
                  {
                    setName(e.target.value);      
                  }}
                />
              </div>


              <div class="form-group">
                <input  type="number" class="form-control" id="price" placeholder='Hotel Price'
                 value={price}
                  onChange={(e) =>
                    {
                      setPrice(e.target.value);      
                    }}
                />
              </div>

              <div class="form-group">
                <input type="text" class="form-control" id="address" placeholder='Hotel Address'
                  value={address}
                onChange={(e) =>
                  {
                    setAddress(e.target.value);      
                  }}
                />
              </div>


              <div class="form-group">
                <input type="number" class="form-control" id="contact" placeholder='Contact'
                  value={contact}
                onChange={(e) =>
                  {
                    setContact(e.target.value);      
                  }}
                />
              </div>

              <div class="form-group">
                <input  type="text" class="form-control" id="category" placeholder='Category'
                value={category}
                onChange={(e) =>
                  {
                    setCategory(e.target.value);      
                  }}
                />
              </div>

              <div class="form-group">
                <input  type="text" class="form-control" id="desc" placeholder='Hotel Description'
                value={desc}
                onChange={(e) =>
                  {
                    setDesc(e.target.value);      
                  }}
                />
              </div>

              <div class="form-group">
                <input  type="text" class="form-control" id="imgurl" placeholder='Hotel Image'
                value={imgurl}
                onChange={(e) =>
                  {
                    setImgurl(e.target.value);      
                  }}
                />
              </div>

              <div>
              <button   class="btn btn-primary mt-4"  onClick={save}>Add Hotel</button>

              <button   class="btn btn-warning mt-4"  onClick={update}>Update</button>
              </div>   
            </form>
          </div>
          <br/>
          <table class="table" align="center" style={{textAlign:"center",width:"90%"}}>
          <thead>
            <tr>
              <th scope="col">Hotel Name</th>
              <th scope="col">Price</th>
              <th scope="col">Address</th>
              <th scope="col">Contact</th>
              <th scope="col">Option</th>
            </tr>
            </thead>
              {hotels.map((e)=>
              {
              return(
              <tbody>
                  <tr>
                  <td>{e.name}</td>
                  <td>{e.price}</td>
                  <td>{e.address}</td>
                  <td>{e.contact}</td>
                  <td>
                      <button type="button" class="btn btn-warning"  onClick={() => editHotel(e)} >Edit</button>  
                      <button type="button" class="btn btn-danger" onClick={() => DeleteHotel(e.hotelId)}>Delete</button>
                  </td>
                  </tr>
              </tbody>
              );
              })}
           </table>
    </div>
  )
}
