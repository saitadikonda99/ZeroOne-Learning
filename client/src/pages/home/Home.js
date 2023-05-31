import React from 'react';
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
            <div className="five">

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