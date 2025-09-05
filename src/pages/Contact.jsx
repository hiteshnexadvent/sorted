import React from 'react'
import './page.css'
import Header from '../components/Header'
import { FiMail, FiPhone } from "react-icons/fi";
import ContactForm from '../othercomponents/ContactForm';
import ProcessSteps from '../othercomponents/ProcessSteps';
import FAQ from '../sections/FAQ';
import Footer from '../othercomponents/Footer';

export default function Contact() {
  return (
      <div>
          
          <Header/>
          
          <div className="container">
              <div className="row contact-row">
                  <h1>Reach Us At Anytime</h1>
                  <p>Have questions or need any help? We'r here to help you with that</p>
                  <div className="col-lg-6 col-12">
                      <div className="box1">
                          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                            <a href="mailto:hello@example.com" aria-label="Email">
                                <FiMail size={44} color="#391459" />
                              </a>
                              </div>
                          <p>Feel Free to email me if you have any questions or need more details!</p>
                          <p>sorted@gmail.com</p>
                      </div>   
                      <div className="box1">
                      
                          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                            <a href="mailto:hello@example.com" aria-label="Email">
                                <FiPhone size={44} color="#391459" />
                              </a>
                          </div>
                          <p>Feel Free to email me if you have any questions or need more details!</p>
                          <p>Book A Call</p>
                          
                      </div>   
                  </div>
                  <div className="col-lg-6 col-12">
                          
                          <ContactForm></ContactForm>

                  </div>
              </div>
          </div>

          <div className="container-fluid">
              <div className="row contact-idea">
                  <div className="col-lg-12">
                      <h1>How We Bring Ideas To Life</h1>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima nisi <br /> ad dolorum eos incidunt voluptate ill praesentium!</p>
                      <button>Schedule a Call </button>

                      
                  </div>
                  <ProcessSteps/>
              </div>
          </div>
          
          <FAQ />
          
          <Footer/>

    </div>
  )
}
