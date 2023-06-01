import React from 'react';
import {Routes, Route } from 'react-router-dom';



//import components here


import CprogrammingApp from './c-programming-module/CprogrammingApp';
import CourseHome from './course_pages/course_home/CourseHome';

const CourseApp = () => {
  return (
    <div className='CourseAppComponent'>
        <div className="CourseAppContainer">
            <div className="CourseAppMain">
                <Routes>
                    <Route path='/' element={<CourseHome/>}></Route>
                    <Route path='/c-programming/*' element={<CprogrammingApp/>}></Route>
                </Routes>
            </div>
        </div>
    </div>
  )
}

export default CourseApp