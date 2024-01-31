// AppliedJobs.js

import  { useState, useEffect } from 'react';
import '../Style/Viewjobs.css';

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  // Mock data for demonstration
  useEffect(() => {
    const mockAppliedJobs = [
      { id: 1, name: 'Software Engineer', field: 'Engineering', applied: '2024-01-25', confirmationDate: '2024-02-05', salary: '$100,000', location: 'San Francisco, CA' },
      { id: 2, name: 'Data Analyst', field: 'Data Science', applied: '2024-01-20', confirmationDate: '2024-02-01', salary: '$80,000', location: 'New York, NY' },
      { id: 3, name: 'Product Manager', field: 'Product Management', applied: '2024-01-15', confirmationDate: '2024-01-30', salary: '$120,000', location: 'Seattle, WA' },
    ];
    setAppliedJobs(mockAppliedJobs);
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className ="appliedtotal">
    <div className="applied-jobs-container">
      <h1 className="page-title">Applied Jobs</h1>
      <div className="job-list">
        {appliedJobs.map(job => (
          <div key={job.id} className="job-card">
            <h2 className="job-title">{job.name}</h2>
            <p className="job-field">Field: {job.field}</p>
            <p className="job-applied">Applied: {job.applied}</p>
            <p className="job-confirmation-date">Confirmation Date: {job.confirmationDate}</p>
            <p className="job-salary">Salary: {job.salary}</p>
            <p className="job-location">Location: {job.location}</p>
            <button className="cancel-button">Cancel</button>
          </div>
        ))}
      </div>
    </div></div>
  );
}

export default AppliedJobs;
