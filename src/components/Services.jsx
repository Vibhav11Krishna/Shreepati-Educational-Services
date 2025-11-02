import React, { useEffect, useState } from "react";
import {
  FaChalkboardTeacher,
  FaLightbulb,
  FaUniversity,
  FaGraduationCap,
  FaTools,
  FaPlane,
  FaMoneyCheckAlt,
  FaGlobe,
  FaCertificate,
  FaDatabase,
} from "react-icons/fa";

function Services() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  const serviceList = [
    {
      icon: <FaChalkboardTeacher size={40} />,
      title: "Collaboration Guidance",
      description: "Form strong partnerships with universities, industry, and networks to enhance academic growth.",
      color: "#FF6600",
    },
    {
      icon: <FaLightbulb size={40} />,
      title: "Affiliation Guidance",
      description: "Complete support for obtaining affiliation from recognized boards and universities.",
      color: "#FFB400",
    },
    {
      icon: <FaUniversity size={40} />,
      title: "New Institutions Setup",
      description: "Assist in establishing and getting recognition for new colleges or mid-level institutions.",
      color: "#D32F2F",
    },
    {
      icon: <FaGraduationCap size={40} />,
      title: "New Schools Setup",
      description: "Step-by-step guidance to establish schools with approvals and documentation.",
      color: "#FF6600",
    },
    {
      icon: <FaTools size={40} />,
      title: "DPR & Consultancy",
      description: "Prepare detailed project reports covering financial, academic, and infrastructure aspects.",
      color: "#D32F2F",
    },
    {
      icon: <FaPlane size={40} />,
      title: "Overseas Admissions & Visa",
      description: "Counseling and application support for international studies and visa documentation.",
      color: "#FFB400",
    },
    {
      icon: <FaMoneyCheckAlt size={40} />,
      title: "Educational Loans & HR",
      description: "Consultation for securing loans and streamlining HR for institutions.",
      color: "#FF6600",
    },
    {
      icon: <FaGlobe size={40} />,
      title: "Domestic Admission Counseling",
      description: "Guide students across India in selecting the right courses and institutions.",
      color: "#D32F2F",
    },
    {
      icon: <FaCertificate size={40} />,
      title: "Accreditation Assistance",
      description: "Help institutions achieve national and international accreditation efficiently.",
      color: "#FFB400",
    },
    {
      icon: <FaDatabase size={40} />,
      title: "Data & Document Management",
      description: "Customized solutions for managing institutional data, libraries, and documents.",
      color: "#FF6600",
    },
  ];

  return (
    <section
      id="services"
      style={{
        padding: "120px 20px 80px",
        background: "#fdf6f0",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="container" style={{ maxWidth: "1300px", margin: "0 auto" }}>
        {/* Heading */}
        <h2
          style={{
            textAlign: "center",
            color: "#FF6600",
            fontWeight: "700",
            fontSize: "3rem",
            marginBottom: "60px",
            fontFamily: "'Orbitron', sans-serif",
            position: "relative",
          }}
        >
          Our Services
          <span
            style={{
              position: "absolute",
              bottom: "-15px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "100px",
              height: "5px",
              borderRadius: "5px",
              background: "linear-gradient(90deg, #FF6600, #D32F2F)",
            }}
          ></span>
        </h2>

        {/* Service Cards */}
        <div
          className="row"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            justifyContent: "center",
          }}
        >
          {serviceList.map((service, index) => (
            <div
              key={index}
              className={`service-card ${loaded ? "visible" : ""}`}
              style={{
                flex: "1 1 300px",
              }}
            >
              <div
                style={{
                  borderRadius: "20px",
                  padding: "30px 25px",
                  textAlign: "center",
                  background: "#fff",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "20px",
                  border: `2px solid ${service.color}`,
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    padding: "20px",
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${service.color} 0%, #fff 100%)`,
                    display: "inline-flex",
                  }}
                >
                  {React.cloneElement(service.icon, { color: "#fff" })}
                </div>

                {/* Title */}
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "1.4rem",
                    color: "#D32F2F",
                    marginBottom: "10px",
                    textAlign: "center",
                    background: "linear-gradient(90deg, #FF6600, #D32F2F)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {service.title}
                </h5>

                {/* Description */}
                <p
                  style={{
                    color: "#555",
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    textAlign: "center",
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        .service-card {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.6s ease;
        }
        .service-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .service-card:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 25px 50px rgba(0,0,0,0.15);
        }
        @media(max-width: 768px) {
          .service-card {
            flex: 1 1 100%;
          }
        }
      `}</style>
    </section>
  );
}

export default Services;
