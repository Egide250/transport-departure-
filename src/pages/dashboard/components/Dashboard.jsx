import React, { useEffect } from "react";
import {Section} from  '../style/Dash'
import Analytics from "./Analytics";
import Earnings from "./Earnings";
import FAQ from "./FAQ";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Transfers from "./Transfers";
import scrollreveal from "scrollreveal";


export default function Dashboard() {
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
      <div className="grid">
        <div className="row__one">
          <Analytics />
          <FAQ />
        </div>
        <div className="row__two">
          <Earnings />
          <Transfers />
          <Profile />
        </div>
      </div>
    </Section>
  );
}

