import React from "react";
import Navbar from "../../mobile/components/Navbar";
import Footer from "../../mobile/components/Footer";
import { 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaRegClock, 
  FaRegCalendarAlt, 
  FaClipboardList, 
  FaFileAlt,
  FaSearch,
  FaUserGraduate
} from "react-icons/fa";

// Assets
import heroImg from "../../assets/Banner26.jpg";
import prepImg1 from "../../assets/Accreditation3.jpg";
import prepImg2 from "../../assets/Accreditation4.jpg";

function Blog26() {
  return (
    <>
      <Navbar />

      <div className="blog-wrapper">
        {/* PREPARATION HERO */}
        <header className="blog-header">
          <div className="hero-background-container">
            <img src={heroImg} alt="Accreditation Audit" className="hero-image" />
            <div className="hero-overlay-blur"></div>
          </div>
          
          <div className="hero-text-content">
            <div className="status-badge">AUDIT READINESS SERIES</div>
            <h1 className="main-title">
              Preparing for <br />
              <span className="accent-text">Accreditation Success</span>
            </h1>
            <div className="meta-footer">
              <span><FaRegCalendarAlt /> Oct 12, 2026</span>
              <span><FaRegClock /> 6 Min Read</span>
            </div>
          </div>
        </header>

        {/* MAIN LAYOUT */}
        <div className="blog-layout">
          <main className="blog-body">
            <section className="content-segment">
              <p className="intro-text">
                <span className="first-letter">T</span>rue accreditation readiness is 
                not a last-minute effort; it is a meticulous assembly of documentation, 
                policy frameworks, and operational evidence. Each accrediting body—be 
                it NAAC, NBA, or international boards—demands a specific ecosystem of 
                academic rigor, governance transparency, and student outcome tracking.
              </p>
            </section>

            {/* SECTION 1 - SES SUPPORT */}
            <section className="article-section">
              <h2 className="section-title">SES Accreditation Preparation Support</h2>
              <p className="section-para">
                SES acts as your internal audit partner. We assist institutions in 
                preparing high-impact Self-Study Reports (SSR) and maintaining the 
                complex compliance data required for evaluation. Our team reviews 
                every departmental record to ensure it meets the strict criteria of 
                external peer review teams.
              </p>
              
              <div className="prep-roadmap">
                <div className="roadmap-step">
                  <div className="step-num">01</div>
                  <h4>SSR Framework</h4>
                  <p>Building data-backed self-study reports.</p>
                </div>
                <div className="roadmap-step">
                  <div className="step-num">02</div>
                  <h4>Metric Review</h4>
                  <p>Analyzing research and graduation outcomes.</p>
                </div>
              </div>

              <div className="content-image-box">
                <img src={prepImg1} alt="SES Documentation Support" />
              </div>
            </section>

            {/* SECTION 2 - READINESS */}
            <section className="article-section">
              <h2 className="section-title">Inspection & Assessment Readiness</h2>
              <p className="section-para">
                The "Peer Team Visit" is the most critical phase. SES ensures your 
                infrastructure is compliant, your academic records are indexed for 
                quick retrieval, and your staff is oriented on the evaluation 
                parameters. We simulate the inspection environment to remove 
                uncertainty and build institutional confidence.
              </p>
              <div className="content-image-box">
                <img src={prepImg2} alt="Assessment Readiness" />
              </div>
              <p className="section-para">
                By strengthening your performance under frameworks like NAAC and NBA, 
                our partnerships directly improve your national research metrics and 
                global ranking eligibility.
              </p>
            </section>

            {/* VIDEO SECTION - THE AUDIT PROCESS */}
            <section className="video-audit-card">
              <div className="v-header">
                <h3><FaSearch /> Internal Audit Walkthrough</h3>
                <p>Learn how to structure your operational evidence to meet international benchmarks.</p>
              </div>
              <div className="iframe-wrapper">
                <iframe
                  src="https://player.cloudinary.com/embed/?public_id=accrediataion-2_j7jgv0&cloud_name=dqmkivr5i&fluid=true"
                  title="Accreditation Preparation Video"
                  allow="autoplay; fullscreen; encrypted-media"
                  allowFullScreen
                />
              </div>
            </section>

            <section className="conclusion-box">
              <h2 className="section-title">Final Verdict</h2>
              <p className="section-para">
                Accreditation is an investment in your institution's future legacy. 
                With SES, you move from "Compliance" to "Excellence," ensuring that 
                every inspection is a celebration of your academic standards.
              </p>
            </section>
          </main>

          {/* SIDEBAR */}
          <aside className="blog-sidebar">
            <div className="sticky-container">
              <div className="sidebar-card checklist">
                <h3 className="sidebar-label">Readiness Checklist</h3>
                <ul className="check-list-items">
                  <li><FaClipboardList /> Self-Study Reports (SSR)</li>
                  <li><FaFileAlt /> Compliance Frameworks</li>
                  <li><FaUserGraduate /> Student Outcome Data</li>
                  <li><FaFileAlt /> Infrastructure Audits</li>
                </ul>
              </div>

              <div className="sidebar-card cta-box">
                <h3>Start Your Audit</h3>
                <p>Don't wait for the inspection date. Get a pre-assessment from our senior consultants today.</p>
                <div className="btn-stack">
                  <a href="tel:+919801066182" className="btn call"><FaPhoneAlt /> Call Now</a>
                  <a href="https://wa.me/919801066182" className="btn wa"><FaWhatsapp /> WhatsApp</a>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <Footer />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Poppins:wght@300;400;500;600;700&display=swap');

        .blog-wrapper { background: #fff4ea; color: #1a202c; font-family: 'Poppins', sans-serif; }

        /* Hero */
        .blog-header { position: relative; height: 550px; display: flex; align-items: center; justify-content: center; overflow: hidden; text-align: center; }
        .hero-background-container { position: absolute; inset: 0; }
        .hero-image { width: 100%; height: 100%; object-fit: cover; }
        .hero-overlay-blur { position: absolute; inset: 0; background: rgba(0,0,0,0.7); backdrop-filter: blur(2px); }
        .hero-text-content { position: relative; z-index: 2; color: white; padding: 20px; }
        .status-badge { background: #ff6600; color: white; display: inline-block; padding: 6px 18px; border-radius: 50px; font-weight: 800; font-size: 0.7rem; letter-spacing: 1px; margin-bottom: 20px; font-family: 'Orbitron'; }
        .main-title { font-family: 'Orbitron', sans-serif; font-size: clamp(1.8rem, 7vw, 3.5rem); font-weight: 900; line-height: 1.1; }
        .accent-text { color: #ff6600; }
        .meta-footer { display: flex; justify-content: center; gap: 20px; margin-top: 30px; font-size: 0.85rem; opacity: 0.8; }

        /* Content Layout */
        .blog-layout { 
          max-width: 1250px; margin: -80px auto 0; 
          display: grid; grid-template-columns: 1fr 380px; 
          gap: 40px; padding: 0 20px 100px; 
        }

        .blog-body { background: white; padding: 80px; border-radius: 40px; box-shadow: 0 40px 80px rgba(0,0,0,0.08); }
        .intro-text { font-size: 1.3rem; line-height: 2; color: #4a5568; margin-bottom: 50px; font-weight: 300; }
        .first-letter { float: left; font-size: 5rem; font-weight: 900; color: #1a202c; line-height: 1; margin-right: 15px; font-family: 'Orbitron'; }
        
        .section-para { font-size: 1.1rem; line-height: 1.9; color: #555; margin-bottom: 30px; }

        .prep-roadmap { display: grid; grid-template-columns: 1fr 1fr; gap: 25px; margin: 40px 0; }
        .roadmap-step { border: 2px dashed #e2e8f0; padding: 30px; border-radius: 20px; position: relative; }
        .step-num { position: absolute; top: -15px; right: 20px; background: #ff6600; color: white; font-family: 'Orbitron'; padding: 5px 12px; border-radius: 8px; font-size: 0.8rem; }
        .roadmap-step h4 { font-family: 'Orbitron'; font-size: 1rem; margin-bottom: 10px; color: #ff6600; }
        .roadmap-step p { font-size: 0.85rem; margin: 0; color: #718096; }

        .section-title { font-family: 'Orbitron', sans-serif; font-size: 1.6rem; color: #1a202c; margin: 60px 0 25px; }
        .content-image-box { margin: 40px 0; border-radius: 25px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.12); }
        .content-image-box img { width: 100%; display: block; }

        /* Video Audit */
        .video-audit-card { background: #f8fafc; padding: 50px; border-radius: 40px; border: 1px solid #e2e8f0; margin-top: 70px; }
        .v-header h3 { font-family: 'Orbitron'; font-size: 1.5rem; display: flex; align-items: center; gap: 15px; margin-bottom: 10px; }
        .v-header p { color: #64748b; margin-bottom: 30px; }
        .iframe-wrapper { position: relative; padding-bottom: 56.25%; height: 0; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
        .iframe-wrapper iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }

        /* Sidebar Tracker */
        .sticky-container { position: sticky; top: 120px; display: flex; flex-direction: column; gap: 30px; }
        .sidebar-card { background: white; padding: 40px; border-radius: 35px; border: 1px solid #e2e8f0; }
        .sidebar-label { font-family: 'Orbitron'; font-size: 0.9rem; color: #1a202c; margin-bottom: 25px; border-bottom: 2px solid #ff6600; display: inline-block; }
        
        .check-list-items { list-style: none; padding: 0; margin: 0; }
        .check-list-items li { display: flex; align-items: center; gap: 15px; padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 0.9rem; font-weight: 500; }
        .check-list-items li svg { color: #ff6600; }
        
        .cta-box { background: #1a202c; color: white; }
        .cta-box h3 { font-family: 'Orbitron'; font-size: 1.2rem; margin-bottom: 15px; }
        .btn-stack { display: flex; flex-direction: column; gap: 15px; margin-top: 25px; }
        .btn { padding: 15px; border-radius: 12px; text-decoration: none; color: white; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 10px; }
        .btn.call { background: #ff6600; }
        .btn.wa { background: #25d366; }

        @media (max-width: 992px) {
          .blog-layout { grid-template-columns: 1fr; }
          .blog-body { padding: 40px 25px; }
          .prep-roadmap { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}

export default Blog26;