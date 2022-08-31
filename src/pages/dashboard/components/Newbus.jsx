import React from "react";
import {Div} from  '../style/Landing'
import Bus from "./Bus"
import Sidebar from "./Sidebar";
export default function App() {
  return (
    <Div>
      <Sidebar />
      <Bus />
    </Div>
  );
}

