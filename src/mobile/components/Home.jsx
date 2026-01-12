import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { MdSchool, MdCheckCircle } from "react-icons/md";
import { FaUniversity, FaUserGraduate } from "react-icons/fa";
import logo from "../../assets/logo-2.png";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [counts, setCounts] = useState({
    institutions: 0,
    universities: 0,
    students: 0,
    success: 0,
  });

  useEffect(() => {
    const targets = { institutions: 25, universities: 5, students: 500, success: 90 };
    const duration = 2000;
    const start = Date.now();

    const update = () => {
      const progress = Math.min((Date.now() - start) / duration, 1);
      setCounts({
        institutions: Math.floor(progress * targets.institutions),
        universities: Math.floor(progress * targets.universities),
        students: Math.floor(progress * targets.students),
        success: Math.floor(progress * targets.success),
      });
      if (progress < 1) requestAnimationFrame(update);
    };

    update();
  }, []);

  return (

    
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "#fdf6f0",
        padding: "90px 20px",
        fontFamily: "'Poppins', sans-serif",
        overflow: "hidden",
        animation: "fadeIn 1.5s ease-in-out",
      }}
    >
      {/* Logo */}
      <img
        src={logo}
        alt="Shreepati Logo"
        style={{
          width: "220px",
          height: "110px",
          objectFit: "contain",
          marginBottom: "15px",
          animation: "float 3s ease-in-out infinite alternate",
        }}
      />

      {/* Headings */}
      <h2
        style={{
          fontSize: "1.8rem",
          fontFamily: "'Orbitron', sans-serif",
          background: "linear-gradient(90deg, #FF6600, #D32F2F)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "5px",
        }}
      >
        Welcome To
      </h2>

      <h1
        style={{
          fontSize: "3rem",
          fontFamily: "'Orbitron', sans-serif",
          fontWeight: "700",
          background: "linear-gradient(90deg, #FF6600, #D32F2F)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          lineHeight: "1.2",
          margin: "0",
        }}
      >
        Shreepati
      </h1>

      <h1
        style={{
          fontSize: "2rem", // slightly bigger than before
          fontFamily: "'Orbitron', sans-serif",
          fontWeight: "600",
          background: "linear-gradient(90deg, #FF6600, #D32F2F)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "10px",
        }}
      >
        Educational Services
      </h1>

      <p
        style={{
          fontSize: "1rem",
          color: "#ff0000ff",
          lineHeight: "1.5",
          marginBottom: "30px",
        }}
      >
        Pioneer For Educational Institutions & Students
      </p>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "100%",
          maxWidth: "250px",
        }}
      >
        <RouterLink
          to="/signup"
          style={{
            background: "#fff",
            color: "#FF6600",
            fontWeight: "600",
            padding: "10px 25px",
            borderRadius: "25px",
            border: "2px solid #FF6600",
            textDecoration: "none",
            fontSize: "1rem",
            transition: "0.3s",
          }}
        >
          Get Started
        </RouterLink>

        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          style={{
            background: "#FF6600",
            color: "#fff",
            fontWeight: "600",
            padding: "10px 25px",
            borderRadius: "25px",
            textDecoration: "none",
            fontSize: "1rem",
            transition: "0.3s",
          }}
        >
          Let’s Connect
        </ScrollLink>
      </div>

      {/* Stats */}
      <div
        style={{
          marginTop: "40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          width: "100%",
          maxWidth: "350px",
        }}
      >
        {[
          { val: `${counts.institutions}+`, label: "Institutions", icon: <MdSchool size={22} color="#FF6600" /> },
          { val: `${counts.universities}+`, label: "Universities", icon: <FaUniversity size={22} color="#FF6600" /> },
          { val: `${counts.students}+`, label: "Students", icon: <FaUserGraduate size={22} color="#FF6600" /> },
          { val: `${counts.success}%`, label: "Success", icon: <MdCheckCircle size={22} color="#FF6600" /> },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "15px 10px",
              border: "1.5px solid #FF6600",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 20px rgba(255,102,0,0.2)",
            }}
          >
            {item.icon}
            <h3
              style={{
                color: "#D32F2F",
                margin: "5px 0",
                fontSize: "1.3rem",
                fontFamily: "'Orbitron', sans-serif",
              }}
            >
              {item.val}
            </h3>
            <p style={{ color: "#333", fontSize: "0.85rem" }}>{item.label}</p>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-10px); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 600px) {
          h1 {
            font-size: 2.4rem !important;
          }
          h2 {
            font-size: 1.6rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;
