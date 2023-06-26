import React from 'react'
import './CourseNav.css'
import {FaLeftLong} from 'react-icons/fa6'
import {  Link } from 'react-router-dom';

function CourseNav() {
  return (
        <div className="nav-container">
            
            <h1>NAV BAR </h1>

            <div className="nav-con-but">
             <Link to='/courses' className='Back-to-course-nav-button'>
              <button>
                <FaLeftLong/>
                Back to course
               </button>
             </Link>
            </div>
        </div>
  )
}

export default CourseNav