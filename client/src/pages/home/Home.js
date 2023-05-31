import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

import avatar from '../../assets/avatar.jpeg'



const Home = () => {
  return (
    <div className='HomeComponent'>
        <div className="HomeContainer">
          <div className="Home">
            <div className="Five">
          <div className="Five-one">
             <div className="Five-one-img">
          </div>
      </div>
         <div className="Five-two">
           <div className="Five-two-content">
             <div className="Five-two-line"></div>
               <div className="Five-two-matter">
                 <span>Every Student</span>
                 <span>Maters</span>
              </div>
                <div className="Five-two-para">
                 <p>Problems trying to resolve the conflict between 
                    the two major realms of Classical physics: 
                    Newtonian mechanics 
                    </p>
              </div>
                <div className="Five-two-link">
                   <Link className="Five-two-link-child" >
                      <h2>Learn More</h2>
                   </Link>
              </div>
            </div>
          </div>
        </div>
            <div className="seven">
              <div className="seven-in">
                <div className="seven-head">
                   <div className="seven-head-in">
                      <p>Team</p>
                      <h1>Expert Tutors from ZeroOne</h1>
                      <span>Industry experienced tutors with real time experince</span>
                      <span>Always aim to provide the best learning experience through best practices</span>
                   </div>
                </div>
                <div className="seven-child">
                    <div className="seven-child-in">

                      <div className="sci">
                        <div className="sci-in">
                          <div className="sci-img">
                            <img src={avatar} alt="" />
                          </div>
                          <div className="sci-des">
                            <div className="sci-des-in">
                              <p>Julian Jamson</p>
                              <p>Professor</p>
                              <div className="sci-des-icons">
                                <BsFacebook/>
                                <AiOutlineInstagram/>
                                <AiOutlineTwitter/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="sci">
                        <div className="sci-in">
                          <div className="sci-img">
                            <img src={avatar} alt="" />
                          </div>
                          <div className="sci-des">
                            <div className="sci-des-in">
                              <p>Julian Jamson</p>
                              <p>Professor</p>
                              <div className="sci-des-icons">
                                <BsFacebook/>
                                <AiOutlineInstagram/>
                                <AiOutlineTwitter/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sci">
                        <div className="sci-in">
                          <div className="sci-img">
                            <img src={avatar} alt="" />
                          </div>
                          <div className="sci-des">
                            <div className="sci-des-in">
                              <p>Julian Jamson</p>
                              <p>Professor</p>
                              <div className="sci-des-icons">
                                <BsFacebook/>
                                <AiOutlineInstagram/>
                                <AiOutlineTwitter/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sci">
                        <div className="sci-in">
                          <div className="sci-img">
                            <img src={avatar} alt="" />
                          </div>
                          <div className="sci-des">
                            <div className="sci-des-in">
                              <p>Julian Jamson</p>
                              <p>Professor</p>
                              <div className="sci-des-icons">
                                <BsFacebook/>
                                <AiOutlineInstagram/>
                                <AiOutlineTwitter/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home