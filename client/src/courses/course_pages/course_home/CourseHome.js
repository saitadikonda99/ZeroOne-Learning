import React from 'react';
import { Link } from 'react-router-dom';
import './CourseHome.css';



import CourseFooter from '../../course_components/course_footer/CourseFooter'; 
import CourseNav from '../../course_components/course_nav/CourseNav';

const CourseHome = () => {
  return (
    <div className='CourseHomeComponent'>
      <div className="CourseHomeComponents-navbar">
          <CourseNav/>
        </div>
        <div className="CourseHome-Container">
            <h1>Course Home goes here</h1>
            <p>List of courses available:</p>
            <Link to='/courses/c-programming'>C-programming</Link>
        </div>
        <CourseFooter/>
    </div>
  )
}

export default CourseHome