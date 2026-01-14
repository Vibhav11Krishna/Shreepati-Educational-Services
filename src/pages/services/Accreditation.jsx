import React, { useEffect, useState } from "react";
import Footer from "../../mobile/components/Footer";
import Navbar from "../../mobile/components/Navbar";
import processImg from "../../assets/Accreditation.png";
import naacLogo from "../../assets/Nacc.png";
import ugcLogo from "../../assets/Nabh.png";
import aicteLogo from "../../assets/Nba.jpg";
import cbseLogo from "../../assets/iso.jpg";
import stateBoardLogo from "../../assets/Nirf.jpg";

import {
  FaChalkboardTeacher,
  FaLightbulb,
  FaUniversity,
  FaCheckCircle,
  FaGraduationCap,
  FaTools,
  FaCertificate,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaChalkboardTeacher size={40} />,
    title: "Eligibility & Standards Assessment",
    description:
      "Evaluate the institution’s readiness for accreditation by reviewing infrastructure, faculty, and academic quality.",
  },
  {
    icon: <FaLightbulb size={40} />,
    title: "Documentation & Evidence Preparation",
    description:
      "Prepare reports, records, and supporting documents required by accrediting bodies.",
  },
  {
    icon: <FaUniversity size={40} />,
    title: "Gap Analysis & Compliance Support",
    description:
      "Identify areas that need improvement and help institutions meet accreditation criteria.",
  },
  {
    icon: <FaChalkboardTeacher size={40} />,
    title: "Liaison with Accrediting Bodies",
    description:
      "Coordinate with accreditation authorities for inspections, clarifications, and approvals.",
  },
   {
    icon: <FaChalkboardTeacher size={40} />,
    title: "Follow-up & Renewal Assistance",
    description:
      "Support institutions in maintaining accreditation and completing periodic renewals.",
  },
];

const benefits = [
  {
    icon: <FaCheckCircle size={30} />,
    title: "Expert Accreditation Guidance",
    description:
      "Years of experience helping institutions achieve national and international accreditation.",
  },
  {
    icon: <FaCheckCircle size={30} />,
    title: "Step-by-Step Support",
    description:
      "End-to-end assistance from initial assessment to final accreditation.",
  },
  {
    icon: <FaCheckCircle size={30} />,
    title: "Trusted Network",
    description:
      "Strong connections with accrediting agencies, boards, and universities.",
  },
  {
    icon: <FaCheckCircle size={30} />,
    title: "Compliance & Quality Assurance",
    description:
      "Ensure all standards are met accurately, avoiding delays or rejections ",
  },
   {
    icon: <FaCheckCircle size={30} />,
    title: "Sustainable Institutional Growth",
    description:
      "Accreditation becomes a foundation for long-term recognition and credibility. ",
  },
];
const outcomes = [
  {
    icon: <FaChalkboardTeacher size={40} />,
    title: "Recognized Quality Institution",
  },
  {
    icon: <FaGraduationCap size={40} />,
    title: "Enhanced Credibility",
  },
  {
    icon: <FaTools size={40} />,
    title: "Operational Excellence",
  },
  {
    icon: <FaCertificate size={40} />,
    title: "Sustainable Growth & Expansion",
  },
];

