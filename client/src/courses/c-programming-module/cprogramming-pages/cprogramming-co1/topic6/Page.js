import React, {useState} from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

// imports Here
import CprogrammingSidebar from '../../../cprogramming-components/cprogramming-sidebar/CprogrammingSidebar';
import './Page.css'
import '../common-css/index.css'
import { TbCopy } from "react-icons/tb";
import { LuCopyCheck } from "react-icons/lu";


import { codeArr } from './Codes';


function Page() {

  const handleCp = () => {
    setCopiedIndex(-1);
  }
  
  const [copiedIndex, setCopiedIndex] = useState(-1); 
          const copyCode = (index) => {
          const textarea = document.createElement('textarea');
          textarea.value = codeArr[index].code;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          setCopiedIndex(index);
          setTimeout(() => handleCp(), 500);
      };

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
            <div className="c1t-common-intro">
                  <p>
                  Basic operators are fundamental building blocks in programming that allow
                  you to perform various operations on data. These operators can manipulate values, 
                  perform mathematical calculations, compare values, and more. Here are some examples of 
                  basic operators:
                  </p>
             </div>
              <div className="c1t-common-container">

                          {/* table one */}
              
                <div className="Arithmetic-Operators">
                 <h3>Arithmetic Operators:</h3>
                 <p>Arithmetic operations in the C programming language involve 
                    performing mathematical calculations on numerical data types. 
                    C provides several operators for arithmetic operations, including
                    addition, subtraction, multiplication, division, and modulus.
                </p>
              <div className="topic6-table-one">
                  <table>
                    <thead>
                      <tr>
                        <th>Symbol</th>
                        <th>Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>+</td>
                        <td>Addition: Adds two values together </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>-</td>
                        <td>Subtraction: Subtracts one value from another </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>*</td>
                        <td>Multiplication: Multiplies two values </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>/</td>
                        <td>Division: Divides one value by another </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>%</td>
                        <td>Modulus: Returns the remainder after division </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                    <h3>Example :</h3>

                  <div className="code-common-container">
                   <SyntaxHighlighter language="java" style={dracula}>
                            {codeArr[0].code}
                    </SyntaxHighlighter>
                      <button
                          onClick={() => copyCode(0)}
                          className={copiedIndex === 0 ? 'copied' : ''}
                        >
                          {copiedIndex === 0 ?  <LuCopyCheck/> : <TbCopy/> }
                      </button>
                </div>      
                </div>
              

                        {/* table two  */}
             <div className="Increment-Decrement">
                <h3>Increment & Decrement :</h3>
                  <p>
                  Certainly! In the C programming language, 
                  the increment <b>(++)</b> and decrement <b>(--)</b> operators are used to 
                  increase or decrease the value of a variable by 1, respectively.
                  </p>

                <div className="topic6-table-two">
                  <table>
                    <thead>
                      <tr>
                        <th>Symbol</th>
                        <th>Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>++k</td>
                        <td>Prefix Increment</td>
                      </tr>
                      <tr>
                        <td>--k</td>
                        <td>Prefix Decrement</td>
                      </tr>
                      <tr>
                        <td>k++</td>
                        <td>Postfix Increment</td>
                      </tr>
                      <tr>
                        <td>k--</td>
                        <td>Postfix Decrement</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              <div className="c1t-common-container">
                 <h3> 
                 Prefix Increment <b>(++k) :</b>
                 </h3>
                 <p>
                 When used as a prefix, <b>++</b>  is placed before 
                 the variable, like  <b>++k</b> It increments the value of <b>k</b> by 1 and then 
                 returns the updated value.
                 </p>
              </div>
               <div className="code-common-container">
                   <SyntaxHighlighter language="java" style={dracula}>
                            {codeArr[1].code}
                    </SyntaxHighlighter>
                      <button
                          onClick={() => copyCode(1)}
                          className={copiedIndex === 1 ? 'copied' : ''}
                        >
                          {copiedIndex === 1 ?  <LuCopyCheck/> : <TbCopy/> }
                      </button>
                </div>  
                <p>In this example, the value of  <b>k</b> is initially 5 
                   The prefix increment operator <b>++x</b> increments the value of  <b>x </b> 
                   by 1, making it 6. The updated value of  <b>x</b> is assigned to result, 
                   and both result and  <b>k</b> are printed to the console using  <b>printf()</b>
               </p>  
              <div className="c1t-common-container">
                 <h3> 
                 Prefix Decrement <b>(--k) :</b>
                 </h3>
                 <p>
                 When used as a prefix, <b>--</b> is placed before 
                 the variable, like  <b>--k.</b> It decreases the value of  <b>k</b> by 1 and then 
                 returns the updated value.
                 </p>
              </div>  
              <div className="code-common-container">
                   <SyntaxHighlighter language="java" style={dracula}>
                            {codeArr[2].code}
                    </SyntaxHighlighter>
                      <button
                          onClick={() => copyCode(2)}
                          className={copiedIndex === 2 ? 'copied' : ''}
                        >
                          {copiedIndex === 2 ?  <LuCopyCheck/> : <TbCopy/> }
                      </button>
                </div>  
            <div className="c1t-common-container">
                 <h3> 
                 Postfix Increment <b>(k++) :</b>
                 </h3>
                 <p>
                 When used as a postfix, <b>++</b> is placed before 
                 the variable, like  <b>++k.</b> It increments the value of  <b>k</b> by 1 and then 
                 returns the updated value.
                 </p>
              </div>  
              <div className="code-common-container">
                   <SyntaxHighlighter language="java" style={dracula}>
                            {codeArr[2].code}
                    </SyntaxHighlighter>
                      <button
                          onClick={() => copyCode(2)}
                          className={copiedIndex === 2 ? 'copied' : ''}
                        >
                          {copiedIndex === 2 ?  <LuCopyCheck/> : <TbCopy/> }
                      </button>
                   </div>  
                </div>
            </div>
          </div>
      </div>
  )
}

export default Page