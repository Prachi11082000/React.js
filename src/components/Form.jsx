import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
const Form = (props) => {
    const [show, setshow] = useState(props.show);
const [userId,setUserId]=useState(0);
const [body,setBody]=useState("");
const [title,setTitle]=useState("");
const adduser=(e)=>{
  e.preventDefault();
  const obj={};
  obj.userId=userId;
  obj.body=body;
  obj.title=title;
  props.adduser(obj);
  props.handleClose();

}
return (
    <div className='container'>
        <>


            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form onSubmit={adduser}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">UserID</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setUserId(e.target.value)}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Title</label>
    <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e)=>setTitle(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Body</label>
    <input type="text" class="form-control" id="exampleInputPassword1"onChange={(e)=>setBody(e.target.value)}/>
  </div>
  
  <button type="submit" class="btn btn-primary m-3" onClick={props.handleClose}>Submit</button>
  <button type="button" class="btn btn-primary m-3"onClick={props.handleClose}>Close</button>
</form>
                </Modal.Body>
                
            
            </Modal>
        </>
    </div>

)
}
export default Form;