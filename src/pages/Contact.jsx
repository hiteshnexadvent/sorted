import React from 'react'
import './page.css'
import Header from '../components/Header'
import { FiMail, FiPhone } from "react-icons/fi";

export default function Contact() {
  return (
      <div>
          
          <Header/>
          
          <div className="container">
              <div className="row contact-row">
                  <h1>Reach Us At Anytime</h1>
                  <p>Have questions or need any help? We'r here to help you with that</p>
                  <div className="col-lg-6">
                      <div className="box1">
                          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                            <a href="mailto:hello@example.com" aria-label="Email">
                                <FiMail size={44} color="black" />
                              </a>
                              </div>
                          <p>Feel Free to email me if you have any questions or need more details!</p>
                          <p>sorted@gmail.com</p>
                      </div>   
                      <div className="box1">
                      
                          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                            <a href="mailto:hello@example.com" aria-label="Email">
                                <FiPhone size={44} color="black" />
                              </a>
                          </div>
                          <p>Feel Free to email me if you have any questions or need more details!</p>
                          <p>Book A Call</p>
                          
                      </div>   
                  </div>
                  <div className="col-lg-6">
                      
                      <form>
                          
                          
                          
                      </form>

                  </div>
              </div>
          </div>

    </div>
  )
}
