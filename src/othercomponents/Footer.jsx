import React from 'react'
import './other.css'
import News from './News'

export default function Footer() {
  return (
      <div>
          
      <div className="container">
        <div className="row footer-banner">
          <div className="col-lg-8">
            <h1>We Make Design <br /> Work For You Easier</h1>
            <p>Book a quick call to see how sorted branding works</p>
                  {/* Call to action button */}
        <div className="footer-cta">
          <img
            src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
            alt="Consultant"
          />
          <div>
            <p>Book a 15-min intro call</p>
            <p>
              <span className="footer-dot"></span> Available now
            </p>
          </div>
        </div>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>

      {/* ------------------------- footer main */}

      <div className="container-fluid">
        <div className="row footer-main">
          <div className="col-lg-4">
            <p>Made remotedly with 💜 and passion</p>
            <p>-Westhill Studio</p>
            <News/>
          </div>
          <div className="col-lg-2 footer-col2">
            <h5>Pages</h5>
            <ul>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </div>
          <div className="col-lg-2 footer-col3">
            <h5>Social</h5>
            <ul>
              <li>Instagram</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </div>
          <div className="col-lg-4 footer-col4">
            <img src="/images/s1.avif" alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}
