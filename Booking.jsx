import React, { useEffect, useState } from 'react'
import'./About.css'
import axios from'axios'
import Footer from './Footer';
export default function Booking() {
  const [name,setname]=useState("");
  const [packege,setpackege]=useState(0);
  const [date,setdate]=useState(0)
  const [data,setdata]=useState([])
  const userdata=()=>{
    axios.get("https://retoolapi.dev/mrmVCz/data").then((Response)=>{
      if(Response.status==200){
        setdata(Response.data)
      }
    })
  }
  useEffect(()=>{
   userdata();
  },[]);
  const save=(e)=>{
    e.preventDefault();
  const obj={}
  obj.name=name
  obj.package=packege
  obj.date=date
  console.log(obj)
  axios.post("https://retoolapi.dev/mrmVCz/data",obj).then((Response)=>{
    if(Response.status==200){
    userdata();
    }
  })
  }
  return (
    <div>
     
        <img className='booking' src="https://media.istockphoto.com/id/1318653742/photo/online-holiday-reservation-booking-on-internet-with-laptop-on-turquoise-background.jpg?s=612x612&w=0&k=20&c=2PKM-zoukBaxbedocNY8WmXUl0noz-WuaKVQD_cKZHc="></img>
     <div className='booking-he'>
      <h1 className='booking-heading'>Enjoy 30% Off On First Trip</h1>
      <form onSubmit={save}>
      <div className='input'>

    <input type="text" placeholder='Destination' onChange={(e)=>{setname(e.target.value)}}/>
    <input type="text" placeholder='package'onChange={(e)=>{setpackege(e.target.value)}}/>
   
   
      <input type="date" placeholder='date' onChange={(e)=>{setdate(e.target.value)}}/>
      
      </div>
      <button className='btn btn-light'>Booking</button>
      </form>
     </div>
    <Footer/>
    </div>
  )
}
