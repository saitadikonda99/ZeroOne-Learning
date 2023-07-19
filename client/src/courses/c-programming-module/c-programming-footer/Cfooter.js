import React from 'react'
import { Link } from 'react-router-dom'

// imports start here
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaTelegram } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'


const Cfooter = () => {
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
          <div className="footer-in-names">
             <p>Designed & Developed By <Link to='https://www.linkedin.com/in/deepakreddygathpa/'> Deepak Reddy Gathpa </Link>&<Link to='https://www.linkedin.com/in/tadikondasaimanikanta/'> Tadikonda Sai Manikanta  </Link> |
                © Copyrights by ZeroOne . All rights reserved. </p>
           </div>
             <div className="footer-in-socials">
              <Link to='https://instagram.com/' className='footer-in-socials-link'>
                <AiOutlineInstagram/>
                 </Link>
                  <Link to='https://telegram.com/' className='footer-in-socials-link'>
                    <FaTelegram className='telegram'/>
                      </Link>
                       <Link to='https://github.com/' className='footer-in-socials-link'>
                        <BsGithub className='github'/>
                 </Link>
             </div>
        </div>
    </div>
  )
}

export default Cfooter