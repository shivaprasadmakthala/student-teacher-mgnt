import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props){
return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
            <NavLink className=" navbar-brand" to="/">
                Admin Dashboard
            </NavLink>
            <button className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav nav-tabs me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">
                          Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">
                          About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">
                          Contact
                        </NavLink>
                    </li>
                </ul>

            </div>
            <li className="nav-item dropdown" style={{ listStyleType: "none"}}>
                <button className="btn btn-outline-dark"
                type="button"
                data-bs-toggle="dropdown">
                    Add User
                </button>
                <ul className="dropdown-menu text-center ">
                    <li className="text-center">
                        <NavLink 
                        className="btn btn-outline-dark"
                        type="button"
                        to="/users/add"
                        id="teachers"
                        onClick={props.handleTarget}
                        >
                            {`Teacher >>`}
                        </NavLink>
                    </li>
                    <li className="text-center">
                        <NavLink
                        className="btn btn-outline-dark"
                        type="button"
                        to="/users/add"
                        id="students"
                        onClick={props.handleTarget}
                        >
                            {`Student >>`}
                        </NavLink>
                    </li>
                </ul>
            </li>
        </div>
    </nav>
);
}

export default Navbar;