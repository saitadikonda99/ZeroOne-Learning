import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';



//import components here
import NavBar from '../../components/navigation-bar/NavBar';
import Footer from '../../components/footer/Footer';



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
import twoImage from '../../assets/twoImage.png';
import fiveImg from '../../assets/FiveImage.png';




const Home = () => {
  return (
    <div className='HomeComponent'>
      <NavBar/>
        <div className="HomeContainer">
          <div className="Home">
             


        <div className="one hero">
          <div className="one-in">
            <div className="one-in-one">
                <div className="oio-one">
                    <div className="oio-one-in">
                      <p>For Better Future</p>
                      <h1>Join and become the part of trusted community</h1>
                      <p id='ptwo'>Find the right instructor for you</p>
                      <div className="oioo-bi">
                        <Link className='oioo-bi-links' to='/' >About Us</Link>
                        <Link className='oioo-bi-links' to='/' >Courses</Link>
                      </div>
                    </div>
                </div>
                <div className="oio-two">

                </div>
            </div>
            <div className="one-in-two">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e74040" fill-opacity="1" d="M0,128L240,160L480,128L720,128L960,64L1200,64L1440,128L1440,0L1200,0L960,0L720,0L480,0L240,0L0,0Z"></path></svg>
            </div>
          </div>
        </div>






          <div className="Two">
              <div className="Two-head">
                <div className="Two-head-matter">
                 <h3>Practice Advice</h3>
                 <span>Get Quality Education</span>
              </div>
                <div className="Two-head-para">
                 <p>Problems trying to resolve the conflict between 
                    the two major realms of Classical physics: 
                    Newtonian mechanics 
                 </p>
              </div>
                </div>
                  <div className="Two-child">
                    <div>
                      <img className="Two-child-img" src={twoImage} alt="twoImage" />
                  </div>
                    <div className="Two-child-content">
                      <div className="Two-child-head">
                          <h2>Most trusted in our field</h2>
                          <p>Most calendars are designed for teams. Slate s designed 
                             for freelancers </p>
                      </div>
                        <div className="Two-child-head-one child-child">
                         <div className="head-one-one">
                          <h3>01</h3>
                      </div> 
                          <div className="head-one-two">
                               <h3>Training Courses</h3>
                               <p>Things on a very small that you 
                                   have any direct</p>
                          </div>
                        </div>
                          <div className="Two-child-head-two child-child">
                           <div className="head-one-one">
                              <h3>02</h3>
                      </div> 
                          <div className="head-one-two">
                                <h3>Expert instruction</h3>
                                <p>Things on a verysmall that you 
                                   have any direct</p>
                          </div>
                         </div>
                            <div className="Two-child-head-three child-child">
                              <div className="head-one-one">
                               <h3>03</h3>
                         </div> 
                            <div className="head-one-two">
                                <h3>Training Courses</h3>
                                <p>Things on a very small that you 
                                   have any direct</p>
                          </div>
                       </div>
                    </div>
                </div>
             </div>


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
             <div >
              <img className="Five-one-img" src={fiveImg} alt="fiveImg" />
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
                   <Link className="Five-two-link-child" to='/LearnMore' >
                      <h2>Learn More</h2>
                   </Link>
              </div>
            </div>
          </div>
        </div>

        

        <div className="Six">
              <div className="Six-head">
                <div className="Six-head-matter">
                 <h3>Practice Advice</h3>
                 <span>Get Quality Education</span>
              </div>
                <div className="Six-head-para">
                 <p>Problems trying to resolve the conflict between 
                    the two major realms of Classical physics: 
                    Newtonian mechanics 
                 </p>
              </div>
                </div>
                  <div className="Six-child">
                    <div className="Six-child-one">
                      <div>
                      <img className="six-child-img" src={avatar} alt="avatar" />
                      </div>
                        <div className="six-child-one-one">
                          <p>Slate helps you see how many more days 
                             you need to work to reach your financial 
                             goal for the month and year.</p>
                        </div>
                          <div className="six-child-two-two">
                            <h4>Regina Miles</h4>
                          </div>
                            <div className="six-child-three-three">
                              <h4>Designer</h4>
                            </div>
                      </div>
                         <div className="Six-child-two">
                             <div>
                              <img className="six-child-img" src={avatar} alt="avatar" />
                                </div>
                              <div className="six-child-one-one">
                                  <p>Slate helps you see how many more days 
                                  you need to work to reach your financial 
                                  goal for the month and year.</p>
                        </div>
                              <div className="six-child-two-two">
                                 <h4>Regina Miles</h4>
                            </div>
                                <div className="six-child-three-three">
                                <h4>Designer</h4>
                      </div> 
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
          <Footer/>
        </div>
  )
}

export default Home