import React, { useEffect, useState } from "react";
import Footer from "../../mobile/components/Footer";
import Navbar from "../../mobile/components/Navbar";
import processImg from "../../assets/Collaboration.png";
import blog1 from "../../assets/Academic.jpg";
import blog2 from "../../assets/Steps.jpg";
import blog3 from "../../assets/Regulatory.jpg";

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
    title: "Feasibility Study",
    description:
      "We analyze potential collaboration opportunities, assess risks, and identify the best partners for your institution.",
  },
  {
    icon: <FaLightbulb size={40} />,
    title: "Documentation",
    description:
      "We prepare agreements, MoUs, and all legal documentation required for smooth collaboration.",
  },
  {
    icon: <FaUniversity size={40} />,
    title: "Regulatory Approvals",
    description:
      "Ensure all collaborations meet compliance and regulatory requirements for educational institutions.",
  },
  {
    icon: <FaChalkboardTeacher size={40} />,
    title: "Implementation Support",
    description:
      "Guiding institutions step-by-step to make collaborations effective and successful.",
  },
];

const benefits = [
  {
    icon: <FaCheckCircle size={30} />,
    title: "Experienced Team",
    description:
      "Our experts have years of experience in guiding institutions for successful collaborations.",
  },
  {
    icon: <FaCheckCircle size={30} />,
    title: "Regulatory Knowledge",
    description:
      "We understand all compliance, academic, and legal requirements to make collaborations smooth.",
  },
  {
    icon: <FaCheckCircle size={30} />,
    title: "End-to-End Support",
    description:
      "From planning to implementation, SES provides complete guidance to ensure long-term success.",
  },
   {
    icon: <FaCheckCircle size={30} />,
    title: "Trusted Network",
    description:
      "Strong network of universities , boards , and industry partners. ",
  },
];
const outcomes = [
  {
    icon: <FaChalkboardTeacher size={40} />,
    title: "Enhanced Institutional Credibility",
 
  },
  {
   icon: <FaGraduationCap size={40} />,
    title: "Improved Student Exposure",
   
  },
  {
    icon: <FaTools size={40} />,
    title: "Academic & Industry Integration",
    
  },
   {
    icon:<FaCertificate size={40} />,
    title: "Sustainable Institutional Growth",
   
  },
];
const blogs = [
  {
    image: blog1,
    title: "Benefits of Academic Collaborations",
    description:
      "How partnerships with universities and industry enhance learning and credibility.",
    link: "/blogs/blog1",
  },
  {
    image: blog2,
    title: "Steps to build successful collaborations",
    description:
      "Key steps institutions must take for effective , growing and long lasting partnership.",
    link: "/blogs/blog2",
  },
  {
    image: blog3,
    title: "Regulatory Compliance in Collaborations",
    description:
      "Real Examples of SES guided and suggested collaborations that created impact.",
    link: "/blogs/blog3",
  },
];


function Collaboration() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <div style={{ background: "#fff4ea", fontFamily: "'Poppins', sans-serif" }}>
      {/* Page Heading */}
      <section style={{ padding: "90px 20px 40px", textAlign: "center" }}>
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
          1. Collaboration Guidance
        </h1>

<div
  style={{
    maxWidth: "1100px",
    margin: "40px auto 0",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  }}
>
 
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
      Collaboration Guidance focuses on helping educational institutions build
      meaningful academic and industry partnerships that support growth and
      quality improvement. It involves identifying the right collaborators,
      aligning institutional goals, and creating structured partnerships that
      benefit students, faculty, and institutions alike.
    </p>
  </div>

 
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
      At Shreepati Educational Services, collaboration guidance is delivered
      through a planned and compliant approach. We ensure that every partnership
      is practical, transparent, and aligned with long-term institutional
      objectives.
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
  
      <section>
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
    Our Collaboration Process
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
          Outcomes of Collaboration
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
       
{/* Blogs Section */}
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
    Latest Blogs
  </h2>

  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "30px",
      justifyContent: "center",
    }}
  >
    {blogs.map((blog, index) => (
      <div
        key={index}
        className={`blog-card ${loaded ? "visible" : ""}`}
        style={{
          flex: "1 1 320px",
          background: "#fff",
          borderRadius: "18px",
          overflow: "hidden",
          boxShadow: "0 18px 45px rgba(0,0,0,0.22)",
          transition: "all 0.4s ease",
        }}
      >
        {/* Blog Image */}
        <img
          src={blog.image}
          alt={blog.title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
          }}
        />

        {/* Blog Content */}
        <div style={{ padding: "25px", textAlign: "center" }}>
          <h3
            style={{
              fontSize: "1.35rem",
              fontWeight: "700",
              marginBottom: "12px",
              color: "#D32F2F",
            }}
          >
            {blog.title}
          </h3>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.7",
              color: "#df4b1f",
              marginBottom: "18px",
            }}
          >
            {blog.description}
          </p>

          <a
            href={blog.link}
            style={{
              display: "inline-block",
              padding: "10px 22px",
              borderRadius: "30px",
              background: "linear-gradient(90deg, #FF6600, #D32F2F)",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "600",
              transition: "all 0.3s ease",
            }}
          >
            Read More →
          </a>
        </div>
      </div>
    ))}
  </div>
</section>

        <Navbar />
      {/* Footer */}
      <Footer />

      {/* Animations */}
      <style>{`
      .blog-card {
  opacity: 0;
  transform: translateY(30px);
}

.blog-card.visible {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.6s ease;
}

.blog-card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 28px 55px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .blog-card {
    flex: 1 1 100%;
  }
}

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
       .intro-landscape {
  opacity: 0;
  transform: translateY(35px);
  transition: all 0.8s ease;
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
  transition-delay: 0.6s;
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
`}</style>
    </div>
  );
}

export default Collaboration;
