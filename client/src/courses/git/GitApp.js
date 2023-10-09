import React from 'react';
import { Routes, Route  } from 'react-router-dom';


const GitApp = () => {
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

