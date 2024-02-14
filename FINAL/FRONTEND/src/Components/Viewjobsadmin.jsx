import { useState, useEffect } from 'react';
import axios from 'axios';
import '../Style/Viewjobsadmin.css';

const ViewJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }
        
        const response = await axios.get("http://localhost:8080/services", {
          headers: {
            "Authorization": `Bearer ${token}`,
            "cache-control": "no-cache"
          }
        });
        
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="itu">
    <div className="appliedtotal1">
    <div className="view-jobs-container">
      <h2 className="page-title">Posted Jobs</h2>
      <div className="job-list">
        {jobs.map(job => (
          <div key={job.id} className="job-card">
            <h2 className="job-title">{job.jobName}</h2>
            <p className="job-location">Location: {job.jobLocation}</p>
            <p className="job-type">Type: {job.jobType}</p>
            <p className="job-start-date">Start Date: {job.startDate}</p>
            <p className="job-end-date">End Date: {job.endDate}</p>
            <p className="job-salary">Salary: {job.salary}</p>
          </div>
        ))}
      </div></div>
    </div></div>
  );
};

export default ViewJobs;
