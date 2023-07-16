import React from 'react';
import {Routes, Route } from 'react-router-dom';



//import components here


import CprogrammingApp from '../../courses/c-programming-module/CprogrammingApp';
import CourseHome from './Home';

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