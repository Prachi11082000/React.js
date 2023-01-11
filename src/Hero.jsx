import React from 'react'
import {Link} from "react-router-dom";
export default function Hero(props) {
  return (
    <div className={props.cName}>
        <img src="https://images.unsplash.com/photo-1532931899774-fbd4de0008fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHJvYWQlMjB0cmlwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1300&h=500"/>
      <div className='hero-text'>
       <h1>{props.title}</h1>
       <p>{props.text}</p>
       <a  href={props.url} className={props.btnclass}>
        {props.buttonText}</a>
       {/* <a href="travls"></a> */}
    </div>
    </div>
  )
}

