import React from 'react'
import {Link as Scroll } from 'react-scroll';

import {FiCode} from 'react-icons/fi'
import {FaLeftLong} from 'react-icons/fa6'
import {  Link } from 'react-router-dom';
import './Cnavbar.css'


function CNavbar() {
  return (
    <div className="c-nav-container">
    <div className="nav-logo">
      <div className="nav-logo-head">
       <FiCode/>
         </div>
           <div className="nav-logo-body">
            <h1>zeroOne</h1>
        </div>
    </div>
  <div className="nav-links">
    <div className="nav-links-in">
        <Link to='/'>Home</Link>
        <Scroll
              activeClass="active"
              to="course-home-courses"
              spy ={true}
              smooth={true}
              offset={-70}
              duration={500}
                >
                 <Link to='/'>Courses</Link>
              </Scroll>
            <Link to='/coming-soon'>Contact</Link>
          </div>
        </div>
      <div className="c-nav-con-but">
       < Link to='/' className="c-nav-con-but"> 
      <button>
                <FaLeftLong/>
                Back to courses
      </button>
      </Link>
      </div>
  </div>

        
  )
}

export default CNavbar