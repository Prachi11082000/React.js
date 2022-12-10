import axios from "axios";
import React, { useState, useEffect } from "react";
const Data = () => {
  const [email, setemail] = useState("");
  const [fullname, setfullname] = useState("");
  const [age, setage] = useState("0");
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios.get("https://retoolapi.dev/hrbZ9C/data").then((response) => {
      setdata(response.data);
    })
  }, []);
  const save = (e) => {
    e.preventDefault();
    const obj = {};
    obj.email = email
    obj.full_name = fullname
    obj.age = age
    console.log(obj);

    axios.post = ("https://retoolapi.dev/hrbZ9C/data", obj).then((response) => {
      console.log(response);
      setdata(data, ...response.data);
    }).catch((err) => {
      console.log(err)
    })
  }
  const del = (id) => {
    axios.delete(`https://retoolapi.dev/hrbZ9C/data/${id}`).then((resp) => {
      console.log(resp);
      if (resp.status == 200) {
        const users = data.filter((d) => d.id !== id)
        setdata(users)

      }
    }).catch((err) => {
      console.log(err);
    })
    alert(id)
  }

  const upd = (id) => {
    const obj = { id:7, full_name: "prachi", email:"prachi@gmail.com", age:23 }
    axios.put(`https://retoolapi.dev/hrbZ9C/data/${id}`, obj).then((response) => {
      console.log(response);
      if (response.status == 200) {
        const users = data.filter((d) => d.id !== id)
        setdata(users)

      }
    }).catch((err) => {
      console.log(err);
    })
  }
  return (
    <div>
      <center>
        <form onSubmit={save}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="htmlForm-label">full name</label>
            <input type="text" className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => { setfullname(e.target.value) }} />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="htmlForm-label">email</label>
            <input type="email address" className="htmlForm-control" id="exampleInputPassword1" onChange={(e) => { setemail(e.target.value) }} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="htmlForm-label">age</label>
            <input type="number" className="htmlForm-control" id="exampleInputPassword1" onChange={(e) => { setage(e.target.value) }} />
          </div>

          <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
      </center>
      <table className="table">
        <thead>
          <tr>
            <th >id</th>
            <th >Full name</th>
            <th >email</th>
            <th >age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.full_name}</td>
              <td>{d.email}</td>
              <td>{d.age}</td>
              <td><button className="btn btn-primary" onClick={() => del(d.id)}>Delete</button></td>
              <td><button className="btn btn-secondary" onClick={() => upd(d.id)}>edit</button></td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}
export default Data;