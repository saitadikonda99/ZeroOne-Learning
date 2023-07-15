import React from 'react';
import { Link } from 'react-router-dom';
import './CourseHome.css';



import CourseFooter from '../../course_components/course_footer/CourseFooter'; 
import CourseNav from '../../course_components/course_nav/CourseNav';
import { FaPython } from 'react-icons/fa';

const CourseHome = () => {
  return (
    <div className='CourseHomeComponent'>
       <div className="courseHome-nav">
          <CourseNav/>
            </div>
               <div className="CourseHome-Body">
                  <div className="CourseHome-Body-Content">
                     <div className="CourseHome-Body-Content-one">
                        <h1>Explore Programming's World for Free! </h1>
                           <h2>with zeroOneLearning! </h2>
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
          </div>
        <div className="course-footer-container">
          <CourseFooter/>
        </div>
    </div>
  )
}

export default CourseHome