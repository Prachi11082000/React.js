import React,{Component} from "react";
import {userData} from '../UserData';
import Form from './Form';
import {Button} from 'react-bootstrap';
class UserData extends Component{
    constructor(){
        super();
      this.state={
        users:userData,
        show:false
      }  
    }
    UpdateUser=(user)=>{
        const users=[...this.state.users];
        const index=users.indexOf(user);
        users[index].title="updated";
        this.setState({users})
    }
   DeleteUser=(person)=>{
    console.log(person);
    const users=this.state.users.filter((u)=>u.id!==person.id)
    this.setState({users});
   }
   adduser=(user)=>{
   const users=[...this.state.users];
   users.unshift(user);
   this.setState({users});
   }
   handleShow=()=>{
    this.setState({show:true});
   }
    handleClose=()=>{
    this.setState({show:false});
   }

   render(){
      return(
          <div>
            <Button variant="primary m-4" onClick={this.handleShow}>
                Add User
            </Button>
            <Form show={this.state.show} handleClose={this.handleClose} adduser={this.adduser}/>
                <table className="container table">
                    <thead>
                        <tr>
                            <th>Id</th>
                             <th>UserId</th>
                             <th>Title</th>
                             <th>Body</th>
                             <th>Update</th>
                             <th>Delete</th>
                         </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((user)=>(
                            <tr key={user.id}>
                                <td>{user.id}</td>
                             <td>{user.userId}</td> 
                             <td>{user.title}</td>
                             <td>{user.body}</td>
                          <td><button className="btn btn-primary m-2" onClick={()=>this.UpdateUser(user)}>Update</button></td>
                             <td><button className="btn btn-secondary m-2" onClick={()=>this.DeleteUser(user)}>Delete</button></td>
                            </tr>
                        )
                        )
                      }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default UserData;