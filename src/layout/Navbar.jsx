import { Link } from "react-router-dom";

const Navbar = ({ toggleSidebar }) => {
  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container-fluid nav-conte align-items-center justify-content-between">
          {/* Left: Brand and toggle */}
          <div className="nav-bran d-flex align-items-center">
            <a className="nav-brand" href="#">
              Project Management
            </a>
            <div
              className="nav-taggle-icon ms-3"
              onClick={toggleSidebar}
              style={{ cursor: "pointer" }}
            >
              <i className="fa fa-bars" aria-hidden="true"></i>
            </div>
          </div>

          {/* Center: Search input */}
          <div
            className="nav-search flex-grow-1 mx-3"
            style={{ maxWidth: "400px" }}
          >
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0" id="search-icon">
                <i className="fa fa-search"></i>
              </span>
              <input
                type="search"
                className="form-control border-start-0"
                placeholder="Search..."
                aria-label="Search"
                aria-describedby="search-icon"
              />
            </div>
          </div>

          {/* Right: Bell and profile */}
          <div className="nav-main-icon d-flex align-items-center">
            <a className="bell-icon me-3" href="#">
              <i className="fa-regular fa-bell"></i>
            </a>
            <div className="dropdown profile-elemen">
              <div
                className="me-2 fw-bold p-1 rounded-4 profile d-flex align-items-center"
                style={{ cursor: "pointer" }}
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="profile-element">
                  <div className="avatar online">
                    <i className="fa-solid user-icon fa-circle-user"></i>
                    <span className="text-dark ms-2"></span>
                  </div>
                </div>
              </div>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" to="/">
                    Update Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/changepassword">
                    Change Password
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
