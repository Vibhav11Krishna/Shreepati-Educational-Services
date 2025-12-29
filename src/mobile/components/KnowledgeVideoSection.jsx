import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo } from "@cloudinary/react";

// 1️⃣ Initialize Cloudinary instance
const cld = new Cloudinary({
  cloud: { cloudName: "dqmkivr5i" } // replace with your Cloudinary cloud name
});

function KnowledgeVideoSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  // 2️⃣ Use Cloudinary video URLs
  const videoList = [
    { title: "What is Shreepati Educational Services (SES)?", description: "Overview of our mission, vision, and purpose in education consultancy.", src: cld.video("video-1_prjmy9"), color: "#FF6600" },
    { title: "Experts Behind SES", description: "Experience, leadership, and guidance that drive our consultancy efforts.", src: cld.video("video-2_cgdpje"), color: "#FFB400" },
    { title: "How We Build Educational Institutions", description: "Structured planning, foundation, and institutional development support.", src: cld.video("video-3_vix37h"), color: "#D32F2F" },
    { title: "How an Institution Actually Starts", description: "From idea to establishment — documentation, approval and setup journey.", src: cld.video("video-4_oko3bv"), color: "#FF6600" },
    { title: "How an Institution Runs Successfully", description: "Operations, governance, compliance, and quality improvement systems.", src: cld.video("video-5_qpj982"), color: "#D32F2F" },
    { title: "Growth from Survival to Sustainability", description: "Helping institutions scale through stability, strategy and innovation.", src: cld.video("video-6_ymykl4"), color: "#FFB400" },
  ];

  return (
    <section
      id="knowledge-videos"
      style={{
        padding: "20px",
        background: "#fdf6f0",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h2 style={{
          textAlign: "center",
          color: "#FF6600",
          fontWeight: "700",
          fontSize: "2rem",
          marginBottom: "30px",
          fontFamily: "'Orbitron', sans-serif",
          position: "relative"
        }}>
          Knowledge & Insight Series
          <span style={{
            position: "absolute",
            bottom: "-10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80px",
            height: "4px",
            borderRadius: "5px",
            background: "linear-gradient(90deg, #FF6600, #D32F2F)"
          }}></span>
        </h2>

        <div className="video-grid">
          {videoList.map((item, index) => (
            <div key={index} className={`video-card ${loaded ? "visible" : ""}`} style={{ marginBottom: "30px" }}>
              <AdvancedVideo cldVid={item.src} controls style={{ width: "100%", borderRadius: "12px", marginBottom: "10px" }} />

              <div style={{
                background: "#fff",
                padding: "12px",
                borderRadius: "12px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
              }}>
                <h5 style={{ color: item.color, fontWeight: "700", fontSize: "1rem", textAlign: "center", marginBottom: "5px" }}>
                  {item.title}
                </h5>
                <p style={{ fontSize: "0.85rem", color: "#555", textAlign: "center", margin: 0 }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <p style={{ fontSize: "0.85rem", color: "#666", marginBottom: "15px" }}>
            <strong>Disclaimer:</strong> The content in these videos is intended for educational and awareness purposes only.
          </p>

          <a href="https://www.instagram.com/ses_consultancy?igsh=d2I5dmN5ZmIwcm00" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#E1306C", color: "#fff", padding: "10px 20px", borderRadius: "25px", fontWeight: "600", textDecoration: "none", fontSize: "0.95rem", transition: "all 0.3s ease" }}>
            <FaInstagram size={20} /> Follow us on Instagram for Latest Videos & Updates!
          </a>
        </div>
      </div>

      <style>{`
        .video-card {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease;
        }
        .video-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .video-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
      `}</style>
    </section>
  );
}

export default KnowledgeVideoSection;
