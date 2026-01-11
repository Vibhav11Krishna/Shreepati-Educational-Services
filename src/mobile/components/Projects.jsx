import React from "react";
import { FaUserGraduate, FaUserFriends, FaUserTie } from "react-icons/fa";
import menImage from "../../assets/men.jpg";
import womenImage from "../../assets/women.jpg";

const Projects = () => {
  const timeline = [
    {
      year: "2022",
      month: "July",
      name: "Aarav Sharma",
      role: "NEET Aspirant",
      quote:
        "Shreepati helped me stay focused and confident throughout my preparation. The mentorship was truly life-changing.",
      image: menImage,
      icon: <FaUserGraduate size={20} color="#fff" />,
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
      icon: <FaUserFriends size={20} color="#fff" />,
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
      icon: <FaUserTie size={20} color="#fff" />,
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
      icon: <FaUserGraduate size={20} color="#fff" />,
      iconBg: "#FF6600",
    },
  ];

  return (
    <section  id="projects"className="projects-mobile">
      <h2 className="projects-title">Projects</h2>

      <div className="timeline-mobile">
        {timeline.map((t, i) => (
          <div className="timeline-card" key={i}>
            <div className="timeline-icon" style={{ background: t.iconBg }}>
              {t.icon}
            </div>
            <p className="timeline-date">
              {t.month} {t.year}
            </p>
            <img src={t.image} alt={t.name} className="timeline-image" />
            <p className="timeline-quote">“{t.quote}”</p>
            <h4 className="timeline-name">{t.name}</h4>
            <p className="timeline-role">{t.role}</p>
          </div>
        ))}
      </div>

      <style>{`
        .projects-mobile {
          background: #fffaf6;
          padding: 60px 20px;
          text-align: center;
          font-family: 'Poppins', sans-serif;
        }

        .projects-title {
          font-family: 'Orbitron', sans-serif;
          font-weight: 700;
          font-size: 1.8rem;
          color: #FF6600;
          text-transform: uppercase;
          margin-bottom: 30px;
          position: relative;
        }

        .projects-title::after {
          content: "";
          position: absolute;
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          border-radius: 3px;
          background: linear-gradient(90deg, #FF6600, #D32F2F);
        }

        .timeline-mobile {
          display: flex;
          flex-direction: column;
          gap: 25px;
          align-items: center;
        }

        .timeline-card {
          width: 95%;
          background: #fff;
          border-radius: 16px;
          border: 2px solid #FF6600;
          padding: 20px 15px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }

        .timeline-card:active {
          transform: scale(0.97);
          box-shadow: 0 12px 30px rgba(255,102,0,0.3);
        }

        .timeline-icon {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 10px;
          color: #fff;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }

        .timeline-date {
          font-weight: 600;
          color: #FF6600;
          margin-bottom: 10px;
        }

        .timeline-image {
          width: 60%;
          height: 170px;
          object-fit: cover;
          border-radius: 10px;
          margin-bottom: 10px;
        }

        .timeline-quote {
          font-size: 0.95rem;
          color: #555;
          margin-bottom: 10px;
          line-height: 1.5;
        }

        .timeline-name {
          font-weight: 700;
          color: #D32F2F;
        }

        .timeline-role {
          font-size: 0.9rem;
          color: #777;
        }

        @media (min-width: 769px) {
          .projects-mobile {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
