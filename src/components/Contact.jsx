import React from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
} from "react-icons/fa"; // ✅ added FaInstagram
import { FaXTwitter } from "react-icons/fa6"; // ✅ only FaXTwitter from fa6

function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "100px 20px",
        background: "#fdf6f0",
        fontFamily: "'Poppins', sans-serif",
        color: "#333",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          fontFamily: "'Orbitron', sans-serif",
          fontWeight: "700",
          fontSize: "3rem",
          color: "#FF6600",
          textTransform: "uppercase",
          letterSpacing: "1px",
          marginBottom: "80px",
          position: "relative",
        }}
      >
        Contact Us
        <span
          style={{
            position: "absolute",
            bottom: "-15px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "120px",
            height: "6px",
            borderRadius: "5px",
            background: "linear-gradient(90deg, #FF6600, #D32F2F)",
          }}
        ></span>
      </h2>

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          gap: "40px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {/* Left: Reach Us */}
        <div
          style={{
            flex: "1 1 300px",
            minWidth: "280px",
            background: "#fff",
            borderRadius: "25px",
            padding: "40px 30px",
            boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
            textAlign: "center",
            transition: "all 0.3s ease",
          }}
          className="contact-card"
        >
          <h3
            style={{
              color: "#FF6600",
              fontSize: "1.7rem",
              fontWeight: "700",
              marginBottom: "25px",
            }}
          >
            Reach Us
          </h3>
          <p style={{ fontSize: "1rem", marginBottom: "12px" }}>
            <FaEnvelope color="#FF6600" />{" "}
            <a
              href="mailto:jayantkrishna@yahoo.in"
              style={{
                color: "#333",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              jayantkrishna@yahoo.in
            </a>
          </p>
          <p style={{ fontSize: "1rem", marginBottom: "12px" }}>
            <FaPhoneAlt color="#FF6600" />{" "}
            <a
              href="tel:+919801066182"
              style={{
                color: "#333",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              +91 9801066182
            </a>
          </p>
          <p style={{ fontSize: "1rem", marginBottom: "20px" }}>
            <FaPhoneAlt color="#FF6600" />{" "}
            <a
              href="tel:+919334774083"
              style={{
                color: "#333",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              +91 9334774083
            </a>
          </p>

          {/* ✅ Social Icons (Added Instagram) */}
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              fontSize: "1.8rem",
            }}
            className="social-icons"
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
              href="https://x.com/SES_Consultancy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1DA1F2" }}
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.instagram.com/ses_consultancy?igsh=d2I5dmN5ZmIwcm00"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#E1306C" }}
            >
              <FaInstagram />
            </a>
            <a href="tel:+919801066182" style={{ color: "#eeeb0aff" }}>
              <FaPhoneAlt />
            </a>
            <a href="mailto:jayantkrishna@yahoo.in" style={{ color: "#D44638" }}>
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Center: Contact Form */}
        <div
          style={{
            flex: "2 1 600px",
            minWidth: "320px",
            background: "#fff",
            borderRadius: "25px",
            padding: "50px 40px",
            boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
            transition: "all 0.3s ease",
          }}
          className="contact-card"
        >
          <form
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="contact-input"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="contact-input"
            />
            <textarea
              rows="6"
              placeholder="Your Message"
              required
              className="contact-input"
            />
            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Locations */}
        <div
          style={{
            flex: "1 1 300px",
            minWidth: "280px",
            background: "#fff",
            borderRadius: "25px",
            padding: "40px 30px",
            boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
            textAlign: "center",
            transition: "all 0.3s ease",
          }}
          className="contact-card"
        >
          <h3
            style={{
              color: "#FF6600",
              fontSize: "1.7rem",
              fontWeight: "700",
              marginBottom: "25px",
            }}
          >
            Our Locations
          </h3>
          <p style={{ fontSize: "1rem", marginBottom: "12px" }}>
            <FaMapMarkerAlt color="#FF6600" /> Shyam Market, opposite pillar
            no:75, Raza Bazar, Patna, Bihar
          </p>
          <p style={{ fontSize: "1rem", marginBottom: "12px" }}>
            <FaMapMarkerAlt color="#FF6600" /> Near RPS Law College, Malti Kunj
            (Satya Sai Niwas Pvt.Ltd), Flat No: 403, Patna, Bihar
          </p>
        </div>
      </div>

      <style>{`
        .contact-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.15);
        }

        .contact-input {
          padding: 15px;
          border-radius: 15px;
          border: none;
          background: #f5f5f5;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .contact-input:focus {
          background: #fff;
          box-shadow: 0 0 10px rgba(255,102,0,0.3);
          outline: none;
        }

        .contact-btn {
          padding: 15px;
          border-radius: 15px;
          border: none;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          background: linear-gradient(90deg, #FF6600, #D32F2F);
          color: #fff;
          transition: all 0.3s ease;
        }

        .contact-btn:hover {
          transform: translateY(-3px);
          opacity: 0.9;
        }

        .social-icons a {
          transition: all 0.3s ease;
        }

        .social-icons a:hover {
          transform: scale(1.3);
          opacity: 0.85;
        }

        @media(max-width: 992px) {
          section#contact div[style*="display: flex"] {
            flex-direction: column;
            align-items: center;
          }
          .contact-card {
            width: 90% !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Contact;
