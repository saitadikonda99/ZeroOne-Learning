import React from 'react'
import './CourseFooter.css'


// imports start here
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaTelegram } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'


const CourseFooter = () => {
  return (
    <div className='footer-container'>
       <div className="footer-in-one">
          <h1>ZeroOne Learning</h1>
       </div>
        <div className="footer-in-two">
          <div className="footer-in-names">
           <p>Designed & Developed By Deepak Reddy Gathpa & Tadikonda Sai Manikanta</p>
           </div>
            <div className="footer-in-socials">
              <AiOutlineInstagram/>
              <FaTelegram className='telegram'/>
              <BsGithub/>
          </div>
        </div>
    </div>
  )
}

export default CourseFooter