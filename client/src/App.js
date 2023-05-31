import './App.css';
import { Routes, Route } from 'react-router-dom';


//import components here
import NavBar from '../src/components/navigation-bar/NavBar';
import Footer from '../src/components/footer/Footer';


//import files here
import Home from '../src/pages/home/Home';




function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
