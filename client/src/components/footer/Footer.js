import React from 'react';
import './Footer.css';
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className='FooterComponent'>
        <div className="FooterContainer">
          <div className="Footer">
            <div className="Footer-in">
              <div className="Footer-one">
                <div className="Footer-one-in">
                  <div className="Footer-one-one">
                    <div className="Footer-one-one-in">
                      <div className="Footer-ooi-sub">
                        <div className="Footer-ooi-sub-in">
                        <p className='Fooi-sub-head'>Company Info</p>
                          <span>About Us</span>
                          <span>Career</span>
                          <span>We are hiring</span>
                          <span>Blog</span>
                        </div>
                      </div>
                      <div className="Footer-ooi-sub">
                        <div className="Footer-ooi-sub-in">
                          <p className='Fooi-sub-head'>Resources</p>
                          <span>About Us</span>
                          <span>Career</span>
                          <span>We are hiring</span>
                          <span>Blog</span>
                        </div>
                      </div>
                      <div className="Footer-ooi-sub">
                        <div className="Footer-ooi-sub-in">
                        <p className='Fooi-sub-head'>Features</p>
                          <span>Business Marketing</span>
                          <span>User Analytics</span>
                          <span>Live Chat</span>
                          <span>Unlimited Support</span>
                        </div>
                      </div>
                      <div className="Footer-ooi-sub">
                        <div className="Footer-ooi-sub-in">
                        <p className='Fooi-sub-head'>Company Info</p>
                          <span>IOS & Anroid</span>
                          <span>Watch a Demo</span>
                          <span>Customers</span>
                          <span>API</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Footer-one-two">
                    <div className="Footer-one-two-in">
                        <div className="Fot-head">
                          <span>Get In Touch</span>
                        </div>
                        <div className="Fot-child">
                          <span><AiOutlinePhone/> +91 9087654321</span>
                          <span><IoLocationSharp/>4517 Washington Ave. Manchester, Kentucky 39495</span>
                          <span><IoMdMail/>debra.holt@example.com</span>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Footer-two">
                <div className="Footer-two-in">
                  <div className="Footer-two-one">
                    <span>Designed by Sai Manikanta & Deepak Reddy Gathpa | <AiOutlineCopyrightCircle/> ZeroOne - The CodeClub</span>
                  </div>
                  <div className="Footer-two-two">
                    <div className="Footer-two-two-in">
                      <div className="facbookicon">
                        <BsFacebook/>
                      </div>
                      <div className="instaicon">
                        <RiInstagramFill/>
                      </div>
                      <div className="twittericon">
                        <BsTwitter/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer