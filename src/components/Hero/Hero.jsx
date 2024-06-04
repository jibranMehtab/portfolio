import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <>
      <section id="home-container" className="hero-container">
        <div className="hero-content">
          <h2>Building Digital Experience that inspire</h2>
          <p>
            Passinate Full Stack Developer | Transform idea into Seamless and
            Visually Stunning Web Application
          </p>
        </div>
        <div className="hero-img">
          <div>
            <div className="tech-icon">
              <img src="./assets/img/php.png" alt="" />
            </div>
            <img src="./assets/img/myimg.jpeg" alt="" />
          </div>
          <div>
            <div className="tech-icon">
              <img src="./assets/img/codeigniter.svg" alt="" />
            </div>
            <div className="tech-icon">
              <img
                style={{ height: "3rem", width: "3rem" }}
                src="./assets/img/linux.svg"
                alt=""
              />
            </div>
            <div className="tech-icon">
              <img src="./assets/img/aws.png" alt="" />
            </div>
            <div className="tech-icon">
              <img src="./assets/img/wordpress.png" alt="" />
            </div>
            <div className="tech-icon">
              <img src="./logo192.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
