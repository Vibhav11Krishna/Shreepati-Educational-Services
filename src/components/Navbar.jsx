import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Navbar({ openLogin }) {
  // Added "knowledge" section
  const sections = ["home", "about", "services", "projects", "partners", "knowledge", "contact"];

  return (
    <nav className="navbar">
      {/* Left Shreepati */}
      <div className="logo-text">श्रीपति</div>

      {/* Center Link Box */}
      <div className="link-box">
        {sections.map((sec) => (
          <ScrollLink
            key={sec}
            to={sec === "knowledge" ? "knowledge-videos" : sec} // link to knowledge section
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            className="nav-link-custom"
          >
            {sec === "about" ? "About Us" 
              : sec === "knowledge" ? "Knowledge" // display name
              : sec.charAt(0).toUpperCase() + sec.slice(1)}
          </ScrollLink>
        ))}
      </div>

      {/* Right Login */}
      <div className="login-container">
        <button onClick={openLogin} className="login-btn">Login</button>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 30px;
          z-index: 1000;
          font-family: 'Poppins';
          background: rgba(240, 239, 239, 0.8);z
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .logo-text {
          font-weight: 700;
          font-size: 1.7rem; /* keep larger */
          color: #FF6600;
        }

        .login-container {
          display: flex;
          align-items: center;
        }

        .login-btn {
          background: #FF6600;
          border: none;
          color: white;
          font-weight: 700;
          font-size: 1rem;
          padding: 8px 20px;
          border-radius: 12px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .login-btn:hover {
          background: #FF4500;
          transform: translateY(-2px);
          box-shadow: 0 0 12px rgba(255,102,0,0.6);
        }

        .link-box {
          display: flex;
          gap: 70px;
          background: rgba(255,165,0,0.15);
          border: 1px solid #FF6600;
          border-radius: 15px;
          padding: 10px 30px;
        }

        .nav-link-custom {
          color: #FF6600;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem; /* slightly larger for desktop */
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-link-custom::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          height: 2px;
          width: 0;
          background: #FF6600;
          border-radius: 2px;
          transition: width 0.3s ease;
        }

        .nav-link-custom:hover::after,
        .nav-link-custom.active::after {
          width: 100%;
        }

        .nav-link-custom:hover {
          color: #FF4500;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .navbar {
            flex-direction: column;
            align-items: flex-start;
          }

          .link-box {
            margin: 10px 0;
            flex-wrap: wrap;
            justify-content: center;
          }

          .login-container {
            align-self: flex-end;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
