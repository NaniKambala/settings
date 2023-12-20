import React,{useState} from "react";
import Enav from "./Navbar1";
import './style.css'

import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Sidebar from "./Sidebar";


function Home(){
    const initialData = {
    Jobtitle: '',
    Jobdescription: '',
    Jobcategory:'',
    Jobtype:'',
    Salary:'',
    Skills:'',
    Experience:'',
    Location:'',
    Industry:'',
    Englishfluency:'',
    Fileattachment: '',
    Address:'',
    Country:'',
    State:'',
    City:''

    }
    const handleFileChange = (e) => {
    setFormData({
      ...formData,
      Fileattachment: e.target.files[0],
    });
  };
    const [formData, setFormData] = useState(initialData);
    const handleData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
   const formDataToSend = new FormData();

  // Append all form fields to FormData
  Object.keys(formData).forEach((key) => {
    formDataToSend.append(key, formData[key]);
  });
    const handleSubmit = (e) => {
        e.preventDefault();

       fetch("http://127.0.0.1:8000/Postapp/postappdata/", {
    method: "POST",
    body: formDataToSend,
  }).then((response) => {
                alert("Your data successfully saved");
                setFormData(initialData);
                console.log(formData);
                return response.json();
            }).catch((error) => {
                console.error("Error:", error.message);

            });
  };

    return(
            <div id="background"className=" container fluide px-3">
                <Enav/>
                <h1>Post a New Job</h1>
                <div className='bg-white p-3 rounded w-90'>
                    <h4>Job Details</h4><br></br>
                    <form action="" method="post" onSubmit={handleSubmit} encType="multipart/form-data">
                        
                        <label htmlFor="name"><strong> Job Title*</strong></label>
                        <input type="text" name="Jobtitle"  value={formData.Jobtitle} placeholder="Ex: Product Designer"className='form-control rounded' onChange={handleData}/>
                        <label htmlFor="paragraph"><strong>Job Description*</strong></label>
                        <input type="text" name="Jobdescription"  value={formData.Jobdescription} placeholder="Write about the job details"className='form-control rounded' onChange={handleData}/>
                        <label htmlFor="dropdown"><strong>Job Category</strong></label>
                        <input type="text" name="Jobcategory" value={formData.Jobcategory}placeholder="Experianced or fresher"className='form-control rounded' onChange={handleData}/>
                        <label htmlFor="paragraph"><strong>Job Type</strong></label>
                        <input type="text" name="Jobtype" value={formData.Jobtype}placeholder="Full time or part time"className='form-control rounded' on onChange={handleData}/>
                        <label htmlFor="paragraph"><strong>Salary</strong></label>
                        <input type="text" name="Salary" value={formData.Salary} placeholder="LPA"className='form-control rounded' onChange={handleData}/><br></br><br></br>
                        <h4>Skills & Experiance</h4><br></br><br></br>
                        <label htmlFor="paragraph"><strong>Skills*</strong></label>
                        <input type="text" name="Skills" value={formData.Skills} placeholder="Add Skills"className='form-control rounded' onChange={handleData}/>
                        <label htmlFor="paragraph"><strong>Experiance*</strong></label>
                        <input type="text" name="Experience" value={formData.Experience} placeholder="monthes-years"className='form-control rounded' onChange={handleData}/>
                        <label htmlFor="paragraph"><strong>Location*</strong></label>
                        <input type="text" name="Location" value={formData.Location} placeholder="hyd,banglore...."className='form-control rounded' onChange={handleData}/>
                        <label htmlFor="paragraph"><strong>Industry*</strong></label>
                        <input type="text" name="Industry" value={formData.Industry} placeholder="industry"className='form-control rounded' onChange={handleData}/>
                        <label htmlFor="paragraph"><strong>English Fluency</strong></label>
                        <input type="text" name="Englishfluency" value={formData.Englishfluency} placeholder="Basic"className='form-control rounded' onChange={handleData}/><br></br><br></br>
                        <h4>File Attachment</h4><br></br>
                        <label htmlFor="file"><strong>File Attachment*</strong></label><br></br>
                       <input id="file" type="file" name="Fileattachment" onChange={handleFileChange} /><br></br><br></br>
                        <h4>Address & Location</h4><br></br>
                        <label htmlFor="paragraph"><strong>Address*</strong></label>
                        <input type="text" name="Address" value={formData.Address} placeholder="chowrastha,chandana,gazipur sadar"className='form-control rounded' onChange={handleData}/><br></br>
                        <label htmlFor="paragraph"><strong>Country*</strong></label>
                        <input type="text" name="Country" value={formData.Country} placeholder="India"className='form-control rounded' onChange={handleData}/><br></br>
                        <label htmlFor="paragraph"><strong>State*</strong></label>
                        <input type="text" name="State" value={formData.State} placeholder="Andhra Pradesh"className='form-control rounded' onChange={handleData}/><br></br>
                        <label htmlFor="paragraph"><strong>City*</strong></label>
                        <input type="text" name="City" value={formData.City} placeholder="Guntur"className='form-control rounded' onChange={handleData}/><br></br>
                        <button type="submit" className="but">Next</button>&nbsp;&nbsp;<button className="but1" type="submit" >Cancel</button>

                    </form>
                </div>
         </div>
      
    )
}
export default Home;