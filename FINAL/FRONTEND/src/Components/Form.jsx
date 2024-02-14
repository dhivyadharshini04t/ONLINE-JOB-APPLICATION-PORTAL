// import React from 'react';
// import '../Style/Form.css';

// class Apply extends React.Component {
//   render() {
//     return (
//       <RegistrationForm />
//     );
//   }
// }
// class RegistrationForm extends React.Component {
//   render() {
//     return (
//       <div className="ap-bg">
//         <div className="ap-fc">
//           <form className="ap-f" action="#" method="POST">
//             <fieldset>
//               <h1>Application Form</h1>
//               <div className="ap-fn">
//                 <input type="text" name="fName" className="ap-fn" placeholder="Enter the Full Name" required />
//               </div>
//               <div className="ap-oi">
//                 <input type="date" name="dob" className="ap-dob" placeholder="Date of Birth" required />
//                 <select name="gender" className="ap-gender" required>
//                   <option value="" disabled selected hidden>Select Gender</option>
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   <option value="other">Other</option>
//                 </select>
//                 <input type="text" name="address" className="ap-ad" placeholder="Address" required />
//                 <input type="tel" name="phone" className="ap-ph" placeholder="Mobile Number" required />
//                 <input type="email" name="email" className="ap-em" placeholder="Email Address" required />
//                 <input type="text" name="education" className="ap-edu" placeholder="Education" required />
//                 <input type="text" name="workExperience" className="ap-aadhar" placeholder="Work Experience" required />
//                 <input type="text" name="skills" className="ap-aadhar" placeholder="Skills" required />
              

//               </div>
//               <br /><br />
//               <input type="submit" name="submit" className="ap-su"/>
//             </fieldset>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default Apply;
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import '../Style/Form.css';

class Apply extends React.Component {
  render() {
    return (
      <RegistrationForm />
    );
  }
}

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      dob: '',
      gender: '',
      address: '',
      mobileno: '',
      education: '',
      workexperience: '',
      skills: '',
      submitted: false, // Track form submission status
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log(this.state);
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage

    console.log(token);
    try {
      const response = await axios.post(
        'http://localhost:8080/api/v1/auth/userside',
        this.state,
        { headers: { Authorization: `Bearer ${token}` } } // Include the token in the request headers
      );
      console.log('Form submitted:', response.data);
      // Handle successful form submission here
      this.setState({ submitted: true });
    } catch (error) {
      console.error('Form submission failed:', error);
      // Handle form submission error here
    }
  };

  handleBackButtonClick = () => {
    // Handle back button click
    // You can navigate back to the previous page or perform any other desired action here
    console.log('Back button clicked');
  };

  render() {
    return (
      <div className="ap-bg">
        <div className="ap-fc">
          <Link to="/Job"><button className="back-button" onClick={this.handleBackButtonClick}>Back</button></Link>
          <form className="ap-f" onSubmit={this.handleSubmit}>
            <fieldset>
              <h1>Application Form</h1>
              <div className="ap-fn">
                <input type="text" name="name" className="ap-fn" placeholder="Enter the Full Name" value={this.state.name} onChange={this.handleChange} required />
              </div>
              <input type="email" name="email" className="ap-em" placeholder="Email Address" value={this.state.email} onChange={this.handleChange} required />
              <input type="text" name="dob" className="ap-dob" placeholder="Date of Birth" value={this.state.dob} onChange={this.handleChange} required />
              <input type="text" name="gender" className="ap-gender" placeholder="Gender" value={this.state.gender} onChange={this.handleChange} required />
              <input type="text" name="address" className="ap-ad" placeholder="Address" value={this.state.address} onChange={this.handleChange} required />
              <input type="tel" name="mobileno" className="ap-ph" placeholder="Mobile Number" value={this.state.mobileno} onChange={this.handleChange} required />
           
              <input type="text" name="education" className="ap-edu" placeholder="Education" value={this.state.education} onChange={this.handleChange} required />
              <input type="text" name="workexperience" className="ap-aadhar" placeholder="Work Experience" value={this.state.workExperience} onChange={this.handleChange} required />
              <input type="text" name="skills" className="ap-aadhar" placeholder="Skills" value={this.state.skills} onChange={this.handleChange} required />
              <br /><br /><br /><br />
              <input type="submit" name="submit" className="ap-su"/>
            </fieldset>
          </form>
          {this.state.submitted && <p className="success-message">Form submitted successfully!</p>}
        </div>
      </div>
    );
  }
}

export default Apply;
