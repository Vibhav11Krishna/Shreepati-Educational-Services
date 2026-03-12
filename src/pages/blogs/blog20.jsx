import React from "react";
import Navbar from "../../mobile/components/Navbar";
import Footer from "../../mobile/components/Footer";
import { 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaRegClock, 
  FaRegCalendarAlt, 
  FaArrowRight, 
  FaUserTie,
  FaShieldAlt,
  FaUsersCog
} from "react-icons/fa";

// Assets
import heroImg from "../../assets/Banner20.jpg";
import staffImg1 from "../../assets/Education3.jpg";
import staffImg2 from "../../assets/Education4.jpg";
import blogSidebar1 from "../../assets/Academic.jpg";
import blogSidebar2 from "../../assets/Admission.png";

function Blog20() {
  return (
    <>
      <Navbar />

      <div className="blog-wrapper">
        {/* HR HERO SECTION */}
        <header className="blog-header">
          <div className="hero-background-container">
            <img src={heroImg} alt="Educational HR Solutions" className="hero-image" />
            <div className="hero-overlay-gradient"></div>
          </div>
          
          <div className="hero-text-content">
            <div className="meta-info-row">
              <span className="meta-item"><FaRegCalendarAlt /> July 12, 2026</span>
              <span className="meta-item"><FaRegClock /> 6 Min Read</span>
            </div>
            <h1 className="main-title">
              Staffing & <span className="accent-text">HR Solutions</span> <br />
              Building Your Core Team
            </h1>
          </div>
        </header>

        {/* MAIN LAYOUT */}
        <div className="blog-layout">
          <main className="blog-body">
            <section className="content-segment">
              <p className="intro-text">
                <span className="first-letter">F</span>aculty and administrative staff are the 
                true backbone of any educational institution. Beyond just a workforce, they 
                embody the institution's culture and academic standards. A robust HR system 
                isn't just about hiring; it’s about ensuring long-term quality, legal 
                compliance, and operational excellence.
              </p>
            </section>

            {/* SECTION 1 - STAFFING */}
            <section className="article-section">
              <h2 className="section-title">Faculty & Administrative Staffing</h2>
              <p className="section-para">
                Identifying the right talent for academic roles requires a deep 
                understanding of regulatory norms (like UGC, AICTE, or local boards). 
                SES helps institutions define precise job descriptions, vet 
                qualifications, and recruit leaders who align with your 
                institutional vision.
              </p>
              
              <div className="hr-features">
                <div className="feature-pill">
                  <FaUserTie /> Specialized Faculty Recruitment
                </div>
                <div className="feature-pill">
                  <FaUsersCog /> Leadership Talent Scouting
                </div>
              </div>

              <div className="content-image-box">
                <img src={staffImg1} alt="Professional Faculty Training" />
              </div>
            </section>

            {/* SECTION 2 - POLICY */}
            <section className="article-section">
              <h2 className="section-title">HR Policy & Compliance Management</h2>
              <p className="section-para">
                Compliance is non-negotiable during inspections and accreditations. 
                We assist in developing structured performance appraisal systems, 
                employee handbooks, and service rules that protect the institution 
                while fostering a positive work environment for educators.
              </p>
              <div className="content-image-box">
                <img src={staffImg2} alt="Administrative Compliance Meeting" />
              </div>
              <div className="compliance-box">
                <FaShieldAlt className="c-icon" />
                <p>We ensure your HR documentation meets the specific requirements for NAAC, NBA, and other regulatory audits.</p>
              </div>
            </section>

            {/* VIDEO SECTION */}
            <section className="video-card">
              <div className="video-info">
                <FaUsersCog className="video-icon-svg" />
                <h3>HR Framework Walkthrough</h3>
                <p>Understand the critical role of HR systems in institutional stability and how to build a compliant staffing model.</p>
              </div>
              <div className="iframe-wrapper">
                <iframe
                  src="https://player.cloudinary.com/embed/?public_id=loans-2_ztgyzn&cloud_name=dqmkivr5i&fluid=true"
                  title="Staffing Support Video"
                  allow="autoplay; fullscreen; encrypted-media"
                  allowFullScreen
                />
              </div>
            </section>

            <section className="conclusion-box">
              <h2 className="section-title">Conclusion</h2>
              <p className="section-para">
                A strong HR system is the bridge between a good college and a 
                great one. SES provides the expertise needed to build a team 
                that stays, grows, and leads your institution toward 
                academic excellence.
              </p>
            </section>
          </main>

          {/* SIDEBAR */}
          <aside className="blog-sidebar">
            <div className="sticky-container">
              <div className="sidebar-card insights">
                <h3 className="sidebar-label">Management Series</h3>
                <div className="insight-links">
                  <a href="/blogs/blog19" className="link-item">
                    <img src={staffImg1} alt="Loans" />
                    <div className="link-text">
                      <h4>Educational Loans</h4>
                      <span>Read More <FaArrowRight /></span>
                    </div>
                  </a>
                  <a href="/blogs/blog18" className="link-item">
                    <img src={blogSidebar1} alt="Visa" />
                    <div className="link-text">
                      <h4>Visa Support</h4>
                      <span>Read More <FaArrowRight /></span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="sidebar-card expert">
                <div className="expert-avatar">
                  <img src={blogSidebar2} alt="HR Consultant" />
                </div>
                <h3>Staffing Desk</h3>
                <p>Looking to hire senior faculty or overhaul your HR policies? Connect with our talent acquisition team.</p>
                <div className="btn-group">
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

        .blog-wrapper { background: #fff4ea; color: #333; font-family: 'Poppins', sans-serif; }

        /* Hero */
        .blog-header { position: relative; height: 480px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .hero-background-container { position: absolute; inset: 0; }
        .hero-image { width: 100%; height: 100%; object-fit: cover; }
        .hero-overlay-gradient { 
            position: absolute; inset: 0; 
            background: linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, #fff4ea 100%); 
        }
        .hero-text-content { position: relative; z-index: 2; text-align: center; color: white; padding: 20px; }
        .main-title { font-family: 'Orbitron', sans-serif; font-size: clamp(1.6rem, 5vw, 2.8rem); font-weight: 900; line-height: 1.2; }
        .accent-text { color: #ff6600; }
        .meta-info-row { display: flex; justify-content: center; gap: 15px; margin-bottom: 15px; }
        .meta-item { background: rgba(255,102,0,0.25); padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; border: 1px solid rgba(255,255,255,0.1); }

        /* Content Grid */
        .blog-layout { 
          max-width: 1200px; margin: -50px auto 0; 
          display: grid; grid-template-columns: 1fr 340px; 
          gap: 30px; padding: 0 20px 80px; 
        }

        .blog-body { background: white; padding: 45px; border-radius: 25px; box-shadow: 0 15px 40px rgba(0,0,0,0.06); }
        .intro-text { font-size: 1.15rem; line-height: 1.8; color: #444; margin-bottom: 30px; text-align: justify; }
        .first-letter { float: left; font-size: 3.5rem; font-weight: 900; color: #ff6600; line-height: 1; margin-right: 12px; font-family: 'Orbitron'; }
        
        .section-para { font-size: 1.1rem; line-height: 1.7; color: #555; margin-bottom: 25px; text-align: justify; }

        .hr-features { display: flex; gap: 15px; flex-wrap: wrap; margin-bottom: 30px; }
        .feature-pill { background: #fff4ea; color: #ff6600; padding: 10px 20px; border-radius: 50px; font-weight: 600; font-size: 0.9rem; display: flex; align-items: center; gap: 10px; border: 1px solid #ff660033; }

        .compliance-box { background: #f8fafc; border-left: 5px solid #ff6600; padding: 20px; border-radius: 10px; display: flex; gap: 15px; align-items: center; margin-top: 20px; }
        .c-icon { font-size: 1.5rem; color: #ff6600; }
        .compliance-box p { margin: 0; font-size: 0.95rem; font-weight: 500; }

        .section-title { font-family: 'Orbitron', sans-serif; font-size: 1.3rem; color: #111; margin: 40px 0 20px; display: flex; align-items: center; gap: 15px; }
        .section-title::after { content: ''; height: 2px; flex: 1; background: #f0f0f0; }

        .content-image-box { margin: 30px 0; border-radius: 15px; overflow: hidden; box-shadow: 0 8px 25px rgba(0,0,0,0.1); }
        .content-image-box img { width: 100%; display: block; }

        .video-card { background: #1e293b; padding: 30px; border-radius: 20px; color: white; margin-top: 40px; }
        .video-icon-svg { font-size: 2.5rem; color: #ff6600; margin-bottom: 15px; }
        .video-info h3 { font-family: 'Orbitron', sans-serif; color: #ff6600; font-size: 1.2rem; margin-bottom: 10px; }
        .iframe-wrapper { position: relative; padding-bottom: 56.25%; height: 0; border-radius: 10px; overflow: hidden; margin-top: 20px; }
        .iframe-wrapper iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }

        /* Sidebar */
        .blog-sidebar { position: relative; }
        .sticky-container { position: sticky; top: 100px; display: flex; flex-direction: column; gap: 25px; }
        .sidebar-card { background: white; padding: 25px; border-radius: 20px; border: 1px solid #eee; box-shadow: 0 4px 15px rgba(0,0,0,0.03); }
        .sidebar-label { font-family: 'Orbitron'; font-size: 0.85rem; color: #ff6600; margin-bottom: 15px; text-transform: uppercase; }
        
        .insight-links { display: flex; flex-direction: column; gap: 15px; }
        .link-item { display: flex; gap: 12px; text-decoration: none; color: inherit; align-items: center; transition: 0.3s; }
        .link-item img { width: 50px; height: 50px; border-radius: 6px; object-fit: cover; }
        .link-text h4 { font-size: 0.8rem; margin: 0; font-weight: 700; }
        .link-text span { font-size: 0.65rem; color: #ff6600; display: flex; align-items: center; gap: 4px; font-weight: 600; }
        
        .expert { text-align: center; }
        .expert-avatar { width: 70px; height: 70px; margin: 0 auto 12px; border: 2px solid #ff6600; border-radius: 50%; padding: 3px; }
        .expert-avatar img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
        .btn { padding: 10px; border-radius: 50px; text-decoration: none; color: white; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 0.85rem; margin-top: 10px; }
        .btn.call { background: #ff6600; }
        .btn.wa { background: #25d366; }

        @media (max-width: 992px) {
          .blog-layout { grid-template-columns: 1fr; }
          .blog-body { padding: 30px 20px; }
        }
      `}</style>
    </>
  );
}

export default Blog20;