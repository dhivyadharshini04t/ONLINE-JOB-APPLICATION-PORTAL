import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../Style/BankList.css'; // Import the CSS file

const App = () => {
  return (
  
        <div className="app-container">
      
     
        <div className="job-listing-container job1">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrqeoT-z4QdHvpVfSwB3uTWBB-lUvNHIEvfau5Tvu1NmYedvKFQQp9iwLLEMeGI7JzIfY&usqp=CAU"
            alt="Company 2"
            className="company-image"
          />
          <div className="job-details">
            <h3 className="job-title">Teacher</h3>
            <p className="company-name">Chandramari School</p>
            <p className="job-description">
              Posted Date : 03-01-2024
              <br /> Open Until : 24-01-2024
              <br />Salary:25,000 - 30,000 location:Coimbatore
              <br/> Full Time Job
            </p>
            <Link to="/Form" className="job-link"><button className="apply-now-button">Apply Now</button></Link>
          </div>
        </div>
      {/* Add similar Link components for other job listings */}

      
        <div className="job-listing-container job2">
          <img
            src="data:image/jpeg;base64,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"
            alt="Company 2"
            className="company-image"
          />
          <div className="job-details">
            <h3 className="job-title">IT Trainer</h3>
            <p className="company-name">Aveon InfoTech</p>
            <p className="job-description">
              Posted Date : 12-01-2024
              <br /> Open Until : 24-01-2024
              <br />Salary:7,000 - 15,000 location:Chennai
              <br/> Part Time Job
            </p>
            <Link to="/Form" className="job-link"> <button className="apply-now-button">Apply Now</button></Link>
          </div>
        </div>
    
        <div className="job-listing-container job2">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUIBxgVCBUZGRgYGh0dGxkbGyIdHR8iJBwjIiMgIxocIi0lIyssKCIiJjcpKzAwNDQ3HCZBPzkxPi0yNDkBCwsLEA8QHRISHjsrJCk7Nj4+PjI7NToyNTA+ODsyMjQ2PzYwMjI1NTsyNjU+OzI1MjI1NTQ1MjIyNzIyMjI+Mv/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQEDBAYHAgj/xABFEAACAgECAwUDBwgJAwUAAAABAgADEQQSBQYhEyIxQVEUYXEHFjJCUoGRFSNTVGKS0+EzNXKCk6G0wdKys9EkNnOisf/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgQDBf/EACURAQEAAgEDAwQDAAAAAAAAAAABAhEDEiExBEFREyJhoXGBkf/aAAwDAQACEQMRAD8A7NERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEpGYFYiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgUnMuaub7K+da9No9Sunprx7Q5CkHpvK5dT12gKNvXc+OuJ0DimsHD+HWWlS2xS21RlmIHQADzJ6ffOS8D5Gs5h4BqNTxIMuqtdmq3blGQctlD5OxK9QcBQR7/bhmPe5ePH9jZaOOa7nHWj5tk6bSKx3al1Vmsx0IRHBH/jzII2yh5t1HFdedHycotasYs1d30B5bsIADk5wQOpBwpUZmPyDrdVqeX7dDxGq2p0rZabHrdV2kFQpYjGUJ6eq4+yTIHkDjp5Nut03HNPam5gQwQsQwG0jA+kvTIK58/I5np9OfdqePEG38P0XE24kov4pSyqwL1pUm4qGG5fo5H2c+WZNcRo1Gq4qn5P1S1ouN9YCs7d7LeIOOmAPTMjOA06Phmh1Gu4ZprULbixff2luO93UdiRuY4HQEnyxia5yQ7cD4bqOJcbqte3U27QiVk2YySxCHBALE+J8EX3Tyyw65fxr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"
            alt="Company 2"
            className="company-image"
          />
          <div className="job-details">
            <h3 className="job-title">Instructional Designer</h3>
            <p className="company-name">KGiSL MicroCollege</p>
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
            src="https://ask.exprto.com/uploads/default/original/2X/3/3739fc5432c7ba05c66d059efde3208eff62db18.png"
            alt="Company 2"
            className="company-image"
          />
          <div className="job-details">
            <h3 className="job-title">Chemistry Faculty</h3>
            <p className="company-name">IIT-JEE|NEET </p>
            <p className="job-description">
              Posted Date : 03-01-2024
              <br /> Open Until : 24-01-2024
              <br />Salary:1,00,000 - 1,25,000 location:Chennai
              <br/> Full Time Job
            </p>
            <Link to="/Form" className="job-link"> <button className="apply-now-button">Apply Now</button></Link>
          </div>
        </div>
      
        <div className="job-listing-container job2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY_SNygA9Gnfbehd_5hzaauusB8C95e0rSB1dSFWoPIdh4-tNSLtYxACAbSl9-PMbdceQ&usqp=CAU"
            alt="Company 2"
            className="company-image"
          />
          <div className="job-details">
            <h3 className="job-title">Research Assistant</h3>
            <p className="company-name">Trydan Tech</p>
            <p className="job-description">
              Posted Date : 13-01-2024
              <br /> Open Until : 12-03-2024
              <br />Salary:35,000 - 50,000 location: Chennai
              <br/> Full Time Job
            </p>
            <Link to="/Form" className="job-link"> <button className="apply-now-button">Apply Now</button></Link>
          </div>
        </div>
      
    </div>
  );
};

export default App;
