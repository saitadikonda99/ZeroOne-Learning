import React from 'react'
import './CourseFooter.css'
import { Link } from 'react-router-dom'

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
              <Link to='https://instagram.com/' className='footer-in-socials-link'>
                <AiOutlineInstagram/>
                 </Link>
                  <Link to='https://telegram.com/' className='footer-in-socials-link'>
                    <FaTelegram className='telegram'/>
                      </Link>
                       <Link to='https://github.com/' className='footer-in-socials-link'>
                        <BsGithub/>
                 </Link>
             </div>
        </div>
    </div>
  )
}

export default CourseFooter