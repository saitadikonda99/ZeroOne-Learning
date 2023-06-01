import React, { useState } from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';

import './CprogrammingSidebar.css';

const routes = [
  {
    name: 'Course Outcome 1',
    content: ['Structured Programming Paradigm', 'Designing Algorithms', 'Designing Flowcharts', 'Primary Data Types', 'Derived Data Types', 'Basic Operators', 'Modularization', 'Storage Classes', 'User input from console', 'User input from files', 'Conditional Statements', 'Nesting of Conditional Statements'],

    paths: ['/courses/c-programming/co1/structured-programming-paradigm', '/courses/c-programming/co1/designing-algorithms', '/courses/c-programming/co1/designing-flowcharts', '/courses/c-programming/co1/primary-data-types', '/courses/c-programming/co1/derived-data-types', '/c-programming/co1/5', '/c-programming/co1/6', '/c-programming/co1/7', '/c-programming/co1/8', '/c-programming/co1/9', '/c-programming/co1/10', '/c-programming/co1/11']
  },
  {
    name: 'Course Outcome 2',
    content: ['Increment, decrement operators', 'Iterative Statements', 'Loops', 'Nested Loops', 'Bitwise Operators-I', 'Bitwise Operators-II', 'Expression Evaluation Rules', 'Operator Precedency', 'Recursion', 'Problem Solving with Recursion'],
    paths: ['/courses/c-programming/co1/structured-programming-paradigm', '/courses/c-programming/co1/designing-algorithms', '/courses/c-programming/co1/designing-flowcharts', '/courses/c-programming/co1/primary-data-types', '/courses/c-programming/co1/derived-data-types', '/c-programming/co1/5', '/c-programming/co1/6', '/c-programming/co1/7', '/c-programming/co1/8', '/c-programming/co1/9', '/c-programming/co1/10', '/c-programming/co1/11']
  },
  {
    name: 'Course Outcome 3',
    content: ['Data Types-II', 'Command Line Arguments', 'Strings and String Library', 'Arrays - Creation & Insertion', 'Bubble Sort', 'Linear Search', 'Binary Search', 'Dynamic Memory Allocation' ],
    paths: ['/courses/c-programming/co1/structured-programming-paradigm', '/courses/c-programming/co1/designing-algorithms', '/courses/c-programming/co1/designing-flowcharts', '/courses/c-programming/co1/primary-data-types', '/courses/c-programming/co1/derived-data-types', '/c-programming/co1/5', '/c-programming/co1/6', '/c-programming/co1/7', '/c-programming/co1/8', '/c-programming/co1/9', '/c-programming/co1/10', '/c-programming/co1/11']
  },
  {
    name: 'Course Outcome 4',
    content: ['2D Arrays - Creation & Insertion', '2D Arrays - Matrixes', 'Matrix Algebra with Arrays', 'Structures', 'Array of Structures', 'Structure Pointers', 'Stacks using Arrays', 'Queues with Arrays', 'Single Linked List (with structures)', 'Delete Operation on Linked List','Non-linear Data Structures'],
    paths: ['/courses/c-programming/co1/structured-programming-paradigm', '/courses/c-programming/co1/designing-algorithms', '/courses/c-programming/co1/designing-flowcharts', '/courses/c-programming/co1/primary-data-types', '/courses/c-programming/co1/derived-data-types', '/c-programming/co1/5', '/c-programming/co1/6', '/c-programming/co1/7', '/c-programming/co1/8', '/c-programming/co1/9', '/c-programming/co1/10', '/c-programming/co1/11']
  },
];

const CprogrammingSidebar = ({ children }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState('');

  const toggleDropdown = (content) => {
    if (dropdownOpen && selectedContent === content) {
      setDropdownOpen(false);
      setSelectedContent('');
    } else {
      setDropdownOpen(true);
      setSelectedContent(content);
    }
  };

  return (
    <div className="CprogrammingSidebarComponent">
      <div className="CprogrammingSidebarContainer">
        <div className="co-header">
          <h2>Course Outcomes Overview</h2>
        </div>
        <section className="routes">
          {routes.map((route) => (
            <div key={route.name} className="whole">
              <div className="whole-link" onClick={() => toggleDropdown(route.content)}>
                <div className="link_text">{route.name}</div>
                
                <i
                  className={`fa ${
                    dropdownOpen && selectedContent === route.content
                      ? 'fa-angle-double-up'
                      : 'fa-angle-double-right'
                  }`}
                  aria-hidden="true"
                ></i>
              </div>
              {dropdownOpen && selectedContent === route.content && (
                <div className="dropdown">
                    <div className="dropdown-content">
                        {Array.isArray(route.content) ? (
                            route.content.map((item, index) => (
                            <div className='dc-keys' key={item}>
                            <FaLongArrowAltRight/> 
                            <Link className='dc-keys-link' to={route.paths[index]}>
                                {item}
                            </Link>
                            </div>
                        ))
                        ) : (
                        <div>{route.content}</div>
                        )}
                    </div>
                </div>
              )}
            </div>
          ))}
          <main>{children}</main>
        </section>
      </div>
    </div>
  );
};

export default CprogrammingSidebar;
