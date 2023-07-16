import './App.css';
import { Routes, Route } from 'react-router-dom';





import CourseApp from './Pages/Home/Homeapp';
import CourseHome from './Pages/Home/Home';
import CprogrammingApp from './courses/c-programming-module/CprogrammingApp';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<CourseHome/>}></Route>
        <Route path='/courses/*' element={<CourseApp/>}></Route>
        <Route path='/c-programming/*' element={<CprogrammingApp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
