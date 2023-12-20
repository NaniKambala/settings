import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './Home';
import Studentprofile from './Student';
import Resumepage from './Resume';
import './style.css'
import Settingspage from './Settings';
import Studentsidebar from './Studentsidebar';
import Main from './Main';
import Employerprofile from './Employerprofile';

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="" element={<Main/>}/>
        <Route path="/studentsidebar" element={<Studentsidebar/>}/>
        <Route path='/sidebar' element={<Sidebar/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/studentprofile" element={<Studentprofile/>} />
        <Route path="/settings" element={<Settingspage/>}/>
        <Route path="/resume" element={<Resumepage/>}/>
        <Route path='/employerprofile' element={<Employerprofile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
