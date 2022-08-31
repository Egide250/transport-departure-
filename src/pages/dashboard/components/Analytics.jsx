import React from "react";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import {Section} from  '../style/Analytic'

export default function Analytics() {
  return (
    <Section>
      <div className="analytic ">
        <div className="content">
          <h5>Spent this month</h5>
          <h2>$682.5</h2>
        </div>
        <div className="logo">
          <BsFillCalendar2WeekFill />
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <IoStatsChart />
        </div>
        <div className="content">
          <h5>Earnings</h5>
          <h2>$350.40</h2>
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <BiGroup />
        </div>
        <div className="content">
          <h5>New clients</h5>
          <h2>321</h2>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <h5>Activity</h5>
          <h2>$540.50</h2>
        </div>
        <div className="logo">
          <FiActivity />
        </div>
      </div>
    </Section>
  );
}

