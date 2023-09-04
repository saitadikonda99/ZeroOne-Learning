import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link as Scroll } from 'react-scroll';
import CountUp from 'react-countup';
import './Home.css';

import CourseFooter from '../../components/course_footer/CourseFooter'; 
import CourseNav from '../../components/course_nav/CourseNav';
import { FaFreeCodeCamp } from 'react-icons/fa';
import { GrUserExpert } from 'react-icons/gr';
import { RiTeamLine } from 'react-icons/ri';
import { BsFileEarmarkCode } from 'react-icons/bs'
import { FaJava } from 'react-icons/fa';
import { BsGit } from 'react-icons/bs';
import { FaPython } from 'react-icons/fa';
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md'


import mohan_img from '../../assets/mohan.png'
import sundar_img from '../../assets/sundar.png'
import harini_img from '../../assets/harini.png'


const CourseHome = () => {

  const [activity, setActivity] = useState(1)


  const handleActivity = (Number) => {
    setActivity(Number)
  }



  return (
    <div className='CourseHomeComponent'>
       <div className="courseHome-nav">
          <CourseNav/>
            </div>


{/* ------------------------------- Hero -------------------------------------------- */}


              <div className="courseHome-container">
                 <div className="courseHome-container-in">
                    <div className="courseHome-container-in-one">
                      <div className="courseHome-head">
                        <h1>Learn. Practice. Develop</h1>
                         </div>
                      </div>
                        <div className="courseHome-container-in-two">
                          <div className="courseHome-container-in-two-in">
                            <p>This is a community which provides <span> free hands-on training </span> in various fields of computer science and have an inclusive community focusing on a <span> learn by doing </span> approach.</p>
                            </div>
                          </div>
                          <div className="courseHome-container-in-three">
                                Explore Courses
                                <Scroll
                                    activeClass="active"
                                    to="course-home-courses"
                                    spy ={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                > 
                                <MdOutlineKeyboardDoubleArrowDown id="icons" />
                               </Scroll>
                          </div>
                       </div> 
                   </div>   

{/* ------------------------------- courses -------------------------------------------- */}

     <div className="courseHome-courses-container">
        <div className="course-home-courses">
           <h1>Our Popular <span>Courses</span> </h1>
            <div className="course-home-courses-in">
               
            <CourseItem course_name = "C" />
            <CourseItem course_name = "git"/>
            <CourseItem course_name = "python"/>
            <CourseItem course_name = "java"/>
               
            </div>
         </div>
      </div>


{/* ------------------------------- why zeroOne -------------------------------------------- */}  
            
              <div className="about-container">
                <div className="about-container-in">
                    <div className="about-in-one">
                      <h1>Some numbers that matter</h1>
                    </div>

                    <div className="about-in-two">
                      <div className="about-box ab-on-bx">
                        <div className="about-box-one">
                          <RiTeamLine/>
                        </div>
                      <div className="about-box-two">
                          <div className="about-box-two-in">
                             <CountUp end={999} duration={2} /> <span>+</span>
                        </div>
                      <p> Community members </p>
                    </div>
                  </div>
                  <div className="about-box ab-tw-bx">
                        <div className="about-box-one">
                          <RiTeamLine/>
                        </div>
                      <div className="about-box-two">
                          <div className="about-box-two-in">
                             <CountUp end={999} duration={2} /> <span>+</span>
                        </div>
                      <p> Community members </p>
                    </div>
                  </div>
                  <div className="about-box ab-th-bx">
                        <div className="about-box-one">
                          <RiTeamLine/>
                        </div>
                      <div className="about-box-two">
                          <div className="about-box-two-in">
                             <CountUp end={999} duration={2} /> <span>+</span>
                        </div>
                      <p> Community members </p>
                    </div>
                  </div>

                    
                    </div>
               </div>
           </div>

{/* ---------------------------------- reviews -------------------------------------------- */}

      <div className="courseHome-reviews-component">
          <div className="courseHome-reviews">
           <div className="courseHome-reviews-one">
            <div className="courseHome-reviews-one-in">
                <h1>see what the community is saying </h1>
                <h1>ZeroOne helps developers get <br/>
                    from <span>zero</span> to <span>one.</span> </h1>
                <p>At ZeroOne, we are on a mission to revolutionize 
                   the way you learn and excel in the world of coding 
                   and technology. Our platform is designed to equip 
                   you with the skills, knowledge, and experience needed 
                   to thrive in today's fast-paced and dynamic tech industry.
                </p>
                
                </div>
            </div>
              <div className="courseHome-reviews-two">
                <div className="reviews-two-in">
                      <div className="reviews-two-in-one common-review">
                        <div className="review-one-one common-review-box">
                          <div className="review-one-img common-image">
                            <img src={ harini_img } alt="sai" />
                          </div>
                          <div className="review-one-id common-id">
                            <h4> harini </h4>
                            <p> @harini </p>
                          </div>
                        </div>
                        <div className="review-one-two common-review-pa">
                          <p>The zeroOne is the best thing that happened to me and my career ❤️</p>
                        </div>
                      </div>

                      <div className="reviews-two-in-two common-review">
                       <div className="review-two-two common-review-box">
                          <div className="review-two-img common-image">
                            <img src={mohan_img} alt="mohan" />
                          </div>
                          <div className="review-two-id common-id">
                            <h4> Mohan Rao </h4>
                            <p>@mohan_1319</p>
                          </div>
                        </div>
                        <div className="review-two-two common-review-pa">
                          <p>zeroOne has been an absolute game-changer for my career, and I can't imagine life without it!</p>
                        </div>
                      </div>

                      <div className="reviews-two-in-three common-review">
                      <div className="review-three-three common-review-box">
                          <div className="review-three-img common-image">
                            <img src={sundar_img} alt="sundar" />
                          </div>
                          <div className="review-three-id common-id">
                            <h4> Sundar </h4>
                            <p>@sundar</p>
                          </div>
                        </div>
                        <div className="review-three-two common-review-pa">
                          <p>Thanks to zeroOne, my productivity and career growth have skyrocketed! </p>
                        </div>
                      </div>

                      <div className="reviews-two-in-four common-review">
                      <div className="review-four-four common-review-box">
                          <div className="review-four-img common-image">
                            <img src={ harini_img } alt="sai" />
                          </div>
                          <div className="review-four-id common-id">
                            <h4> abhiram </h4>
                            <p>@abhiram </p>
                          </div>
                        </div>
                        <div className="review-four-two common-review-pa">
                          <p>zeroOne's seamless integration and intuitive features have transformed my career workflow completely!</p>
                        </div>
                      </div> 
                  </div>
              </div>
          </div>
        </div>


{/* ------------------------------FAQ's---------------------------------- */}

          <div className="club-activity-component">
              <div className="clubs-Activities">  
                <div className="clubs-Activities-in">
                  <div className="clubs-Activities-box-on">
                   <div className="club-activity-head">
                    <h1>Activities</h1>
                  </div>
                  <div className="clubs-Activities-in-one">
                          <div className = { activity === 1 ? 'activity-content-one' : 'activity-hide' } id='one-color'>ZeroOne is a community where you can learn skills, network with smart people.</div>
                          <div className = { activity === 2 ? 'activity-content-one' : 'activity-hide' } id='two-color'>Click on join now in navigation</div>
                          <div className = { activity === 3 ? 'activity-content-one' : 'activity-hide' } id='three-color'>NO.</div>
                          <div className = { activity === 4 ? 'activity-content-one' : 'activity-hide' } id='four-color'>Are there any prerequisites?</div>
                     </div>
                  </div>
                      <div className="clubs-Activities-in-two">
                          <h1>FAQ's</h1> 
                         <div id = { activity === 1 ? 'activity-content-hover' : '' }
                          className="Activity-box-one" onClick={() => handleActivity(1)}>What exactly ZeroOne is?</div>
                         <div id = { activity === 2 ? 'activity-content-hover' : '' }
                         className="Activity-box-one" onClick={() => handleActivity(2)}>How to join in ZeroOne?</div>
                         <div id = { activity === 3 ? 'activity-content-hover' : '' }
                         className="Activity-box-one" onClick={() => handleActivity(3)}>What I can learn from ZeroOne?</div>
                         <div id = { activity === 4 ? 'activity-content-hover' : '' }
                         className="Activity-box-one" onClick={() => handleActivity(4)}>WebDevelopment, DSA, Community work and many more</div>
                    </div>
                </div>
              </div>
            </div>











        <div className="course-footer-container">
          <CourseFooter/>
           </div>
    </div>
  )
}

export default CourseHome


const CourseItem = ({ course_name }) => {



  useEffect(() => {
    const slideUpElements = document.querySelectorAll('.slide-up');
    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    slideUpElements.forEach((element) => {
      observer.observe(element);
    });
  }, []);
  

  const YourComponent = () => {
    const navigate = useNavigate();

    const handleClick = () => {
      switch (course_name) {
        case 'C':
          navigate('courses/c-programming');
          break;
        case 'git':
          navigate('/coming-soon');
          break;
        case 'python':
          // navigate('courses/python');
          navigate('/coming-soon');
          break;
        case 'java':
          navigate('/coming-soon');
          break;
        default:
          navigate('/coming-soon')
          break;
      }
      window.scrollTo(0, 0); 
    };

    let icon = null;

    if (course_name === 'C') {
      icon = <BsFileEarmarkCode />;
    } else if (course_name === 'git') {
      icon = <BsGit />;
    } else if (course_name === 'python') {
      icon = <FaPython />;
    } else if (course_name === 'java') {
      icon = <FaJava />;
    }

    return (
      <div
        className="course-home-courses-two-two course-name-box slide-up"
        onClick={handleClick}
        style={{ cursor: 'pointer' }}>
        <div className="course-home-courses-one-one-in">
          { icon }
        </div>
        <div className="course-home-courses-one-one-out">
          <h1>{ course_name }</h1>
        </div>
      </div>
    );
  };

  return <YourComponent />;
};