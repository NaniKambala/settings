import React from "react";
import Enav from "./Navbar1";
import './style.css'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import  { useState } from 'react';



const Resumepage = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleFormClick = (e) => {
    // Prevent the dropdown from closing when clicking inside the form
    e.stopPropagation();
  };
    
    return(
        <div id="background" className=" container fluide px-3">
            <Enav/>
            <h1>My Resume</h1>
            <form action="">
            <div className='bg-white p-3 rounded w-90'>
                 <h4>Resume Attachment</h4><br></br>
                 <form action="">
                    
                        <label htmlFor="name"><strong> CV Attachment*</strong></label><br></br><br></br>
                        <input id="image" type="file" name="image"/>
                 </form>
             </div>
             <br></br>
             <div className='bg-white p-3 rounded w-90'>
                 <h4>Intro & Overview</h4><br></br>
                 <form action="">
                     <label htmlFor="paragraph"><strong>Overview*</strong></label>
                       <textarea  id="biobox"type="text" placeholder="Write somthing about you...."className='form-control rounded'/>
                       <p>Brief description for your profile. URLs are hyperlinked.</p>
                 </form>
             </div>
             <br></br>
             <div className='bg-white p-3 rounded w-90'>
                 <h4>Education</h4><br></br>
                 <form action="">
                      <Dropdown>
                      <Dropdown.Toggle variant="white" id="dropdown-basic">
                        Add Education
                      </Dropdown.Toggle>
                      <Dropdown.Menu show={showForm} onClick={handleFormClick}>
                        <Dropdown.Item>
                          {/* Your form */}
                          <div className='bg-white p-3 rounded w-90'>
                            <form action="" onClick={handleFormClick}>
                              <h4>Education Detail</h4>
                              <label htmlFor="title">Title*</label><br />
                              <input type="text" id="title" placeholder="Ug, Pg, etc." /><br />
                              <label htmlFor="academy">Academy</label><br />
                              <input type="text" id="academy" placeholder="ANU, Andhra University, etc." /><br />
                              <label htmlFor="year">Year*</label><br />
                              <input type="text" id="year" placeholder="2023..." /><br />
                              <label htmlFor="description">Description</label><br />
                              <input type="text" id="description" placeholder="About...." /><br /><br></br>
                              <button type="submit">Submit</button>
                            </form>
                          </div>
                        </Dropdown.Item>
                      </Dropdown.Menu>

                    </Dropdown>

                 </form>
             </div><br></br>
             <div className='bg-white p-3 rounded w-90'>
                 <h4>Skills & Experiance</h4><br></br>
                 <form action="">
                     <label htmlFor="paragraph"><strong>Add Skills*</strong></label>
                     <input type="text" placeholder="HTML,Jquery,webdesign"className='form-control rounded'/>
                     <label htmlFor="paragraph"><strong>Add Experiance*</strong></label>
                     <input type="text" placeholder="details"className='form-control rounded'/>
                 </form>
             </div>
             <br></br>
             <Button className="but" type="submit">Save</Button>
          </form>
        </div>
    )
}
export default Resumepage;