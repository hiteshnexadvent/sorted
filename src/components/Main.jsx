import React, { useEffect } from "react";
import "./style.css";
import ScrollText from "./ScrollText";
import CircularCarousel from "../sections/CircularCarousel";
import VerticalScrollGallery from "../sections/VerticalScrollGallery";
import OverlappingCards from "../sections/OverlappingCards";
import ReviewCarousel from "../sections/ReviewCarousel";
import FAQ from "../sections/FAQ";
import CircleOverlay from "./CircleOverlay";
import Video from "./Video";
import Footer from "../othercomponents/Footer";

export default function Main() {

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>

      <CircleOverlay/>
      <div className="container-fluid gx-0">
        <div className="row main-row1 gx-0">
          <div className="col-lg-3 col-12"></div>
          <div className="col-lg-6 col-12">
            <div className="marquee-container">
              <div className="marquee">
                <span>Branding</span>
                <span>UI/UX Design</span>
                <span>Web Design</span>
                <span>Graphic Design</span>
                <span>Product Design</span>
                <span>Branding</span>
                <span>UI/UX Design</span>
                <span>Web Design</span>

                <span>Branding</span>
                <span>UI/UX Design</span>
                <span>Web Design</span>
                <span>Graphic Design</span>
                <span>Product Design</span>
                <span>Branding</span>
                <span>UI/UX Design</span>
                <span>Web Design</span>
              </div>
            </div>

            <div className="hero-text">
              <h1 id="heading-text">World-class design whenevr you need it.</h1>
              <p id="heading-para">
                A monthly design subscription for startups, creators, and teams
                who need work done without the wait.
              </p>
            </div>

            {/* Call to action button */}
            <div className="main-cta">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
                alt="Consultant"
              />
              <div>
                <p>Book a 15-min intro call</p>
                <p>
                  <span className="main-dot"></span> Available now
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>

        <Video/>

        <div className="row scroll-row gx-0">
          <ScrollText></ScrollText>
        </div>

        <div className="row scroll-row gx-0">
          <CircularCarousel/>
        </div>

        <div className="row scroll-row gx-0">
          <VerticalScrollGallery />
        </div>

        <div className="row scroll-row gx-0">
          <OverlappingCards />
        </div>

        <div className="row scroll-row gx-0">
          <ReviewCarousel/>
        </div>

        <div className="row scroll-row gx-0">
          <FAQ/>
        </div>

        <Footer/>

      </div>
    </div>
  );
}
