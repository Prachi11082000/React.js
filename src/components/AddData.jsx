import axios from "axios";
import React, { useState,useEffect } from "react";
const AddData=()=>{
    const[email, setemail]= useState("");
    const [fullname, setfullname]= useState("");
    const[age, setage]= useState("")
    const[data,setdata]= useState([]);
    useEffect(()=>{
        axios.get("https://retoolapi.dev/mgeBuB/data").then((response)=>{
            setdata(response.data);
        })
    },[]);
    const save=(e)=>{
     e.preventDefault();
     const obj={};
     obj.email=email
     obj.full_name=fullname
     obj.age=age
     console.log(obj);

    axios.post=("https://retoolapi.dev/mgeBuB/data",obj).then((response)=>{
        console.log(response);
    
        setdata(data,...response.data);
    }).catch((err)=>{
        console.log(err);
    })
   
}
    return(
        <div>
            <center>
            <form onSubmit={save}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Full name</label>
    <input type="text" className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setfullname(e.target.value)}}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="htmlForm-label">email</label>
    <input type="email addresss" className="htmlForm-control" id="exampleInputPassword1" onChange={(e)=>{setemail(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="htmlForm-label">age</label>
    <input type="number" className="htmlForm-control" id="exampleInputPassword1" onChange={(e)=>{setage(e.target.value)}}/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</center>
<table className="table">
  <thead>
    <tr>
    <th>id</th>
      <th >full Name</th>
      <th >email</th>
      <th >age</th>
    </tr>
  </thead>
  <tbody>
   {data.map((d)=>(
    <tr key={d.id}>
      <td>{d.id}</td>
      <td>{d.full_name}</td>
      <td>{d.email}</td>
      <td>{d.age}</td>
       <td><button className="btn btn-primary"onClick={()=>this.delete(d.id)}>Delete</button></td>
       <td><button className="btn btn-secondary"onClick={()=>this.update(d.id)}>Update</button></td>
       </tr>
    ))}
  
  </tbody>
</table>
        </div>
   
    )
}
export default AddData;