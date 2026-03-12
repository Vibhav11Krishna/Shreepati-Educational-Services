import React from "react";
import Navbar from "../../mobile/components/Navbar";
import Footer from "../../mobile/components/Footer";
// Icons
import { 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaRegClock, 
  FaRegCalendarAlt, 
  FaQuoteLeft, 
  FaAward,
  FaChartLine,
  FaShieldAlt,
  FaArrowRight
} from "react-icons/fa";

// Assets
import heroImg from "../../assets/Banner3.jpg";
import collaborationImg from "../../assets/Collaboration5.jpg";
import researchImg from "../../assets/Collaboration6.jpg";
import blog1Img from "../../assets/Academic.jpg"; // Asset for Blog 1 link
import blog2Img from "../../assets/Banner2.jpg";  // Asset for Blog 2 link
import expertImg from "../../assets/Academic.jpg"; // Consultant avatar for sidebar

function Blog3() {
  return (
    <>
      <Navbar />

      <div className="blog-wrapper">
        {/* PREMIUM HERO SECTION */}
        <header className="blog-header">
          <div className="hero-background-container">
            <img src={heroImg} alt="Regulatory Compliance" className="hero-image" />
            <div className="hero-overlay-gradient"></div>
          </div>
          
          <div className="hero-text-content">
            <div className="meta-info-row">
              <span className="meta-item"><FaRegCalendarAlt /> March 12, 2026</span>
              <span className="meta-item"><FaRegClock /> 6 Min Read</span>
            </div>
            <h1 className="main-title">
              Regulatory Compliance <br />
              <span className="accent-text">& Success Stories</span>
            </h1>
          </div>
        </header>

        {/* CONTENT LAYOUT */}
        <div className="blog-layout">
          <main className="blog-body">
            {/* INTRO */}
            <p className="intro-text">
              <span className="first-letter">C</span>ollaborations guided by SES have helped institutions achieve
              global recognition, operational stability, and improved academic outcomes.
              Successful partnerships create long-term benefits for faculty,
              students, and management alike, turning regulatory hurdles into competitive advantages.
            </p>

            <div className="inspirational-quote">
              <FaQuoteLeft className="q-icon" />
              <p>Compliance is not a barrier; it is the foundation upon which institutional excellence and trust are built.</p>
            </div>

            {/* SECTION 1 */}
            <section className="article-section">
              <h2 className="section-title">Institutional Growth Framework</h2>
              <p>
                SES-supported collaborations strengthen the very core of an academy. By navigating 
                complex regulatory landscapes, we enable:
              </p>
              
              <div className="outcome-grid">
                <div className="outcome-card">
                    <FaAward className="outcome-icon" />
                    <h4>Branding</h4>
                    <p>Enhanced institutional prestige.</p>
                </div>
                <div className="outcome-card">
                    <FaChartLine className="outcome-icon" />
                    <h4>Efficiency</h4>
                    <p>Improved student admissions.</p>
                </div>
                <div className="outcome-card">
                    <FaShieldAlt className="outcome-icon" />
                    <h4>Stability</h4>
                    <p>Compliance and operational safety.</p>
                </div>
              </div>
              
              <div className="content-image-box">
                <img src={collaborationImg} alt="Growth through partnership" />
              </div>
            </section>

            {/* SECTION 2 */}
            <section className="article-section">
              <h2 className="section-title">Sustaining Long-Term Relationships</h2>
              <p>
                Collaboration is not just about signing agreements; it’s about ongoing
                support and measurable outcomes. SES ensures that partnerships
                evolve into lasting academic relationships that contribute to
                continuous institutional evolution.
              </p>
              <div className="content-image-box">
                <img src={researchImg} alt="Long-term academic support" />
              </div>
            </section>

            {/* VIDEO BOX */}
            <section className="video-card">
              <div className="video-info">
                <h3>Success Case Studies</h3>
                <p>Hear how SES-guided institutions achieved operational stability and recognition.</p>
              </div>
              <div className="iframe-wrapper">
                <iframe
                  src="https://player.cloudinary.com/embed/?public_id=collaborations-successful-stories_gww0gt&cloud_name=dqmkivr5i&fluid=true"
                  title="Success Stories Video"
                  allow="autoplay; fullscreen; encrypted-media"
                  allowFullScreen
                />
              </div>
            </section>

            {/* CONCLUSION */}
            <section className="conclusion-box">
                <h2 className="section-title">Conclusion</h2>
                <p>
                    SES-guided collaborations create measurable institutional impact.
                    Through structured guidance, clear documentation, and continuous
                    support, partnerships become long-term assets for academic
                    excellence and regulatory peace of mind. Investing in compliance 
                    today ensures the security and reputation of your institution for 
                    decades to come.
                </p>
            </section>
          </main>

          {/* STICKY SIDEBAR */}
          <aside className="blog-sidebar">
            {/* LATEST INSIGHTS IN SIDEBAR */}
            <div className="sidebar-insights-card">
                <h3 className="sidebar-title">Latest Insights</h3>
                <div className="sidebar-insight-list">
                    <a href="/blogs/blog1" className="mini-insight">
                        <img src={blog1Img} alt="Benefits of Collaboration" />
                        <div>
                            <h4>Collaboration Benefits</h4>
                            <span>Read More <FaArrowRight /></span>
                        </div>
                    </a>
                    <a href="/blogs/blog2" className="mini-insight">
                        <img src={blog2Img} alt="Building Success" />
                        <div>
                            <h4>Building Success</h4>
                            <span>Read More <FaArrowRight /></span>
                        </div>
                    </a>
                </div>
            </div>

            <div className="sidebar-contact-card">
              <div className="avatar-box">
                <img src={expertImg} alt="SES Expert" />
              </div>
              <h3>Ensure Compliance</h3>
              <p>Get professional advice on institutional growth and regulatory safety.</p>
              <div className="sidebar-actions">
                <a href="tel:+919801066182" className="s-btn call"><FaPhoneAlt /> Call Now</a>
                <a href="https://wa.me/919801066182" className="s-btn wa"><FaWhatsapp /> WhatsApp</a>
              </div>
            </div>
          </aside>
        </div>

        <Footer />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Poppins:wght@300;400;600;700&display=swap');

        .blog-wrapper { background: #fff4ea; color: #333; font-family: 'Poppins', sans-serif; }

        .blog-header { position: relative; height: 500px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .hero-background-container { position: absolute; inset: 0; z-index: 1; }
        .hero-image { width: 100%; height: 100%; object-fit: cover; }
        .hero-overlay-gradient { 
            position: absolute; inset: 0; 
            background: linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.4), #fff4ea); 
        }

        .hero-text-content { position: relative; z-index: 2; text-align: center; color: white; padding: 20px; }
        .meta-info-row { display: flex; justify-content: center; gap: 20px; margin-bottom: 20px; font-size: 0.85rem; font-weight: 600; }
        .meta-item { background: rgba(255,102,0,0.2); padding: 5px 15px; border-radius: 50px; backdrop-filter: blur(5px); border: 1px solid rgba(255,255,255,0.2); }
        
        .main-title { font-family: 'Orbitron', sans-serif; font-size: clamp(2rem, 8vw, 3.5rem); font-weight: 900; line-height: 1.2; }
        .accent-text { color: #ff6600; }

        .blog-layout { max-width: 1200px; margin: -60px auto 0; display: grid; grid-template-columns: 1fr 340px; gap: 40px; padding: 0 20px 100px; position: relative; z-index: 10; }

        .blog-body { background: white; padding: 50px; border-radius: 30px; box-shadow: 0 20px 50px rgba(0,0,0,0.05); }

        .intro-text { font-size: 1.2rem; line-height: 1.8; color: #444; margin-bottom: 40px; text-align: justify; }
        .first-letter { float: left; font-size: 4rem; font-weight: 900; color: #ff6600; line-height: 1; margin-right: 10px; font-family: 'Orbitron'; }

        .inspirational-quote { margin: 40px 0; padding: 30px; background: #fff4ea; border-radius: 20px; border-left: 6px solid #ff6600; position: relative; }
        .q-icon { font-size: 2rem; color: #ff6600; opacity: 0.2; position: absolute; top: 10px; left: 10px; }
        .inspirational-quote p { font-style: italic; font-weight: 600; font-size: 1.1rem; color: #1a1a1a; padding-left: 20px; }

        .section-title { font-family: 'Orbitron', sans-serif; font-size: 1.6rem; color: #1a1a1a; margin: 40px 0 20px; display: flex; align-items: center; gap: 10px; }
        .section-title::after { content: ''; height: 2px; flex: 1; background: #eee; }

        .outcome-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 30px 0; }
        .outcome-card { background: #fdfdfd; padding: 20px; border-radius: 15px; text-align: center; border: 1px solid #f0e6dd; transition: 0.3s; }
        .outcome-card:hover { transform: translateY(-5px); border-color: #ff6600; }
        .outcome-icon { font-size: 1.8rem; color: #ff6600; margin-bottom: 10px; }
        .outcome-card h4 { font-size: 0.9rem; font-weight: 700; margin-bottom: 5px; }
        .outcome-card p { font-size: 0.75rem; color: #666; margin: 0; line-height: 1.2; }

        .content-image-box { margin: 30px 0; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .content-image-box img { width: 100%; display: block; }

        .conclusion-box { margin-top: 50px; padding-top: 30px; border-top: 1px solid #eee; }

        .video-card { background: #1a1a1a; padding: 40px; border-radius: 25px; color: white; margin-top: 50px; }
        .video-info h3 { font-family: 'Orbitron', sans-serif; color: #ff6600; margin-bottom: 5px; }
        .iframe-wrapper { position: relative; padding-bottom: 56.25%; height: 0; border-radius: 15px; overflow: hidden; margin-top: 20px; }
        .iframe-wrapper iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }

        /* SIDEBAR STYLING */
        .blog-sidebar { position: sticky; top: 100px; height: fit-content; display: flex; flex-direction: column; gap: 30px; }
        .sidebar-insights-card { background: white; padding: 25px; border-radius: 25px; border: 1px solid #eee; }
        .sidebar-title { font-family: 'Orbitron'; font-size: 1.1rem; margin-bottom: 20px; color: #ff6600; }
        .sidebar-insight-list { display: flex; flex-direction: column; gap: 15px; }
        .mini-insight { display: flex; align-items: center; gap: 15px; text-decoration: none; color: inherit; transition: 0.3s; }
        .mini-insight img { width: 60px; height: 60px; border-radius: 10px; object-fit: cover; }
        .mini-insight h4 { font-size: 0.9rem; margin: 0; font-weight: 700; }
        .mini-insight span { font-size: 0.75rem; color: #ff6600; font-weight: 600; display: flex; align-items: center; gap: 4px; }
        .mini-insight:hover { transform: translateX(5px); }

        .sidebar-contact-card { background: white; padding: 35px 25px; border-radius: 25px; text-align: center; border: 1px solid #eee; box-shadow: 0 10px 30px rgba(0,0,0,0.03); }
        .avatar-box { width: 80px; height: 80px; margin: 0 auto 20px; border-radius: 50%; border: 3px solid #ff6600; padding: 3px; }
        .avatar-box img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
        .sidebar-actions { display: flex; flex-direction: column; gap: 10px; }
        .s-btn { display: flex; align-items: center; justify-content: center; gap: 10px; padding: 12px; border-radius: 50px; text-decoration: none; color: white; font-weight: 700; transition: 0.3s; }
        .s-btn.call { background: #ff6600; }
        .s-btn.wa { background: #25d366; }

        @media (max-width: 992px) {
          .blog-layout { grid-template-columns: 1fr; }
          .blog-sidebar { position: static; }
          .blog-body { padding: 30px 20px; }
          .outcome-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}

export default Blog3;