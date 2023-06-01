import React from 'react';
import { Link } from 'react-router-dom';
import CprogrammingSidebar from '../cprogramming-components/cprogramming-sidebar/CprogrammingSidebar';

import './CHomePage.css'


const CHomePage = () => {
  return (
    <div className='CHomePageComponent'>
        <div className="cosidebar">
            <CprogrammingSidebar/>
        </div>
        <div className="CHomePageContainer">
           <h1>C programming Main Page</h1>
           <Link to='/courses'>Go Back to Courses</Link>
        </div>
    </div>
  )
}

export default CHomePage