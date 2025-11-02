import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#000",
        color: "#fff",
        padding: "50px 60px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          textAlign: "left",
          gap: "50px",
        }}
      >
        {/* Left Section - Company Info */}
        <div style={{ flex: "1 1 300px" }}>
          <h3
            style={{
              color: "#FF6600",
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "1.6rem",
              marginBottom: "10px",
            }}
          >
            Shreepati Educational Services
          </h3>
          <p
            style={{
              color: "#ccc",
              fontSize: "0.95rem",
              lineHeight: "1.6",
              maxWidth: "400px",
            }}
          >
            Empowering students with quality education and guidance for a
            brighter future.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div style={{ flex: "1 1 200px" }}>
          <h4 style={{ color: "#f1e90eff", marginBottom: "12px" }}>Quick Links</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {["Home", "About", "Services", "Projects", "Partners", "Contact"].map(
              (link) => (
                <li key={link} style={{ marginBottom: "8px" }}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    style={{
                      color: "#ccc",
                      textDecoration: "none",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#FF6600")}
                    onMouseLeave={(e) => (e.target.style.color = "#ccc")}
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div style={{ flex: "1 1 250px" }}>
          <h4 style={{ color: "#eeee0bff", marginBottom: "12px" }}>Contact</h4>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.9rem",
              color: "#ccc",
              marginBottom: "10px",
            }}
          >
            <FaMapMarkerAlt color="#FF6600" /> Shyam Market, Opp. Pillar No:75, Raza Bazar, Patna, Bihar - 801503
          </p>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.9rem",
              marginBottom: "10px",
            }}
          >
            <FaPhoneAlt color="#FF6600" />{" "}
            <a
              href="tel:+919801066182"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              +91 9801066182
            </a>
          </p>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.9rem",
              marginBottom: "20px",
            }}
          >
            <FaEnvelope color="#FF6600" />{" "}
            <a
              href="mailto:jayantkrishna@yahoo.in"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              jayantkrishna@yahoo.in
            </a>
          </p>

          {/* Icons Row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              justifyContent: "flex-start",
              fontSize: "1.4rem",
              marginTop: "10px",
            }}
          >
            <a
              href="https://wa.me/919801066182"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#25D366" }}
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/ses_consultancy?igsh=d2I5dmN5ZmIwcm00"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#E1306C" }}
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/SES_Consultancy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#3b17dfff" }}
            >
              <FaXTwitter />
            </a>
            <a href="mailto:jayantkrishna@yahoo.in" style={{ color: "#FF6600" }}>
              <FaEnvelope />
            </a>
            <a href="tel:+919801066182" style={{ color: "#e3e014ff" }}>
              <FaPhoneAlt />
            </a>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div
        style={{
          height: "1px",
          backgroundColor: "#333",
          margin: "30px 0",
        }}
      ></div>

      {/* Copyright */}
      <p
        style={{
          color: "#aaa",
          fontSize: "0.85rem",
          textAlign: "center",
          margin: 0,
        }}
      >
        &copy; {new Date().getFullYear()} Shreepati Educational Services. All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
