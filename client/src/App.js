import './App.css';
import { Routes, Route } from 'react-router-dom';

//import files here
import Home from '../src/pages/home/Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
