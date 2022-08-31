import React, { useEffect } from "react";
import {Section} from  '../style/Company'
import Navbar from "./Navbar";
import scrollreveal from "scrollreveal";

import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



export default function Newcompany() {
  const[company_name, setcompany_name] = useState('')
    const[companyTinyNumber, setCompanyTinyNumber] = useState ('')
    const[companyOnwnershipType, setCompanyOnwnershipType] = useState('')
    const[companyAdmin, setCompanyAdmin] = useState('')
    const[companyEmail, setCompanyEmail] = useState('')
    const[password, setPassword] = useState('')
    const navigate = useNavigate();
  
    // console.log(username)
    // console.log(email)
    // console.log(pawd)
  
  const sendDataToApi = () =>{
  axios.post(`https://transport-dispature-system-be.herokuapp.com/api/companyregister`,{
      company_name,
      companyTinyNumber,
      companyOnwnershipType,
      companyAdmin,
      companyEmail,
      password
  })
  navigate('/superadmin');
  }


  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        .row__one,
        .row__two
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);
  return (
    <Section>
      <Navbar />
         <br/><br/>
    <div class="wrapper">
        <div class="section">
        <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A New Company</h2>
        <form >
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Company Name"
              name="company_name"
              onChange={(e) => setcompany_name(e.target.value)} required 
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Company Tin-Number"
              name="companyTinyNumber"
              onChange={(e) => setCompanyTinyNumber(e.target.value)} required 
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Owner Typer"
              name="companyOnwnershipType"
              onChange={(e) => setCompanyOnwnershipType(e.target.value)} required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Company Admin"
              name="companyAdmin"
              onChange={(e) => setCompanyAdmin(e.target.value)} required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Company E-mail Address"
              name="companyEmail"
              onChange={(e) => setCompanyEmail(e.target.value)} required
            />
          </div>
          
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Company Password "
              name="password"
              onChange={(e) => setPassword(e.target.value)} required
            />
          </div>
          <button className="btn btn-primary btn-block" onClick={sendDataToApi}>Sign Up</button>
        </form>
      </div>
    </div>
   

        </div>
    </div>
    </Section>
  );
}

