import { useState } from 'react';
import axios from 'axios';
import '../Style/Addjobs.css';

const AddJobs = () => {
  const [jobName, setJobName] = useState('');

  const handleChange = (e) => {
    setJobName(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }
      console.log('Token:', token); // Log token for debugging
      const response = await axios.delete("http://localhost:8080/services", {
        headers: {
          Authorization: `Bearer ${token}`
        },
        data: {
          jobName: jobName // Pass only the job name for deletion
        }
      });
      console.log("Job deleted successfully!", response.data);
      setJobName(''); // Clear the job name input field after deletion
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  return (
    <div className="itsyou">
      <div className="eyeyou">
        <div className="add-jobs-container">
          <h2 className="tit">Add New Job</h2>
          {/* Add job form */}
        </div>
        <div className="delete-form">
          <h2 className="delete-title">Delete Job</h2>
          <form className="delete-job-form" onSubmit={handleDelete}>
            <div className="form-group job-name-group">
              <label htmlFor="jobName">Job Name</label>
              <input
                type="text"
                id="jobName"
                className="job-name-input"
                name="jobName"
                value={jobName}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-button delete-job-submit">Delete Job</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJobs;
