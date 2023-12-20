import { Button } from 'bootstrap';
import React, { useState } from 'react';
import './Recruiter.css'

function Recruiter(){
    const [members,setMembers] = useState();

    const handlChange = (e)=>{
        console.log(e.target.value);
        setMembers(e.target.value);
    }
    return(
        <>
        
        <div className='d-flex justify-content-start align-items-center  vh-100'>
             <div className='main'>
                <video src='C:\Users\rknim\Downloads\computer_keyboard_-_3174 (540p).mp4' autoPlay loop muted/>
             </div>
             <div className='bg-white p-3 rounded w-30'>
                 <h2>Recruiter Page</h2>
                 <form action="">
                    
                        <label htmlFor="name"><strong> Full Name</strong></label>
                        <input type="text" placeholder="Full Name"className='form-control rounded-0'/>
                       <label htmlFor="name"><strong>Name of your company</strong></label>
                       <input type="text" placeholder="company name"className='form-control rounded-0'/>
                       <input type='checkbox' className='form-check-input'/><label htmlFor='text'>This is consultancy</label><br></br>
                       <label htmlFor=''><strong>Number of employees in your company</strong></label><br></br>
                       <input type='radio' name='members'value="10-50"  onChange={handlChange}className='form-check-input'/><label>10-50</label>&nbsp;&nbsp;&nbsp;
                       <input type='radio' name='members'value="50-100" onChange={handlChange}className='form-check-input' /><label> 50-100</label>&nbsp;&nbsp;&nbsp;
                       <input type='radio' name='members'value="100-150" onChange={handlChange}className='form-check-input'/><label> 100-150</label>&nbsp;&nbsp;&nbsp;
                       <input type='radio' name='members'value="150 above"onChange={handlChange}className='form-check-input'/><label>150 above</label><br></br>
                       <input type='checkbox'className='form-check-input'/><label>Agree terms & conditions</label><br></br>
                       <button type='submit' className='btn btn-success w-100 ' > <strong>Post the job</strong></button>
                 </form>
             </div>
        </div>
        </>
    )
}
export default Recruiter;