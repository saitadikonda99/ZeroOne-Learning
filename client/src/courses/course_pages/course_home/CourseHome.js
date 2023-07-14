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
                    <h1>Explore Programming's World for Free! </h1>
                    <h2>with zeroOneLearning! </h2>
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