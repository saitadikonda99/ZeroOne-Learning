import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { TbCopy } from 'react-icons/tb';
import { LuCopyCheck } from 'react-icons/lu';
import ReactPlayer from 'react-player';

import CprogrammingSidebar from '../../../cprogramming-components/cprogramming-sidebar/CprogrammingSidebar';
import './Page.css';
import '../Common-css/index.css';
import { codeArr } from './Codes';
import videoUrl from '../../../../../assets/queue.mp4'

function Page() {
  const handleCp = () => {
    setCopiedIndex(-1);
  };

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
                <h1>Single Linked List (with structures)</h1>
                <p>In this page you will learn Single Linked List (with structures) 
                   in detail
                </p>
            </div>

            <div className="c4t-common-intro">
              <p>A linked list is a common data structure in computer science used to store and organize a collection of elements. It consists of a sequence of nodes, where each node contains data and a reference (or pointer) to the next node in the sequence. The last node in the list typically has a null reference to indicate the end.</p>
            </div>

            <div className="c4t-common-container">
              <h3>Animated Video :</h3>
            </div>

            <div className="stack-video-container">
              <ReactPlayer 
                url={videoUrl} 
                controls={true}  
                width="38%"
                height="100%" 
              />
              <a href="https://www.instagram.com/worldofivo/"> Video Credits : worldofivo </a>
            </div>


            <div className="code-common-container">
          <SyntaxHighlighter language="c" style={dracula}>
            {codeArr[0].code}
          </SyntaxHighlighter>
          <button
            onClick={() => copyCode(0)}
            className={copiedIndex === 0 ? 'copied' : ''}
          >
            {copiedIndex === 0 ? <LuCopyCheck /> : <TbCopy />}
          </button>
        </div>


        <div className="queue-ul-container">
            <ul>
                <li> <b>Enqueue:</b>  Adds an element to the rear of the queue.</li>
                <li> <b>Dequeue:</b>  Removes and returns the element from the front of the queue.</li>
                <li> <b>Front:</b>  Returns the element at the front of the queue without removing it.</li>
                <li> <b>Rear:</b>  Returns the element at the rear of the queue without removing it.</li>
                <li> <b>IsEmpty:</b>  Checks if the queue is empty.</li>
                <li> <b>IsFull:</b>  Checks if the queue is full.</li>
          </ul>
        </div>

          </div>
      </div>
  )
}

export default Page