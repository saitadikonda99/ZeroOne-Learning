import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css'; 

const NavBar = () => {
  return (
    <div className='NavBarComponent'>
        <div className="NavBarContainer">
            <div className="Nav">
              <div className="Nav-in">
                <div className="logo">
                    <h4>ZeroOne</h4>
                </div>
                <div className="index">
                  <div className="index-in">
                      <ul>
                        <Link className='index-link'>
                          <li>Home</li>
                        </Link>
                        <Link className='index-link'>
                          <li>courses</li>
                        </Link>
                        <Link className='index-link'>
                          <li>Contact</li>
                        </Link>
                      </ul>
                  </div>
                </div>
                <div className="logins">
                  <div className="sign-in">
                    <Link className='index-link' to='/'>
                      <h4>Log in</h4>
                    </Link>
                  </div>
                <div className="join-us">
                  <Link to='/'>
                    <button className="join-us-button">
                      Join us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default NavBar