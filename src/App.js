import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Loginintocompany from './pages/Loginintocompany'
import Register from './pages/Register'
import Landing from './pages/dashboard1/components/Landing'
import Newcompany from './pages/dashboard1/components/Newcompany'
import Newbus from './pages/dashboard/components/Newbus'
import User from './pages/User'
import User1 from './pages/User1'
import User2 from './pages/User2'
import LandingPage from './pages/dashboard/components/LandingPage'
import ClientDashboard from './pages/dashboard2/components/ClientDashboard'
// import Dash from './pages/dashboard1/Dash';
// import Dashboard from './pages/dashboard2/Dashboard';
// import Dashboardz from './pages/dashboard3/Dashboardz';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="loginintocompany" element={<Loginintocompany />} />
          <Route path="register" element={<Register />} />
          <Route path='superadmin' element={<Landing />} />  
          <Route path="newcompany" element={<Newcompany />} />
          <Route path="addbus" element={<Newbus />} />
          <Route path="logintoangent"  element={<User />} />
          <Route path="logintocompany"  element={<User1 />} />
          <Route path="logintoother"  element={<User2 />} />
          <Route path='company' element={<LandingPage/>} />
          <Route path='ClientDashboard' element={<ClientDashboard/>} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
