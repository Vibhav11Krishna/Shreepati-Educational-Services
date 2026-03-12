import React from "react";
import Navbar from "../../mobile/components/Navbar";
import Footer from "../../mobile/components/Footer";
import { 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaDatabase, 
  FaUserShield, 
  FaFolderOpen, 
  FaSearch, 
  FaRegClock, 
  FaRegCalendarAlt 
} from "react-icons/fa";

// Assets
import heroImg from "../../assets/Banner28.jpg";
import recordImg1 from "../../assets/Document1.jpg";
import recordImg2 from "../../assets/Document2.jpg";

function Blog28() {
  return (
    <>
      <Navbar />

      <div className="blog-wrapper">
        {/* DATA-CENTRIC HERO */}
        <header className="blog-header">
          <div className="hero-bg">
            <img src={heroImg} alt="Efficient Record Management" />
            <div className="hero-overlay"></div>
          </div>
          
          <div className="hero-content">
            <div className="tag">DATA SYSTEMS</div>
            <h1 className="title">
              Efficient Record <br />
              <span className="highlight">Management Systems</span>
            </h1>
            <div className="meta">
              <span><FaRegCalendarAlt /> Nov 12, 2026</span>
              <span className="sep">|</span>
              <span><FaRegClock /> 5 Min Read</span>
            </div>
          </div>
        </header>

        {/* MAIN CONTENT AREA */}
        <div className="blog-container">
          <main className="content-main">
            <section className="intro">
              <p className="lead-text">
                <span className="drop-cap">E</span>ducational institutions generate 
                vast volumes of academic, administrative, and regulatory data. 
                Efficient record management is no longer optional—it is the 
                backbone of institutional accuracy, security, and long-term 
                operational success.
              </p>
            </section>

            {/* SECTION 1 - ACADEMIC RECORDS */}
            <section className="article-part">
              <h2 className="sub-heading">Academic & Administrative Records</h2>
              <p className="para">
                From student admissions and examination data to staff payroll 
                and institutional charters, SES helps organize all records 
                systematically. A structured approach reduces manual errors, 
                eliminates redundant paperwork, and ensures that critical 
                documents are ready for audit at a moment's notice.
              </p>
              
              <div className="features-grid">
                <div className="f-card">
                  <FaFolderOpen className="f-icon" />
                  <h4>Centralized Filing</h4>
                  <p>One source of truth for all institutional data.</p>
                </div>
                <div className="f-card">
                  <FaSearch className="f-icon" />
                  <h4>Instant Retrieval</h4>
                  <p>Locate records in seconds, not hours.</p>
                </div>
              </div>

              <div className="image-frame">
                <img src={recordImg1} alt="Structured Documentation" />
              </div>
            </section>

            {/* SECTION 2 - DATA SECURITY */}
            <section className="article-part">
              <h2 className="sub-heading">Secure & Organized Data Handling</h2>
              <p className="para">
                Data security is the cornerstone of trust. Proper record 
                management ensures that sensitive information remains 
                confidential while complying with privacy laws. SES guides 
                institutions in implementing safe storage practices, role-based 
                access, and encrypted digital archives.
              </p>
              <div className="image-frame">
                <img src={recordImg2} alt="Secure Data Storage" />
              </div>
            </section>

            {/* VIDEO SECTION */}
            <section className="video-section">
              <div className="v-info">
                <FaDatabase className="v-ico" />
                <h3>Digital Data Transformation</h3>
                <p>Understanding the flow of data within a modern educational ecosystem.</p>
              </div>
              <div className="video-box">
                <iframe
                  src="https://player.cloudinary.com/embed/?public_id=DATA-1_cgmtcj&cloud_name=dqmkivr5i&fluid=true"
                  title="Record Management Explanation"
                  allow="autoplay; fullscreen; encrypted-media"
                  allowFullScreen
                />
              </div>
            </section>

            <section className="summary">
              <h2 className="sub-heading">Conclusion</h2>
              <p className="para">
                Efficient record management strengthens every institutional 
                touchpoint. By partnering with SES, institutions can transition 
                from chaotic filing to precise, secure, and well-organized 
                digital data systems.
              </p>
            </section>
          </main>

          {/* SIDEBAR */}
          <aside className="sidebar">
            <div className="sticky-box">
              <div className="card security-check">
                <FaUserShield className="card-icon" />
                <h3>Audit Readiness</h3>
                <p>Is your data ready for the next regulatory audit?</p>
                <ul className="check-list">
                  <li>Digital Backups</li>
                  <li>Access Controls</li>
                  <li>SOP Compliance</li>
                </ul>
              </div>

              <div className="card cta-sidebar">
                <h3>System Setup</h3>
                <p>Need a custom ERP or record management strategy?</p>
                <div className="actions">
                  <a href="tel:+919801066182" className="btn call"><FaPhoneAlt /> Call</a>
                  <a href="https://wa.me/919801066182" className="btn wa"><FaWhatsapp /> WhatsApp</a>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <Footer />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@800&family=Poppins:wght@300;400;600;700&display=swap');

        .blog-wrapper { background: #fff4ea; color: #2d3748; font-family: 'Poppins', sans-serif; }

        /* Hero */
        .blog-header { position: relative; height: 450px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .hero-bg { position: absolute; inset: 0; }
        .hero-bg img { width: 100%; height: 100%; object-fit: cover; }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.4)); }
        .hero-content { position: relative; z-index: 2; text-align: center; color: white; }
        .tag { background: #ff6600; display: inline-block; padding: 4px 12px; border-radius: 4px; font-family: 'Orbitron'; font-size: 0.7rem; margin-bottom: 15px; }
        .title { font-family: 'Orbitron'; font-size: clamp(1.5rem, 5vw, 2.8rem); line-height: 1.2; }
        .highlight { color: #ff6600; }
        .meta { margin-top: 20px; font-size: 0.85rem; opacity: 0.8; }
        .sep { margin: 0 10px; }

        /* Layout */
        .blog-container { max-width: 1200px; margin: 60px auto; display: grid; grid-template-columns: 1fr 340px; gap: 40px; padding: 0 20px; }
        .content-main { background: white; padding: 60px; border-radius: 30px; box-shadow: 0 20px 60px rgba(0,0,0,0.05); }
        .lead-text { font-size: 1.25rem; line-height: 2; color: #4a5568; margin-bottom: 40px; }
        .drop-cap { float: left; font-size: 4.5rem; line-height: 0.8; font-weight: 800; color: #ff6600; margin-right: 10px; font-family: 'Orbitron'; }

        .sub-heading { font-family: 'Orbitron'; font-size: 1.5rem; margin: 50px 0 25px; color: #1a202c; border-left: 5px solid #ff6600; padding-left: 15px; }
        .para { font-size: 1.05rem; line-height: 1.8; color: #555; margin-bottom: 25px; }

        /* Feature Cards */
        .features-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 40px 0; }
        .f-card { background: #fef8f4; padding: 30px; border-radius: 20px; text-align: center; border: 1px solid #ffe8d6; }
        .f-icon { font-size: 2rem; color: #ff6600; margin-bottom: 15px; }
        .f-card h4 { font-family: 'Orbitron'; font-size: 0.9rem; margin-bottom: 10px; }
        .f-card p { font-size: 0.8rem; opacity: 0.8; }

        .image-frame { border-radius: 25px; overflow: hidden; margin: 40px 0; box-shadow: 0 15px 40px rgba(0,0,0,0.1); }
        .image-frame img { width: 100%; display: block; }

        /* Video */
        .video-section { background: #1a202c; padding: 40px; border-radius: 30px; color: white; margin-top: 60px; }
        .v-ico { font-size: 2.5rem; color: #ffb400; margin-bottom: 20px; }
        .v-info h3 { font-family: 'Orbitron'; font-size: 1.4rem; margin-bottom: 10px; }
        .v-info p { color: #94a3b8; font-size: 0.9rem; margin-bottom: 30px; }
        .video-box { position: relative; padding-bottom: 56.25%; height: 0; border-radius: 15px; overflow: hidden; }
        .video-box iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }

        /* Sidebar */
        .sticky-box { position: sticky; top: 100px; display: flex; flex-direction: column; gap: 30px; }
        .card { background: white; padding: 30px; border-radius: 25px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border: 1px solid #edf2f7; }
        .card-icon { font-size: 2.5rem; color: #ff6600; margin-bottom: 20px; }
        .card h3 { font-family: 'Orbitron'; font-size: 1.1rem; margin-bottom: 15px; }
        .check-list { list-style: none; padding: 0; margin: 15px 0; }
        .check-list li { font-size: 0.85rem; padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; }
        
        .cta-sidebar { background: #ff6600; color: white; border: none; text-align: center; }
        .actions { display: flex; gap: 10px; margin-top: 20px; }
        .btn { flex: 1; padding: 12px; border-radius: 10px; text-decoration: none; color: white; font-weight: 700; font-size: 0.8rem; display: flex; align-items: center; justify-content: center; gap: 8px; background: rgba(0,0,0,0.2); transition: 0.3s; }
        .btn:hover { background: rgba(0,0,0,0.4); }

        @media (max-width: 992px) {
          .blog-container { grid-template-columns: 1fr; }
          .content-main { padding: 30px 20px; }
          .features-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}

export default Blog28;