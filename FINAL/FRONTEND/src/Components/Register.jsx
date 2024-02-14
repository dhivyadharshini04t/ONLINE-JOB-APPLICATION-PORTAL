import { useState } from 'react';
import '../Style/Register.css'; 
import { Link ,useNavigate }from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      setIsRegistered(false); // Ensure isRegistered is false on invalid input
      return;
    }

    // Password validation
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      setIsRegistered(false); // Ensure isRegistered is false on invalid input
      return;
    }

    // Confirm password
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      setIsRegistered(false); // Ensure isRegistered is false on invalid input
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
        name: fullName,
        email,
        password,
        confirmPassword
      });

      console.log(response.data);
      navigate('/Login');

    } catch (error) {
      console.error('Signup failed', error);
      // Handle error states, display error messages, etc.
    }
  };

  return (
    <div className="itsme">
      <div className="register-container">
        <div className="register-form-container">
          <h2>REGISTER</h2>
          <form className="register-form" onSubmit={handleRegisterSubmit}>
            <label htmlFor="register-fullName">Full Name</label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Your Full Name"
              id="register-fullName"
              name="register-fullName"
            />
            <label htmlFor="register-email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="your email@gmail.com"
              id="register-email"
              name="register-email"
            />
            <label htmlFor="register-password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder=""
              id="register-password"
              name="register-password"
            />
            <label htmlFor="register-confirmPassword">Confirm Password</label>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder=""
              id="register-confirmPassword"
              name="register-confirmPassword"
            />
            <button type="submit" className="register-submit-button">
              REGISTER
            </button>
            {errorMessage && <p className="register-error-message">{errorMessage}</p>}
          </form>
     
          {isRegistered && <p className="register-success-message">Registration successful! Welcome, {fullName}.</p>}
          <br></br>
          <Link to="/Login">
            <button className="register-link-button"> Are you Registered? Login here.</button>
          </Link>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Register;