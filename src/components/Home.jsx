import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { MdSchool, MdCheckCircle } from "react-icons/md";
import { FaUniversity, FaUserGraduate } from "react-icons/fa";
import logo from "../assets/logo-2.png";

function Home() {
  const [loaded, setLoaded] = useState(false);
  const [counts, setCounts] = useState({ institutions: 0, universities: 0, students: 0, success: 0 });

  useEffect(() => {
    setTimeout(() => setLoaded(true), 300);

    const targets = { institutions: 25, universities: 5, students: 500, success: 90 };
    const duration = 2000;
    const startTime = Date.now();

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      setCounts({
        institutions: Math.floor(progress * targets.institutions),
        universities: Math.floor(progress * targets.universities),
        students: Math.floor(progress * targets.students),
        success: Math.floor(progress * targets.success),
      });

      if (progress < 1) requestAnimationFrame(updateCount);
    };

    updateCount();
  }, []);

  return (

    
    <section
      id="home"
      className={loaded ? "fade-in visible" : "fade-in"}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
        background: "#fdf6f0",
        padding: "120px 20px 60px",
        overflow: "hidden",
      }}
    >
      {/* Orange Glow Backgrounds */}
      {["top-left", "top-right", "bottom-left", "bottom-right"].map((pos, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            [pos.includes("top") ? "top" : "bottom"]: "-150px",
            [pos.includes("left") ? "left" : "right"]: "-150px",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245, 164, 13, 0.82), rgba(255,165,0,0))",
            zIndex: 0,
            animation: "glowMove 6s ease-in-out infinite alternate",
          }}
        ></div>
      ))}

      {/* Logo */}
      <img
        src={logo}
        alt="Shreepati Logo"
        className={loaded ? "logo loaded" : "logo"}
        style={{
          width: "400px",
          height: "200px",
          objectFit: "contain",
          marginBottom: "20px",
          zIndex: 1,
          position: "relative",
        }}
      />

      {/* Headings */}
      <h2
        style={{
          fontSize: "3rem",
          fontWeight: "700",
          fontFamily: "'Orbitron', sans-serif",
          margin: 0,
          zIndex: 1,
          background: "linear-gradient(90deg, #FF6600, #D32F2F)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Welcome To
      </h2>

      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "700",
          fontFamily: "'Orbitron', sans-serif",
          margin: 0,
          whiteSpace: "nowrap",
          zIndex: 1,
          background: "linear-gradient(90deg, #FF6600, #D32F2F)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Shreepati Educational Services
      </h1>

      <p
        style={{
          fontSize: "1.8rem",
          color: "#ff0000ff",
          margin: "10px 0 30px",
          lineHeight: "1.4",
          zIndex: 1,
        }}
      >
        Pioneer For Educational Institutions as well as Students
      </p>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "50px",
          zIndex: 1,
        }}
      >
        <RouterLink
          to="/signup"
          className="cta-button"
          style={{
            background: "#fff",
            color: "#FF6600",
            fontWeight: "600",
            padding: "12px 35px",
            borderRadius: "30px",
            fontSize: "1.2rem",
            textDecoration: "none",
            border: "2px solid #FF6600",
            transition: "all 0.3s ease",
          }}
        >
          Get Started
        </RouterLink>

        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className="cta-button"
          style={{
            background: "#FF6600",
            color: "#fff",
            fontWeight: "600",
            padding: "12px 35px",
            borderRadius: "30px",
            fontSize: "1.2rem",
            textDecoration: "none",
            transition: "all 0.3s ease",
          }}
        >
          Let’s Connect
        </ScrollLink>
      </div>

      {/* Stats */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
          zIndex: 1,
        }}
      >
        {[
          { value: `${counts.institutions}+`, label: "Institutions Setup", icon: <MdSchool size={28} color="#FF6600" /> },
          { value: `${counts.universities}+`, label: "Universities Connected", icon: <FaUniversity size={28} color="#FF6600" /> },
          { value: `${counts.students}+`, label: "Students Guided", icon: <FaUserGraduate size={28} color="#FF6600" /> },
          { value: `${counts.success}%`, label: "Success Rate", icon: <MdCheckCircle size={28} color="#FF6600" /> },
        ].map((box, index) => (
          <div
            key={index}
            className="box"
            style={{
              background: "#fff",
              padding: "25px 30px",
              borderRadius: "25px",
              minWidth: "260px",
              transition: "all 0.5s ease",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
              border: "2px solid #FF6600",
            }}
          >
            {box.icon}
            <h3
              style={{
                fontFamily: "'Orbitron', sans-serif",
                color: "#D32F2F",
                fontSize: "2.2rem",
                marginBottom: "8px",
              }}
            >
              {box.value}
            </h3>
            <p style={{ fontFamily: "'Poppins', sans-serif", color: "#333", margin: 0 }}>{box.label}</p>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 2s ease, transform 2s ease;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .logo {
          opacity: 0;
          transform: scale(0.95);
          transition: all 2s ease;
        }
        .logo.loaded {
          opacity: 1;
          transform: scale(1);
          animation: floatLogo 3s ease-in-out infinite alternate;
        }

        @keyframes floatLogo {
          0% { transform: scale(1) translateY(0px); }
          100% { transform: scale(1.05) translateY(-15px); }
        }

        @keyframes glowMove {
          0%,100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }

        .cta-button:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 12px 30px rgba(255, 102, 0, 0.5);
        }
        .box:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 12px 30px rgba(255,102,0,0.5);
        }

        @media (max-width: 768px) {
          h1 { font-size: 2.5rem !important; }
          h2 { font-size: 2rem !important; }
          p { font-size: 1.1rem !important; }
          img { width: 220px !important; height: 110px !important; }
          .box { min-width: 150px !important; }
        }
      `}</style>
    </section>
  );
}

export default Home;
