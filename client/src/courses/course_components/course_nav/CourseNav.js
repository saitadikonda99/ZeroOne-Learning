import React from 'react'
import './CourseNav.css'
import {FiCode} from 'react-icons/fi'
import {  Link } from 'react-router-dom';

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
              <Link to='/'>Home</Link>
              <Link to='/courses'>Courses</Link>
              <Link to='/contact'>Contact</Link>
                </div>
              </div>
            <div className="nav-button">
              <button className='nav-button-in'>Join Us</button>
            </div>
        </div>
  )
}

export default CourseNav