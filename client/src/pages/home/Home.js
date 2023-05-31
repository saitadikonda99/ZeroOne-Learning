import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import { GiBookCover } from "react-icons/gi";
import { AiFillCode } from "react-icons/ai";
import { BsFillFileEarmarkCodeFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";

import avatar from '../../assets/avatar.jpeg';
import java from '../../assets/java.webp';



const Home = () => {
  return (
    <div className='HomeComponent'>
        <div className="HomeContainer">
          <div className="Home">











          <div className="three">
            <div className="three-in">
              <div className="seven-head">
                   <div className="seven-head-in">
                      <p>Practice Advice</p>
                      <h1>Our Expert Teachers</h1>
                      <span>Industry experienced tutors with real time experince</span>
                      <span>Always aim to provide the best learning experience through best practices</span>
                   </div>
                </div>
                <div className="three-child">
                  <div className="three-child-in">
                    <div className="tci-sub tci-sub-one">
                      <div className="tci-sub-in">
                        <div className="tci-sub-icon">
                          <div className="tci-sub-icon-in">
                              <FaGraduationCap/>
                          </div>
                        </div>
                        <div className="tci-sub-desc">
                          <h1>Training Courses</h1>
                          
                          <p>The gradual accumulation of information about </p>
                        </div>
                      </div>
                    </div>
                    <div className="tci-sub tci-sub-two">
                      <div className="tci-sub-in">
                        <div className="tci-sub-icon">
                          <div className="tci-sub-icon-in">
                              <GiBookCover/>
                          </div>
                        </div>
                        <div className="tci-sub-desc">
                          <h1>Training Courses</h1>
                          
                          <p>The gradual accumulation of information about </p>
                        </div>
                      </div>
                    </div>
                    <div className="tci-sub tci-sub-three">
                      <div className="tci-sub-in">
                        <div className="tci-sub-icon">
                          <div className="tci-sub-icon-in">
                              <AiFillCode/>
                          </div>
                        </div>
                        <div className="tci-sub-desc">
                          <h1>Training Courses</h1>
                          
                          <p>The gradual accumulation of information about </p>
                        </div>
                      </div>
                    </div>
                    <div className="tci-sub tci-sub-four">
                      <div className="tci-sub-in">
                        <div className="tci-sub-icon">
                          <div className="tci-sub-icon-in">
                            <BsFillFileEarmarkCodeFill/>
                          </div>
                        </div>
                        <div className="tci-sub-desc">
                          <h1>Training Courses</h1>
                          
                          <p>The gradual accumulation of information about </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>










          <div className="four">
            <div className="four-in">
                <div className="seven-head">
                   <div className="seven-head-in">
                      <p>Practice Advice</p>
                      <h1>Our Expert Teachers</h1>
                      <span>Industry experienced tutors with real time experince</span>
                      <span>Always aim to provide the best learning experience through best practices</span>
                   </div>
                </div>
                <div className="four-child">
                  <div className="four-child-in">
                    <div className="fourci-sub">
                      <div className="fourci-sub-in">
                        <div className="fourci-img">
                          <div className="fourci-img-in">
                            <img src={java} alt="" />
                          </div>
                        </div>
                        <div className="fourci-desc">
                            <div className="fourci-desc-one">
                              <p>Training Courses</p>
                              <p><span>< AiFillStar/></span> 5</p>
                            </div>
                            <div className="fourci-desc-two">
                              <p>Video in Live Action</p>
                            </div>
                            <div className="fourci-desc-three">
                              <p>We focus on ergonomics and meeting you....</p>
                            </div>
                            <div className="fourci-desc-four">
                              <FaUserAlt/> <p>150+ Learners</p>
                            </div>
                            <div className="four-desc-five">
                              <p>Learn More <FaGreaterThan/></p>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="fourci-sub">
                      <div className="fourci-sub-in">
                        <div className="fourci-img">
                          <div className="fourci-img-in">
                            <img src={java} alt="" />
                          </div>
                        </div>
                        <div className="fourci-desc">
                            <div className="fourci-desc-one">
                              <p>Training Courses</p>
                              <p><span>< AiFillStar/></span> 5</p>
                            </div>
                            <div className="fourci-desc-two">
                              <p>Video in Live Action</p>
                            </div>
                            <div className="fourci-desc-three">
                              <p>We focus on ergonomics and meeting you....</p>
                            </div>
                            <div className="fourci-desc-four">
                              <FaUserAlt/> <p>150+ Learners</p>
                            </div>
                            <div className="four-desc-five">
                              <p>Learn More <FaGreaterThan/></p>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="fourci-sub">
                      <div className="fourci-sub-in">
                        <div className="fourci-img">
                          <div className="fourci-img-in">
                            <img src={java} alt="" />
                          </div>
                        </div>
                        <div className="fourci-desc">
                            <div className="fourci-desc-one">
                              <p>Training Courses</p>
                              <p><span>< AiFillStar/></span> 5</p>
                            </div>
                            <div className="fourci-desc-two">
                              <p>Video in Live Action</p>
                            </div>
                            <div className="fourci-desc-three">
                              <p>We focus on ergonomics and meeting you....</p>
                            </div>
                            <div className="fourci-desc-four">
                              <FaUserAlt/> <p>150+ Learners</p>
                            </div>
                            <div className="four-desc-five">
                              <p>Learn More <FaGreaterThan/></p>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="fourci-sub">
                      <div className="fourci-sub-in">
                        <div className="fourci-img">
                          <div className="fourci-img-in">
                            <img src={java} alt="" />
                          </div>
                        </div>
                        <div className="fourci-desc">
                            <div className="fourci-desc-one">
                              <p>Training Courses</p>
                              <p><span>< AiFillStar/></span> 5</p>
                            </div>
                            <div className="fourci-desc-two">
                              <p>Video in Live Action</p>
                            </div>
                            <div className="fourci-desc-three">
                              <p>We focus on ergonomics and meeting you....</p>
                            </div>
                            <div className="fourci-desc-four">
                              <FaUserAlt/> <p>150+ Learners</p>
                            </div>
                            <div className="four-desc-five">
                              <p>Learn More <FaGreaterThan/></p>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>










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