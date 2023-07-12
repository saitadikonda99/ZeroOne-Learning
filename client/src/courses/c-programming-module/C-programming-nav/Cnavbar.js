import React from 'react'
import {FaLeftLong} from 'react-icons/fa6'
import {  Link } from 'react-router-dom';
import './Cnavbar.css'


function CNavbar() {
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

export default CNavbar