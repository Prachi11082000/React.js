import React from 'react'
 import Destination from './Destination';
import Navbar from "./Navbar"
import Hero from './Hero'
import Destination2 from './Destination2';
import Trip from './Trip';
import TripData from './TripData';
import Footer from './Footer';
 function Home() {
  return (
    <div>
<Navbar/>
    <Hero title="Your Journey Your Story" text="Choose Your Favourite Destination" buttonText="Travel Plane"url="/"btnclass="show"/>
   <Destination/>
   <Destination2/>
   <Trip/>
   <TripData/>
   <Footer/>
    </div>
  )
}
export default Home;