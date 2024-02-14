import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../Style/BankList.css'; // Import the CSS file

const App = () => {
  return (
  
        <div className="app-container">
      
     
        <div className="job-listing-container job1">
          <img
            src="https://e7.pngegg.com/pngimages/879/648/png-clipart-dr-ruparelia-s-sushrusha-ayurved-multispeciality-hospital-hospital-of-the-holy-spirit-apollo-hospital-indraprastha-logo-raj-designs-hospital-miscellaneous-leaf-thumbnail.png"
            alt="Company 2"
            className="company-image"
          />
          <div className="job-details">
            <h3 className="job-title">Hospital Pharmacist</h3>
            <p className="company-name">Prema Hospital</p>
            <p className="job-description">
              Posted Date : 03-01-2024
              <br /> Open Until : 24-01-2024
              <br />Salary:15,000 - 25,000 location:Coimbatore
              <br/> Full Time Job
            </p>
            <Link to="/Form" className="job-link"><button className="apply-now-button">Apply Now</button></Link>
          </div>
        </div>
     

      {/* Add similar Link components for other job listings */}

      
        <div className="job-listing-container job2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWoND8UafWIJPtJt2dEMVmB4hVEnlE3Ww0NW9iSmM-AMe6hi2z3VV8P69vYGbh5_v4XLA&usqp=CAU"
            alt="Company 2"
            className="company-image"
          />
          <div className="job-details">
            <h3 className="job-title">Staff Nurse</h3>
            <p className="company-name">Krishna Speciality Hospital</p>
            <p className="job-description">
              Posted Date : 03-01-2024
              <br /> Open Until : 24-01-2024
              <br />Salary:15,000 - 25,000 location:Chennai
              <br/> Full Time Job
            </p>
            <Link to="/Form" className="job-link"> <button className="apply-now-button">Apply Now</button></Link>
          </div>
        </div>
    
        <div className="job-listing-container job2">
          <img
            src="data:image/jpeg;base64,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"
            alt="Company 2"
            className="company-image"
          />
          <div className="job-details">
            <h3 className="job-title">Cath Lab Scrub Nurse</h3>
            <p className="company-name">Chaitanya HR Consultancy</p>
            <p className="job-description">
              Posted Date : 03-01-2024
              <br /> Open Until : 24-01-2024
              <br />Salary:15,000 - 25,000 location:Dindigul
              <br/> Half time
            </p>
            <Link to="/Form" className="job-link"><button className="apply-now-button">Apply Now</button></Link>
          </div>
        </div>
     
        <div className="job-listing-container job2">
          <img
            src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/afbw06brxlvwnswag6id"
            alt="Company 2"
            className="company-image"
          />
          <div className="job-details">
            <h3 className="job-title">Assistant Medical Officer</h3>
            <p className="company-name">Sri Ramakrishna Hospital</p>
            <p className="job-description">
              Posted Date : 03-01-2024
              <br /> Open Until : 24-01-2024
              <br />Salary:15,000 - 25,000 location:Bengaluru
              <br/> Full Time Job
            </p>
            <Link to="/Form" className="job-link"> <button className="apply-now-button">Apply Now</button></Link>
          </div>
        </div>
      
        <div className="job-listing-container job2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe4YHkzDTZt7aY1qj1AY086Gmzkr6683W1wwAUJxHVYA&s"
            alt="Company 2"
            className="company-image"
          />
          <div className="job-details">
            <h3 className="job-title">Operation Manager</h3>
            <p className="company-name">Veeyes Dental Hospital</p>
            <p className="job-description">
              Posted Date : 03-01-2024
              <br /> Open Until : 24-01-2024
              <br />Salary:15,000 - 25,000 location:karnataka
              <br/> Full Time Job
            </p>
            <Link to="/Form" className="job-link"> <button className="apply-now-button">Apply Now</button></Link>
          </div>
        </div>
      
    </div>
  );
};

export default App;
