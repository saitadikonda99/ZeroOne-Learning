import React from 'react';
import {Routes, Route } from 'react-router-dom';



//import components here
import CourseNav from './course_components/course_nav/CourseNav';
import CourseFooter from './course_components/course_footer/CourseFooter';

const CourseApp = () => {
  return (
    <div className='CourseAppComponent'>
        <div className="CourseAppContainer">
            <CourseNav />
            <div className="CourseAppMain">

            </div>
            <CourseFooter />
        </div>
    </div>
  )
}

export default CourseApp