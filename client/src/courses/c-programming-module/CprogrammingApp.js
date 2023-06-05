import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Import topic components
import CHomePage from './cprogramming-pages/CHomePage';
import Co1topic1page from '../c-programming-module/cprogramming-pages/cprogramming-co1/topic1/Page';
import Co1topic2page from '../c-programming-module/cprogramming-pages/cprogramming-co1/topic2/Page';
import Co1topic3page from '../c-programming-module/cprogramming-pages/cprogramming-co1/topic3/Page';
import Co1topic4page from '../c-programming-module/cprogramming-pages/cprogramming-co1/topic4/Page';
import Co1topic5page from '../c-programming-module/cprogramming-pages/cprogramming-co1/topic5/Page';
import Co1topic6page from '../c-programming-module/cprogramming-pages/cprogramming-co1/topic6/Page';
import Co1topic7page from '../c-programming-module/cprogramming-pages/cprogramming-co1/topic7/Page';
import Co1topic8page from '../c-programming-module/cprogramming-pages/cprogramming-co1/topic8/Page';
import Co1topic9page from '../c-programming-module/cprogramming-pages/cprogramming-co1/topic9/Page';
import Co1topic10page from '../c-programming-module/cprogramming-pages/cprogramming-co1/topic10/Page';
import Co1topic11page from '../c-programming-module/cprogramming-pages/cprogramming-co1/topic11/Page';
import Co1topic12page from '../c-programming-module/cprogramming-pages/cprogramming-co1/topic12/Page';

import Co2topic1page from '../c-programming-module/cprogramming-pages/cprogramming-co2/topic1/Page';
import Co2topic2page from '../c-programming-module/cprogramming-pages/cprogramming-co2/topic2/Page';
import Co2topic3page from '../c-programming-module/cprogramming-pages/cprogramming-co2/topic3/Page';
import Co2topic4page from '../c-programming-module/cprogramming-pages/cprogramming-co2/topic4/Page';
import Co2topic5page from '../c-programming-module/cprogramming-pages/cprogramming-co2/topic5/Page';
import Co2topic6page from '../c-programming-module/cprogramming-pages/cprogramming-co2/topic6/Page';
import Co2topic7page from '../c-programming-module/cprogramming-pages/cprogramming-co2/topic7/Page';
import Co2topic8page from '../c-programming-module/cprogramming-pages/cprogramming-co2/topic8/Page';
import Co2topic9page from '../c-programming-module/cprogramming-pages/cprogramming-co2/topic9/Page';
import Co2topic10page from '../c-programming-module/cprogramming-pages/cprogramming-co2/topic10/Page';

import Co3topic1page from '../c-programming-module/cprogramming-pages/cprogramming-co3/topic1/Page';
import Co3topic2page from '../c-programming-module/cprogramming-pages/cprogramming-co3/topic2/Page';
import Co3topic3page from '../c-programming-module/cprogramming-pages/cprogramming-co3/topic3/Page';
import Co3topic4page from '../c-programming-module/cprogramming-pages/cprogramming-co3/topic4/Page';
import Co3topic5page from '../c-programming-module/cprogramming-pages/cprogramming-co3/topic5/Page';
import Co3topic6page from '../c-programming-module/cprogramming-pages/cprogramming-co3/topic6/Page';
import Co3topic7page from '../c-programming-module/cprogramming-pages/cprogramming-co3/topic7/Page';
import Co3topic8page from '../c-programming-module/cprogramming-pages/cprogramming-co3/topic8/Page';


import Co4topic1page from '../c-programming-module/cprogramming-pages/cprogramming-co4/topic1/Page';
import Co4topic2page from '../c-programming-module/cprogramming-pages/cprogramming-co4/topic2/Page';
import Co4topic3page from '../c-programming-module/cprogramming-pages/cprogramming-co4/topic3/Page';
import Co4topic4page from '../c-programming-module/cprogramming-pages/cprogramming-co4/topic4/Page';
import Co4topic5page from '../c-programming-module/cprogramming-pages/cprogramming-co4/topic5/Page';
import Co4topic6page from '../c-programming-module/cprogramming-pages/cprogramming-co4/topic6/Page';
import Co4topic7page from '../c-programming-module/cprogramming-pages/cprogramming-co4/topic7/Page';
import Co4topic8page from '../c-programming-module/cprogramming-pages/cprogramming-co4/topic8/Page';
import Co4topic9page from '../c-programming-module/cprogramming-pages/cprogramming-co4/topic9/Page';
import Co4topic10page from '../c-programming-module/cprogramming-pages/cprogramming-co4/topic10/Page';
import Co4topic11page from '../c-programming-module/cprogramming-pages/cprogramming-co4/topic11/Page';

