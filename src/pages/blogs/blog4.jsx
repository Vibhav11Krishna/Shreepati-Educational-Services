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
  FaCheckCircle,
  FaArrowRight 
} from "react-icons/fa";

// Assets
import heroImg from "../../assets/Banner4.jpg";
import collaborationImg from "../../assets/Affiliation1.jpg";
import researchImg from "../../assets/Affiliation2.jpg";
import blog4Img from "../../assets/Academic.jpg";
import blog5Img from "../../assets/Admission.png";
import blog6Img from "../../assets/Admission.png";

function Blog4() {
  return (
    <>
      <Navbar />

      <div className="blog-wrapper">
        <header className="blog-header">
          <div className="hero-background-container">
            <img src={heroImg} alt="University Affiliation" className="hero-image" />
            <div className="hero-overlay-gradient"></div>
          </div>
          
          <div className="hero-text-content">
            <div className="meta-info-row">
              <span className="meta-item"><FaRegCalendarAlt /> March 16, 2026</span>
              <span className="meta-item"><FaRegClock /> 5 Min Read</span>
            </div>
            <h1 className="main-title">
              How to get Affiliation from <br />
              <span className="accent-text">Universities & Boards</span>
            </h1>
          </div>
        </header>

        <div className="blog-layout">
          <main className="blog-body">
            <p className="intro-text">
              <span className="first-letter">I</span>nstitutional affiliation links your school or college with
              recognized boards or universities. It ensures that courses are
              academically valid, legally recognized, and compliant with
              regulatory standards. Affiliation is essential for credibility,
              student trust, and smooth academic operations.
            </p>

            <div className="inspirational-quote">
              <FaQuoteLeft className="q-icon" />
              <p>Affiliation is the cornerstone of academic legitimacy and the gateway to student success.</p>
            </div>

            {/* SECTION 1 - UPDATED ALIGNMENT */}
            <section className="article-section">
              <h2 className="section-title">Step By Step Process</h2>
              <p className="section-intro-para">
                The affiliation process is a meticulous journey that transforms an institution into a recognized academic body:
              </p>
              <ul className="benefit-list">
                <li>
                  <FaCheckCircle className="bullet-icon" /> 
                  <div><strong>Eligibility Assessment:</strong> Verify if infrastructure and faculty meet board criteria.</div>
                </li>
                <li>
                  <FaCheckCircle className="bullet-icon" /> 
                  <div><strong>Documentation:</strong> Compile certifications, staff qualifications, and curriculum plans.</div>
                </li>
                <li>
                  <FaCheckCircle className="bullet-icon" /> 
                  <div><strong>Application:</strong> Formal submission to the appropriate academic authority.</div>
                </li>
                <li>
                  <FaCheckCircle className="bullet-icon" /> 
                  <div><strong>Inspections:</strong> Coordination with officials for site visits and compliance checks.</div>
                </li>
              </ul>
              
              <div className="content-image-box">
                <img src={collaborationImg} alt="Affiliation Step Process" />
              </div>
            </section>

            <section className="article-section">
              <h2 className="section-title">SES Guidance</h2>
              <p className="section-intro-para">
                SES provides end-to-end support for each stage of affiliation. From
                reviewing documents to guiding inspections and ensuring compliance,
                SES ensures institutions avoid delays and meet all regulations efficiently.
              </p>
              <div className="content-image-box">
                <img src={researchImg} alt="Guidance Support" />
              </div>
            </section>

            <section className="video-card">
              <div className="video-info">
                <h3>Process Visualizer</h3>
                <p>Learn the legal and academic requirements for a successful affiliation.</p>
              </div>
              <div className="iframe-wrapper">
                <iframe
                  src="https://player.cloudinary.com/embed/?public_id=step-by-step-affiliation-process_hrajai&cloud_name=dqmkivr5i&fluid=true"
                  title="Affiliation Process Video"
                  allow="autoplay; fullscreen; encrypted-media"
                  allowFullScreen
                />
              </div>
            </section>

            <section className="conclusion-box">
                <h2 className="section-title">Conclusion</h2>
                <p className="section-intro-para">
                    Affiliation is the cornerstone of academic legitimacy. With SES
                    guidance, institutions complete the process efficiently, avoid
                    delays, and gain credibility and recognition, setting a strong
                    foundation for long-term institutional growth.
                </p>
            </section>
          </main>

          <aside className="blog-sidebar">
            <div className="sidebar-insights-card">
                <h3 className="sidebar-title">Latest Insights</h3>
                <div className="sidebar-insight-list">
                    <a href="/blogs/blog5" className="mini-insight">
                        <img src={blog5Img} alt="Blog 5 Link" />
                        <div>
                            <h4>Admission Strategies</h4>
                            <span>Read More <FaArrowRight /></span>
                        </div>
                    </a>
                    <a href="/blogs/blog6" className="mini-insight">
                        <img src={blog6Img} alt="Blog 6 Link" />
                        <div>
                            <h4>Global Collaborations</h4>
                            <span>Read More <FaArrowRight /></span>
                        </div>
                    </a>
                </div>
            </div>

            <div className="sidebar-contact-card">
              <div className="avatar-box">
                <img src={blog4Img} alt="SES Expert" />
              </div>
              <h3>Talk to an Expert</h3>
              <p>Ready to start your affiliation journey? Our consultants are ready to guide you.</p>
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

        /* ALIGNMENT FIXES */
        .section-intro-para { font-size: 1.1rem; line-height: 1.7; color: #555; margin-bottom: 25px; text-align: justify; }
        
        .benefit-list { list-style: none; padding: 0; margin-bottom: 30px; display: flex; flex-direction: column; gap: 15px; }
        .benefit-list li { display: flex; align-items: flex-start; gap: 15px; font-weight: 500; line-height: 1.6; text-align: left; }
        .bullet-icon { color: #ff6600; font-size: 1.2rem; flex-shrink: 0; margin-top: 3px; }

        .inspirational-quote { margin: 40px 0; padding: 30px; background: #fff4ea; border-radius: 20px; border-left: 6px solid #ff6600; position: relative; }
        .q-icon { font-size: 2rem; color: #ff6600; opacity: 0.2; position: absolute; top: 10px; left: 10px; }
        .inspirational-quote p { font-style: italic; font-weight: 600; font-size: 1.1rem; color: #1a1a1a; padding-left: 20px; }

        .section-title { font-family: 'Orbitron', sans-serif; font-size: 1.6rem; color: #1a1a1a; margin: 40px 0 20px; display: flex; align-items: center; gap: 10px; }
        .section-title::after { content: ''; height: 2px; flex: 1; background: #eee; }

        .content-image-box { margin: 30px 0; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .content-image-box img { width: 100%; display: block; }

        .video-card { background: #1a1a1a; padding: 40px; border-radius: 25px; color: white; margin-top: 50px; }
        .video-info h3 { font-family: 'Orbitron', sans-serif; color: #ff6600; margin-bottom: 5px; }
        .iframe-wrapper { position: relative; padding-bottom: 56.25%; height: 0; border-radius: 15px; overflow: hidden; margin-top: 20px; }
        .iframe-wrapper iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }

        .conclusion-box { margin-top: 50px; padding-top: 30px; border-top: 1px solid #eee; }

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
        }
      `}</style>
    </>
  );
}

export default Blog4;