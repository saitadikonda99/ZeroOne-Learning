import React from 'react'
import { Routes, Route } from 'react-router-dom'; 


import CHomePage from './cprogramming-pages/CHomePage';
import co1topic1page from '../c-programming-module/cprogramming-pages/cprogramming-co1/topic1/Page';


const CprogrammingApp = () => {
  return (
    <div className='CprogramingAppComponent'>
        <div className="CprogrammingAppContainer">
            
            <Routes>
                <Route path='/' element={<CHomePage/>}></Route>
                <Route path='/co1' element={<co1topic1page/>} ></Route>
            </Routes>
        </div>
    </div>
  )
}

export default CprogrammingApp