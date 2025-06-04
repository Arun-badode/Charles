import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ toggleSidebar }) => {
  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container-fluid nav-conte">
          <div className="nav-content d-flex justify-content-between align-items-center w-100">
            
            {/* Left Brand Section */}
            <div className="nav-bran d-flex align-items-center">
              <div className="bg-primary text-white fw-bold px-2 py-1 rounded me-2 mb-2">PM</div>

              {/* Show only on medium and larger screens */}
              <h2 className="nav-brand mb-0 d-none d-md-block">Project Management</h2>

              <div className="nav-taggle-icon ms-3" onClick={toggleSidebar}>
                <a href="#">
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </a>
              </div>
            </div>

            {/* Right Icon Section */}
            <div className="nav-main-icon d-flex align-items-center ms-auto gap-3">
              <a className="bell-icon" href="#">
                <i className="fa-regular fa-bell fs-5"></i>
              </a>

              <div className="dropdown profile-elemen">
                <div
                  className="me-2 fw-bold p-1 rounded-4 profile d-flex align-items-center"
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <div className="profile-element">
                    <div className="avatar online">
                      <i className="fa-solid user-icon fa-circle-user fs-5"></i>
                      <span className="text-dark ms-2"></span>
                    </div>
                  </div>
                </div>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link className="dropdown-item" to="/">Update Profile</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/changepassword">Change Password</Link>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <Link className="dropdown-item" to="/">Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
