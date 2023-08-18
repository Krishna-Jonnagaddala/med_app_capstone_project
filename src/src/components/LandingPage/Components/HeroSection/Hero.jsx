import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div>
        <div data-aos="fade-up" className="flex-hero">
            
            <h1>
              Your Health<br/>
              <span className="text-gradient">
                
                Our Responsibility
              </span>
            </h1>
              <div class="blob-cont">
                  <div class="blue blob"></div>
              </div>
              <div class="blob-cont">
                  <div class="blue1 blob"></div>
              </div>
            <h4>
            Your health should always be your number one priority, no matter how busy your schedule is. So instead of attending in-person appointments at a doctors practice, we offer a range of options such as using our online GP services to access GP video consultations and get professional advice at your convenience.
            </h4>
            <a href="#services">
              <button class="button">Get Started</button>
            </a>
              
        </div>

      </div>
    </section>
  );
};

export default Hero;
