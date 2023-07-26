import React from 'react'
import './CourseNav.css'
import {FiCode} from 'react-icons/fi'
import {  Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';

function CourseNav() {
  return (
        <div className="course-nav-container">
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
          <Scroll
                    activeClass="active"
                    to="courseHome-container"
                    spy ={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                      >
                       <Link to='/'>Home</Link>
                    </Scroll>
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
                  <Link to='https://t.me/+HbEkpTHAa_w4NTM1'>Contact</Link>
                </div>
              </div>
            <div className="nav-button">
              <Link to='https://t.me/+HbEkpTHAa_w4NTM1'>
              <button className='nav-button-in'>Join Us</button>
            </Link>
            </div>
        </div>
  )
}

export default CourseNav