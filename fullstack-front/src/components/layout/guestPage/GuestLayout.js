import React from "react";
import GuestHeader from "./GuestHeader";
import { Outlet } from "react-router-dom";
import GuestFooter from "./GuestFooter";
import '../../../assets/css/templatemo-edu-meeting.css';

export default function GuestLayout() {
  return (
    <>
        <GuestHeader />
      {/* <section class="section main-banner" id="top" data-section="section1"> */}
        {/* <div className="container">
          <div className="row"> */}
      <Outlet />
      {/* </div>
      </div> */}
      {/* </section> */}
      <GuestFooter />
      </>  );
}
