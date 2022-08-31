import React, { useState, useEffect } from "react";
import {ResponsiveNav} from  '../style/Sidebar'
import {Section} from  '../style/Sidebar'
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import scrollreveal from "scrollreveal";
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'



export default function Sidebar() {
  const navigate = useNavigate();
  const [currentLink, setCurrentLink] = useState(1);
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));

  const logout = () =>{
    axios.post(`https://transport-dispature-system-be.herokuapp.com/api/logout`,{
          
       })
       
       navigate('/'); 
   }
   

  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "80px",
      duration: 1000,
      reset: false,
    });

    sr.reveal(
      `
          .brand,
          .links>ul>li:nth-of-type(1),
      .links>ul>li:nth-of-type(2),
      .links>ul>li:nth-of-type(3),
      .links>ul>li:nth-of-type(4),
      .links>ul>li:nth-of-type(5),
      .links>ul>li:nth-of-type(6),
      .logout
      `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
          <img class="img-fluid mt-3 mb-3" src="assets/logo.png" alt=""  style={{width:'90px',height:'50px'}}/>
            {/* <span>MY TAXI</span> */}
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
          <div className="links">
            <ul>
              <li
                className={currentLink === 1 ? "active" : "none"}
                onClick={() => setCurrentLink(1)}
              >
                <Link to="/company">
                  <MdSpaceDashboard />
                  <span> Dashboard</span>
                </Link>
              </li>
              <li
                className={currentLink === 2 ? "active" : "none"}
                onClick={() => setCurrentLink(2)}
              >
                <Link to="/addbus">
                  <RiDashboard2Fill />
                  <span>Add bus</span>
                </Link>
              </li>
              <li
                className={currentLink === 3 ? "active" : "none"}
                onClick={() => setCurrentLink(3)}
              >
                <Link to="/Users">
                  <FaAddressCard />
                  <span> Users</span>
                </Link>
              </li>
              <li
                className={currentLink === 4 ? "active" : "none"}
                onClick={() => setCurrentLink(4)}
              >
                <Link to="#">
                  <GiTwirlCenter />
                  <span> Profile</span>
                </Link>
              </li>
              <li
                className={currentLink === 5 ? "active" : "none"}
                onClick={() => setCurrentLink(5)}
              >
                <Link to="#">
                  <BsFillChatTextFill />
                  <span> FAQs</span>
                </Link>
              </li>
              <li
                className={currentLink === 6 ? "active" : "none"}
                onClick={() => setCurrentLink(6)}
              >
                <Link to="#">
                  <IoSettings />
                  <span> Settings</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="logout" onClick={logout}>
          <Link to="">
            <FiLogOut />
            <span className="logout">Logout</span>
            </Link>
          </div>
        
      </Section>
      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <div className="responsive__links">
          <ul>
            <li
              className={currentLink === 1 ? "active" : "none"}
              onClick={() => setCurrentLink(1)}
            >
              <Link to="/company">
                <MdSpaceDashboard />
                <span> Dashboard</span>
              </Link>
            </li>
            <li
              className={currentLink === 2 ? "active" : "none"}
              onClick={() => setCurrentLink(2)}
            >
              <Link to="/addbus">
                <RiDashboard2Fill />
                <span> Add bus</span>
              </Link>
            </li>
            <li
              className={currentLink === 3 ? "active" : "none"}
              onClick={() => setCurrentLink(3)}
            >
              <Link to="/Users">
                <FaAddressCard />
                <span> Users</span>
              </Link>
            </li>
            <li
              className={currentLink === 4 ? "active" : "none"}
              onClick={() => setCurrentLink(4)}
            >
              <Link to="#">
                <GiTwirlCenter />
                <span> Profile</span>
              </Link>
            </li>
            <li
              className={currentLink === 5 ? "active" : "none"}
              onClick={() => setCurrentLink(5)}
            >
              <Link to="#">
                <BsFillChatTextFill />
                <span> FAQs</span>
              </Link>
            </li>
            <li
              className={currentLink === 6 ? "active" : "none"}
              onClick={() => setCurrentLink(6)}
            >
              <Link to="#">
                <IoSettings />
                <span> Settings</span>
              </Link>
            </li>
            <li onClick={logout}>
            <Link>
            <FiLogOut />
            <span>Logout</span>
            </Link>
            </li>

          </ul>
          
          
        
        </div>
        
      </ResponsiveNav>
    </>
  );
}
