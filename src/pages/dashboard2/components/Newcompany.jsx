import React from "react";
import {Div} from  '../style/Landing'
import Company from "./Company"
import Sidebar from "./Sidebar";
export default function App() {
  return (
    <Div>
      <Sidebar />
      <Company />
    </Div>
  );
}

