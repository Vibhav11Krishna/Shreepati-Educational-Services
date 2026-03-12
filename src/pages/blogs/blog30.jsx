import React from "react";
import Navbar from "../../mobile/components/Navbar";
import Footer from "../../mobile/components/Footer";
import { 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaGavel, 
  FaClipboardCheck, 
  FaShieldAlt, 
  FaChartPie,
  FaRegClock, 
  FaRegCalendarAlt 
} from "react-icons/fa";

// Assets
import heroImg from "../../assets/Banner30.jpg";
import compImg1 from "../../assets/Document5.jpg";
import compImg2 from "../../assets/Document6.jpg";

function Blog30() {
  return (
    <>
      <Navbar />

      <div className="blog-wrapper">
        {/* COMPLIANCE-DRIVEN HERO */}
        <header className="blog-header">
          <div className="hero-base">
            <img src={heroImg} alt="Institutional Compliance" />
            <div className="hero-mask"></div>
          </div>
          
          <div className="hero-text-area">
            <div className="badge">ACCREDITATION READY</div>
            <h1 className="main-title">
              Compliance, Organization <br />
              <span className="accent">& Operations</span>
            </h1>
            <div className="meta-info">
              <span><FaRegCalendarAlt /> Jan 18, 2026</span>
              <span className="divider">|</span>
              <span><FaRegClock /> 6 Min Read</span>
            </div>
          </div>
        </header>

        {/* MAIN ARTICLE GRID */}
        <div className="main-grid">
          <article className="article-body">
            <section className="article-intro">
              <p className="heavy-text">
                <span className="first-letter">E</span>ducational institutions 
                operate within a complex web of regulatory and accreditation 
                requirements. Maintaining proper records isn't just a best 
                practice—it is a legal necessity. Organized documentation is 
                the single most important factor during inspections, audits, 
                and accreditation reviews.
              </p>
            </section>

            {/* SECTION 1 - STRUCTURED SYSTEMS */}
            <section className="section-content">
              <h2 className="section-h2">Structured Documentation Systems</h2>
              <p className="text-p">
                SES assists institutions in organizing documents according to 
                strict regulatory guidelines. By aligning your physical and 
                digital files with the specific checklists of governing bodies, 
                we ensure absolute readiness for inspections and help you 
                avoid the stress of last-minute compliance issues.
              </p>
              
              <div className="audit-checklist">
                <h3>Audit Readiness Checklist</h3>
                <div className="check-grid">
                  <div className="check-item">
                    <FaClipboardCheck className="c-icon" />
                    <span>Statutory Approvals</span>
                  </div>
                  <div className="check-item">
                    <FaClipboardCheck className="c-icon" />
                    <span>Faculty Records</span>
                  </div>
                  <div className="check-item">
                    <FaClipboardCheck className="c-icon" />
                    <span>Infrastructure Certs</span>
                  </div>
                  <div className="check-item">
                    <FaClipboardCheck className="c-icon" />
                    <span>Financial Audits</span>
                  </div>
                </div>
              </div>

              <div className="img-frame">
                <img src={compImg1} alt="Regulatory Documentation" />
              </div>
            </section>

            {/* SECTION 2 - STREAMLINED OPERATIONS */}
            <section className="section-content">
              <h2 className="section-h2">Streamlined Institutional Operations</h2>
              <p className="text-p">
                Beyond compliance, well-organized records support smoother 
                day-to-day operations. When data is accessible and categorized, 
                coordination between departments improves, and leadership can 
                make informed decisions based on accurate insights. SES ensures 
                your documentation systems are a boost to your workflow, not 
                a burden.
              </p>
              <div className="img-frame">
                <img src={compImg2} alt="Operational Workflow" />
              </div>
            </section>

            {/* VIDEO SECTION */}
            <section className="video-card-dark">
              <div className="v-desc">
                <FaGavel className="v-icon-top" />
                <h3>Navigating Accreditation</h3>
                <p>A deep dive into why regulatory alignment is the foundation of growth.</p>
              </div>
              <div className="v-container">
                <iframe
                  src="https://player.cloudinary.com/embed/?public_id=data_-3_djlecw&cloud_name=dqmkivr5i&fluid=true"
                  title="Compliance Video"
                  allow="autoplay; fullscreen; encrypted-media"
                  allowFullScreen
                />
              </div>
            </section>

            <section className="final-summary">
              <h2 className="section-h2">Conclusion</h2>
              <p className="text-p">
                Compliance and organization go hand in hand to protect the 
                reputation and future of your institution. SES provides the 
                expert guidance needed to maintain structured, compliant, and 
                highly efficient documentation systems.
              </p>
            </section>
          </article>

          {/* SIDEBAR COMPONENT */}
          <aside className="sticky-sidebar">
            <div className="sidebar-group">
              <div className="info-box accent-box">
                <FaShieldAlt className="box-icon" />
                <h3>Risk Mitigation</h3>
                <p>Identify compliance gaps before the auditors do.</p>
                <div className="level-indicator">
                  <div className="level-bar" style={{width: '100%'}}></div>
                </div>
                <small>Compliance Level: Critical</small>
              </div>

              <div className="info-box contact-box">
                <FaChartPie className="box-icon" />
                <h3>Audit Consultation</h3>
                <p>Is your institution ready for its next inspection? Talk to us.</p>
                <div className="side-btns">
                  <a href="tel:+919801066182" className="s-btn call"><FaPhoneAlt /> Call</a>
                  <a href="https://wa.me/919801066182" className="s-btn wa"><FaWhatsapp /> WhatsApp</a>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <Footer />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@800&family=Poppins:wght@300;400;500;600;700&display=swap');

        .blog-wrapper { background: #fff4ea; color: #1e293b; font-family: 'Poppins', sans-serif; }

        /* Hero Styling */
        .blog-header { position: relative; height: 480px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .hero-base { position: absolute; inset: 0; }
        .hero-base img { width: 100%; height: 100%; object-fit: cover; }
        .hero-mask { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.6) 100%); }
        .hero-text-area { position: relative; z-index: 5; text-align: center; color: white; }
        .badge { background: #ff6600; padding: 6px 18px; border-radius: 4px; font-family: 'Orbitron'; font-size: 0.75rem; letter-spacing: 1.5px; margin-bottom: 25px; display: inline-block; }
        .main-title { font-family: 'Orbitron'; font-size: clamp(1.6rem, 5vw, 2.8rem); line-height: 1.2; }
        .accent { color: #ff6600; }
        .meta-info { margin-top: 25px; font-size: 0.9rem; opacity: 0.8; font-weight: 300; }
        .divider { margin: 0 15px; }

        /* Main Content Grid */
        .main-grid { max-width: 1200px; margin: 70px auto; display: grid; grid-template-columns: 1fr 340px; gap: 45px; padding: 0 20px; }
        .article-body { background: #ffffff; padding: 60px; border-radius: 35px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.08); }
        
        .heavy-text { font-size: 1.2rem; line-height: 1.9; color: #334155; margin-bottom: 45px; }
        .first-letter { float: left; font-size: 4.8rem; font-weight: 800; color: #ff6600; line-height: 0.8; margin-right: 12px; font-family: 'Orbitron'; }
        
        .section-h2 { font-family: 'Orbitron'; font-size: 1.4rem; color: #0f172a; margin: 55px 0 25px; border-left: 6px solid #ff6600; padding-left: 18px; }
        .text-p { font-size: 1.1rem; line-height: 1.8; color: #475569; margin-bottom: 30px; }

        /* Checklist Component */
        .audit-checklist { background: #f8fafc; padding: 35px; border-radius: 20px; border: 1px solid #e2e8f0; margin: 40px 0; }
        .audit-checklist h3 { font-family: 'Orbitron'; font-size: 0.9rem; margin-bottom: 25px; color: #1e293b; text-transform: uppercase; letter-spacing: 1px; }
        .check-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .check-item { display: flex; align-items: center; gap: 12px; font-size: 0.9rem; font-weight: 500; color: #64748b; }
        .c-icon { color: #ff6600; font-size: 1.1rem; }

        .img-frame { border-radius: 25px; overflow: hidden; margin: 45px 0; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
        .img-frame img { width: 100%; display: block; }

        /* Video Dark Card */
        .video-card-dark { background: #0f172a; padding: 45px; border-radius: 35px; color: white; margin-top: 65px; }
        .v-icon-top { font-size: 2.5rem; color: #ff6600; margin-bottom: 20px; }
        .v-desc h3 { font-family: 'Orbitron'; font-size: 1.5rem; margin-bottom: 12px; }
        .v-desc p { color: #94a3b8; font-size: 0.95rem; margin-bottom: 35px; }
        .v-container { position: relative; padding-bottom: 56.25%; height: 0; border-radius: 15px; overflow: hidden; }
        .v-container iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }

        /* Sidebar Widgets */
        .sticky-sidebar { position: sticky; top: 110px; height: fit-content; }
        .sidebar-group { display: flex; flex-direction: column; gap: 30px; }
        .info-box { background: white; padding: 35px; border-radius: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
        .box-icon { font-size: 2.8rem; color: #ff6600; margin-bottom: 20px; }
        .info-box h3 { font-family: 'Orbitron'; font-size: 1.1rem; margin-bottom: 15px; }
        .info-box p { font-size: 0.85rem; color: #64748b; line-height: 1.6; }
        
        .level-indicator { background: #f1f5f9; height: 6px; border-radius: 10px; margin: 20px 0 10px; overflow: hidden; }
        .level-bar { background: #ff6600; height: 100%; }
        .accent-box { border-bottom: 6px solid #ff6600; }

        .contact-box { background: #ff6600; color: white; text-align: center; }
        .contact-box h3, .contact-box p { color: white; }
        .contact-box .box-icon { color: white; opacity: 0.9; }
        .side-btns { display: flex; flex-direction: column; gap: 12px; margin-top: 25px; }
        .s-btn { padding: 14px; border-radius: 12px; text-decoration: none; color: white; font-weight: 700; font-size: 0.85rem; display: flex; align-items: center; justify-content: center; gap: 10px; background: rgba(0,0,0,0.15); transition: 0.3s; }
        .s-btn:hover { background: rgba(0,0,0,0.3); transform: translateY(-3px); }

        @media (max-width: 992px) {
          .main-grid { grid-template-columns: 1fr; }
          .article-body { padding: 35px 25px; }
          .check-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}

export default Blog30;