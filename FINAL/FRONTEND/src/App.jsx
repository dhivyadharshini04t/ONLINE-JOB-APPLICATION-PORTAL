import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Adminlogin from './Components/Adminlogin';

import Register from './Components/Register';
import Premium from './Components/Premium';



import Home from './Components/Home';
import Job from './Components/Job';
import Slides from './Components/Slides';
import Form from './Components/Form';
import Payment from './Components/Payment';
import Start from './Components/Start';
import Profile from './Components/Profile';
import Navbar from './Components/Navbar';
import Viewjobs from './Components/Viewjobs';
import Feedback from './Components/Feedback';
 
import Addjobs from './Components/Addjobs';
import Deletejobs from './Components/Deletejobs';
import Updatejobs from './Components/Updatejobs';

import Firstbank from './Components/Firstbank';

import Updateuser from './Components/Updateuser';

import BankList from './Components/BankList';
import EducateList from './Components/EducateList';
import Agriculture from './Components/Agriculture';
import HealthList from './Components/HealthList';
import Adminprof from './Components/Adminprof';


import Viewjobsadmin from './Components/Viewjobsadmin';

import Deleteuserform from './Components/Deleteuserform';

const App = () => {
  
  return (
    <Router>
      <div>
        <Routes>
      <Route path="/" element={<Start/>}/>
      <Route path="/Login" element={<Login/>} />
      <Route path="/Adminlogin" element={<Adminlogin/>} />

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
      <Route path="/Feedback" element={<Feedback/>}/>
      <Route path="/Premium" element={<Premium/>}/>

      <Route path="/Addjobs" element={<Addjobs/>}/>
      <Route path="/Deletejobs" element={<Deletejobs/>}/>
      <Route path="/Updatejobs" element={<Updatejobs/>}/>

      <Route path="/BankList" element={<BankList/>}/>
      <Route path="/EducateList" element={<EducateList/>}/>
      <Route path="/Agriculture" element={<Agriculture/>}/>
      <Route path="/HealthList" element={<HealthList/>}/>
      <Route path="/Adminprof" element={<Adminprof/>}/>


      <Route path="/Firstbank"  element={<Firstbank/>}/>

      <Route path="/Updateuser" element={<Updateuser/>}/>

      <Route path="/Viewjobsadmin" element={<Viewjobsadmin/>}/>

      <Route path="/Deleteuserform" element={<Deleteuserform/>}/>
      </Routes>
      </div>
    </Router>
  );
};
export default App;