import React from 'react';
import { Routes, Route  } from 'react-router-dom';

import GitHome from '../git/GitPages/GitHome';


const GitApp = () => {


  const topics = [
    // CO1 - Introduction to C Programming
    { name: 'Home', path: '/', component: GitHome }, 
  ];

  return (
    <div className='GitAppComponent'>
        <div className="GitAppContainer">
            <Routes>
            {topics.map((topic, index) => (
            <Route
              key={index}
              path={topic.path}
              element={<topic.component />}
            />
          ))}
            </Routes>
        </div>
    </div>
  )
}

export default GitApp

