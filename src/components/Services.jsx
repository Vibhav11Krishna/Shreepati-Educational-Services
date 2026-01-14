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
import { Link } from "react-router-dom";

function Services() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  
  const serviceList = [
  {
    icon: <FaChalkboardTeacher size={40} />,
    title: "Collaboration Guidance",
    description:
      "Form strong partnerships with universities, industry, and networks to enhance academic growth.",
    color: "#FF6600",
    link: "/collaboration",
  },
  {
    icon: <FaLightbulb size={40} />,
    title: "Affiliation Guidance",
    description:
      "Complete support for obtaining affiliation from recognized boards and universities.",
    color: "#FFB400",
    link: "/affiliation",
  },
  {
    icon: <FaUniversity size={40} />,
    title: "New Institutions Setup",
    description:
      "Assist in establishing and getting recognition for new colleges or institutions.",
    color: "#D32F2F",
    link: "/new-institutions",
  },
  {
    icon: <FaGraduationCap size={40} />,
    title: "New Schools Setup",
    description:
      "Step-by-step guidance to establish schools with approvals and documentation.",
    color: "#FF6600",
    link: "/new-schools",
  },
  {
    icon: <FaTools size={40} />,
    title: "DPR & Consultancy",
    description:
      "Detailed project reports covering finance, academics, and infrastructure.",
    color: "#D32F2F",
    link: "/dpr-consultancy",
  },
  {
    icon: <FaPlane size={40} />,
    title: "Overseas Admissions & Visa",
    description:
      "Complete counseling and visa documentation for international studies.",
    color: "#FFB400",
    link: "/overseas-admissions",
  },
  {
    icon: <FaMoneyCheckAlt size={40} />,
    title: "Educational Loans & HR",
    description:
      "Guidance for education loans and institutional HR management.",
    color: "#FF6600",
    link: "/education-loans",
  },
  {
    icon: <FaGlobe size={40} />,
    title: "Domestic Admission Counseling",
    description:
      "Helping students choose the right colleges across India.",
    color: "#D32F2F",
    link: "/domestic-admissions",
  },
  {
    icon: <FaCertificate size={40} />,
    title: "Accreditation Assistance",
    description:
      "Support for NAAC, NBA, and international accreditations.",
    color: "#FFB400",
    link: "/accreditation",
  },
  {
    icon: <FaDatabase size={40} />,
    title: "Data & Document Management",
    description:
      "Secure and efficient academic & administrative data solutions.",
    color: "#FF6600",
    link: "/data-management",
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
                position: "relative",
              }}
            >
              {/* Number Badge */}
              <div style={{
                position: "absolute",
                top: "-15px",
                left: "-15px",
                width: "45px",
                height: "45px",
                borderRadius: "50%",
                background: service.color,
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "700",
                fontSize: "1.2rem",
                boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                zIndex: 2,
              }}>
                {index + 1}
              </div>

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

                {/* Read More Link */}
              {/* Read More Button */}
<Link
  to={service.link}
  style={{
    marginTop: "10px",
    fontWeight: "600",
    color: "#fff",
    background: `linear-gradient(90deg, ${service.color}, #D32F2F)`,
    padding: "8px 20px",
    borderRadius: "25px",
    fontSize: "0.95rem",
    textDecoration: "none",
    display: "inline-block",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
  }}
>
  Read More →
</Link>


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
