import { useState } from 'react';
import axios from 'axios';
import '../Style/Deletejobs.css';

const Delete = () => {
  const [jobName, setJobName] = useState('');

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Taoken not found. Please log in again.');
        return;
      }

      const response = await axios.delete(`http://localhost:8080/services/${jobName}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Deleted data:', response.data);
      // Handle the deletion as needed

      // Clear form data after deletion
      setJobName('');
    } catch (error) {
      console.error('Deleting data failed:', error);
    }
  };

  const handleChange = (e) => {
    setJobName(e.target.value);
  };

  return (
    <div className ="itsme">
    <div className='bookingback'>
      <div className="booking-form">
        <form>
          <label htmlFor="jobName">Enter job name to delete:</label>
          <input type="text" id="jobName" name="jobName" value={jobName} onChange={handleChange} required />
          <br /><br />
          <button type="button" onClick={handleDelete}>Delete Job</button>
        </form>
      </div>
    </div></div>
  );
};

export default Delete;
