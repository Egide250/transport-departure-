// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import '../layout/user.css'
// import {FaFacebook,FaGoogle,FaTwitter} from 'react-icons/fa'

// export default function Login() {
//     const [email , setEmail] = useState('')
//     const [password , setPassword] = useState('')
//     const navigate = useNavigate();

//     const handleLogin = async () =>{
//         // console.warn("email,password",email,password)
//       await fetch("https://transport-dispature-system-be.herokuapp.com/api/AdminLogin", {
//             method: 'post',
//             body: JSON.stringify({ email,password}),
//             header: {
//                 'Content-Type': 'application/json'
//             }
//         })
                 
//             navigate("/company")
        
//     }
//   return (
//     <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
//     <div class="card card0 border-0">
//         <div class="row d-flex">
//             <div class="col-lg-6">
//                 <div class="card1 pb-5">
//                     <div class="row">
//                         <img src="assets/logo.png" alt='no pic' class="logo" />
//                     </div>
//                     <div class="row px-3 justify-content-center mt-4 mb-5 border-line">
//                         <img src="assets/bus.png" alt='no pic' class="image" />
//                     </div>
//                 </div>
//             </div>
//             <div class="col-lg-6">
//                 <div class="card2 card border-0 px-4 py-5">
//                     <div class="row mb-4 px-3">
//                         <h6 class="mb-0 mr-4 mt-2">Sign in with</h6>
//                         <div class="facebook text-center mr-3"><FaFacebook /></div>
//                         <div class="twitter text-center mr-3"><FaTwitter /></div>
//                         <div class="linkedin text-center mr-3"><FaGoogle /></div>
//                     </div>
//                     <div class="row px-3 mb-4">
//                         <div class="line"></div>
//                         <small class="or text-center">Or</small>
//                         <div class="line"></div>
//                     </div>
//                     <div class="row px-3">
//                         <label class="mb-1"><h6 class="mb-0 text-sm">Email Address</h6></label>
//                         <input class="mb-4" type="text" name="email" placeholder="Enter a valid email address"
//                         onChange={(e) => setEmail(e.target.value)} 
//                         value={email}/>
//                     </div>
//                     <div class="row px-3">
//                         <label class="mb-1"><h6 class="mb-0 text-sm">Password</h6></label>
//                         <input type="password" name="password" placeholder="Enter password" 
//                         onChange={(e) => setPassword(e.target.value)} value={password}/>
//                     </div>
//                     <div class="row px-3 mb-4">
//                         <div class="custom-control custom-checkbox custom-control-inline">
//                             <input id="chk1" type="checkbox" name="chk" class="custom-control-input" /> 
//                             <label for="chk1" class="custom-control-label text-sm">Remember me</label>
//                         </div>
//                         <Link to="/act" class="ml-auto mb-0 text-sm">Forgot Password?</Link>
//                     </div>
//                     <div class="row mb-3 px-3">
//                         <button type="submit" class="btn btn-blue text-center" onClick={handleLogin}>Login</button>
//                     </div>
//                     <div class="row mb-4 px-3">
//                         <small class="font-weight-bold">Don't have an account? <Link to="/register" class="text-danger ">Register</Link></small>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div class="bg-blue py-4">
//             <div class="row px-3">
//                 <small class="ml-4 ml-sm-5 mb-2">Copyright &copy; 2022. All rights reserved.</small>
//                 <div class="social-contact ml-4 ml-sm-auto" style={{left:'90%'}}>
//                     <span ><a href='/'>Home</a></span>&nbsp;&nbsp;&nbsp;
                    
//                     <span ><a href='/'>Buy Ticket</a></span>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
//   )
// }
