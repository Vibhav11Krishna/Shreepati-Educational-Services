import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "60px 20px",
        background: "#fff7f2",
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
          fontSize: "2rem",
          color: "#FF6600",
          marginBottom: "40px",
          position: "relative",
        }}
      >
        Contact Us
        <span
          style={{
            position: "absolute",
            bottom: "-10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80px",
            height: "4px",
            borderRadius: "3px",
            background: "linear-gradient(90deg, #FF6600, #D32F2F)",
          }}
        ></span>
      </h2>

      {/* Card Container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "25px",
        }}
      >
        {/* Reach Us */}
        <div
          style={{
            background: "#fff",
            borderRadius: "15px",
            padding: "25px 20px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}
        >
          <h3 style={{ color: "#FF6600", marginBottom: "15px" }}>Reach Us</h3>
          <p style={{ margin: "8px 0" }}>
            <FaEnvelope color="#FF6600" />{" "}
            <a
              href="mailto:jayantkrishna@yahoo.in"
              style={{ color: "#333", textDecoration: "none", fontWeight: 600 }}
            >
              jayantkrishna@yahoo.in
            </a>
          </p>
          <p style={{ margin: "8px 0" }}>
            <FaPhoneAlt color="#FF6600" />{" "}
            <a
              href="tel:+919801066182"
              style={{ color: "#333", textDecoration: "none", fontWeight: 600 }}
            >
              +91 9801066182
            </a>
          </p>
          <p style={{ margin: "8px 0" }}>
            <FaPhoneAlt color="#FF6600" />{" "}
            <a
              href="tel:+919334774083"
              style={{ color: "#333", textDecoration: "none", fontWeight: 600 }}
            >
              +91 9334774083
            </a>
          </p>

          {/* Social Links (5 icons) */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "20px",
              fontSize: "1.6rem",
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
              style={{ color: "#0d8ff3ff" }}
            >
              <FaXTwitter />
            </a>
            <a
              href="mailto:jayantkrishna@yahoo.in"
              style={{ color: "#FF6600" }}
            >
              <FaEnvelope />
            </a>
            <a href="tel:+919801066182" style={{ color: "#ebee0cff" }}>
              <FaPhoneAlt />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div
          style={{
            background: "#fff",
            borderRadius: "15px",
            padding: "25px 20px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
          }}
        >
          <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <input
              type="text"
              placeholder="Your Name"
              required
              style={inputStyle}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              style={inputStyle}
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              required
              style={inputStyle}
            />
            <button type="submit" style={btnStyle}>
              Send Message
            </button>
          </form>
        </div>

        {/* Locations */}
        <div
          style={{
            background: "#fff",
            borderRadius: "15px",
            padding: "25px 20px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
          }}
        >
          <h3 style={{ color: "#FF6600", marginBottom: "15px", textAlign: "center" }}>
            Our Locations
          </h3>
          <p style={{ margin: "8px 0", fontSize: "0.95rem" }}>
            <FaMapMarkerAlt color="#FF6600" /> Shyam Market, opposite pillar no:75, Raza Bazar, Patna, Bihar
          </p>
          <p style={{ margin: "8px 0", fontSize: "0.95rem" }}>
            <FaMapMarkerAlt color="#FF6600" /> Near RPS Law College, Malti Kunj (Satya Sai Niwas Pvt. Ltd.), Flat No: 403, Patna, Bihar
          </p>
        </div>
      </div>
    </section>
  );
}

const inputStyle = {
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  background: "#f9f9f9",
  fontSize: "1rem",
  outline: "none",
};

const btnStyle = {
  padding: "12px",
  borderRadius: "10px",
  border: "none",
  fontWeight: "700",
  fontSize: "1rem",
  cursor: "pointer",
  background: "linear-gradient(90deg, #FF6600, #D32F2F)",
  color: "#fff",
};

export default Contact;
