import React,{Component} from 'react';
class Training extends Component{
constructor() {
  super();

  this.state = {
  firstname:"",
  Lastname:"",
  email:"",
  password:"",
  age:"",
  mobailno:"",
  dateofbirth:"",
  address:"",
  gender:""
  }
}
getFirstName=(e)=>{
    this.setState(
        {
        firstname:e.target.value
        }
    )

    }
    getLastName=(e)=>{
        this.setState(
            {
            Lastname:e.target.value
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
    getpwd=(e)=>{
        this.setState(
            {
                password:e.target.value
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
    getMobailNo=(e)=>{
        this.setState(
            {
            mobailno:e.target.value
            }
        )
    }
    getDateOfBirth=(e)=>{
        this.setState(
            {
            dateofbirth:e.target.value
            }
        )
    }
    getAddress=(e)=>{
        this.setState(
            {
            address:e.target.value
            }
        )
    }
    getGender=(e)=>{
        this.setState(
            {
            gender:e.target.value
            }
        )
    }
    submit=(e)=>{
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        return(
           
            <div className="box1">
                <center>
                    <h1 className='box2'>Training Registation Form </h1><hr></hr>
                <form  onSubmit={this.submit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="htmlForm-label"> First Name   :</label>
    <input type="text" className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='enter full name' onChange={this.getFirstName}/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="htmlForm-label"> Last Name :</label>
    <input type="text" className="htmlForm-control" id="exampleInputPassword1" placeholder='enter Last name' onChange={this.getLastName}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="htmlForm-label">  Email :</label>
    <input type="email address" className="htmlForm-control" id="exampleInputPassword1" placeholder='enter Email' onChange={this.getEmail}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="htmlForm-label"> Password :</label>
    <input type="text" className="htmlForm-control" id="exampleInputPassword1" placeholder='enter password' onChange={this.getpwd}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="htmlForm-label"> Age :</label>
    <input type="number" className="htmlForm-control" id="exampleInputPassword1" placeholder='enter age' onChange={this.getAge}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="htmlForm-label"> Mobail No :</label>
    <input type="number" className="htmlForm-control" id="exampleInputPassword1" placeholder='enter mobail no' onChange={this.getMobailNo}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="htmlForm-label"> Date of Birth :</label>
    <input type="date" className="htmlForm-control" id="exampleInputPassword1" placeholder='enter Date of Birth' onChange={this.getDateOfBirth}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="htmlForm-label"> Address :</label>
    <input type= "text" className="htmlForm-control" id="exampleInputPassword1" placeholder='enter Address' onChange={this.getAddress}/>
  </div>
    <lable htmlFor=" ">Gender: :</lable>
   Female: <input type="checkbox" className="Gender" value="Female" onChange={this.getGender} /> 
   Male: <input type="checkbox" className="Gender" value="Male" onChange={this.getGender} /> 
  <div className='mb-3'>
  <button type= "submit" className="btn btn-primary m-3">Registation</button>
  </div>
</form>
</center>
            </div>
        )
    }
}
export default Training;