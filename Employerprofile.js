
import React, { useState } from "react";
import Enav from "./Navbar1";
import './style.css'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import FormSelect from "react-bootstrap/esm/FormSelect";


function Employerprofile(){
    const initialData = {
              Employername:'',
              Email:'',
              website:'',
              Foundeddate:'',
              Companysize:'',
              Phonenumber:'',
              Category:'',
              Aboutcompany:'',
              Network1:'',
              Network2:'',
              Address:'',
              Pincode:'',
              City:'',
              State:'',
              Country:'',
              Name:'',
              Designation:'',
              Semail:'',

    }
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [empData,setEmpData] = useState(initialData);
  const handleData = (e) =>{
    setEmpData({...empData, [e.target.name] : e.target.value});
  };

  const handleSubmit = (e) =>{
    e.preventDefault();

    fetch("http://127.0.0.1:8000/Employerapp/empprofile/",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
            body: JSON.stringify(empData),
        }).then((response) => {
                alert("Your data successfully saved");
                setEmpData(initialData);
                console.log(empData);
                return response.json();
            }).catch((error) => {
                console.error("Error:", error.message);
                
            });
    };
    
  

    return(
        <div id="background" className=" container fluide px-3">
            <Enav/>
            <h1>Profile</h1>
            <form onSubmit={handleSubmit} >
            <div className='bg-white p-3 rounded w-90'>
                 <i className=" bi bi-person fs-1 me-2"></i><br></br>
                 
                        <label htmlFor="name"><strong> Employer Name*</strong></label>
                        <input type="text" name="Employername" placeholder="Madhu"value={empData.Employername} className='form-control rounded' onChange={handleData}/>
                        <label htmlFor="mail"><strong> Email*</strong></label>
                        <input type="text" name="Email" placeholder="Madhu@gmail.com"value={empData.Email} className='form-control rounded' onChange={handleData}/>
                        <label htmlFor="Website"><strong> Website*</strong></label>
                        <input type="text" name="Website" placeholder="http://sitename.com" value={empData.Website} className='form-control rounded' onChange={handleData}/>
                        <label htmlFor="date"><strong> Founded Date*</strong></label>
                        <input type="date" name="Foundeddate" placeholder="dd-mm-yyyy"value={empData.Foundeddate} className='form-control rounded' onChange={handleData}/>
                        <label htmlFor="name"><strong> Company size*</strong></label>
                        <input type="number" name="Companysize" placeholder="700"value={empData.Companysize} className='form-control rounded' onChange={handleData}/>
                        <label htmlFor="name"><strong> Phone Number*</strong></label>
                        <input type="number" name="Phonenumber" placeholder="+91 4354567576" value={empData.Phonenumber} className='form-control rounded' onChange={handleData}/>
                        <label htmlFor="name"><strong> Category*</strong></label>
                        <input type="text" name="Category" placeholder="Account,Finance,Marketing....."value={empData.Category} className='form-control rounded' onChange={handleData}/>
                       <label htmlFor="paragraph"><strong>About Company*</strong></label>
                       <textarea  id="biobox"type="text"name="Aboutcompany" placeholder="Write somthing about you...." value={empData.Aboutcompany}className='form-control rounded' onChange={handleData}/>
                       <p>Brief description for your company. URLs are hyperlinked.</p>
                 
             </div>
             <br></br>
             <div className='bg-white p-3 rounded w-90'>
                 <h4>Social Media</h4>
                 
                        <label htmlFor="name"><strong> Network1</strong></label>
                        <input type="text" name="Network1" placeholder="#" value={empData.Network1} className='form-control rounded' onChange={handleData}/>
                       <label htmlFor="paragraph"><strong>Network2</strong></label>
                       <input type="text" name="Network2" placeholder="#" value={empData.Network2} className='form-control rounded' onChange={handleData}/>
                 
             </div>
             <br></br>
             <div className='bg-white p-3 rounded w-90'>
                 <h4>Address & Location</h4>
                 
                        <label htmlFor="name"><strong> Address*</strong></label>
                        <input type="text" name="Address" placeholder="Chowrastha,chandana,Gazipur sadar"value={empData.Address} className='form-control rounded' onChange={handleData}/>
                        <label htmlFor="name"><strong> Pin Code*</strong></label>
                        <input type="text" name="Pincode" placeholder="245354"value={empData.Pincode} className='form-control rounded'onChange={handleData}/>
                       <label htmlFor= "mySelect"><strong>Select city*</strong></label><br></br>
                        <select id="mySelect" name="City" value={selectedOption.City} onChange={handleSelectChange}>
                            <option value="">city    </option>
                            <option value="Guntur">Guntur</option>
                            <option value="Vijayawada">Vijayawada</option>
                            <option value="Vizag">Vizag</option>
                            <option value="Tenali">Tenali</option>
                            <option value="Nellur">Nellur</option>
                        </select>
                        <br></br>
                        <label htmlFor="mySelect"><strong>select state*</strong></label><br></br>
                        <select id="mySelect"  name="State" value={selectedOption.State} onChange={handleSelectChange}>
                            <option value="">state</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="kerala">Kerala</option>
                            <option value="karnataka">Karnataka</option>
                        </select>
                        <br></br>
                        <label htmlFor="mySelect"><strong>select country*</strong></label><br></br>
                        <select id="mySelect" name="Country" value={selectedOption.Country} onChange={handleSelectChange}>
                            <option value="India">India</option>
                            <option value="Australia">Australia</option>
                            <option value="USA">USA</option>
                            <option value="Austria">Austria</option>
                            <option value="Brazil">Brazil</option>
                            <option value="canada">Canada</option>
                        </select>
                 
             </div><br></br>
             <div className='bg-white p-3 rounded w-90'>
                 <h4>Members</h4>
                 
                        <label htmlFor="name"><strong> Add & Remove Members</strong></label><br></br>
                       <label htmlFor="paragraph"><strong>Name*</strong></label>
                       <input type="text" name="Name" placeholder="product designer"value={empData.Name} className='form-control rounded' onChange={handleData}/>
                       <label htmlFor="paragraph"><strong>Designation*</strong></label>
                       <input type="text" name="Designation" placeholder="Account Manager"value={empData.Designation} className='form-control rounded' onChange={handleData}/>
                       <label htmlFor="mail"><strong>Email*</strong></label>
                       <input type="mail" name="Semail" placeholder="new@gmail.com" value={empData.Semail} className='form-control rounded' onChange={handleData}/><br></br>
                       <button  className="but"type="submit">Remove</button>
                 
             </div><br></br>
             <button type="submit" onSubmit={handleSubmit} className="but">Save</button>&nbsp;&nbsp;<button className="but1" type="submit" >Cancel</button>
             </form>
        </div>
    )
}

export default Employerprofile;