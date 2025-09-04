import React from 'react'
import './page.css'
import Header from '../components/Header'
import Footer from '../othercomponents/Footer'
import { Link } from 'react-router-dom'

export default function Work() {
  return (
      <div>
          
          <Header/>

          <div className="container">
              <div className="row work gx-4">
                    <div className="col-lg-4 work-col">
                        <Link to='/workdesc' style={{textDecoration:'none',color:'black'}}>
                      <img src="/images/w1.jpg" alt="" style={{ width: "100%" }} />
                      <p>HOCCOO</p>
                      </Link>
                  </div>  
                    <div className="col-lg-4 work-col">
                    <Link to='/workdesc' style={{textDecoration:'none',color:'black'}}>
                      <img src="/images/w2.png" alt="" style={{ width: "100%" }} />
                      <p>HK VITALS</p>
                      </Link>
                  </div>  
                    <div className="col-lg-4 work-col">
                    <Link to='/workdesc' style={{textDecoration:'none',color:'black'}}>
                      <img src="/images/w3.png" alt="" style={{width:"100%"}}/>
                      <p>FIERRE</p>
                      </Link>
                  </div>  
              </div>

              <div className="row work-row">
                  <div className="col-lg-4 work-col">
                    <Link to='/workdesc' style={{textDecoration:'none',color:'black'}}>
                      <img src="/images/w4.jpg" alt="" style={{width:"100%"}}/>
                      <p>FIERRE</p>
                      </Link>
                  </div>
                  <div className="col-lg-4 work-col">
                    <Link to='/workdesc' style={{textDecoration:'none',color:'black'}}>
                      <img src="/images/w5.png" alt="" style={{width:"100%"}}/>
                      <p>FIERRE</p>
                      </Link>
                  </div>
                  <div className="col-lg-4 work-col">
                    <Link to='/workdesc' style={{textDecoration:'none',color:'black'}}>
                      <img src="/images/w6.png" alt="" style={{width:"100%"}}/>
                      <p>FIERRE</p>
                      </Link>
                  </div>
              </div>

              <div className="row work-row">
                  <div className="col-lg-4 work-col">
                    <Link to='/workdesc' style={{textDecoration:'none',color:'black'}}>
                      <img src="/images/w7.png" alt="" style={{width:"100%"}}/>
                      <p>FIERRE</p>
                      </Link>
                  </div>
                  <div className="col-lg-4 work-col">
                    <Link to='/workdesc' style={{textDecoration:'none',color:'black'}}>
                      <img src="/images/w8.png" alt="" style={{width:"100%"}}/>
                      <p>FIERRE</p>
                      </Link>
                  </div>
                  <div className="col-lg-4 work-col">
                    <Link to='/workdesc' style={{textDecoration:'none',color:'black'}}>
                      <img src="/images/w1.jpg" alt="" style={{width:"100%"}}/>
                      <p>FIERRE</p>
                      </Link>
                  </div>
              </div>

              <div className="row work-row">
                  <div className="col-lg-4 work-col">
                    <Link to='/workdesc' style={{textDecoration:'none',color:'black'}}>
                      <img src="/images/w4.jpg" alt="" style={{width:"100%"}}/>
                      <p>NYKAA</p>
                      </Link>
                  </div>
                  <div className="col-lg-4 work-col">
                    <Link to='/workdesc' style={{textDecoration:'none',color:'black'}}>
                      <img src="/images/w6.png" alt="" style={{width:"100%"}}/>
                      <p>NYKAA</p>
                      </Link>
                  </div>
                  <div className="col-lg-4 work-col">
                    <Link to='/workdesc' style={{textDecoration:'none',color:'black'}}>
                      <img src="/images/w3.png" alt="" style={{width:"100%"}}/>
                      <p>NYKAA</p>
                      </Link>
                  </div>
              </div>

          </div>

          <Footer/>
          
    </div>
  )
}
