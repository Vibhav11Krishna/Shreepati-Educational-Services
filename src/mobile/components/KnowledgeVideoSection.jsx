import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo } from "@cloudinary/react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
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
const [openFaq, setOpenFaq] = useState(null);

const faqs = [
  {
    q: "What does an educational consultancy do?",
    a: "An educational consultancy guides institutions and students through planning, approvals, compliance, and academic decision-making.",
    
  },
  {
    q: "Does SES support college and school setup?",
    a: "Yes, SES provides complete guidance for setting up new colleges and schools, including documentation and approvals.",
   
  },
  {
    q: "How does SES help with affiliation and accreditation?",
    a: "SES assists institutions in meeting regulatory requirements, preparing documents, and following structured approval processes.",
    
  },
  {
    q: "Does SES provide student counselling services?",
    a: "Yes, SES offers domestic and overseas counselling to help students choose the right courses and institutions.",
    
  },
  {
    q: "Why should institutions choose professional consultancy?",
    a: "Professional consultancy ensures compliance, reduces delays, and helps institutions grow with a strong academic foundation.",
    
  },
  {
    q: "How can I connect with Shreepati Educational Services (SES)",
    a: "You can connect with SES through direct phone call, WhatsApp, or via our social media platforms for quick support and updates.",
    
  }
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
            <FaInstagram size={20} /> Follow us on Instagram!
          </a>
        </div>
      </div>
{/* FAQ Section */}
<div style={{ marginTop: "70px", padding: "0 10px" }}>

  {/* HEADING – SAME DESIGN AS KNOWLEDGE VIDEO */}
  <h2
    style={{
      textAlign: "center",
      color: "#FF6600",
      fontWeight: "700",
      fontSize: "2rem",
      marginBottom: "40px",
      fontFamily: "'Orbitron', sans-serif",
      position: "relative"
    }}
  >
    Frequently Asked Questions
    <span
      style={{
        position: "absolute",
        bottom: "-10px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "80px",
        height: "4px",
        borderRadius: "5px",
        background: "linear-gradient(90deg, #FF6600, #D32F2F)"
      }}
    ></span>
  </h2>

  {faqs.map((item, index) => {
    const colors = ["#FF6600", "#FFB400", "#D32F2F"];
    const color = colors[index % colors.length];

    return (
      <div
        key={index}
        style={{
          background: "#fff",
          borderRadius: "14px",
          marginBottom: "18px",
          padding: "16px",
          boxShadow: "0 10px 26px rgba(0,0,0,0.1)",
          borderLeft: `6px solid ${color}`
        }}
      >
        {/* Question */}
        <button
          onClick={() => setOpenFaq(openFaq === index ? null : index)}
          style={{
            width: "100%",
            background: "none",
            border: "none",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            cursor: "pointer",
            textAlign: "left"
          }}
        >
          {/* Number */}
          <div
            style={{
              minWidth: "34px",
              height: "34px",
              borderRadius: "50%",
              background: color,
              color: "#fff",
              fontWeight: "700",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.85rem"
            }}
          >
            {index + 1}
          </div>

          {/* Question text */}
          <div
            style={{
              flex: 1,
              fontSize: "0.95rem",
              fontWeight: "700",
              color: color
            }}
          >
            {item.q}
          </div>

          {/* Plus icon */}
          <div
            style={{
              fontSize: "1.4rem",
              color: color,
              transform: openFaq === index ? "rotate(45deg)" : "rotate(0deg)",
              transition: "0.3s ease"
            }}
          >
            +
          </div>
        </button>

        {/* Answer */}
        <div
          style={{
            maxHeight: openFaq === index ? "220px" : "0",
            overflow: "hidden",
            transition: "max-height 0.45s ease",
            padding: openFaq === index ? "10px 0 0 46px" : "0 0 0 46px",
            fontSize: "0.85rem",
            lineHeight: "1.6",
            color: "#555"
          }}
        >
          {item.a}
        </div>
      </div>
    );
  })}
</div>
{/* FAQ CTA */}
<div
  style={{
    marginTop: "60px",
    textAlign: "center",
    padding: "0 14px"
  }}
>
  <h4
    style={{
      textAlign: "center",
    color: "#FF6600",
    fontWeight: "700",
    fontSize: "1.5rem",
    marginBottom: "18px",
    fontFamily: "'Orbitron', sans-serif",
    position: "relative"
    }}
  >
    Still have questions?
  </h4>

  <p
    style={{
      fontSize: "1rem",
      color: "#FF6600",
      marginBottom: "26px"
    }}
  >
    Talk to our experts for quick guidance.
  </p>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "16px",
      flexWrap: "wrap"
    }}
  >
    {/* Call Now */}
    <a
      href="tel:+919801066182"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        padding: "14px 26px",
        minWidth: "160px",
        borderRadius: "30px",
        background: "linear-gradient(90deg, #FFB400, #FF6600, #D32F2F)",
        color: "#fff",
        fontWeight: "600",
        fontSize: "0.95rem",
        textDecoration: "none",
        transition: "all 0.3s ease",
        boxShadow: "0 6px 18px rgba(0,0,0,0.18)"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.filter = "brightness(1.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.filter = "brightness(1)";
      }}
    >
      <FaPhoneAlt size={15} />
      Call Now
    </a>

    {/* WhatsApp */}
    <a
      href="https://wa.me/919801066182"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        padding: "14px 26px",
        minWidth: "160px",
        borderRadius: "30px",
        background: "linear-gradient(90deg, #D32F2F, #FF6600, #FFB400)",
        color: "#fff",
        fontWeight: "600",
        fontSize: "0.95rem",
        textDecoration: "none",
        transition: "all 0.3s ease",
        boxShadow: "0 6px 18px rgba(0,0,0,0.18)"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.filter = "brightness(1.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.filter = "brightness(1)";
      }}
    >
      <FaWhatsapp size={17} />
      WhatsApp
    </a>
  </div>

  {/* Mobile tweaks */}
  <style>{`
    @media (max-width: 480px) {
      h4 {
        font-size: 1.2rem;
      }
      p {
        font-size: 0.85rem;
      }
      a {
        width: 100%;
        max-width: 260px;
      }
    }
  `}</style>
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
