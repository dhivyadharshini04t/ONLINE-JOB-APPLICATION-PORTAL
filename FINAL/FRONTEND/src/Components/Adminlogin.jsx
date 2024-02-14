import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Style/Adminlogin.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
        email: email,
        password: password
      });

      console.log(response.data); // Handle the response data appropriately
      const token = response.data.token; // Extract the token from the response
      console.log('Token:', token); // Log the token to the console
      localStorage.setItem('token', token);

      // Keep existing redirection logic
      if (email === 'admin@gmail.com' && password === 'Admin@123') {
        navigate('/Home');
      } else if (response.data.role === 'ADMIN') { 
        navigate('/Home');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="itsme">
      <div className="login-container">
        <div className="box78">
        <div className="login-form-container">
            <h2 className="abi">Login Page</h2>
            <label className="input-label">
              Email
              <br></br>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label><br></br><br></br>
            <label className="input-label">
              Password
              <br></br>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label><br></br><br></br>
            {/* Call handleLogin when button is clicked */}
            <button className="gh" onClick={handleLogin}>Login</button>
            <br />
            
          </div>
          
        </div></div>
      </div>
  
  );
};

export default Login;