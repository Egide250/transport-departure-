import React from "react";
import {Nav} from  '../style/Nav'
import { BiSearch } from "react-icons/bi";
export default function Navbar() {
  return (
    <Nav>
      <div className="title">
        <h5>SUPER ADMIN DASHBOARD</h5>
        <h3>
          Welcome to <span>TRANSPORT DEPARTURE </span>
        </h3>
      </div>
      <div className="search">
        <BiSearch />
        <input type="text" placeholder="Search" />
      </div>
    </Nav>
  );
}
