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
        <div className="footer-in-one-one"> 
          <div className="footer-in-logo">
            <h1>ZeroOne Learning</h1>
              </div>
                <div className="footer-in-links">
                   <Link to='https://instagram.com/' className='gmail'>
                    zeroone.learning.com
                   </Link>
                </div>
             </div>
          </div>
          <div className="footer-in-two">
             <div className="footer-in-socials">
              <Link to='https://instagram.com/_sai.you' className='footer-in-socials-link'>
                <AiOutlineInstagram className='instagram'/>
                 </Link>
                  <Link to='https://t.me/+HbEkpTHAa_w4NTM1' className='footer-in-socials-link'>
                    <FaTelegram className='telegram'/>
                      </Link>
                       <Link to='https://github.com/saitadikonda99' className='footer-in-socials-link'>
                        <BsGithub className='github'/>
                 </Link>
             </div>
        </div>
    </div>
  )
}

export default CourseFooter