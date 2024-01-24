// import React from 'react';

const JobListing = () => {
  return (
    <div className="job-listing-container">
      <img
        src="https://example.com/your-company-logo.jpg"
        alt="Company Logo"
        className="company-logo"
      />
      <div className="job-details">
        <h3 className="job-title">Job Title</h3>
        <p className="company-name">Company Name</p>
        <p className="job-description">
          This is a brief description of the job listing. Provide details about the job responsibilities, requirements, etc.
        </p>
      </div>
    </div>
  );
};

export default JobListing;
