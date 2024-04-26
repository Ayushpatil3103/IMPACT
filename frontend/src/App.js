import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import { createClient } from "@supabase/supabase-js";
import { supabase } from './supabase';

import OrganizationSignin from './Components/Org-Sign/OrganizationSignIn';
import OrganizationSignup from './Components/Org-Sign/OrganizationSignup';
import VolunteerSignin from './Components/Vol-Sign/volsignin';
import VolunteerSignup from './Components/Vol-Sign/volsignup';
import ProfileDashboard from './Components/VolDashboard/Dashvol';
import NgoProfileDashboard from './Components/NGODashboard/Dashngo';

function App() {
  return (
    <div className="App">
      
      <Router>
          
      
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path="/signup" element={<OrganizationSignup />} />
          <Route path="/signin" element={<OrganizationSignin />} />
          <Route path="c" element = {<VolunteerSignup/>} />
          <Route path="/vol/signin" element = {<VolunteerSignin/>} />
     <Route  path="/profile" element={<ProfileDashboard/>}/>
     <Route  path="/ngoprofile" element={<NgoProfileDashboard/>}/>
    
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
