import React from 'react';
import { Link } from 'react-router-dom';


import CourseNav from '../../course_components/course_nav/CourseNav';
import CourseFooter from '../../course_components/course_footer/CourseFooter'; 


const CourseHome = () => {
  return (
    <div className='CourseHomeComponent'>
        <CourseNav/>
        <div className="CourseHomeContainer">
            <h1>Course Home goes here</h1>
            <p>List of courses avalaible:</p>
            <Link to='/courses/c-programming'>C-programming</Link>
        </div>
        <CourseFooter/>
    </div>
  )
}

export default CourseHome