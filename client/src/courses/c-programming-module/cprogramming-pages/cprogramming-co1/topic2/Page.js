import React from 'react'


// imports Here
import CprogrammingSidebar from '../../../cprogramming-components/cprogramming-sidebar/CprogrammingSidebar';
import './Page.css'


function Page() {
  return (
        <div className="co1-Topic-two">
          <div className="co-sidebar">
             <CprogrammingSidebar />
          </div>  
           <div className="c1t2-content">
            <div className="c1t2-content-head">
                <h1>Designing Algorithms</h1>
                <p>In this page you will learn about Designing Algorithms
                   in detail
                </p>
            </div>
          </div>
      </div>
  )
}

export default Page