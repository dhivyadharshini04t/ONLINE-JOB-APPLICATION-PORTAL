// FeedbackForm.js
import { useState } from 'react';
import '../Style/Feedback.css'; // Import CSS file

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send feedback data to your backend or handle it as needed
    console.log('Feedback submitted:', formData);
    // Clear the form data after submission
    setFormData({ name: '', email: '', feedback: '' });
  };

  return (
    <div className="back">
    <div className="feedback-container">
      <h2 className="feedback-heading">Feedback Form</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="feedback-input-container">
          <label htmlFor="name" className="feedback-label">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="feedback-input"
            required
          />
        </div>
        <div className="feedback-input-container">
          <label htmlFor="email" className="feedback-label">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="feedback-input"
            required
          />
        </div>
        <div className="feedback-input-container">
          <label htmlFor="feedback" className="feedback-label">Your Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            rows="4"
            cols="50"
            value={formData.feedback}
            onChange={handleChange}
            className="feedback-textarea"
            required
          ></textarea>
        </div>
        <button type="submit" className="feedback-submit-button">Submit Feedback</button>
      </form>
    </div></div>
  );
}

export default FeedbackForm;
