import React from 'react'
// import '../assets/css/templatemo-edu-meeting.css'
import '../../../assets/css/templatemo-edu-meeting.css';
import { Link } from 'react-router-dom';


export default function GuestHeader() {
  return (
   <>
 {/* ***** Header Area Start *****  */}
  <header class="header-area header-sticky">
      <div class="container">
          <div class="row">
              <div class="col-12">
                  <nav class="main-nav">
                     {/* ***** Logo Start *****  */}
                      <Link to="/guest/home" class="logo">
                          Step
                      </Link>
                     {/* ***** Logo End *****  */}
                       {/* ***** Menu Start *****  */}
                      <ul class="nav">
                          <li class="scroll-to-section"><a href="#top" class="active">Home</a></li>
                          <li><a href="meetings.html">Meetings</a></li>
                          <li class="scroll-to-section"><a href="#apply">Apply Now</a></li>
                          <li class="has-sub">
                              <a href="javascript:void(0)">Pages</a>
                              <ul class="sub-menu">
                                  <li><a href="meetings.html">Upcoming Meetings</a></li>
                                  <li><a href="meeting-details.html">Meeting Details</a></li>
                              </ul>
                          </li>
                          <li class="scroll-to-section"><a href="#courses">Courses</a></li> 
                          <li class="scroll-to-section"><a href="#contact">Contact Us</a></li> 
                      </ul>        
                      <a class='menu-trigger'>
                          <span>Menu</span>
                      </a>
                     {/* ***** Menu End *****  */}
                  </nav>
              </div>
          </div>
      </div>
  </header>
{/* ***** Header Area End *****  */}

   </>
  )
}
