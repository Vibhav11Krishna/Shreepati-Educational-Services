import React, { useEffect, useState } from "react";
import { FaInstagram, FaPlay, FaSchool, FaUsers, FaBuilding, FaRocket, FaChalkboardTeacher, FaChartLine } from "react-icons/fa";

function KnowledgeVideoSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  const videoList = [
    { title: "What is Shreepati Educational Services (SES)?", description: "Overview of our mission, vision, and purpose in education consultancy.", url: "https://res.cloudinary.com/dqmkivr5i/video/upload/v1766999321/video-1_prjmy9.mp4", color: "#FF6600", icon: <FaSchool size={40} /> },
    { title: "Experts Behind SES", description: "Experience, leadership, and guidance that drive our consultancy efforts.", url: "https://res.cloudinary.com/dqmkivr5i/video/upload/v1766999349/video-2_cgdpje.mp4", color: "#FFB400", icon: <FaUsers size={40} /> },
    { title: "How We Build Educational Institutions", description: "Structured planning, foundation, and institutional development support.", url: "https://res.cloudinary.com/dqmkivr5i/video/upload/v1766999371/video-3_vix37h.mp4", color: "#D32F2F", icon: <FaBuilding size={40} /> },
    { title: "How an Institution Actually Starts", description: "From idea to establishment — documentation, approval and setup journey.", url: "https://res.cloudinary.com/dqmkivr5i/video/upload/v1766999373/video-4_oko3bv.mp4", color: "#FF6600", icon: <FaRocket size={40} /> },
    { title: "How an Institution Runs Successfully", description: "Operations, governance, compliance, and quality improvement systems.", url: "https://res.cloudinary.com/dqmkivr5i/video/upload/v1766999367/video-5_qpj982.mp4", color: "#D32F2F", icon: <FaChalkboardTeacher size={40} /> },
    { title: "Growth from Survival to Sustainability", description: "Helping institutions scale through stability, strategy and innovation.", url: "https://res.cloudinary.com/dqmkivr5i/video/upload/v1766999374/video-6_ymykl4.mp4", color: "#FFB400", icon: <FaChartLine size={40} /> },
  ];

  return (
    <section
      id="knowledge-videos"
      style={{
        padding: "80px 20px",
        background: "#fdf6f0",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{
          textAlign: "center",
          color: "#FF6600",
          fontWeight: "700",
          fontSize: "2.5rem",
          marginBottom: "50px",
          fontFamily: "'Orbitron', sans-serif",
          position: "relative"
        }}>
          Knowledge & Insight 
          <span style={{
            position: "absolute",
            bottom: "-12px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100px",
            height: "4px",
            borderRadius: "5px",
            background: "linear-gradient(90deg, #FF6600, #D32F2F)"
          }}></span>
        </h2>

        <div className="roadmap">
          {videoList.map((item, index) => (
            <div key={index} className={`roadmap-card ${loaded ? "visible" : ""}`} style={{ borderLeft: `6px solid ${item.color}` }}>
              <div className="number" style={{ background: item.color }}>{index + 1}</div>
              <div className="icon" style={{ color: item.color, marginBottom: "12px" }}>{item.icon}</div>
              <h5 style={{ fontWeight: "700", fontSize: "1rem", color: item.color, marginBottom: "8px" }}>{item.title}</h5>
              <p style={{ fontSize: "0.85rem", color: "#555", flexGrow: 1 }}>{item.description}</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer" style={{
                marginTop: "12px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontWeight: "600",
                color: item.color,
                textDecoration: "none",
                fontSize: "0.9rem"
              }}>
                <FaPlay /> Watch Video
              </a>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <a href="https://www.instagram.com/ses_consultancy"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#E1306C",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "25px",
              fontWeight: "600",
              textDecoration: "none",
              fontSize: "0.95rem",
              transition: "all 0.3s ease"
            }}>
            <FaInstagram size={20} /> Follow us on Instagram for Latest Updates!
          </a>
        </div>
      </div>
  
      <style>{`
        .roadmap {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 80px 80px;
          position: relative;
        }
        .roadmap-card {
          position: relative;
          background: #fff;
          padding: 40px;
          border-radius: 12px;
          min-height: 180px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.6s ease;
        }
        .roadmap-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .roadmap-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        .number {
          position: absolute;
          top: -15px;
          left: -15px;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          color: #fff;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .icon {
          text-align: center;
        }

        /* Dotted horizontal gradient lines connecting cards */
        .roadmap-card:nth-child(odd)::after {
          content: "";
          position: absolute;
          top: 50%;
          right: -60px;
          width: 50px;
          border-top: 3px dotted;
          border-image: linear-gradient(to right, #FF6600, #D32F2F) 1;
          transform: translateY(-50%);
        }
        .roadmap-card:nth-child(even)::after {
          content: "";
          display: none;
        }

        @media(max-width: 1024px) {
          .roadmap {
            grid-template-columns: 1fr;
          }
          .roadmap-card::after {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}

export default KnowledgeVideoSection;
