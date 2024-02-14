// import { useState } from 'react';
// import '../Style/Login.css'; 
// import { Link ,useNavigate }from 'react-router-dom';
// import axios from 'axios';

// const Register = () => {
 
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
  
//   const [errorMessage, setErrorMessage] = useState("");
//   const [isRegistered, setIsRegistered] = useState(false);
//   const navigate = useNavigate();

//   const handleRegisterSubmit = async (e) => {
//     e.preventDefault();

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setErrorMessage("Please enter a valid email address.");
//       setIsRegistered(false); // Ensure isRegistered is false on invalid input
//       return;
//     }

//     // Password validation
//     if (password.length < 6) {
//       setErrorMessage("Password must be at least 6 characters long.");
//       setIsRegistered(false); // Ensure isRegistered is false on invalid input
//       return;
//     }

   

//     try {
//       const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
      
//         email,
//         password,
        
//       });

//       console.log(response.data);
//       navigate('/Job');

//     } catch (error) {
//       console.error('Signup failed', error);
//       // Handle error states, display error messages, etc.
//     }
//   };

//   return (
//     <div className="itsme">
//       <div className="register-container">
//         <div className="register-form-container">
//           <h2>REGISTER</h2>
//           <form className="register-form" onSubmit={handleRegisterSubmit}>
            
//             <label htmlFor="register-email">Email</label>
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               placeholder="your email@gmail.com"
//               id="register-email"
//               name="register-email"
//             />
//             <label htmlFor="register-password">Password</label>
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               placeholder=""
//               id="register-password"
//               name="register-password"
//             />
            
//             <button type="submit" className="register-submit-button">
//               REGISTER
//             </button>
//             {errorMessage && <p className="register-error-message">{errorMessage}</p>}
//           </form>
     
//           {isRegistered && <p className="register-success-message">Registration successful! Welcome.</p>}
//           <br></br>
//           <Link to="/Login">
//             <button className="register-link-button"> Are you Registered? Login here.</button>
//           </Link>
//           <br />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../Style/Login.css';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async() => {
//     // Validate email
//     if (!validateEmail(email)) {
//       setError('Please enter a valid email.');
//       return;
//     }

//     // Make a POST request to the backend for login
//     await axios.post('http://localhost:8080/api/v1/auth/login', { email, password })
//       .then(response => {
//         console.log('Login successful:', response.data);
          
//         localStorage.setItem("token",response.data.token);
//         // Handle successful login
//         setError('');
//         // Redirect to Home page
//         window.location.href = '/Job';
//       })
//       .catch(error => {
//         console.error('Login failed:', error);
//         setError('Login failed. Please try again.');
//       });
//   };

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   return (
//     <div className="itsme">
//       <div className="login-container">
//         <div className="box78">
//           <div className="login-content">
//             <h1 className="login-form">Login Page</h1>
//             {error && <div className="error-message">{error}</div>}
//             <label className="tyr">
//               Email:
//               <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
//             </label>
//             <label className="tyr">
//               Password:
//               <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             </label>
//             <button className="gh" onClick={handleLogin}>Login</button>
//             <br />
//             <h3>New user? <Link to="/Register">Create an account</Link></h3>
//           </div>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Login.css';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    // Validate email
    if (!validateEmail(email)) {
      setError('Please enter a valid email.');
      return;
    }

    // Make a POST request to the backend for login
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', { email, password });
      console.log('Login successful:', response.data);

      localStorage.setItem("token", response.data.token);
      // Handle successful login
      setError('');
      // Redirect to Home page
      window.location.href = '/Job';
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please try again.');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="itsme">
      <div className="login-container">
        <div className="box78">
          <div className="login-form-container">
            <h2>LOGIN</h2>
            {error && <div className="error-message">{error}</div>}
            <div className="register-form">
              <label className="input-label">
                Email
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
              </label>
              <label className="input-label">
                Password
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </label>
            </div>
            <button className="login-button" onClick={handleLogin}>Login</button>
            <br />
            <h3>New user? <Link to="/Register">Create an account</Link></h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