const CprogrammingApp = () => {
  const topics = [
    // CO1 - Introduction to C Programming
    { name: 'Home', path: '', component: CHomePage },
    { name: 'Structured Programming Paradigm', path: 'co1/structured-programming-paradigm', component: Co1topic1page },
    { name: 'Designing Algorithms', path: 'co1/designing-algorithms', component: Co1topic2page },
    { name: 'Designing Flowcharts', path: 'co1/designing-flowcharts', component: Co1topic3page },
    { name: 'Primary Data Types', path: 'co1/primary-data-types', component: Co1topic4page },
    { name: 'Derived Data Types', path: 'co1/derived-data-types', component: Co1topic5page },
    { name: 'Basic Operators', path: 'co1/basic-operators', component: Co1topic6page },
    { name: 'Modularization', path: 'co1/modularization', component: Co1topic7page },
    { name: 'Storage Classes', path: 'co1/storage-classes', component: Co1topic8page },
    { name: 'User Input from Console', path: 'co1/user-input-from-console', component: Co1topic9page },
    { name: 'User Input from Files', path: 'co1/user-input-from-files', component: Co1topic10page },
    { name: 'Conditional Statements', path: 'co1/conditional-statements', component: Co1topic11page },
    { name: 'Nesting of Conditional Statements', path: 'co1/nesting-of-conditional-statements', component: Co1topic12page },

    // CO2 - Arrays and Pointers
    { name: 'Increment-decrement-operators', path: 'co2/Increment-decrement-operators', component: Co2topic1page },
    { name: 'Iterative-Statements', path: 'co2/Iterative-Statements', component: Co2topic2page },
    { name: 'Loops', path: 'co2/Loops', component: Co2topic3page },
    { name: 'Nested-Loops', path: 'co2/Nested-Loops', component: Co2topic4page },
    { name: 'Bitwise-Operators-I', path: 'co2/Bitwise-Operators-I', component: Co2topic5page },
    { name: 'Bitwise-Operators-II', path: 'co2/Bitwise-Operators-II', component: Co2topic6page },
    { name: 'Expression-Evaluation-Rules', path: 'co2/Expression-Evaluation-Rules', component: Co2topic7page },
    { name: 'Operator-Precedency', path: 'co2/Operator-Precedency', component: Co2topic8page },
    { name: 'Recursion', path: 'co2/Recursion', component: Co2topic9page },
    { name: 'Problem-Solving-with-Recursion', path: 'co2/Problem-Solving-with-Recursion', component: Co2topic10page },

    // CO3 - Advanced Concepts
    { name: 'Data-Types-II', path: 'co3/Data-Types-II', component: Co3topic1page },
    { name: 'Command-Line-Argumentsg', path: 'co3/Command-Line-Arguments', component: Co3topic2page },
    { name: 'Strings-and-String-Library', path: 'co3/Strings-and-String-Library', component: Co3topic3page },
    { name: 'Arrays-Creation-Insertion', path: 'co3/Arrays-Creation-Insertion', component: Co3topic4page },
    { name: 'Bubble-Sort', path: 'co3/Bubble-Sort', component: Co3topic5page },
    { name: 'Dynamic Data Structures', path: 'co3/Linear-Search', component: Co3topic6page },
    { name: 'Linear-Search', path: 'co3/Binary-Search', component: Co3topic7page },
    { name: 'Dynamic-Memory-Allocation', path: 'co3/Dynamic-Memory-Allocation', component: Co3topic8page },


    // CO4 - Advanced Topics
    { name: '2D-Arrays-Creation-Insertion', path: 'co4/2D-Arrays-Creation-Insertion', component: Co4topic1page },
    { name: '2D-Arrays-Matrixes', path: 'co4/2D-Arrays-Matrixes', component: Co4topic2page },
    { name: 'Matrix-Algebra-with-Arrays', path: 'co4/Matrix-Algebra-with-Arrays', component: Co4topic3page },
    { name: 'Structures', path: 'co4/Structures', component: Co4topic4page },
    { name: 'Array-of-Structures', path: 'co4/Array-of-Structures', component: Co4topic5page },
    { name: 'Structure-Pointers', path: 'co4/Structure-Pointers', component: Co4topic6page },
    { name: 'Stacks-using-Arrays', path: 'co4/Stacks-using-Arrays', component: Co4topic7page },
    { name: 'Queues-with-Arrays', path: 'co4/Queues-with-Arrays', component: Co4topic8page },
    { name: 'Single-Linked-List', path: 'co4/Single-Linked-List', component: Co4topic9page },
    { name: 'Delete-Operation-on-Linked-List', path: 'co4/Delete-Operation-on-Linked-List', component: Co4topic10page },
    { name: 'Non-linear-Data-Structures', path: 'co4/Non-linear-Data-Structures', component: Co4topic11page },
  ];

  return (
    <div className='CprogrammingAppComponent'>
      <div className="CprogrammingAppContainer">
        <Routes>
          {topics.map((topic, index) => (
            <Route
              key={index}
              path={topic.path}
              element={<topic.component />}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default CprogrammingApp
