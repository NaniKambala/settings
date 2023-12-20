import React from "react";
import 'bootstrap/js/dist/dropdown'

function Nav(){
    return(
         <nav className="navbar navbar-expand-lg navbar-dark bg-secondary  ">
            <i className="navbar-brand bi bi-justify-left fs-4">Navbar</i>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-toggle-aria-expanded="false" area-aria-label="Toggle navigation"></button>
            <div className="collapse navbar-collapse" id="collapseibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="" id="dropdownId"
                         data-bs-toggle="dropdown" area-aria-haspopup="true" aria-expanded="True">
                            Yousof</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <a className="dropdown-item" href="">Profile</a>
                            <a className="dropdown-item" href="">setting</a>
                            <a className="dropdown-item" href="">logout</a>
                        </div>
                    </li>
                </ul>

            </div>
         </nav>
    )
}
export default Nav;