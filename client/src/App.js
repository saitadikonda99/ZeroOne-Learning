import './App.css';
import { Routes, Route } from 'react-router-dom';





import CourseApp from './courses/CourseApp';
import CourseHome from './courses/course_pages/course_home/CourseHome';





function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<CourseHome/>}></Route>
        <Route path='/courses/*' element={<CourseApp/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
