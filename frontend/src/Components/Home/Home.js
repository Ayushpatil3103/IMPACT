import React from 'react'
import downimg from "./WhatsApp Image 2024-02-01 at 23.42 1.png"
import aboutngo from "./_04e1d67c-287c-4ac6-a85e-ee005281770d-removebg-preview (1).png"
import Logo from "./images/2-removebg-preview 1.png"
import { Link } from 'react-router-dom'
import "./home.css"
import Navbaar from '../Navbar/Navbar'
const Home = () => {
  return (
    <div>
      <section id='Navbar'>
<Navbaar/>
      </section>
      <section id='Home'>
        <div id="aboutngo">
        <div id='vol'>   
          <h1>Volunteer.Connect.Impact</h1>  
          <br></br>
          <h3>Let's get Started</h3>
          <br></br>
          <div id='Join'>
           
       <button style={{fontSize:'24px'}}>  <Link to='c'> <p>Volunteer</p></Link> </button>
            
            <button style={{fontSize:'24px'}}><Link to='/signup'><p>NGO Sign in</p></Link></button>
           
          </div>
       </div>
          <div>
          <img src={aboutngo}></img>
  </div>
  </div>
 
        <div id='downimg'> 
            <img src={downimg}></img>
        </div>
      </section>
      
      <section id = "About" className="container">

        <div id="row"  data-aos="fade-right">
            <h2>What is Impact Harbor?</h2>
            <br/>
            <p>kajdd csakknnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn</p>
        </div>

        <div id ="aboutimg" data-aos="fade-left">
      <img src={Logo}></img>
        </div>

   </section>
    </div>
  )
}

export default Home


