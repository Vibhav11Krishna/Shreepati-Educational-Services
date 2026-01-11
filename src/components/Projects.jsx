import React, { useEffect, useRef, useState } from "react";
import { FaUserGraduate, FaUserFriends, FaUserTie } from "react-icons/fa";
import menImage from "../assets/men.jpg";
import womenImage from "../assets/women.jpg";

function Projects() {
 const timeline = [
  {
    year: "2022",
    month: "July",
    name: "Aarav Sharma",
    role: "NEET Aspirant",
    quote:
      "Shreepati helped me stay focused and confident throughout my preparation. The mentorship was truly life-changing.",
    image: menImage,
    icon: <FaUserGraduate size={24} color="#fff" />,
    iconBg: "#FF6600",
  },
  {
    year: "2023",
    month: "March",
    name: "Isha Verma",
    role: "Parent",
    quote:
      "The guidance and care my daughter received were exceptional. Shreepati is more than an institute — it's a family.",
    image: womenImage,
    icon: <FaUserFriends size={24} color="#fff" />,
    iconBg: "#D32F2F",
  },
  {
    year: "2024",
    month: "November",
    name: "Rohan Mehta",
    role: "JEE Student",
    quote:
      "The personalized support and structured approach made all the difference. I cracked JEE with clarity and confidence.",
    image: menImage,
    icon: <FaUserTie size={24} color="#fff" />,
    iconBg: "#FFB400",
  },
  {
    year: "2025",
    month: "April",
    name: "Sneha Kulkarni",
    role: "CUET Aspirant",
    quote:
      "Shreepati’s mock tests and strategy sessions gave me the edge I needed. I felt supported every step of the way.",
    image: womenImage,
    icon: <FaUserGraduate size={24} color="#fff" />,
    iconBg: "#FF6600",
  },
];


  const cardRefs = useRef([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisible((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section
      id="projects"
      style={{
        background: "#fdf6f0",
        padding: "100px 20px",
        fontFamily: "'Poppins', sans-serif",
        color: "#333",
      }}
    >
      <div className="container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: "700",
            fontSize: "2.8rem",
            color: "#FF6600",
            textTransform: "uppercase",
            letterSpacing: "1px",
            marginBottom: "60px",
            position: "relative",
          }}
        >
          Projects
          <span
            style={{
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "100px",
              height: "5px",
              borderRadius: "5px",
              background: "linear-gradient(90deg, #FF6600, #D32F2F)",
            }}
          ></span>
        </h2>

        <div className="timeline">
          {timeline.map((t, index) => (
            <div
              key={index}
              className={`timeline-row ${index % 2 === 0 ? "left" : "right"} ${visible[index] ? "visible" : ""}`}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
            >
              <div className="timeline-date">
                <span>{t.month} {t.year}</span>
              </div>

              <div className="timeline-content">
                <div
                  className="timeline-icon"
                  style={{ background: t.iconBg }}
                >
                  {t.icon}
                </div>
                <img src={t.image} alt={t.name} className="timeline-image" />
                <p className="timeline-quote">“{t.quote}”</p>
                <h4 className="timeline-name">{t.name}</h4>
                <p className="timeline-role">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .timeline {
          position: relative;
          padding: 20px 0;
        }
        .timeline::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 4px;
          background: linear-gradient(180deg, #FF6600, #D32F2F);
          transform: translateX(-50%);
          z-index: 0;
        }
        .timeline-row {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: flex-start;
          margin-bottom: 80px;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.6s ease;
        }
        .timeline-row.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .timeline-row.left {
          justify-content: flex-start;
          text-align: right;
        }
        .timeline-row.right {
          justify-content: flex-end;
          text-align: left;
        }
        .timeline-date {
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          background: #fff3e0;
          padding: 8px 15px;
          border-radius: 10px;
          font-weight: 700;
          color: #FF6600;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          z-index: 2;
        }
        .timeline-content {
          background: #fff;
          border: 2px solid #FF6600;
          border-radius: 20px;
          padding: 25px;
          width: 40%;
          position: relative;
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          z-index: 1;
        }
        .timeline-content:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.2);
        }
        .timeline-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin: 0 auto 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        .timeline-image {
          width: 150px;
          height: 150px;
          object-fit: cover;
          border-radius: 10px;
          margin-bottom: 15px;
        }
        .timeline-quote {
          font-size: 1rem;
          line-height: 1.6;
          color: #555;
          margin-bottom: 10px;
        }
        .timeline-name {
          font-weight: 700;
          color: #D32F2F;
          margin-bottom: 5px;
        }
        .timeline-role {
          font-size: 0.95rem;
          color: #777;
          margin-bottom: 10px;
        }
        @media (max-width: 768px) {
          .timeline-row {
            flex-direction: column !important;
            align-items: center;
            text-align: center;
          }
          .timeline-content {
            width: 90%;
          }
          .timeline-date {
            position: static;
            transform: none;
            margin-bottom: 15px;
          }
        }
      `}</style>
    </section>
  );
}

export default Projects;
