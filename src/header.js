
import React from 'react';
import logo from "./assets/images/logo.png";
const Header = () => {

return (

    <>
    
<header className="bg-dark text-light">
        <div className="d-flex align-items-center">
          <img src={logo} alt="Logo" className="mr-3" />
          <h3>IT Technologies</h3>
        </div>
      </header>
      <nav className="navbar navbar-expand-lg navbar-light background_nav">
        <div className="container">
          <a href="#" className="navbar-brand">
            Brand
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navbarCollapse" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Profile
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Messages
                </a>
                <div className="dropdown-menu">
                  <a href="#" className="dropdown-item">
                    Inbox
                  </a>
                  <a href="#" className="dropdown-item">
                    Drafts
                  </a>
                  <a href="#" className="dropdown-item">
                    Sent Items
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="#" className="dropdown-item">
                    Trash
                  </a>
                </div>
              </li>
            </ul>
            <ul className="nav navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Admin
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a href="#" className="dropdown-item">
                    Reports
                  </a>
                  <a href="#" className="dropdown-item">
                    Settings
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="#" className="dropdown-item">
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
)


};

export default Header;