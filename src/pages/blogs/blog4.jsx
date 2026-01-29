import React from "react";
import Navbar from "../../mobile/components/Navbar";
import Footer from "../../mobile/components/Footer";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
// Assets
import heroImg from "../../assets/Banner4.jpg";
import collaborationImg from "../../assets/Affiliation1.jpg";
import researchImg from "../../assets/Affiliation2.jpg";
import blog1 from "../../assets/Academic.jpg";
import blog2 from "../../assets/Admission.png";
import blog3 from "../../assets/Admission.png";
function Blog4() {
  return (
    <>
      <Navbar />

      {/* PAGE WRAPPER */}
      <div className="blog-page">
        {/* HERO SECTION */}
        <div className="blog-hero">
          <img src={heroImg} alt="Academic Collaboration" />
          <div className="hero-overlay">
            <h1 className="gradient-heading">
              How to get Affiliation from universities & Board
            </h1>
          </div>
        </div>

        {/* BLOG CONTENT */}
        <article className="blog-article">
          {/* INTRO */}
          <p className="blog-intro">
            Institutional affiliation links your school or college with
            recognized boards or universities. It ensures that courses are
            academically valid, legally recognized, and compliant with
            regulatory standards. Affiliation is essential for credibility,
            student trust, and smooth academic operations. Without proper
            affiliation, students may face challenges in certifications, further
            education, and career opportunities.
          </p>

          {/* SECTION 1 */}
          <h2 className="gradient-heading">Step By Step Process</h2>
          <p>
            The affiliation process involves multiple steps: Eligibility
            Assessment: Check whether your institution meets board or university
            criteria. Documentation: Prepare institutional documents, including
            infrastructure, staff qualifications, and curriculum plans.
            Application Submission: Submit your application to the appropriate
            authority. Coordination & Inspections: Work with officials for
            clarifications, inspections, and approvals. Final Approval: Receive
            the official affiliation certificate and start recognized academic
            operations.
          </p>

          <div className="blog-image">
            <img src={collaborationImg} alt="Industry Collaboration" />
          </div>

          {/* SECTION 2 */}
          <h2 className="gradient-heading">SES Guidance</h2>
          <p>
            SES provides end-to-end support for each stage of affiliation. From
            reviewing documents to guiding inspections and ensuring compliance,
            SES ensures institutions avoid delays, meet all regulations, and
            achieve recognition efficiently..
          </p>

          <div className="blog-image">
            <img src={researchImg} alt="Research Collaboration" />
          </div>

          {/* VIDEO SECTION */}
          <h2 className="gradient-heading">Video Explanation</h2>

          <div className="blog-video">
            <iframe
              src="https://player.cloudinary.com/embed/?public_id=step-by-step-affiliation-process_hrajai&cloud_name=dqmkivr5i&fluid=true"
              title="Academic Collaboration Video"
              allow="autoplay; fullscreen; encrypted-media"
              allowFullScreen
            />
          </div>

          <p>
            This video explains how Institutional affiliation links your school or college with
            recognized boards or universities. It ensures that courses are
            academically valid, legally recognized, and compliant with
            regulatory standards.
          </p>

          {/* CONCLUSION */}
          <h2 className="gradient-heading">Conclusion</h2>
          <p>
            Affiliation is the cornerstone of academic legitimacy. With SES
            guidance, institutions complete the process efficiently, avoid
            delays, and gain credibility and recognition, setting a strong
            foundation for growth..
          </p>
        </article>

<section className="expert-guidance-box">
  <h3>Expert Guidance</h3>

  <p>
    Need expert guidance on college setup, collaborations, compliance, or institutional growth? Our consultants are here to help.
  </p>

  <div className="expert-actions">
    <a href="tel:+919801066182" className="expert-btn call">
      <FaPhoneAlt /> Call Now
    </a>

    <a
      href="https://wa.me/919801066182"
      target="_blank"
      rel="noopener noreferrer"
      className="expert-btn whatsapp"
    >
      <FaWhatsapp /> WhatsApp
    </a>
  </div>
</section>
        <Footer />
      </div>

      {/* STYLES */}
      <style>{`
      .expert-guidance-box {
  max-width: 700px;
  margin: 80px auto;
  padding: 40px 32px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.12);
  text-align: center;
}

.expert-guidance-box h3 {
  font-size: 2rem;
  font-weight: 700;
  color: #ff6600;
  margin-bottom: 14px;
}

.expert-guidance-box p {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.7;
  margin-bottom: 30px;
}

.expert-actions {
  display: flex;
  justify-content: center;
  gap: 18px;
  flex-wrap: wrap;
}

.expert-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 26px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease;
}

.expert-btn.call {
  background: linear-gradient(90deg, #ffb400, #ff6600);
}

.expert-btn.whatsapp {
  background: linear-gradient(90deg, #25d366, #1ebf5c);
}

.expert-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
}

@media (max-width: 400px) {
  .expert-guidance-box {
    max-width: 92%;   /* ✅ prevents touching screen edges */
    padding: 22px 20px;
  }
}

      /* ===== EXPERT GUIDANCE ===== */
.expert-guidance {
  max-width: 820px;
  margin: 90px auto;
  padding: 45px 35px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.12);
  text-align: center;
}

.section-title {
  font-size: 1.9rem;
  font-weight: 800;
  background: linear-gradient(90deg, #ff6600, #d32f2f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 22px;
}

.expert-text {
  font-size: 1.05rem;
  color: #555;
  line-height: 1.7;
  margin-bottom: 32px;
}

.expert-cta {
  display: flex;
  justify-content: center;
  gap: 18px;
  flex-wrap: wrap;
}

.cta-btn {
  padding: 12px 28px;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  color: #fff;
  transition: transform 0.3s ease;
}

.cta-btn.call {
  background: linear-gradient(90deg, #ff6600, #ff8c1a);
}

.cta-btn.whatsapp {
  background: linear-gradient(90deg, #25d366, #1ebf5c);
}

.cta-btn:hover {
  transform: translateY(-3px);
}


        html, body {
          margin: 0;
          padding: 0;
          background: #fff4ea;
        }

        .blog-page {
          background: #fff4ea;
          font-family: 'Poppins', sans-serif;
          color: #000;
        }

        /* HERO */
        .blog-hero {
          position: relative;
          height: 420px;
          overflow: hidden;
        }

        .blog-hero img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
        }

        .hero-overlay h1 {
          font-size: 3.2rem;
          max-width: 900px;
        }

        /* BLOG ARTICLE */
        .blog-article {
          max-width: 760px;
          margin: 80px auto 0;
          padding: 0 16px 80px;
          text-align: justify;
        }

        .blog-intro {
          font-size: 1.3rem;
          line-height: 1.9;
          margin-bottom: 50px;
        }

        .gradient-heading {
          font-family: 'Orbitron', sans-serif;
          background: linear-gradient(90deg, #ff6600, #d32f2f);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
          margin: 60px 0 20px;
        }

        .blog-article h2 {
          font-size: 2rem;
          margin-top: 60px;
          margin-bottom: 20px;
        }

        .blog-article p {
          font-size: 1.15rem;
          line-height: 1.9;
          margin-bottom: 28px;
        }

        /* IMAGES */
        .blog-image {
          margin: 40px 0;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 18px 45px rgba(0,0,0,0.18);
        }

        .blog-image img {
          width: 100%;
          display: block;
        }

        /* VIDEO */
        .blog-video {
          margin: 40px 0;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 18px 45px rgba(0,0,0,0.25);
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
        }

        .blog-video iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        /* MOBILE RESPONSIVE */
        @media (max-width: 768px) {
          .blog-article {
            padding: 0 12px 60px;
            text-align: justify;
          }

          .blog-article h2 {
            font-size: 1.6rem;
            margin-top: 40px;
            margin-bottom: 16px;
          }

          .blog-article p {
            font-size: 1rem;
            line-height: 1.6;
            margin-bottom: 20px;
          }

          .blog-article .blog-intro {
            font-size: 1.1rem;
            line-height: 1.7;
            margin-bottom: 30px;
          }

          .blog-video iframe {
            height: 200px;
          }

          .hero-overlay h1 {
            font-size: 2rem;
            padding: 10px;
          }
        }
      `}</style>
    </>
  );
}

export default Blog4;
