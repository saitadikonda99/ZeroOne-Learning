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
                  <h1> take a look at courses avaliable</h1> 
          </div>
        <div className="course-home-courses-two ">
      <div className="courses-in-one">
          <Link to='/courses/c-programming' className='common-course-css'> <FaPython/> C-programming</Link>
            </div>
              <div className="courses-in-two">
                <Link to='/courses/c-programming' className='common-course-css'>C-programming</Link>
                  </div>
                    <div className="courses-in-three">
                     <Link to='/courses/c-programming' className='common-course-css'>C-programming</Link>
                    </div>
                  <div className="courses-in-four">
                 <Link to='/courses/c-programming' className='common-course-css'>C-programming</Link>
            </div>
        <div className="courses-in-five">
        <Link to='/courses/c-programming' className='common-course-css'>C-programming</Link>
            </div>
              <div className="courses-in-six">
               <Link to='/courses/c-programming' className='common-course-css'>C-programming</Link>
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