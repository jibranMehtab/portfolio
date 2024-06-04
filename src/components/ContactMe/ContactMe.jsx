// ContactMe.jsx
import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section id="contact-container" className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            icon={<EmailIcon />}
            text="jibran.mehtab45@yahoo.com"
            type="email"
          />
          <ContactInfoCard
            icon={<GitHubIcon />}
            text="https://github.com/jibranMehtab"
            type="github"
          />
          <ContactInfoCard
            icon={<WhatsAppIcon />}
            text="+923488274017"
            type="whatsapp"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
