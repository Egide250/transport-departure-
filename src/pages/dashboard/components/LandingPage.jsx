import React from "react";
import styled from "styled-components";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import '../style/Style.css';
export default function App() {
  return (
    <Div>
      <Sidebar />
      <Dashboard />
    </Div>
  );
}

const Div = styled.div`
  position: relative;
`;
