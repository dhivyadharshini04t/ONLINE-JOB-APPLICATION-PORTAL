import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../Style/BankList.css'; // Import the CSS file

const App = () => {
  return (
  
        <div className="app-container">
      
     
        <div className="job-listing-container job1">
          <img
            src="https://companieslogo.com/img/orig/HDB-bb6241fe.png?t=1633497370"
            alt="Company 2"
            className="company-image"
          />
          <div className="job-details">
            <h3 className="job-title">Relationship Manager </h3>
            <p className="company-name">Hdfc Bank Limited</p>
            <p className="job-description">
              Posted Date : 03-01-2024
              <br /> Open Until : 24-01-2024
              <br />Salary:15,000 - 25,000 location:Coimbatore
              <br/> Full Time Job
            </p>
            <Link to="/Payment" className="job-link"><button className="apply-now-button">Premium</button></Link>
          </div>
        </div>
     

      {/* Add similar Link components for other job listings */}

      
        <div className="job-listing-container job2">
          <img
            src="https://www.indiablooms.com/finance_pic/2022/ccced00d8dbbbbe3f31e99a7fece540f.jpg"
            alt="Company 2"
            className="company-image"
          />
          <div className="job-details">
            <h3 className="job-title">Customer  Officer</h3>
            <p className="company-name">CSB Bank</p>
            <p className="job-description">
              Posted Date : 03-01-2024
              <br /> Open Until : 24-01-2024
              <br />Salary:15,000 - 25,000 location:Chennai
              <br/> Full Time Job
            </p>
            <Link to="/Payment" className="job-link"> <button className="apply-now-button">Premium</button></Link>
          </div>
        </div>
    
        <div className="job-listing-container job2">
          <img
            src="https://logowik.com/content/uploads/images/muthoot-finance9193.jpg"
            alt="Company 2"
            className="company-image"
          />
          <div className="job-details">
            <h3 className="job-title">Banking Executive</h3>
            <p className="company-name">Muthoot Finance</p>
            <p className="job-description">
              Posted Date : 03-01-2024
              <br /> Open Until : 24-01-2024
              <br />Salary:15,000 - 25,000 location:Dindigul
              <br/> Half time
            </p>
            <Link to="/Payment" className="job-link"><button className="apply-now-button">Premium</button></Link>
          </div>
        </div>
     
        <div className="job-listing-container job2">
          <img
            src="https://media.licdn.com/dms/image/C560BAQGtnC2FrB-qig/company-logo_200_200/0/1630669861023/xpert_hunt_logo?e=2147483647&v=beta&t=nyR95uyPo3KCfLZFNm-MSHYhUSsmp0L6IE2-wFU2MEk"
            alt="Company 2"
            className="company-image"
          />
          <div className="job-details">
            <h3 className="job-title">Investment Analyst</h3>
            <p className="company-name">XpertHunt</p>
            <p className="job-description">
              Posted Date : 03-01-2024
              <br /> Open Until : 24-01-2024
              <br />Salary:15,000 - 25,000 location:Bengaluru
              <br/> Full Time Job
            </p>
            <Link to="/payment" className="job-link"> <button className="apply-now-button">Premium</button></Link>
          </div>
        </div>
      
        <div className="job-listing-container job2">
          <img
            src="data:image/png;base64,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"
            alt="Company 2"
            className="company-image"
          />
          <div className="job-details">
            <h3 className="job-title">Credit Manager</h3>
            <p className="company-name">kotak Mahindra Bank</p>
            <p className="job-description">
              Posted Date : 03-01-2024
              <br /> Open Until : 24-01-2024
              <br />Salary:15,000 - 25,000 location:karnataka
              <br/> Full Time Job
            </p>
            <Link to="/Payment" className="job-link"> <button className="apply-now-button">Premium</button></Link>
          </div>
        </div>
      
    </div>
  );
};

export default App;
