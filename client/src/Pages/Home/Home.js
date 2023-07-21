import React from 'react';
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
import './Home.css';



import CourseFooter from '../../components/course_footer/CourseFooter'; 
import CourseNav from '../../components/course_nav/CourseNav';
import { FaFreeCodeCamp } from 'react-icons/fa';
import { GrUserExpert } from 'react-icons/gr';

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
            <div className="course-home-courses-one">
               <h1> Start your learning coding </h1> 
                  <p>Learn coding from scratch with these tutorials </p>
                     </div>
                  <div className="course-home-courses-two ">
              <div className="courses-in-one">
           <Link to='/courses/c-programming' className='common-course-css'> <span className='c-logo'>C</span> C-programming</Link>
              </div>
                <div className="courses-in-two">
                  <Link to='/courses' className='common-course-css'>Coming soon!</Link>
                    </div>
                      <div className="courses-in-three">
                        <Link to='/courses' className='common-course-css'>Coming soon!</Link>
                    </div>
                  <div className="courses-in-four">
               <Link to='/courses' className='common-course-css'>Coming soon!</Link>
            </div>
        <div className="courses-in-five">
          <Link to='/courses' className='common-course-css'>Coming soon!</Link>
             </div>
               <div className="courses-in-six">
                 <Link to='/courses' className='common-course-css'>Coming soon!</Link>
                   </div>
                </div>
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
        <div className="course-footer-container">
          <CourseFooter/>
           </div>
    </div>
  )
}

export default CourseHome