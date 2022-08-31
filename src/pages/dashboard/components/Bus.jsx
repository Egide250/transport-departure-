import React, { useEffect } from "react";
import {Section} from  '../style/Company'
import Navbar from "./Navbar";
import scrollreveal from "scrollreveal";

import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



export default function Newbus() {
  
    const[busName, setBusName] = useState ('')
    const[driverName, setDriverName] = useState('')
    const[plateNumber, setPlateNumber] = useState('')
    
    const navigate = useNavigate();
  
    // console.log(username)
    // console.log(email)
    // console.log(pawd)
  
  const sendDataToApi = () =>{
  axios.post(`https://transport-dispature-system-be.herokuapp.com/api/addbuss`,{
      busName,
      driverName,
      plateNumber
  })
  navigate('/addbus');
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
        <h2 className="text-center mb-4">Add A New Bus</h2>
        <form >
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Driver Name"
              name="driverName"
              onChange={(e) => setDriverName(e.target.value)} required 
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter plate number"
              name="plateNumber"
              onChange={(e) => setPlateNumber(e.target.value)} required 
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Bus Name"
              name="busName"
              onChange={(e) => setBusName(e.target.value)} required
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

