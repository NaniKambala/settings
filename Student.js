import React, { useState } from "react";
import Enav from "./Navbar1";
import './style.css';

function Studentprofile() {
    const initialData = {
        Fullname: '',
        gender:'',
        Dateofbirth:'',
        Mailid:'',
        Bio: '',
        Network1: '',
        Network2: '',
        Address: '',
        country: '',
        state: '',
        city: '',
        Zipcode: '',
    };

    const [inputData, setInputData] = useState(initialData);

    const handleData = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://127.0.0.1:8000/Newapp/getmethod/", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(inputData),
        }).then((response) => {
                alert("Your data successfully saved");
                // Optional: Reset the form after successful submission
                setInputData(initialData);
                console.log(inputData);
                return response.json();
            }).catch((error) => {
                console.error("Error:", error.message);
                // Handle errors as needed
            });
    };

    return (
        <div id="background" className="container fluide px-3">
            <Enav/>
            <h1>My Profile</h1>
           <form onSubmit={handleSubmit}>
            <div className='bg-white p-3 rounded w-90'>
                <i className="bi bi-person fs-1 me-2"></i><br></br>
                    <label htmlFor="name"><strong> Full Name*</strong></label>
                    <input type="text" placeholder="Madhu" className='form-control rounded' name='Fullname' value={inputData.Fullname} onChange={handleData} />
                    <label htmlFor="gender"><strong> Gender*</strong></label><br></br>
                    <input type="radio" name="gender" value="Male"  onChange={handleData}/>
                    <label>Male</label>&nbsp;&nbsp;
                    <input type="radio" name="gender" value="Female"  onChange={handleData}/>
                    <label>Female</label><br></br>
                    <label htmlFor="date of birth"><strong> Date of birth*</strong></label>
                    <input type="date" placeholder="dd-mm-yyyy" className='form-control rounded' name='Dateofbirth' value={inputData.dateofbirth} onChange={handleData} />
                    <label htmlFor="mail"><strong> Mail ID*</strong></label>
                    <input type="e-mail" placeholder="abc@gmail.com" className='form-control rounded' name='Mailid' value={inputData.Mailid} onChange={handleData} />
                    <label htmlFor="paragraph"><strong>Bio*</strong></label>
                    <textarea id="biobox" type="text" placeholder="Write something about you...." className='form-control rounded' name='Bio' value={inputData.Bio} onChange={handleData} />
                    <p>Brief description for your profile. URLs are hyperlinked.</p>
            </div>
            <br></br>

            <div className='bg-white p-3 rounded w-90'>
                <h4>Social Media</h4>
                    <label htmlFor="name"><strong> Network1</strong></label>
                    <input type="text" placeholder="#" className='form-control rounded' name='Network1' value={inputData.Network1} onChange={handleData} />
                    <label htmlFor="paragraph"><strong>Network2</strong></label>
                    <input type="text" placeholder="#" className='form-control rounded' name='Network2' value={inputData.Network2} onChange={handleData} />
            </div>
            <br></br>
            <div className='bg-white p-3 rounded w-90'>
                <h4>Address & Location</h4>
                
                    <label htmlFor="name"><strong> Address*</strong></label>
                    <input type="text" placeholder="House Number.173/5-63,Phase Number-3, Dwaraka Nagar,Visakhapatnam,Andhra Pradesh. " 
                    className='form-control rounded' name="Address" value={inputData.Address} onChange={handleData} /><br></br>
                    <label htmlFor="name"><strong> Country*</strong></label>
                    <input type="text" placeholder="India" className='form-control rounded' name='country' value={inputData.country} onChange={handleData} /><br></br>
                    <label htmlFor="name"><strong> State* </strong></label>
                    <input type="text" placeholder="Andhra Pradesh" className='form-control rounded' name='state' value={inputData.state} onChange={handleData} /><br></br>
                    <label htmlFor="name"><strong> city*</strong></label>
                    <input type="text" placeholder="Vizag" className='form-control rounded' name='city' value={inputData.city} onChange={handleData} /><br></br>
                    <label htmlFor="name"><strong> Zip Code*</strong></label>
                    <input type="number" placeholder="530004" className='form-control rounded' name='Zipcode' value={inputData.Zipcode} onChange={handleData} /><br></br>

                    <button type="submit" onSubmit={handleSubmit} className="but">Save</button>&nbsp;&nbsp;
                    <button className="but1" type="reset">Cancel</button>
               
            </div>
            </form>
        </div>
    );
}

export default Studentprofile;
