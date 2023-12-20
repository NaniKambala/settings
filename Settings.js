import React, { useState } from "react";
import Enav from "./Navbar1";
import './style.css'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';


function Settingspage(){
    const initialData={
        Firstname:'',
        Lastname:'',
        Email:'',
        Password:'',
        Oldpassword:'',
        Newpassword:'',
        Confirmpassword:''

    }
    const [inputData,setInputData] = useState(initialData)

    const handleData = (e) =>{

        setInputData({...inputData,[e.target.name]: e.target.value});

    };
    const handleSubmit = (e) =>{
        e.preventDafault();
        fetch("http://127.0.0.1:8000/settings/",{
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body : JSON.stringify(inputData),
        }).then((response) =>{
            alert('Your data successfully saved');
            setInputData(initialData);
            console.log(inputData);
            return response.json();
        }).catch((error) => {
            console.error("Error",error.message);
        });
    }

    return(
        <div id="background" className=" container fluide px-3">
            <Enav/>
            <h1>Account Settings</h1>
            <form onSubmit={handleSubmit}>
            <div className='bg-white p-3 rounded w-90'>
                 <h4>Edit & Update</h4>
                 
                        <label htmlFor="name"><strong> First Name*</strong></label>
                        <input type="text" name="Firstname" placeholder="Madhu" value={inputData.Firstname} className='form-control rounded'onChange={handleData} />
                       <label htmlFor="paragraph"><strong>Last Name*</strong></label>
                       <input type="text"name="Lastname" placeholder="latha"value={inputData.Lastname} className='form-control rounded'onChange={handleData} />
                       <label htmlFor="paragraph"><strong>Email*</strong></label>
                       <input type="text"name="Email" placeholder="abcd@gmail.com"value={inputData.Email} className='form-control rounded'onChange={handleData} />
                       <label htmlFor="paragraph"><strong>Password*</strong></label>
                       <input type="text"name="Password" placeholder="bghf@#44566"value={inputData.Password} className='form-control rounded'onChange={handleData} /><br></br>
                       <Button  className="but"type="submit">Save&Update</Button>
                    
                 
             </div>
             <br></br>
             <h1>Change Password</h1><br></br>
             <div className='bg-white p-3 rounded w-90'>
                 
                        <label htmlFor="name"><strong> Old Password</strong></label>
                        <input type="text"name="Oldpassword" placeholder="dgvhh@#46757"value={inputData.Oldpassword} className='form-control rounded'onChange={handleData} />
                       <label htmlFor="paragraph"><strong>New Password</strong></label>
                       <input type="text"name="Newpassword" placeholder="hjgjhbj@##5467"value={inputData.Newpassword} className='form-control rounded' onChange={handleData}/>
                       <label htmlFor="paragraph"><strong>Confirm Password</strong></label>
                       <input type="text"name="Confirmpassword" placeholder="nmbhg@#$$3456"value={inputData.Confirmpassword} className='form-control rounded' onChange={handleData}/><br></br>
                       <Button  className="but"type="submit" onSubmit={handleSubmit}>Save & Update</Button>
                    
                 
             </div>
            </form>


        </div>
        );
        }
export default Settingspage;