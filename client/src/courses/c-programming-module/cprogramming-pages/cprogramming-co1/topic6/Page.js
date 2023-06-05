import React from 'react'


// imports Here
import CprogrammingSidebar from '../../../cprogramming-components/cprogramming-sidebar/CprogrammingSidebar';
import './Page.css'
import '../common-css/index.css'


function Page() {
  return (
        <div className="topic-container">
          <div className="co-sidebar">
             <CprogrammingSidebar />
          </div>  
           <div className="topic-content">
            <div className="topic-content-head">
                <h1>Basic Operators</h1>
                <p>In this page you will learn about Basic Operators
                   in detail
                </p>
            </div>
          </div>
      </div>
  )
}

export default Page