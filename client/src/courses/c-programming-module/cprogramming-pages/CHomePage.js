import React from 'react';
import { Link } from 'react-router-dom';


const CHomePage = () => {
  return (
    <div className='CHomePageComponent'>
        <div className="CHomePageContainer">
           <h1>C programming Main Page</h1>
           <Link to='/courses'>Go Back to Courses</Link>
        </div>
    </div>
  )
}

export default CHomePage