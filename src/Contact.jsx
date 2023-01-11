import React,{useState,useEffect} from 'react'
import axios from'axios'
import Footer from './Footer'
import Navbar from './Navbar'
import './Footerstyle.css'
export default function Contact() {
  const [name,setname]=useState("")
   const [email,setemail]=useState("")
   const [subject,setsubject]=useState("")
   const [query, setquery]=useState("")
   const [data,setdata]=useState([])
   const getuser=()=>{
    axios.get("https://retoolapi.dev/2vJocT/data").then((Response)=>{
      if(Response.status==200){
        setdata(Response.data)
      }
    })
   }
   useEffect(()=>{
    getuser();
   },[])
   const save=(e)=>{
    e.preventDefault();
    const data={}
    data.name=name 
    data.email=email
    data.subject=subject
    data.query=query
    console.log(data)
    axios.post ("https://retoolapi.dev/2vJocT/data",data).then((Response)=>{
      if(Response.status==200){
       getuser();
      }
    })
   }
   
 
  
  return (
    <div>
      <Navbar/>
       <div className='from-container'>
        <img className="a"src="https://assets.sentinelassam.com/h-upload/2021/03/05/205580-monabarie.jpg"></img>
        <div className='for'>
          <div className='box6'>
          <h1>Contact</h1>
          </div>
        <h1>Send a massage to us!</h1>
        </div>
        </div>
        
         <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">

          <div className="col-lg-6">

            <div className="row">
              <div className="col-md-12">
                <div className="info-box">
                  <i className="bx bx-map"></i>
                  <h3>Our Address</h3>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-envelope"></i>
                  <h3>Email Us</h3>
                  <p>info@example.com<br></br>contact@example.com</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-phone-call"></i>
                  <h3>Call Us</h3>
                  <p>+1 5589 55488 55<br></br>+1 6678 254445 41</p>
                </div>
              </div>
            </div>

          </div>

          <div className="col-lg-6">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form" onSubmit={save}>
              <div className="row">
                <div className="col form-group">
                  <input type="text" name="Name" className="form-control" id="name" placeholder="enter Name" onChange={(e)=>{setname(e.target.value)}} required/>
                </div>
                <div className="col form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="enter Email" onChange={(e)=>{setemail(e.target.value)}} required/>
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" onChange={(e)=>{setsubject(e.target.value)}} required/>
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" onChange={(e)=>{setquery(e.target.value)}} required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
                </div>
            </form>
          </div>

        </div>

      </div>
    </section>

 
<Footer/>
    </div>
  


        // </div>
    //    </div>
    // </div>
   
  )
}
