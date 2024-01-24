// CombinedComponent.js
// import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Home.css';

const CombinedComponent = () => {
  return (
   <div className="overall">
    <div className="combined-container">
      <div className="side-panel-container">
      
        <h3>Navigation</h3>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/jobs">Job Listings</Link></li>
          <li><Link to="/applications">My Applications</Link></li>
          <li><Link to="/profile">My Profile</Link></li>
        </ul>
      </div>
      {/* <div class="dd">
                    <input
                        type="text"
                        name="search"
                        id="search"
                    />
                    <button class="dd">
                        Search
                    </button>
                </div> */}
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Your Logo
          </Link>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/dashboard" className="nav-links">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/jobs" className="nav-links">
                Job Listings
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/applications" className="nav-links">
                My Applications
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-links">
                My Profile
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="search">
                    <input
                        type="text"
                        name="search"
                        id="search"
                    />
                    <button className="search">
                        Search
                    </button>
                </div>
    </div></div>
  );
};

export default CombinedComponent;
