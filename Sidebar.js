import React from "react";
/*import {Link,useNavigate} from 'react-router-dom'*/
import './style.css'

function Sidebar(){

    return(
        <div className="bg-white sidebar p-2">
            <div>
                <i className="bi bi-yin-yang my-3 me-1 fs-4"></i>
                <span className="brand-name fs-4"><strong>JOB PORTAL</strong></span>
                
            </div>
            <hr className="text-dark"/>
            <div className="list-group list-group-flush">
                <a className="list-group-item list-group-item-action my-3">
                       <i className=" bi bi-speedometer2  fs-5 me-2 "></i>
                       <span className="fs-5">Dashboard</span>
                </a>
                <a href="employerprofile" className="list-group-item py-2">
                       <i className=" bi bi-person fs-5 me-2"></i>
                       <span className="fs-5">My Profile</span>
                </a>
                <a className="list-group-item py-2">
                       <i className=" bi bi-file-earmark-text fs-5 me-2"></i>
                       <span className="fs-5">My Jobs</span>
                </a>
                <a className="list-group-item py-2">
                       <i className=" bi bi-envelope fs-5 me-2"></i>
                       <span className="fs-5">Messages</span>
                </a>
               <a href="Home" className="list-group-item py-2">
                     <i className="bi bi-pencil fs-5 me-2"></i>
                     <span className="fs-5">Submit Job</span>
                     </a>
                <a className="list-group-item py-2">
                       <i className=" bi bi-bookmark-dash fs-5 me-2"></i>
                       <span className="fs-5">Saved Candidate</span>
                </a>
                <a className="list-group-item py-2">
                       <i className=" bi bi-suitcase-lg fs-5 me-1"></i>
                       <span className="fs-5">Membership</span>
                </a>
                <a  href="/settings"className="list-group-item py-2">
                       <i className=" bi bi-gear fs-5 me-2"></i>
                       <span className="fs-5">Settings</span>
                </a>
                <a className="list-group-item py-2">
                       <i className=" bi bi-trash3 fs-5 me-2"></i>
                       <span className="fs-5">Delete</span>
                </a>
                <a className="list-group-item py-2">
                       <i className=" bi bi-power fs-5 me-2"></i>
                       <span className="fs-5">Logout</span>
                </a>

            </div>

        </div>
    )
}
export default Sidebar;