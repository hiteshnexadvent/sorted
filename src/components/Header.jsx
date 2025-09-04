import React from 'react'
import './style.css'

export default function Header() {
  return (
      <div>
          
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand pt-4 pb-4 ps-4" href="/"><img src="/images/logo.png" alt="" style={{height:'80px'}}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 navbar-items">
        <li className="nav-item">
          <a className="nav-link me-4 ms-4" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-4" href="/work">Works</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-4" href="/contact">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-4" href="/">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-4" href="/">FAQ</a>
        </li>  
      </ul>
            
        <div className="header1-button">
          <button className="animated-btn">
        <span className="btn-text default-text">Book 15-min intro call</span>
        <span className="btn-text hover-text">View Calendar</span>
      </button>
        </div>
            
    </div>
  </div>
</nav>

    </div>
  )
}
