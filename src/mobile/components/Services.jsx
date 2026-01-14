import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      icon: <FaChalkboardTeacher size={26} />,
      title: "Collaboration Guidance",
      desc: "Form strong partnerships with universities, industry, and networks to enhance academic growth.",
      color: "#FF6600",
      link: "/collaboration",
    },
    {
      icon: <FaLightbulb size={26} />,
      title: "Affiliation Guidance",
      desc: "Complete support for obtaining affiliation from recognized boards and universities.",
      color: "#FFB400",
      link: "/affiliation",
    },
    {
      icon: <FaUniversity size={26} />,
      title: "New Institutions Setup",
      desc: "Assist in establishing and getting recognition for new colleges or institutions.",
      color: "#D32F2F",
      link: "/new-institutions",
    },
    {
      icon: <FaGraduationCap size={26} />,
      title: "New Schools Setup",
      desc: "Step-by-step guidance to establish schools with approvals and documentation.",
      color: "#FF6600",
      link: "/new-schools",
    },
    {
      icon: <FaTools size={26} />,
      title: "DPR & Consultancy",
      desc: "Detailed project reports covering financial, academic, and infrastructure planning.",
      color: "#D32F2F",
      link: "/dpr-consultancy",
    },
    {
      icon: <FaPlane size={26} />,
      title: "Overseas Admissions & Visa",
      desc: "Complete counseling and visa support for international education.",
      color: "#FFB400",
      link: "/overseas-admissions",
    },
    {
      icon: <FaMoneyCheckAlt size={26} />,
      title: "Educational Loans & HR",
      desc: "Consultation for loans, staffing, and institutional HR systems.",
      color: "#FF6600",
      link: "/education-loans",
    },
    {
      icon: <FaGlobe size={26} />,
      title: "Domestic Counseling",
      desc: "Guidance across India for selecting courses and institutions.",
      color: "#D32F2F",
      link: "/domestic-admissions",
    },
    {
      icon: <FaCertificate size={26} />,
      title: "Accreditation Assistance",
      desc: "Support to achieve national and international accreditations.",
      color: "#FFB400",
      link: "/accreditation",
    },
    {
      icon: <FaDatabase size={26} />,
      title: "Data & Document Management",
      desc: "Custom solutions for managing institutional data and records.",
      color: "#FF6600",
      link: "/data-management",
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
            {/* Number */}
            <div className="service-number" style={{ background: item.color }}>
              {i + 1}
            </div>

            {/* Icon */}
            <div className="service-icon" style={{ background: item.color }}>
              {item.icon}
            </div>

            <h4 className="service-name">{item.title}</h4>
            <p className="service-desc">{item.desc}</p>

            {/* ✅ FIXED LINK */}
            <Link
              to={item.link}
              className="service-read"
              style={{ background: item.color }}
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>

      <style>{`
        .services-mobile {
          background: #fffaf6;
          padding: 60px 18px;
          font-family: 'Poppins', sans-serif;
          text-align: center;
        }

        .services-title {
          font-family: 'Orbitron', sans-serif;
          font-weight: 700;
          font-size: 1.8rem;
          color: #FF6600;
          margin-bottom: 30px;
          position: relative;
        }

        .services-title::after {
          content: "";
          position: absolute;
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 90px;
          height: 3px;
          background: linear-gradient(90deg, #FF6600, #D32F2F);
        }

        .services-list {
          display: flex;
          flex-direction: column;
          gap: 22px;
          align-items: center;
        }

        .service-item {
          width: 100%;
          max-width: 360px;
          background: #fff;
          border-radius: 18px;
          padding: 22px 16px;
          border: 2px solid transparent;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          position: relative;
          transform: translateY(40px);
          opacity: 0;
          transition: all 0.45s ease;
        }

        .service-item.show {
          transform: translateY(0);
          opacity: 1;
        }

        .service-number {
          position: absolute;
          top: -14px;
          left: -14px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          color: #fff;
          font-weight: 700;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .service-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          margin: 0 auto 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }

        .service-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: #D32F2F;
          margin-bottom: 8px;
        }

        .service-desc {
          font-size: 0.9rem;
          color: #555;
          line-height: 1.5;
          margin-bottom: 14px;
        }

        .service-read {
          display: inline-block;
          padding: 7px 20px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #fff;
          border-radius: 20px;
          text-decoration: none;
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
