import React from "react";
import Navbar from "../../mobile/components/Navbar";
import Footer from "../../mobile/components/Footer";
import { 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaRegClock, 
  FaRegCalendarAlt, 
  FaArrowRight, 
  FaAward, 
  FaCheckCircle 
} from "react-icons/fa";

// Assets
import heroImg from "../../assets/Banner6.jpg";
import collaborationImg from "../../assets/Affiliation5.jpg";
import researchImg from "../../assets/Affiliation6.jpg";
import blog1Img from "../../assets/Academic.jpg";
import blog2Img from "../../assets/Admission.png";
import blog3Img from "../../assets/Admission.png";

function Blog6() {
  return (
    <>
      <Navbar />

      <div className="blog-wrapper">
        {/* PREMIUM HERO SECTION */}
        <header className="blog-header">
          <div className="hero-background-container">
            <img src={heroImg} alt="University Affiliation Benefits" className="hero-image" />
            <div className="hero-overlay-gradient"></div>
          </div>
          
          <div className="hero-text-content">
            <div className="meta-info-row">
              <span className="meta-item"><FaRegCalendarAlt /> March 20, 2026</span>
              <span className="meta-item"><FaRegClock /> 4 Min Read</span>
            </div>
            <h1 className="main-title">
              The Strategic <span className="accent-text">Benefits of Affiliation</span> <br />
              for Your Institution
            </h1>
          </div>
        </header>

        {/* MAIN LAYOUT */}
        <div className="blog-layout">
          <main className="blog-body">
            <section className="content-segment">
              <p className="intro-text">
                <span className="first-letter">A</span>ffiliation is not merely a legal requirement; it is the 
                foundation of your institution’s academic legitimacy. By aligning with recognized boards 
                or universities, your institution secures the credibility needed to foster long-term 
                trust with students and parents.
              </p>
            </section>

            {/* SECTION 1 - KEY BENEFITS */}
            <section className="article-section">
              <h2 className="section-title">Key Institutional Benefits</h2>
              <p className="section-para">
                An affiliated institution gains access to a ecosystem of standardized quality and 
                professional recognition:
              </p>
              
              <ul className="benefit-checklist">
                <li><FaCheckCircle className="check-icon" /> <strong>Standardized Curriculum:</strong> Ensures consistency in learning outcomes and academic rigor.</li>
                <li><FaCheckCircle className="check-icon" /> <strong>Enhanced Enrollment:</strong> High-quality students and parents prioritize recognized institutions.</li>
                <li><FaCheckCircle className="check-icon" /> <strong>Faculty Development:</strong> Direct access to board-led training, workshops, and partnerships.</li>
                <li><FaCheckCircle className="check-icon" /> <strong>Operational Stability:</strong> Regulatory compliance protects the institution from legal hurdles.</li>
              </ul>

              <div className="content-image-box">
                <img src={collaborationImg} alt="Academic Growth" />
              </div>
            </section>

            {/* SECTION 2 - SES SUPPORT */}
            <section className="article-section">
              <h2 className="section-title">SES Strategic Support</h2>
              <p className="section-para">
                SES provides structured guidance to help you unlock these benefits. From initial 
                feasibility studies to documentation and final approval, we ensure the 
                process is tailored to your specific goals. For instance, institutions 
                partnering with SES often see a marked improvement in enrollment within the 
                first six months post-affiliation.
              </p>
              <div className="content-image-box">
                <img src={researchImg} alt="Consultancy Support" />
              </div>
            </section>

            {/* VIDEO SECTION */}
            <section className="video-card">
              <div className="video-info">
                <FaAward className="award-icon" />
                <h3>The Impact of Recognition</h3>
                <p>Understand how affiliation transforms your college's reputation and student intake.</p>
              </div>
              <div className="iframe-wrapper">
                <iframe
                  src="https://player.cloudinary.com/embed/?public_id=benefits-of-boards-university-affiliation_rdnsxo&cloud_name=dqmkivr5i&fluid=true"
                  title="Affiliation Benefits Video"
                  allow="autoplay; fullscreen; encrypted-media"
                  allowFullScreen
                />
              </div>
            </section>

            <section className="conclusion-box">
              <h2 className="section-title">Conclusion</h2>
              <p className="section-para">
                Securing affiliation is a vital step toward academic excellence and operational 
                longevity. With professional support from SES, your institution can navigate 
                the complexities of approval and immediately begin reaping the rewards of 
                global recognition.
              </p>
            </section>
          </main>

          {/* STICKY SIDEBAR */}
          <aside className="blog-sidebar">
            <div className="sticky-container">
              <div className="sidebar-card insights">
                <h3 className="sidebar-label">Related Insights</h3>
                <div className="insight-links">
                 
                  <a href="/blogs/blog2" className="link-item">
                    <img src={blog2Img} alt="Blog 2" />
                    <div className="link-text">
                      <h4>Faculty Skills</h4>
                      <span>Read More <FaArrowRight /></span>
                    </div>
                  </a>
                  <a href="/blogs/blog3" className="link-item">
                    <img src={blog3Img} alt="Blog 3" />
                    <div className="link-text">
                      <h4>Reputation Growth</h4>
                      <span>Read More <FaArrowRight /></span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="sidebar-card expert">
                <div className="expert-avatar">
                  <img src={blog1Img} alt="SES Expert" />
                </div>
                <h3>Expert Guidance</h3>
                <p>Transform your institution with professional board affiliation.</p>
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

        /* Layout */
        .blog-layout { 
          max-width: 1200px; 
          margin: -50px auto 0; 
          display: grid; 
          grid-template-columns: 1fr 340px; 
          gap: 30px; 
          padding: 0 20px 80px; 
        }

        /* Content Body */
        .blog-body { background: white; padding: 45px; border-radius: 25px; box-shadow: 0 15px 40px rgba(0,0,0,0.06); }
        .intro-text { font-size: 1.15rem; line-height: 1.8; color: #444; margin-bottom: 30px; text-align: justify; }
        .first-letter { float: left; font-size: 3.5rem; font-weight: 900; color: #ff6600; line-height: 1; margin-right: 12px; font-family: 'Orbitron'; }
        
        .section-para { font-size: 1.1rem; line-height: 1.7; color: #555; margin-bottom: 25px; text-align: justify; }

        .benefit-checklist { list-style: none; padding: 0; margin: 30px 0; display: flex; flex-direction: column; gap: 15px; }
        .benefit-checklist li { display: flex; gap: 15px; font-size: 1rem; line-height: 1.6; color: #333; }
        .check-icon { color: #25d366; font-size: 1.2rem; margin-top: 4px; flex-shrink: 0; }

        .section-title { font-family: 'Orbitron', sans-serif; font-size: 1.4rem; color: #111; margin: 40px 0 20px; display: flex; align-items: center; gap: 15px; }
        .section-title::after { content: ''; height: 2px; flex: 1; background: #f0f0f0; }

        .content-image-box { margin: 30px 0; border-radius: 15px; overflow: hidden; box-shadow: 0 8px 25px rgba(0,0,0,0.1); }
        .content-image-box img { width: 100%; display: block; }

        .video-card { background: #111; padding: 30px; border-radius: 20px; color: white; margin-top: 40px; }
        .award-icon { font-size: 2.5rem; color: #ffb400; margin-bottom: 10px; }
        .video-info h3 { font-family: 'Orbitron', sans-serif; color: #ff6600; font-size: 1.2rem; margin: 10px 0; }
        .iframe-wrapper { position: relative; padding-bottom: 56.25%; height: 0; border-radius: 10px; overflow: hidden; margin-top: 20px; }
        .iframe-wrapper iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }

        .conclusion-box { margin-top: 40px; padding-top: 30px; border-top: 1px solid #eee; }

        /* Sidebar Styling */
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
        .btn-group { display: flex; flex-direction: column; gap: 8px; margin-top: 15px; }
        .btn { padding: 10px; border-radius: 50px; text-decoration: none; color: white; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 0.85rem; }
        .btn.call { background: #ff6600; }
        .btn.wa { background: #25d366; }

        @media (max-width: 992px) {
          .blog-layout { grid-template-columns: 1fr; }
          .sticky-container { position: static; }
          .blog-body { padding: 30px 20px; }
        }
      `}</style>
    </>
  );
}

export default Blog6;