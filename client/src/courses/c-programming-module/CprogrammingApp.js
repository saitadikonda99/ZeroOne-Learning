import React from 'react'
import { Routes, Route } from 'react-router-dom'; 


import CHomePage from './cprogramming-pages/CHomePage';


const CprogrammingApp = () => {
  return (
    <div className='CprogramingAppComponent'>
        <div className="CprogrammingAppContainer">
            <Routes>
                <Route path='/' element={<CHomePage/>}></Route>
            </Routes>
        </div>
    </div>
  )
}

export default CprogrammingApp