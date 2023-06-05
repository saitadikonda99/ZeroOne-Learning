import React from 'react'


// imports Here
import CprogrammingSidebar from '../../../cprogramming-components/cprogramming-sidebar/CprogrammingSidebar';
import './Page.css'
import '../../cprogramming-co1/common-css/index.css'

function Page() {
  return (
        <div className="topic-container">
          <div className="co-sidebar">
             <CprogrammingSidebar />
          </div>  
           <div className="topic-content">
            <div className="topic-content-head">
                <h1>Stacks using Arrays</h1>
                <p>In this page you will learn Stacks using Arrays 
                   in detail
                </p>
            </div>
          </div>
      </div>
  )
}

export default Page