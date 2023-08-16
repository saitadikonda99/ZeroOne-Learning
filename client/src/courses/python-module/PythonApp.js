import React from "react";
import { Routes, Route } from "react-router-dom";

import PythonHome from "./PythonHome";

const PythonApp = () => {
    return (
      <div className='CprogrammingAppComponent'>
        <div className="CprogrammingAppContainer">
          <Routes>
            <Route path="/courses/python-module/PythonHome" component={PythonHome} />
         </Routes>
      </div>
    </div>
    );
}

export default PythonHome;