import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggalMenu }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 120;
      const { top } = section.getBoundingClientRect();
      window.scrollTo({
        top: top + window.pageYOffset - offset,
        behavior: "smooth",
      });
    }
  };

  const handleScrollToSkills = () => {
    scrollToSection("skills-container");
  };

  const handleScrollToContact = () => {
    scrollToSection("contact-container");
  };
  const handleScrollToHome = () => {
    scrollToSection("home-container");
  };
  const handleScrollToWorkExperience = () => {
    scrollToSection("work-experience-container");
  };
  const handleScrollToProject = () => {
    scrollToSection("project-card-container");
  };
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggalMenu}
      >
        <div className="mobile-menu-content">
          <img
            className="logo"
            src="./assets/img/jibranMehtab.png"
            alt="logo"
          />

          <ul>
            <li>
              <a className="menu-item" onClick={handleScrollToHome}>
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" onClick={handleScrollToSkills}>
                Skills
              </a>
            </li>
            <li>
              <a className="menu-item" onClick={handleScrollToWorkExperience}>
                Work Experience
              </a>
            </li>
            <li>
              <a className="menu-item" onClick={handleScrollToProject}>
                Projects
              </a>
            </li>
            <li>
              <a className="menu-item" onClick={handleScrollToContact}>
                Contact Me
              </a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Resume
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
