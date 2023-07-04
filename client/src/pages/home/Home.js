import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';



//import components here
import NavBar from '../../components/navigation-bar/NavBar';
import Footer from '../../components/footer/Footer';


const Home = () => {
  return (
    <div className='HomeComponent'>
      <NavBar/>
        <div className="HomeContainer">
          <div className="Home">
             


        <div className="one hero">
          <div className="one-in">
            <div className="one-in-one">
                <div className="oio-one">
                    <div className="oio-one-in">
                      <p>For Better Future</p>
                      <h1>Join and become the part of trusted community</h1>
                      <p id='ptwo'>Find the right instructor for you</p>
                      <div className="oioo-bi">
                        <Link className='oioo-bi-links' to='/' >About Us</Link>
                        <Link className='oioo-bi-links' to='/' >Courses</Link>
                      </div>
                    </div>
                </div>
                <div className="oio-two">

                </div>
            </div>
            <div className="one-in-two">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e74040" fill-opacity="1" d="M0,128L240,160L480,128L720,128L960,64L1200,64L1440,128L1440,0L1200,0L960,0L720,0L480,0L240,0L0,0Z"></path></svg>
            </div>
          </div>
        </div>
        
                   
            </div>
          </div>
        
        </div>
  )
}

export default Home