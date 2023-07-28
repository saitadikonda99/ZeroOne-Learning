import './App.css';
import { Routes, Route, Router } from 'react-router-dom';


//import components here
import Homeapp from './Pages/Home/Homeapp';
import Home from './Pages/Home/Home';
import CprogrammingApp from './courses/c-programming-module/CprogrammingApp';
import NotFound from './NotFound/NotFound'
import Coming from './Comingsoon/Coming';
import LaptopOnlyMessage from './LaptopOnlyMessage';


function App() {

  const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);
  return (
    <div className="App">
        {isMobileDevice ? (
          <Router scrollToTop={true}> 
            <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/courses/*' element={<Homeapp/>}></Route>
            <Route path='/c-programming/*' element={<CprogrammingApp/> }></Route>
            <Route component={NotFound} /> 
            <Route path='/coming-soon' element={<Coming/>}></Route>
          </Routes>
          </Router>
              ) : (
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/courses/*' element={<Homeapp/>}></Route>
              <Route path='/c-programming/*' element={<CprogrammingApp/>}></Route>
              <Route component={NotFound} /> 
              <Route path='/coming-soon' element={<Coming/>}></Route>
            </Routes>
      )}

          { /* <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/courses/*' element={<Homeapp/>}></Route>
              <Route path='/c-programming/*' element={<CprogrammingApp/>}></Route>
              <Route path='*' element={<NotFound/>}></Route>
              <Route path='/coming-soon' element={<Coming/>}></Route>
            </Routes> */}
    </div>
  );
}

export default App;
