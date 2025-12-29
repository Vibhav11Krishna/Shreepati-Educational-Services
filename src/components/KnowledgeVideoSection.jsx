import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";

import v1 from '../assets/video-1.mp4';
import v2 from '../assets/video-2.mp4';
import v3 from '../assets/video-3.mp4';
import v4 from '../assets/video-4.mp4';
import v5 from '../assets/video-5.mp4';
import v6 from '../assets/video-6.mp4';

function KnowledgeVideoSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  const videoList = [
    { title: "What is Shreepati Educational Services (SES)?", description: "Overview of our mission, vision, and purpose in education consultancy.", src: v1, color: "#FF6600" },
    { title: "Experts Behind SES", description: "Experience, leadership, and guidance that drive our consultancy efforts.", src: v2, color: "#FFB400" },
    { title: "How We Build Educational Institutions", description: "Structured planning, foundation, and institutional development support.", src: v3, color: "#D32F2F" },
    { title: "How an Institution Actually Starts", description: "From idea to establishment — documentation, approval and setup journey.", src: v4, color: "#FF6600" },
    { title: "How an Institution Runs Successfully", description: "Operations, governance, compliance, and quality improvement systems.", src: v5, color: "#D32F2F" },
    { title: "Growth from Survival to Sustainability", description: "Helping institutions scale through stability, strategy and innovation.", src: v6, color: "#FFB400" },
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
        {/* Heading */}
        <h2 style={{
          textAlign: "center",
          color: "#FF6600",
          fontWeight: "700",
          fontSize: "2.5rem",
          marginBottom: "50px",
          fontFamily: "'Orbitron', sans-serif",
          position: "relative"
        }}>
          Knowledge & Insight Series
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

        {/* Video Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "30px",
          justifyItems: "center"
        }}>
          {videoList.map((item, index) => (
            <div key={index} className={`video-card ${loaded ? "visible" : ""}`} style={{
              width: "100%",
              borderRadius: "12px",
              overflow: "hidden",
              background: "#fff",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              border: `1px solid ${item.color}`,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}>
              {/* Video container */}
              <div style={{
                width: "100%",
                height: "auto",
                background: "#000"
              }}>
                <video 
                  src={item.src} 
                  style={{
                    width: "100%",
                    height: "auto", 
                    display: "block"
                  }} 
                  controls 
                />
              </div>

              {/* White box for title & description */}
              <div style={{
                background: "#fff",
                padding: "12px",
                borderRadius: "0 0 12px 12px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.08)"
              }}>
                <h5 style={{
                  fontWeight: "700",
                  fontSize: "1rem",
                  color: item.color,
                  textAlign: "center",
                  marginBottom: "5px"
                }}>{item.title}</h5>
                <p style={{
                  fontSize: "0.85rem",
                  color: "#555",
                  textAlign: "center",
                  margin: 0
                }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer + Instagram CTA */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <p style={{ fontSize: "0.85rem", color: "#666", marginBottom: "15px" }}>
            <strong>Disclaimer:</strong> The content in these videos is intended for educational and awareness purposes only. Consultancy guidance and support may vary based on individual institutional or student requirements.
          </p>
          <a href="https://www.instagram.com/ses_consultancy?igsh=d2I5dmN5ZmIwcm00"
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
            <FaInstagram size={20} /> Follow us on Instagram for Latest Videos & Updates!
          </a>
        </div>
      </div>

      <style>{`
        .video-card {
          opacity: 0;
          transform: translateY(40px);
        }
        .video-card.visible {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s ease;
        }
        .video-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        @media(max-width: 1024px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

export default KnowledgeVideoSection;
