import React from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
   FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-scroll";
import { FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <footer
      style={{
        background: "#000",
        color: "#fff",
        padding: "80px 20px",
        fontFamily: "'Poppins', sans-serif",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "50px",
          alignItems: "flex-start",
        }}
      >
        {/* About */}
        <div style={{ flex: "1 1 300px" }}>
          <h3
            style={{
              color: "#FF6600",
              marginBottom: "15px",
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "1.7rem",
            }}
          >
            Shreepati Educational Services
          </h3>
          <p style={{ color: "#ccc", fontSize: "1rem", lineHeight: "1.8" }}>
            Empowering students with quality education and guidance. Building a
            brighter future through knowledge and mentorship.
          </p>
        </div>

        {/* Quick Links */}
        <div style={{ flex: "1 1 200px" }}>
          <h4
            style={{
              color: "#FFD700",
              marginBottom: "15px",
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "1.4rem",
            }}
          >
            Quick Links
          </h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {["home", "about", "services", "projects", "partners", "contact"].map(
              (section) => (
                <li key={section} style={{ marginBottom: "12px" }}>
                  <Link
                    to={section}
                    smooth={true}
                    duration={500}
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "1rem",
                      position: "relative",
                      transition: "all 0.3s ease",
                    }}
                    className="footer-link"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact */}
        <div style={{ flex: "1 1 300px" }}>
          <h4
            style={{
              color: "#FFD700",
              marginBottom: "15px",
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "1.4rem",
            }}
          >
            Contact
          </h4>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "1rem",
              color: "#ccc",
            }}
          >
            <FaMapMarkerAlt /> Shyam Market, Opp. Pillar No:75, Raza Bazar,
            Patna, Bihar - 801503
          </p>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "1rem",
              color: "#ccc",
            }}
          >
            <FaPhoneAlt />{" "}
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
              fontSize: "1rem",
              color: "#ccc",
            }}
          >
            <FaEnvelope />{" "}
            <a
              href="mailto:jayantkrishna@yahoo.in"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              jayantkrishna@yahoo.in
            </a>
          </p>

          {/* Social Links */}
          <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
            {[
              {
                icon: <FaWhatsapp />,
                color: "#25D366",
                link: "https://wa.me/919801066182",
              },
              {
                icon: <FaFacebook />,
                color: "#1f3ff4",
                link: "https://www.facebook.com/share/1AHWKzG6xw/",
              },
              {
                icon: <FaEnvelope />,
                color: "#D44638",
                link: "mailto:jayantkrishna@yahoo.in",
              },
              {
                icon: <FaXTwitter />,
                color: "#63676a",
                link: "https://x.com/SES_Consultancy",
              },
              {
                icon: <FaInstagram />,
                color: "#E1306C",
                link: "https://www.instagram.com/ses_consultancy?igsh=d2I5dmN5ZmIwcm00",
              },
              {
                icon: <FaLinkedin />,
                color: "#0A66C2",
                link: "https://www.linkedin.com/company/shreepati-educational-services/",
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.05)",
                  color: social.color,
                  fontSize: "1.4rem",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(6px)",
                }}
                className="social-icon"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <hr
        style={{
          border: "1px solid #FF6600",
          margin: "50px 0",
          borderRadius: "3px",
          opacity: 0.3,
        }}
      />
      <p style={{ textAlign: "center", color: "#aaa", fontSize: "0.95rem" }}>
        &copy; {new Date().getFullYear()} Shreepati Educational Services. All
        Rights Reserved.
      </p>

      <style>{`
        .social-icon:hover {
          transform: scale(1.2);
          box-shadow: 0 0 15px currentColor;
          opacity: 0.9;
        }

        .footer-link::after {
          content: '';
          display: block;
          height: 2px;
          width: 0;
          background: #FF6600;
          transition: width 0.3s ease;
          margin-top: 3px;
        }

        .footer-link:hover::after {
          width: 100%;
        }

        @media(max-width: 992px) {
          footer div[style*="display: flex"] {
            flex-direction: column;
            align-items: center;
            gap: 40px;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
