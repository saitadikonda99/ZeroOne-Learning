import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';


// import Here 
import CprogrammingSidebar from '../../../cprogramming-components/cprogramming-sidebar/CprogrammingSidebar';
import './Page.css'


const Page = () => {

  const codeArr = [ {
    code : `int calculateSum(int a, int b) {
      int sum = 0;
    
      if (a > b) {
          return a + b;
      } else {
          sum = a + b;
      }
      
      // Perform additional calculations
      
      return sum;
  }`
  },];

  return (
    <div className="co1-Topic-one"> 
      <div className="cosidebar">
        <CprogrammingSidebar/>
      </div>
      <div className="topic-content">
        <div className="topic-content-head">
             <h1> Structured-Programming-Paradigm </h1>
                  <p> In this page you will learn about 
                      Structured-Programming-Paradigm
                      in detail 
                  </p>
               </div>
               <div className="topic-intro">
                <p>The structured programming paradigm emphasizes the use 
                   of structured control flow constructs, such as if...else 
                   statements, loops, and subroutines, to write programs
                   that are easy to read, understand, and maintain. 
                   The design principles of structured programming
                   promote clarity, modularity, and efficiency in 
                   software development.
                </p>
             </div>
                <div className="topic-content-one">
                  <h1> 1. Single Entry, Single Exit (SESE):</h1>
                  <p>Single Entry, Single Exit (SESE):
                     Each block of code should have
                     only one entry point and one exit point, 
                     making the program flow more predictable 
                     and easier to follow. This principle helps 
                     in avoiding spaghetti code and makes debugging and maintenance easier.
                     </p>
                     <SyntaxHighlighter language="java" style={dracula}>
                        {codeArr[0].code};
                     </SyntaxHighlighter>
                </div>
          </div>
      </div>
  )
}

export default Page;