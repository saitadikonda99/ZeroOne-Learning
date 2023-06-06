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
                <h1>Nesting of Conditional Statements</h1>
                <p>In this page you will learn about Nesting of Conditional Statements
                   in detail
                </p>
            </div>
            <div className="c1t-common-intro">
              <p>
              Nesting of conditional statements refers to the practice of using one or more conditional statements (if, if-else, or switch) within the code block of another conditional statement. It allows for more complex decision-making and branching in your program. Here's an example demonstrating the nesting of conditional statements:
              </p>
            </div>
            <div className="c1t-common-container">
              <h3>Syntax :</h3>
            </div>
            <div className="code-common-container">
              
            </div>
          </div>
      </div>
  )
}

export default Page