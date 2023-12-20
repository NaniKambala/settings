import React from "react";
import './style.css'
import Sidebar from "./Sidebar";
import Studentprofile from "./Student";
import Settingspage from "./Settings";
import Enav from "./Navbar1";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Resumepage from "./Resume";

function Main() {
  return (
    <div className='container-fluid min-vh-100'>
      <div className='row'>
        <div className='col-2 bg-white vh-100'>
          <Sidebar/>
        </div>
        <div className='col-auto'>
               <Home/>
        </div>
      </div>
    </div>
 
    
    
      );
}

export default Main;