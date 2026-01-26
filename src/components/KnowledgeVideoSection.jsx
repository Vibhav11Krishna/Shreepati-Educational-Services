import React, { useEffect, useState } from "react";
import { FaInstagram, FaPlay, FaSchool, FaUsers, FaBuilding, FaRocket, FaChalkboardTeacher, FaChartLine, FaRupeeSign } from "react-icons/fa";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";


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
    { title: "Legal & Compliance Risks Colleges Often Ignore", description: "Common compliance mistakes colleges make that create serious legal and operational risks. ", url: "https://res.cloudinary.com/dqmkivr5i/video/upload/v1769422552/Running_a_College_Without_Compliance_wyh6eh.mp4", color: "#FF6600", icon: <FaBuilding size={40} /> },
    { title: "How to Make Your Institution Financially Sustainable", description: "Practical steps to optimize revenue, manage costs, and achieve financial sustainability.", url: "", color: "#D32F2F", icon: <FaRupeeSign size={40} /> },
  ];
const [openFaq, setOpenFaq] = useState(null);

const faqs = [
  {
    q: "What does an educational consultancy do?",
    a: "An educational consultancy guides institutions and students through planning, approvals, compliance, and academic decision-making.",
    color: "#FF6600"
  },
  {
    q: "Does SES support college and school setup?",
    a: "Yes, SES provides complete guidance for setting up new colleges and schools, including documentation and approvals.",
    color: "#FFB400"
  },
  {
    q: "How does SES help with affiliation and accreditation?",
    a: "SES assists institutions in meeting regulatory requirements, preparing documents, and following structured approval processes.",
    color: "#D32F2F"
  },
  {
    q: "Does SES provide student counselling services?",
    a: "Yes, SES offers domestic and overseas counselling to help students choose the right courses and institutions.",
    color: "#FF6600"
  },
  {
    q: "Why should institutions choose professional consultancy?",
    a: "Professional consultancy ensures compliance, reduces delays, and helps institutions grow with a strong academic foundation.",
    color: "#FFB400"
  },
  {
    q: "How can I connect with Shreepati Educational Services (SES)",
    a: "You can connect with SES through direct phone call, WhatsApp, or via our social media platforms for quick support and updates.",
    color: "#D32F2F"
  }
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
      
{/* FAQ Section */}
<div style={{ marginTop: "100px", maxWidth: "900px", marginInline: "auto" }}>

  {/* SAME HEADING STYLE */}
  <h2
    style={{
      textAlign: "center",
      color: "#FF6600",
      fontWeight: "700",
      fontSize: "2.5rem",
      marginBottom: "60px",
      fontFamily: "'Orbitron', sans-serif",
      position: "relative"
    }}
  >
    Frequently Asked Questions
    <span
      style={{
        position: "absolute",
        bottom: "-14px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "120px",
        height: "4px",
        borderRadius: "6px",
        background: "linear-gradient(90deg, #FF6600, #D32F2F)"
      }}
    ></span>
  </h2>

  {faqs.map((item, index) => (
    <div
      key={index}
      style={{
        position: "relative",
        background: "#fff",
        borderRadius: "14px",
        marginBottom: "22px",
        padding: "22px 22px 22px 30px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        borderLeft: `6px solid ${item.color}`,
        transition: "all 0.3s ease"
      }}
    >
      {/* Number badge */}
      <div
        style={{
          position: "absolute",
          top: "-14px",
          left: "-14px",
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          background: item.color,
          color: "#fff",
          fontWeight: "700",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.9rem"
        }}
      >
        {index + 1}
      </div>

      {/* Question */}
      <button
        onClick={() => setOpenFaq(openFaq === index ? null : index)}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          textAlign: "left",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "1.05rem",
          fontWeight: "600",
          color: item.color
        }}
      >
        {item.q}
        <span
          style={{
            fontSize: "1.6rem",
            fontWeight: "700",
            transform: openFaq === index ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease"
          }}
        >
          +
        </span>
      </button>

      {/* Answer */}
      <div
        style={{
          maxHeight: openFaq === index ? "220px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s ease",
          paddingTop: openFaq === index ? "14px" : "0",
          color: "#555",
          fontSize: "0.95rem",
          lineHeight: "1.7"
        }}
      >
        {item.a}
      </div>
    </div>
  ))}
</div>
{/* FAQ CTA */}
<div
  style={{
    marginTop: "60px",
    textAlign: "center"
  }}
>
  <h4
    style={{
       textAlign: "center",
    color: "#FF6600",
    fontWeight: "700",
    fontSize: "2rem",
    marginBottom: "18px",
    fontFamily: "'Orbitron', sans-serif",
    position: "relative"
    }}
  >
    Still have questions?
  </h4>

<p
    style={{
      fontSize: "0.95rem",
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
      gap: "18px",
      flexWrap: "wrap"
    }}
  >
    {/* Call Now */}
    <a
      href="tel:+919801066182"   // replace number
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "14px 28px",
        borderRadius: "30px",
        background: "linear-gradient(90deg, #FFB400, #FF6600, #D32F2F)",
        color: "#fff",
        fontWeight: "600",
        fontSize: "1rem",
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
      href="https://wa.me/919801066182"   // replace number
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "14px 28px",
        borderRadius: "30px",
        background: "linear-gradient(90deg, #D32F2F, #FF6600, #FFB400)",
        color: "#fff",
        fontWeight: "600",
        fontSize: "1rem",
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
