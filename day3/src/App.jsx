import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import Job from './Components/Job';
import Slides from './Components/Slides';
import Form from './Components/Form';
import Payment from './Components/Payment';
import Start from './Components/Start';
import Profile from './Components/Profile';
import Navbar from './Components/Navbar';
import Viewjobs from './Components/Viewjobs';



import BankList from './Components/BankList';
import EducateList from './Components/EducateList';
import Agriculture from './Components/Agriculture';
import HealthList from './Components/HealthList';
const App = () => {
  
  return (
    <Router>
      <div>
        <Routes>
      <Route path="/" element={<Start/>}/>
      <Route path="/Login" element={<Login/>} />
      <Route path="/Register"  element={<Register/>}/>
      <Route path="/Home"  element={<Home/>}/>
      <Route path="/Job" element={<Job/>}/>
      <Route path="/Slides" element={<Slides/>}/>
      <Route path="/Form" element={<Form/>}/>
      <Route path="/Payment" element={<Payment/>}/>
      <Route path="/Start" element={<Start/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/Navbar" element={<Navbar/>}/>
      <Route path="/Viewjobs" element={<Viewjobs/>}/>

      <Route path="/BankList" element={<BankList/>}/>
      <Route path="/EducateList" element={<EducateList/>}/>
      <Route path="/Agriculture" element={<Agriculture/>}/>
      <Route path="/HealthList" element={<HealthList/>}/>
      </Routes>
      </div>
    </Router>
  );
};
export default App;