function Accreditation() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <div style={{ background: "#fff4ea", fontFamily: "'Poppins', sans-serif" }}>
      {/* Page Heading */}
      <section style={{ padding: "80px 20px 40px", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "800",
            marginBottom: "40px",
            fontFamily: "'Orbitron', sans-serif",
            background: "linear-gradient(90deg, #FF6600, #D32F2F)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
          }}
        >
          9. Accreditation Assistance
        </h1>

        {/* Intro Landscape Boxes */}
        <div
          style={{
            maxWidth: "1100px",
            margin: "40px auto 0",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          {/* Landscape Box 1 */}
          <div
            className={`intro-landscape one ${loaded ? "visible" : ""}`}
            style={{
              background: "#fff",
              padding: "45px",
              borderRadius: "20px",
              boxShadow: "0 18px 45px rgba(0,0,0,0.18)",
              borderTop: "6px solid #FF6600",
            }}
          >
            <p
              style={{
                fontSize: "1.35rem",
                color: "#D32F2F",
                lineHeight: "1.75",
                margin: 0,
              }}
            >
              Accreditation is a mark of quality and credibility for educational
              institutions. It ensures that schools, colleges, and universities
              meet national and international standards in academics,
              infrastructure, faculty, and governance
            </p>
          </div>

          {/* Landscape Box 2 */}
          <div
            className={`intro-landscape two ${loaded ? "visible" : ""}`}
            style={{
              background: "#fff",
              padding: "45px",
              borderRadius: "20px",
              boxShadow: "0 18px 45px rgba(0,0,0,0.18)",
              borderLeft: "6px solid #FF6600",
            }}
          >
            <p
              style={{
                fontSize: "1.35rem",
                color: "#D32F2F",
                lineHeight: "1.75",
                margin: 0,
              }}
            >
              At Shreepati Educational Services, we assist institutions in
              achieving accreditation from recognized authorities. Our team
              provides step-by-step guidance, documentation support, and
              compliance management to help institutions meet all standards and
              receive formal recognition for excellence.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section
        style={{ padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <h2
          style={{
            fontSize: "2.7rem",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "50px",
            fontFamily: "'Poppins', sans-serif",
            background: "linear-gradient(90deg, #FF6600, #D32F2F)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          What We Do
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "center",
          }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className={`step-card ${loaded ? "visible" : ""}`}
              style={{
                flex: "1 1 280px",
                background: "#fff",
                color: "#D32F2F",
                padding: "30px",
                borderRadius: "15px",
                textAlign: "center",
                boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
                transition: "all 0.4s ease",
                cursor: "pointer",
                borderTop: "5px solid #FF6600",
              }}
            >
              <div style={{ marginBottom: "20px", color: "#FF6600" }}>
                {step.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "700",
                  marginBottom: "12px",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.7",
                  color: "#d32114",
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>
{/* Affiliation Boards */}
<section
  style={{
    padding: "60px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "2.4rem",
      fontWeight: "700",
      marginBottom: "40px",
      background: "linear-gradient(90deg, #FF6600, #D32F2F)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    Accreditation We Offer
  </h2>

  <div
    style={{
      background: "#fff",
      padding: "35px",
      borderRadius: "20px",
      boxShadow: "0 18px 45px rgba(0,0,0,0.18)",
      borderTop: "6px solid #FF6600",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "40px",
    }}
  >
    {[naacLogo, ugcLogo, aicteLogo, cbseLogo, stateBoardLogo].map(
      (logo, index) => (
        <img
          key={index}
          src={logo}
          alt="Affiliation Board Logo"
          className="board-logo"
        />
      )
    )}
  </div>
</section>
      {/* Why Choose SES */}
      <section
        style={{ padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "50px",
            fontFamily: "'Poppins', sans-serif",
            background: "linear-gradient(90deg, #FF6600, #D32F2F)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Why Choose SES
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "center",
          }}
        >
          {benefits.map((b, index) => (
            <div
              key={index}
              className={`benefit-card ${loaded ? "visible" : ""}`}
              style={{
                flex: "1 1 300px",
                background: "#fff",
                color: "#D32F2F",
                padding: "30px",
                borderRadius: "15px",
                textAlign: "center",
                boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
                borderLeft: "5px solid #FF6600",
              }}
            >
              <div style={{ marginBottom: "15px", color: "#FF6600" }}>
                {b.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "700",
                  marginBottom: "12px",
                }}
              >
                {b.title}
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.7",
                  color: "#df4b1f",
                }}
              >
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Our Collaboration Process */}
      <section
        style={{ padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "50px",
            background: "linear-gradient(90deg, #FF6600, #D32F2F)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Our Accreditation Assistance Process
        </h2>

        {/* White Landscape Image Box */}
        <div
  style={{
    textAlign: "center",
    margin: "0 auto",
  }}
>
  <img
    src={processImg}
    alt="Collaboration Process"
    style={{
      width: "100%",
      maxWidth: "900px",   // 🔥 bigger on desktop
      height: "auto",
      borderRadius: "18px",
      boxShadow: "0 18px 45px rgba(0,0,0,0.25)", // subtle depth
      display: "block",
      margin: "0 auto",
    }}
  />
</div>
      </section>
      <section
        style={{ padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "50px",
            fontFamily: "'Poppins', sans-serif",
            background: "linear-gradient(90deg, #FF6600, #D32F2F)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Outcomes of Accreditation Assistance
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "center",
          }}
        >
          {outcomes.map((b, index) => (
            <div
              key={index}
              className={`benefit-card ${loaded ? "visible" : ""}`}
              style={{
                flex: "1 1 300px",
                background: "#fff",
                color: "#D32F2F",
                padding: "30px",
                borderRadius: "15px",
                textAlign: "center",
                boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
                borderLeft: "5px solid #FF6600",
              }}
            >
              <div style={{ marginBottom: "18px", color: "#FF6600" }}>
                {b.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "700",
                  marginBottom: "12px",
                }}
              >
                {b.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
      {/* Footer */}
      <Footer />
      <Navbar />

      {/* Animations */}
      <style>{`
        .step-card, .benefit-card {
          opacity: 0;
          transform: translateY(30px);
        }
        .step-card.visible, .benefit-card.visible {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s ease;
        }
        .step-card:hover, .benefit-card:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 25px 50px rgba(0,0,0,0.3);
        }
        @media(max-width: 768px) {
          .step-card, .benefit-card {
            flex: 1 1 100%;
          }
        }
      .intro-landscape.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Subtle hover effect */
.intro-landscape:hover {
  transform: translateY(-6px);
  box-shadow: 0 26px 60px rgba(0,0,0,0.25);
}

/* Small stagger */
.intro-landscape.two {
  transition-delay: 0.3s;
}

/* Disable hover movement on mobile */
@media (max-width: 768px) {
  .intro-landscape:hover {
    transform: none;
    box-shadow: 0 18px 45px rgba(0,0,0,0.18);
  }
}
/* PROCESS LANDSCAPE BOX */
.process-box {
  max-width: 1200px;
  margin: 0 auto;
  background: #fff;
  border-radius: 20px;
  padding: 45px;
  display: flex;
  align-items: center;
  gap: 40px;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.2);
  border-top: 6px solid #ff6600;
}

.process-text {
  flex: 1;
  color: #d32f2f;
}

.process-text p {
  font-size: 1.15rem;
  line-height: 1.8;
  margin-bottom: 18px;
}

.process-logo {
  width: 140px;
  margin-bottom: 20px;
}

.process-image {
  flex: 1;
}

.process-image img {
  width: 100%;
  max-width: 420px;
  border-radius: 15px;
}

/* RESPONSIVE FIXES */
@media (max-width: 992px) {
  h1 {
    font-size: 2.6rem !important;
  }

  h2 {
    font-size: 2.1rem !important;
  }

  .process-box {
    padding: 30px;
    gap: 25px;
  }
}

@media (max-width: 768px) {
  .process-box {
    flex-direction: column;
    text-align: center;
  }

  .process-text p {
    font-size: 1.05rem;
  }

  .process-logo {
    margin: 0 auto 20px;
  }

  .process-image img {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 2.1rem !important;
  }

  h2 {
    font-size: 1.8rem !important;
  }

  .intro-landscape,
  .step-card,
  .benefit-card {
    padding: 22px !important;
  }
}
.board-logo {
  width: 160px;
  height: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.board-logo:hover {
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .board-logo {
    height: 90px;
    width: auto;
    object-fit: contain;
  }
}`}</style>
    </div>
  );
}

export default Accreditation;
