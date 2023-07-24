import React from 'react';
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
import './Home.css';



import CourseFooter from '../../components/course_footer/CourseFooter'; 
import CourseNav from '../../components/course_nav/CourseNav';
import { FaFreeCodeCamp } from 'react-icons/fa';
import { GrUserExpert } from 'react-icons/gr';
import sai_img from '../../assets/sai.png'

const CourseHome = () => {
  return (
    <div className='CourseHomeComponent'>
       <div className="courseHome-nav">
          <CourseNav/>
            </div>
              <div className="courseHome-container">
                  <div className="courseHome-head-one">
                      <p> Start now for free</p>
                        <h1> Best Academic online learning</h1>
                          <h1>platform</h1>
                            <div className="courseHome-head-one-button">
                              <Scroll
                                  activeClass="active"
                                  to="course-home-courses"
                                  spy ={true}
                                  smooth={true}
                                  offset={-70}
                                  duration={500}
                                  >
                           <button>Explore courses</button>
                        </Scroll>
                     </div>
                  </div>
                <div className="courseHome-head-two">
             <div class="courseHome-boxes-one">  <h2> <FaFreeCodeCamp/> Free Courses</h2> </div>
           <div class="courseHome-boxes-two"> <h1> <GrUserExpert/> Expert Instructor </h1> </div>
         </div>
      </div>   
        <div className="course-home-courses">
           
               
             </div>
              <div className="about-container">
                <div className="about-container-in">
                  <h1>The Collab Team with High Technical Skills</h1>
                    <h2>Help You Learn a New Profession</h2>
                </div>
                    <div className="CourseHome-Body-Content-two">
                        <div className="courseHome-element-one-content">
                           <div className="courseHome-element-one-content-in">
                             <span className='number-css'> 01 </span>
                                </div>
                              <div className="courseHome-element-one-content-in-one">
                            <h1>Theoretical Knowledge</h1>
                         </div>
                      </div>
                    <div className="courseHome-element-two-content">
                      <div className="courseHome-element-two-content-in">
                        <span className='number-css'> 02 </span>
                          </div>
                            <div className="courseHome-element-two-content-in-one">
                        <h1>Practical Skills</h1>
                      </div>
                   </div>
                  <div className="courseHome-element-three-content">
                     <div className="courseHome-element-three-content-in">
                       <span className='number-css'> 03 </span>
                          </div>
                             <div className="courseHome-element-three-content-in-one">
                                <h1>Work with a Mentor</h1>
                              </div>
                            </div>
                          <div className="courseHome-element-four-content">
                        <div className="courseHome-element-four-content-in">
                      <span className='number-css'> 04 </span>
                    </div>
                      <div className="courseHome-element-four-content-in-one">
                        <h1>Final Test or Project</h1>
                  </div>
                </div>
              </div>
           </div>
          <div className="courseHome-reviews">
           <div className="courseHome-reviews-one">
            <div className="courseHome-reviews-one-in">
                <h1>Learning to code is like <br/>
                    getting from zero to one.</h1>
                <h1>ZeroOne helps developers get <br/>
                    from <span>zero</span> to <span>one.</span> </h1>
                <p>At ZeroOne, we are on a mission to revolutionize 
                   the way you learn and excel in the world of coding 
                   and technology. Our platform is designed to equip 
                   you with the skills, knowledge, and experience needed 
                   to thrive in today's fast-paced and dynamic tech industry.
                </p>
                </div>
            </div>
              <div className="courseHome-reviews-two">
                <div className="reviews-two-in">
                      <div className="reviews-two-in-one common-review">
                        <div className="review-one-one common-review-box">
                          <div className="review-one-img common-image">
                            <img src={sai_img} alt="sai" />
                          </div>
                          <div className="review-one-id common-id">
                            <h4>Sai tadikonda </h4>
                            <p>@saitadikonda99</p>
                          </div>
                        </div>
                        <div className="review-one-two common-review-pa">
                          <p>The zeroOne is the best thing that happened to me and my career ❤️</p>
                        </div>
                      </div>

                      <div className="reviews-two-in-two common-review">
                      <div className="review-two-two common-review-box">
                          <div className="review-two-img common-image">
                            <img src={sai_img} alt="sai" />
                          </div>
                          <div className="review-two-id common-id">
                            <h4>Sai tadikonda </h4>
                            <p>@saitadikonda99</p>
                          </div>
                        </div>
                        <div className="review-two-two common-review-pa">
                          <p>The zeroOne is the best thing that happened to me and my career ❤️</p>
                        </div>
                      </div>

                      <div className="reviews-two-in-three common-review">
                      <div className="review-three-three common-review-box">
                          <div className="review-three-img common-image">
                            <img src={sai_img} alt="sai" />
                          </div>
                          <div className="review-three-id common-id">
                            <h4>Sai tadikonda </h4>
                            <p>@saitadikonda99</p>
                          </div>
                        </div>
                        <div className="review-three-two common-review-pa">
                          <p>The zeroOne is the best thing that happened to me and my career ❤️</p>
                        </div>
                      </div>

                      <div className="reviews-two-in-four common-review">
                      <div className="review-four-four common-review-box">
                          <div className="review-four-img common-image">
                            <img src={sai_img} alt="sai" />
                          </div>
                          <div className="review-four-id common-id">
                            <h4>Sai tadikonda </h4>
                            <p>@saitadikonda99</p>
                          </div>
                        </div>
                        <div className="review-four-two common-review-pa">
                          <p>The zeroOne is the best thing that happened to me and my career ❤️</p>
                        </div>
                      </div>
                       
                  </div>
            </div>
          </div>
        <div className="course-footer-container">
          <CourseFooter/>
           </div>
    </div>
  )
}

export default CourseHome