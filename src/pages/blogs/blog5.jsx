import React from "react";
import Navbar from "../../mobile/components/Navbar";
import Footer from "../../mobile/components/Footer";
import { 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaRegClock, 
  FaRegCalendarAlt, 
  FaArrowRight, 
  FaExclamationTriangle, 
  FaShieldAlt 
} from "react-icons/fa";

// Assets
import heroImg from "../../assets/Banner5.jpg";
import collaborationImg from "../../assets/Affiliation3.jpg";
import researchImg from "../../assets/Affiliation4.jpg";
import blog1Img from "../../assets/Academic.jpg";
import blog2Img from "../../assets/Admission.png";
import blog3Img from "../../assets/Admission.png";

function Blog5() {
  return (
    <>
      <Navbar />

      <div className="blog-wrapper">
        {/* PREMIUM HERO SECTION */}
        <header className="blog-header">
          <div className="hero-background-container">
            <img src={heroImg} alt="Affiliation Mistakes" className="hero-image" />
            <div className="hero-overlay-gradient"></div>
          </div>
          
          <div className="hero-text-content">
            <div className="meta-info-row">
              <span className="meta-item"><FaRegCalendarAlt /> March 18, 2026</span>
              <span className="meta-item"><FaRegClock /> 4 Min Read</span>
            </div>
            <h1 className="main-title">
              Common <span className="accent-text">Affiliation Mistakes</span> <br />
              & How to Avoid Them
            </h1>
          </div>
        </header>

        {/* MAIN LAYOUT */}
        <div className="blog-layout">
          <main className="blog-body">
            <section className="content-segment">
              <p className="intro-text">
                <span className="first-letter">M</span>any institutions face significant delays or outright rejections 
                due to easily avoidable errors. From documentation gaps to infrastructure mismatches, 
                the path to recognition is often hindered by a lack of specialized knowledge.
              </p>

              <div className="warning-box">
                <FaExclamationTriangle className="w-icon" />
                <p>Even small oversights, like missing accreditation certificates or outdated staff records, can lead to months of operational downtime.</p>
              </div>
            </section>

            {/* SECTION 1 */}
            <section className="article-section">
              <h2 className="section-title">How SES Prevents Errors</h2>
              <p className="section-para">
                SES acts as a strategic shield for your institution. By performing rigorous 
                pre-inspection audits, we ensure your faculty qualifications and building 
                norms align perfectly with board requirements. 
              </p>
              <div className="impact-grid">
                <div className="impact-card">
                  <FaShieldAlt className="card-icon" />
                  <h4>Compliance Audit</h4>
                  <p>Comprehensive review of all legal and academic paperwork.</p>
                </div>
                <div className="impact-card">
                  <FaShieldAlt className="card-icon" />
                  <h4>Infrastructure Check</h4>
                  <p>Verifying land and facility norms before officials arrive.</p>
                </div>
              </div>
              <div className="content-image-box">
                <img src={collaborationImg} alt="Professional Review" />
              </div>
            </section>

            {/* SECTION 2 */}
            <section className="article-section">
              <h2 className="section-title">Long-Term Impact</h2>
              <p className="section-para">
                Avoiding initial errors ensures faster approval and builds stronger credibility 
                with parents and students alike. Institutions save significant financial 
                resources by getting it right the first time.
              </p>
              <div className="content-image-box">
                <img src={researchImg} alt="Strategic Growth" />
              </div>
            </section>

            {/* VIDEO SECTION */}
            <section className="video-card">
              <div className="video-info">
                <h3>Visual Expert Breakdown</h3>
                <p>Our lead consultants explain the critical pitfalls in the affiliation process.</p>
              </div>
              <div className="iframe-wrapper">
                <iframe
                  src="https://player.cloudinary.com/embed/?public_id=common-mistakes-in-affliation_yz3fxp&cloud_name=dqmkivr5i&fluid=true"
                  title="Affiliation Mistakes Video"
                  allow="autoplay; fullscreen; encrypted-media"
                  allowFullScreen
                />
              </div>
            </section>

            <section className="conclusion-box">
              <h2 className="section-title">Conclusion</h2>
              <p className="section-para">
                Professional guidance is the bridge between institutional ambition and legal 
                approval. SES ensures you navigate complex requirements efficiently, supporting 
                your long-term academic stability.
              </p>
            </section>
          </main>

          {/* STICKY SIDEBAR */}
          <aside className="blog-sidebar">
            <div className="sticky-container">
              {/* Insights Card */}
              <div className="sidebar-card insights">
                <h3 className="sidebar-label">Related Insights</h3>
                <div className="insight-links">
                  <a href="/blogs/blog2" className="link-item">
                    <img src={blog2Img} alt="Blog 2" />
                    <div className="link-text">
                      <h4>Faculty Benefits</h4>
                      <span>Read More <FaArrowRight /></span>
                    </div>
                  </a>
                  <a href="/blogs/blog3" className="link-item">
                    <img src={blog3Img} alt="Blog 3" />
                    <div className="link-text">
                      <h4>Institutional Growth</h4>
                      <span>Read More <FaArrowRight /></span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Expert Contact Card */}
              <div className="sidebar-card expert">
                <div className="expert-avatar">
                  <img src={blog1Img} alt="SES Expert" />
                </div>
                <h3>Talk to an Expert</h3>
                <p>Avoid costly mistakes with a professional compliance audit.</p>
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
            background: linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, #fff4ea 100%); 
        }
        .hero-text-content { position: relative; z-index: 2; text-align: center; color: white; padding: 20px; }
        .main-title { font-family: 'Orbitron', sans-serif; font-size: clamp(1.8rem, 5vw, 3rem); font-weight: 900; line-height: 1.2; }
        .accent-text { color: #ff6600; }
        .meta-info-row { display: flex; justify-content: center; gap: 15px; margin-bottom: 15px; }
        .meta-item { background: rgba(255,102,0,0.25); padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; border: 1px solid rgba(255,255,255,0.1); }

        /* Layout & Sticky Sidebar Logic */
        .blog-layout { 
          max-width: 1200px; 
          margin: -50px auto 0; 
          display: grid; 
          grid-template-columns: 1fr 340px; 
          gap: 30px; 
          padding: 0 20px 80px; 
        }

        .blog-sidebar { position: relative; }
        .sticky-container {
          position: -webkit-sticky;
          position: sticky;
          top: 100px;
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        /* Content Body */
        .blog-body { background: white; padding: 45px; border-radius: 25px; box-shadow: 0 15px 40px rgba(0,0,0,0.06); }
        .intro-text { font-size: 1.15rem; line-height: 1.8; color: #444; margin-bottom: 30px; text-align: justify; }
        .first-letter { float: left; font-size: 3.5rem; font-weight: 900; color: #ff6600; line-height: 1; margin-right: 12px; font-family: 'Orbitron'; }
        
        .section-para { font-size: 1.1rem; line-height: 1.7; color: #555; margin-bottom: 25px; text-align: justify; }

        .warning-box { margin: 30px 0; padding: 25px; background: #fff1f1; border-radius: 15px; border-left: 5px solid #d32f2f; display: flex; gap: 15px; align-items: center; }
        .w-icon { font-size: 2rem; color: #d32f2f; flex-shrink: 0; }
        .warning-box p { margin: 0; font-weight: 600; color: #333; font-size: 0.95rem; }

        .impact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px; }
        .impact-card { background: #fdf8f4; padding: 20px; border-radius: 15px; border-bottom: 3px solid #ff6600; }
        .card-icon { color: #ff6600; font-size: 1.5rem; margin-bottom: 10px; }
        .impact-card h4 { margin: 0 0 8px; font-weight: 700; }
        .impact-card p { font-size: 0.85rem; margin: 0; color: #666; }

        .section-title { font-family: 'Orbitron', sans-serif; font-size: 1.4rem; color: #111; margin: 40px 0 20px; display: flex; align-items: center; gap: 15px; }
        .section-title::after { content: ''; height: 2px; flex: 1; background: #f0f0f0; }

        .content-image-box { margin: 30px 0; border-radius: 15px; overflow: hidden; box-shadow: 0 8px 25px rgba(0,0,0,0.1); }
        .content-image-box img { width: 100%; display: block; }

        .video-card { background: #111; padding: 30px; border-radius: 20px; color: white; margin-top: 40px; }
        .video-info h3 { font-family: 'Orbitron', sans-serif; color: #ff6600; font-size: 1.2rem; }
        .iframe-wrapper { position: relative; padding-bottom: 56.25%; height: 0; border-radius: 10px; overflow: hidden; margin-top: 15px; }
        .iframe-wrapper iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }

        .conclusion-box { margin-top: 40px; padding-top: 30px; border-top: 1px solid #eee; }

        /* Sidebar Styling */
        .sidebar-card { background: white; padding: 25px; border-radius: 20px; border: 1px solid #eee; box-shadow: 0 4px 15px rgba(0,0,0,0.03); }
        .sidebar-label { font-family: 'Orbitron'; font-size: 0.85rem; color: #ff6600; margin-bottom: 15px; text-transform: uppercase; }
        
        .insight-links { display: flex; flex-direction: column; gap: 15px; }
        .link-item { display: flex; gap: 12px; text-decoration: none; color: inherit; align-items: center; transition: 0.3s; }
        .link-item img { width: 50px; height: 50px; border-radius: 6px; object-fit: cover; }
        .link-text h4 { font-size: 0.8rem; margin: 0; font-weight: 700; }
        .link-text span { font-size: 0.65rem; color: #ff6600; display: flex; align-items: center; gap: 4px; font-weight: 600; }
        .link-item:hover { transform: translateX(5px); }

        .expert { text-align: center; }
        .expert-avatar { width: 70px; height: 70px; margin: 0 auto 12px; border: 2px solid #ff6600; border-radius: 50%; padding: 3px; }
        .expert-avatar img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
        .expert h3 { font-size: 1.1rem; margin-bottom: 5px; }
        .expert p { font-size: 0.8rem; color: #666; margin-bottom: 15px; }
        .btn-group { display: flex; flex-direction: column; gap: 8px; }
        .btn { padding: 10px; border-radius: 50px; text-decoration: none; color: white; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 0.85rem; transition: 0.2s; }
        .btn.call { background: #ff6600; }
        .btn.wa { background: #25d366; }

        @media (max-width: 992px) {
          .blog-layout { grid-template-columns: 1fr; }
          .sticky-container { position: static; }
          .impact-grid { grid-template-columns: 1fr; }
          .blog-body { padding: 30px 20px; }
        }
      `}</style>
    </>
  );
}

export default Blog5;