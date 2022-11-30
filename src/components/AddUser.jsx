import React, {Component} from "react";
class AddUser extends Component{
    constructor(){
        super();
        this.state={
            username: "",
            age: 0,
            password: "",
            email: ""
        }
    }
    getUserName=(e)=>{
        this.setState(
            {
                username:e.target.value
            }
        )
    }
    getAge=(e)=>{
        this.setState(
            {
                age:e.target.value
            }
        )
    }
    getpwd=(e)=>{
        this.setState(
            {
                password:e.target.value
            }
        )
    }
    getEmail=(e)=>{
        this.setState(
            {
                email:e.target.value
            }
        )
    } 
    submit=(event)=>{
        event.preventDefault();
        console.log(this.state);
    }
    render(){
        return(
            <div>
                <h1>class component form</h1>
                <form onSubmit={this.submit} method="GET">
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter UserName" onChange={this.getUserName}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputAge1" className="form-label">age</label>
    <input type="number" className="form-control" id="exampleInputAge1" placeholder="Enter age"onChange={this.getAge}/>
  </div>
 
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">password</label>
    <input type="number" className="form-control" id="exampleInputPassword1"placeholder="Enter password"onChange={this.getpwd}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="from-lable">Email address</label>
    <input type="email"className="from-control" id="exampleInputEmail1" placeholder=" Enter email"onChange={this.getEmail}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  </div>
        )
        }
        }
        export default AddUser;
    
