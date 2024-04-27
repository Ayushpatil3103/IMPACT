import React from 'react'
import downimg from "./WhatsApp Image 2024-02-01 at 23.42 1.png"
import aboutngo from "./_04e1d67c-287c-4ac6-a85e-ee005281770d-removebg-preview (1).png"
import Logo from "./images/2-removebg-preview 1.png"
import { Link } from 'react-router-dom'
import "./home.css"
import Navbaar from '../Navbar/Navbar'
import RankTable from '../Rank/Rank'
import Footer from '../Footer/Footer'
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
           
       <button style={{fontSize:'24px'}}>  <Link to='c'> <p>Volunteer Signin</p></Link> </button>
            
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
      
      <section id = "About" className="cor">

        <div id="row"  data-aos="fade-right">
            <h2>What is Impact Harbor?</h2>
            <br/>
            <p>ImpactHarbor believes in the transformative potential of collective action to address community challenges. Recognizing volunteers as vital to NGO operations, the platform simplifies the volunteer recruitment process. NGOs can post opportunities, and volunteers can easily find and apply based on interests, skills, and availability. ImpactHarbor fosters community among volunteers and NGOs, encouraging collaboration. Its user-friendly interface streamlines volunteer engagement, aiding NGOs in attracting and retaining dedicated individuals. By leveraging technology and community involvement, ImpactHarbor aims to create a more connected society, where collective efforts tackle pressing issues effectively.</p>
        </div>

        <div id ="aboutimg" data-aos="fade-left">
      <img src={Logo}></img>
        </div>

   </section>
   <RankTable/>
   <Footer/>
    </div>
  )
}

export default Home


