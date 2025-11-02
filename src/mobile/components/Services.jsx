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

const Services = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 150);
  }, []);

  const serviceList = [
    {
      icon: <FaChalkboardTeacher size={28} />,
      title: "Collaboration Guidance",
      desc: "Form strong partnerships with universities, industry, and networks to enhance academic growth.",
      color: "#FF6600",
    },
    {
      icon: <FaLightbulb size={28} />,
      title: "Affiliation Guidance",
      desc: "Complete support for obtaining affiliation from recognized boards and universities.",
      color: "#FFB400",
    },
    {
      icon: <FaUniversity size={28} />,
      title: "New Institutions Setup",
      desc: "Assist in establishing and getting recognition for new colleges or mid-level institutions.",
      color: "#D32F2F",
    },
    {
      icon: <FaGraduationCap size={28} />,
      title: "New Schools Setup",
      desc: "Step-by-step guidance to establish schools with approvals and documentation.",
      color: "#FF6600",
    },
    {
      icon: <FaTools size={28} />,
      title: "DPR & Consultancy",
      desc: "Prepare detailed project reports covering financial, academic, and infrastructure aspects.",
      color: "#D32F2F",
    },
    {
      icon: <FaPlane size={28} />,
      title: "Overseas Admissions & Visa",
      desc: "Counseling and application support for international studies and visa documentation.",
      color: "#FFB400",
    },
    {
      icon: <FaMoneyCheckAlt size={28} />,
      title: "Educational Loans & HR",
      desc:"Consultation for securing loans and streamlining HR for institutions.",
      color: "#FF6600",
    },
    {
      icon: <FaGlobe size={28} />,
      title: "Domestic Counseling",
      desc: "Guide students across India in selecting the right courses and institutions.",
      color: "#D32F2F",
    },
    {
      icon: <FaCertificate size={28} />,
      title: "Accreditation Assistance",
      desc: "Help institutions achieve national and international accreditation efficiently.",
      color: "#FFB400",
    },
    {
      icon: <FaDatabase size={28} />,
      title: "Data & Document Management",
      desc: "Customized solutions for managing institutional data, libraries, and documents.",
      color: "#FF6600",
    },
  ];

  return (
    <section id="services" className="services-mobile">
      <h2 className="services-title">Our Services</h2>

      <div className="services-list">
        {serviceList.map((item, i) => (
          <div
            key={i}
            className={`service-item ${visible ? "show" : ""}`}
            style={{ borderColor: item.color }}
          >
            <div
              className="service-icon"
              style={{ background: item.color }}
            >
              {item.icon}
            </div>
            <h4 className="service-name">{item.title}</h4>
            <p className="service-desc">{item.desc}</p>
          </div>
        ))}
      </div>

      <style>{`
        .services-mobile {
          background: #fffaf6;
          padding: 60px 20px;
          font-family: 'Poppins', sans-serif;
          text-align: center;
        }

        .services-title {
          font-family: 'Orbitron', sans-serif;
          font-weight: 700;
          font-size: 1.8rem;
          color: #FF6600;
          text-transform: uppercase;
          margin-bottom: 25px;
          position: relative;
        }

        .services-title::after {
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

        .services-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: center;
        }

        .service-item {
          width: 95%;
          border: 2px solid transparent;
          border-radius: 16px;
          background: #fff;
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
          padding: 20px 15px;
          text-align: center;
          transform: translateY(40px);
          opacity: 0;
          transition: all 0.4s ease;
        }

        .service-item.show {
          transform: translateY(0);
          opacity: 1;
        }

        .service-item:active {
          transform: scale(0.97);
          box-shadow: 0 10px 30px rgba(255,102,0,0.3);
        }

        .service-icon {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          margin: 0 auto 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }

        .service-name {
          font-weight: 700;
          font-size: 1.1rem;
          color: #D32F2F;
          margin-bottom: 8px;
        }

        .service-desc {
          font-size: 0.9rem;
          color: #555;
          line-height: 1.5;
        }

        @media (min-width: 769px) {
          .services-mobile {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
