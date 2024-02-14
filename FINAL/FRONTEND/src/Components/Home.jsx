// import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Home.css';

 // Import the Slideshow component

const CombinedComponent = () => {
  return (
    <>
      <div className="overall">
        <div className="combined-container">
          <div className="side-panel-container">

            <ul><br></br>
              <li><Link to="/Form">Form</Link></li>
              <li><Link to="/Addjobs">Add Jobs</Link></li><br></br>
              <li><Link to="/Updatejobs">Update Jobs</Link></li><br></br>

              {/* <li><Link to="/Deleteuserform">Delete user Jobs</Link></li><br> */}
             
              <li><Link to="/Deletejobs">Delete Admin Jobs</Link></li><br></br>
             
              <li><Link to="/Viewjobs">View User Applied Jobs</Link></li><br></br>
              <li><Link to="/Viewjobsadmin">View Admin Added Jobs</Link></li><br></br>
            </ul>
          </div>
          <nav className="navbar">
            <div className="navbar-container">
              <Link to="/" className="navbar-logo">
                JOBNEST
              </Link>
              <ul className="nav-menu">
                <li className="nav-item">
                  <Link to="/Start" className="nav-links">
                    Logout&nbsp;&nbsp;&nbsp;&nbsp;
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/AdminProf" className="nav-links">
                    My Profile
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

    
      <footer className="footer">
        <div className="wrapper">
          <ul className="footer-links">
            <li>
              <a>
                About
              </a>
            </li>
            <li>
              <a>
                Terms and Conditions
              </a>
            </li>
            <li>
              <a>
                Case Studies
              </a>
            </li>
            <li>
              <a>
                FAQs
              </a>
            </li>
            <li>
              <Link to="/Feedback">Feedback</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default CombinedComponent;
