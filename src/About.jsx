import React from 'react'
import Hero from './Hero'
import Navbar from "./Navbar"
import Footer from './Footer'
import './About.css'
import {Link}from'react-router-dom';
export default function About() {
  return (
    <div >
      <Navbar/>
     
   <img className='box1' src="https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704__480.jpg"></img>
    <div>
   <h1 class='box2'>About</h1>
   <div className='m'>
    <h1>Amazing places to enjoy your travel </h1>
    </div>
    <div className='box8'>
    <div className='box7'>
    <h3>  <a href="Kathmandu">Kathmandu</a></h3>
   <p>
Culture and Heritage Sites

Museums in Kathmandu have rich collections of archaeological, historical and artistic importance and galleries display art work of the past and present. Full of art, architecture and culture, the Kathmandu Valley is the prime destination for the tourists.</p>
    </div>
    <div className='box9'>
      <h3>Manali</h3>
      <p>What is the famous of Manali?
Image result for manali famous 4 line info
It is a rustic enclave known for its cool climate and snow-capped mountains, offering respite to tourists escaping scorching heat of the plains. The tourism industry in Manali started booming only in the early 20th century, mainly because of its natural bounties and salubrious</p>
    </div>
    <div className='box10'>
      <h3>South India</h3>
      <p>The port of Visakhapatnam is renowned for being home to the oldest shipyard in all of India, and with a plethora of manmade wonders and natural spectacles, Visakhapatnam is a must-visit tourist destination in South India. You simply cannot go to a coastal city like Visakhapatnam and not see its beaches</p>
    </div>
    <div className='box11'>
      <h3>Kerla</h3>
      <p>What is Kerala famous for?
Kerala is a popular destination for both domestic as well as foreign tourists. Kerala is well known for its beaches, backwaters in Alappuzha and Kollam, mountain ranges and wildlife sanctuaries.</p>
    </div>
    <div className='box12'>
      <h3>Simla</h3>
      <p>The town is famous for pleasant walking experiences on hillsides surrounded by pine and oak forests. This capital city of Himachal Pradesh is famous for The Mall, ridge, and toy train. With colonial style buildings, the town has relics of ancient past that lend it a distinct look.</p>
    </div>
    <div className='box13'>
      <h3>Gova</h3>
      <p>
In ancient literature, Goa was known by many names, such as Gomanchala, Gopakapattana, Gopakapattam, Gopakapuri, Govapuri, Govem, and Gomantak. Other historical names for Goa are Sindapur, Sandabur, and Mahassapatam.</p>
    </div>
    <div className='box14'>
    <h3>Jammu-Kashmir</h3>
    <p>The natural beauty and picturesque locations have made it a favoured destination for tourists across the world. Jammu is famous for its temples, while Kashmir Valley is known for its lakes and gardens. J&K has agro-climatic conditions best suited for horticulture and floriculture</p>
    </div>
    <div className='box15'>
      <h3>Mahableshvar</h3>
      <p>

Mahabaleshwar is famous for its Strawberry. Also Mahabaleshwar, essentials include farm fresh strawberries and raspberries that the town is known for. Also you can take home jellies, honey, jams and more. One can also shop for handicrafts, leather items, Kolhapuri footwear and much more from the Town Bazaar.</p>
    </div>
    <div className='box16'>
      <h3>Ambritsar</h3>
      <p>
One of the most pristine cities with Guru-vaani humming from the Gurudwaras, Amritsar is renowned world over for the Golden Temple, also known as Harmandir Sahib Gurudwara - the holiest Gurdwara. It's at the end of a causeway, surrounded by the sacred Amrit Sarovar tank (lake), where pilgrims bathe.</p>
    </div>
   <div className='box17'>
    <h3>Maharastra</h3>
    <p>Maharashtra is one of India's largest commercial and industrial centres, which has led to its being called the gateway of India. Maharashtra is also famous for its culture and beauty. The ancient cave paintings found at Ajanta and Ellora are UNESCO World Heritage sites and popular tourist destinations.</p>
   </div>
   </div>
   <div className='box18'>
  <h3><Link to="/booking">Booking</Link></h3>
   </div>
   </div>
   {/* <Footer/> */}
    </div>
  )
}
