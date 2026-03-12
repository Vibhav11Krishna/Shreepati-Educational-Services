import React from "react";
import Navbar from "../../mobile/components/Navbar";
import Footer from "../../mobile/components/Footer";
import { 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaRegClock, 
  FaRegCalendarAlt, 
  FaArrowRight, 
  FaCheckCircle,
  FaShieldAlt,
  FaAward
} from "react-icons/fa";

// Assets
import heroImg from "../../assets/Banner25.jpg";
import accreditationImg1 from "../../assets/Accreditation1.jpg";
import accreditationImg2 from "../../assets/Accreditation2.jpg";
import blogSidebar1 from "../../assets/Academic.jpg";

function Blog25() {
  return (
    <>
      <Navbar />

      {/* 1. Opening Wrapper */}
      <div className="blog-wrapper">
        <header className="blog-header">
          <div className="hero-background-container">
            <img src={heroImg} alt="University Accreditation" className="hero-image" />
            <div className="hero-overlay-gradient"></div>
          </div>
          
          <div className="hero-text-content">
            <div className="meta-info-row">
              <span className="meta-item"><FaRegCalendarAlt /> Oct 05, 2026</span>
              <span className="meta-item"><FaRegClock /> 5 Min Read</span>
            </div>
            <h1 className="main-title">
              The Critical Importance Of <br />
              <span className="accent-text">Academic Accreditation</span>
            </h1>
          </div>
        </header>

        <div className="blog-layout">
          <main className="blog-body">
            <section className="content-segment">
              <p className="intro-text">
                <span className="first-letter">A</span>ccreditation is more than just 
                a badge; it is a rigorous validation of an institution's commitment to 
                excellence. It serves as a formal recognition that confirms an 
                educational body meets global academic and operational standards.
              </p>
            </section>

            <section className="article-section">
              <h2 className="section-title">Academic & Institutional Credibility</h2>
              <p className="section-para">
                Accreditation validates every facet of an institution—from teaching 
                quality and governance to infrastructure and learning outcomes.
              </p>
              
              <div className="trust-grid">
                <div className="trust-item">
                  <FaShieldAlt className="t-icon" />
                  <h4>Quality Assurance</h4>
                  <p>Standardized benchmarks for curriculum and faculty.</p>
                </div>
                <div className="trust-item">
                  <FaCheckCircle className="t-icon" />
                  <h4>Global Validation</h4>
                  <p>Recognition by international boards and employers.</p>
                </div>
              </div>

              <div className="content-image-box">
                <img src={accreditationImg1} alt="Institutional Quality Check" />
              </div>
            </section>

            <section className="article-section">
              <h2 className="section-title">Recognition & Competitive Advantage</h2>
              <p className="section-para">
                In an increasingly crowded market, accredited institutions stand out. 
                They attract higher-tier faculty and secure better research funding.
              </p>
              <div className="content-image-box">
                <img src={accreditationImg2} alt="University Ranking and Recognition" />
              </div>
            </section>

            <section className="video-card-premium">
              <div className="video-header">
                <div className="v-label"><FaAward /> COMPLIANCE INSIGHTS</div>
                <h3>Understanding the Certification Process</h3>
                <p>Explore how formal recognition confirms highest operational standards.</p>
              </div>
              <div className="iframe-wrapper">
                <iframe
                  src="https://player.cloudinary.com/embed/?public_id=accreditation-1_otgvhw&cloud_name=dqmkivr5i&fluid=true"
                  title="Accreditation Standards Video"
                  allow="autoplay; fullscreen; encrypted-media"
                  allowFullScreen
                />
              </div>
            </section>

            <section className="conclusion-box">
              <h2 className="section-title">Conclusion</h2>
              <p className="section-para">
                Achieving accreditation strengthens institutional identity and ensures 
                long-term sustainability.
              </p>
            </section>
          </main>

          <aside className="blog-sidebar">
            <div className="sticky-container">
              <div className="sidebar-card status">
                <h3 className="sidebar-label">Regulatory Support</h3>
                <div className="support-links">
                  <a href="/blogs/blog21" className="link-item">
                    <img src={blogSidebar1} alt="Finance Compliance" />
                    <div className="link-text">
                      <h4>Finance Compliance</h4>
                      <span>View Service <FaArrowRight /></span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="sidebar-card expert-dark">
                <h3>Accreditation Ready?</h3>
                <p>Our experts provide end-to-end audit support for NAAC and NBA.</p>
                <div className="btn-group-vertical">
                  <a href="tel:+919801066182" className="btn call"><FaPhoneAlt /> Call Expert</a>
                  <a href="https://wa.me/919801066182" className="btn wa"><FaWhatsapp /> WhatsApp</a>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <Footer />
      </div> {/* 2. Closing Wrapper properly placed before style/fragment */}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Poppins:wght@300;400;500;600;700&display=swap');
        .blog-wrapper { background: #fff4ea; color: #2d3748; font-family: 'Poppins', sans-serif; }
        .blog-header { position: relative; height: 500px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .hero-background-container { position: absolute; inset: 0; }
        .hero-image { width: 100%; height: 100%; object-fit: cover; }
        .hero-overlay-gradient { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(255,102,0,0.1) 70%, #fff4ea 100%); }
        .hero-text-content { position: relative; z-index: 2; text-align: center; color: white; padding: 20px; }
        .main-title { font-family: 'Orbitron', sans-serif; font-size: clamp(1.8rem, 6vw, 3.2rem); font-weight: 900; line-height: 1.2; }
        .accent-text { color: #ff6600; text-shadow: 2px 2px 0px rgba(0,0,0,0.5); }
        .meta-info-row { display: flex; justify-content: center; gap: 15px; margin-bottom: 25px; }
        .meta-item { background: #ff6600; color: white; padding: 5px 15px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; }
        .blog-layout { max-width: 1250px; margin: -60px auto 0; display: grid; grid-template-columns: 1fr 360px; gap: 40px; padding: 0 20px 120px; }
        .blog-body { background: white; padding: 75px; border-radius: 40px; box-shadow: 0 40px 100px rgba(0,0,0,0.07); }
        .intro-text { font-size: 1.35rem; line-height: 2.1; color: #4a5568; margin-bottom: 50px; font-weight: 300; }
        .first-letter { float: left; font-size: 5.5rem; font-weight: 900; color: #ff6600; line-height: 0.8; margin-right: 15px; font-family: 'Orbitron'; }
        .section-para { font-size: 1.15rem; line-height: 2; color: #555; margin-bottom: 35px; }
        .trust-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin: 50px 0; }
        .trust-item { background: #fffcf9; padding: 40px; border-radius: 30px; border: 1px solid #ffe8d6; transition: 0.4s; }
        .trust-item:hover { background: #ff6600; color: white; transform: translateY(-10px); }
        .t-icon { font-size: 3rem; color: #ff6600; margin-bottom: 20px; transition: 0.4s; }
        .trust-item:hover .t-icon { color: white; }
        .trust-item h4 { font-family: 'Orbitron'; font-size: 1.1rem; margin-bottom: 12px; }
        .trust-item p { font-size: 0.9rem; margin: 0; opacity: 0.8; }
        .section-title { font-family: 'Orbitron', sans-serif; font-size: 1.7rem; color: #1a202c; margin: 70px 0 30px; border-left: 6px solid #ff6600; padding-left: 20px; }
        .content-image-box { margin: 50px 0; border-radius: 35px; overflow: hidden; box-shadow: 0 30px 60px rgba(0,0,0,0.15); }
        .content-image-box img { width: 100%; display: block; }
        .video-card-premium { background: #1a202c; padding: 60px; border-radius: 50px; color: white; margin-top: 80px; }
        .v-label { color: #ffb400; font-weight: 800; font-family: 'Orbitron'; font-size: 0.85rem; letter-spacing: 3px; margin-bottom: 20px; display: flex; align-items: center; gap: 10px; }
        .video-header h3 { font-family: 'Orbitron', sans-serif; font-size: 2rem; margin-bottom: 20px; }
        .video-header p { color: #cbd5e1; margin-bottom: 40px; max-width: 650px; line-height: 1.7; }
        .iframe-wrapper { position: relative; padding-bottom: 56.25%; height: 0; border-radius: 25px; overflow: hidden; border: 5px solid #2d3748; }
        .iframe-wrapper iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }
        .sticky-container { position: sticky; top: 120px; display: flex; flex-direction: column; gap: 40px; }
        .sidebar-card { background: white; padding: 40px; border-radius: 40px; border: 1px solid #e2e8f0; }
        .sidebar-label { font-family: 'Orbitron'; font-size: 0.95rem; color: #1a202c; margin-bottom: 30px; letter-spacing: 1px; }
        .link-item { display: flex; gap: 20px; text-decoration: none; color: inherit; align-items: center; margin-bottom: 25px; }
        .link-item img { width: 75px; height: 75px; border-radius: 20px; object-fit: cover; }
        .link-text h4 { font-size: 0.95rem; margin: 0; font-weight: 800; }
        .link-text span { font-size: 0.75rem; color: #ff6600; font-weight: 700; margin-top: 5px; display: block; }
        .expert-dark { background: #1a202c; color: white; border: none; }
        .expert-dark h3 { font-family: 'Orbitron'; font-size: 1.3rem; color: #ffb400; margin-bottom: 15px; }
        .btn-group-vertical { display: flex; flex-direction: column; gap: 20px; margin-top: 30px; }
        .btn { padding: 18px; border-radius: 15px; text-decoration: none; color: white; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 12px; transition: 0.3s; }
        .btn.call { background: #ff6600; }
        .btn.wa { background: #25d366; }
        .btn:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(0,0,0,0.2); }
        @media (max-width: 992px) {
          .blog-layout { grid-template-columns: 1fr; }
          .blog-body { padding: 50px 25px; }
          .trust-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}

export default Blog25;