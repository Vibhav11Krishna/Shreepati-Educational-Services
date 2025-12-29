import React, { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ openLogin }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "partners", label: "Partners" },
    { id: "knowledge-videos", label: "Knowledge" },
    { id: "contact", label: "Contact" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenuAndScroll = (id) => {
    setMenuOpen(false);
    scroll.scrollTo(document.getElementById(id).offsetTop - 60, {
      duration: 500,
      smooth: true,
    });
  };

  return (
    <nav className="navbar-mobile">
      {/* Top Bar */}
      <div className="nav-header">
        <div className="logo-text">श्रीपति</div>
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Slide Menu */}
      <div className={`menu-container ${menuOpen ? "open" : ""}`}>
        {sections.map((sec) => (
          <button
            key={sec.id}
            onClick={() => closeMenuAndScroll(sec.id)}
            className="mobile-link"
          >
            {sec.label}
          </button>
        ))}

        <button
          onClick={() => {
            setMenuOpen(false);
            openLogin();
          }}
          className="login-btn-mobile"
        >
          Login
        </button>
      </div>

      {/* Styles */}
      <style>{`
        .navbar-mobile {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          z-index: 1000;
          font-family: 'Poppins', sans-serif;
          transition: all 0.3s ease;
        }

        .nav-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
        }

        .logo-text {
          font-size: 1.7rem;
          font-weight: 700;
          color: #ff6600;
          letter-spacing: 0.5px;
        }

        .menu-toggle {
          background: none;
          border: none;
          color: #ff6600;
          cursor: pointer;
        }

        .menu-container {
          position: absolute;
          top: 60px;
          left: 0;
          width: 100%;
          max-height: 0;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: max-height 0.4s ease;
          z-index: 999;
        }

        .menu-container.open {
          max-height: 100vh;
        }

        .mobile-link {
          font-size: 1.3rem;
          font-weight: 600;
          color: #ff6600;
          text-decoration: none;
          margin: 12px 0;
          background: none;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobile-link:hover {
          color: #ff4500;
          transform: scale(1.05);
        }

        .login-btn-mobile {
          margin-top: 20px;
          background: linear-gradient(135deg, #ff6600, #ff8533);
          color: #fff;
          font-size: 1.1rem;
          font-weight: 600;
          border: none;
          border-radius: 30px;
          padding: 10px 45px;
          box-shadow: 0 5px 15px rgba(255,102,0,0.4);
          transition: all 0.3s ease;
        }

        .login-btn-mobile:hover {
          background: linear-gradient(135deg, #ff4500, #ff6600);
          transform: translateY(-2px);
        }

        @media (min-width: 769px) {
          .navbar-mobile {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
