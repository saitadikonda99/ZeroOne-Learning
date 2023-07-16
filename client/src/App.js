import './App.css';
import { Routes, Route } from 'react-router-dom';


//import components here
import Homeapp from './Pages/Home/Homeapp';
import Home from './Pages/Home/Home';
import CprogrammingApp from './courses/c-programming-module/CprogrammingApp';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/courses/*' element={<Homeapp/>}></Route>
        <Route path='/c-programming/*' element={<CprogrammingApp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
