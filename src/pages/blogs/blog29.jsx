import React from "react";
import Navbar from "../../mobile/components/Navbar";
import Footer from "../../mobile/components/Footer";
import { 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaLaptopCode, 
  FaCloudUploadAlt, 
  FaChartLine, 
  FaMicrochip,
  FaRegClock, 
  FaRegCalendarAlt 
} from "react-icons/fa";

// Assets
import heroImg from "../../assets/Banner29.jpg";
import techImg1 from "../../assets/Document3.jpg";
import techImg2 from "../../assets/Document4.jpg";

function Blog29() {
  return (
    <>
      <Navbar />

      <div className="blog-wrapper">
        {/* TECH-FOCUSED HERO SECTION */}
        <header className="blog-header">
          <div className="hero-visual">
            <img src={heroImg} alt="Digital Solutions for Education" />
            <div className="hero-gradient"></div>
          </div>
          
          <div className="hero-text">
            <div className="status-pill">EDTECH EVOLUTION</div>
            <h1 className="main-heading">
              Digital Solutions for <br />
              <span className="glow-text">Schools & Colleges</span>
            </h1>
            <div className="blog-meta">
              <span><FaRegCalendarAlt /> Dec 04, 2026</span>
              <span className="dot">•</span>
              <span><FaRegClock /> 4 Min Read</span>
            </div>
          </div>
        </header>

        {/* CONTENT GRID */}
        <div className="layout-grid">
          <article className="main-article">
            <section className="intro-block">
              <p className="lead-para">
                <span className="accent-initial">D</span>igital solutions are 
                transforming the educational landscape by replacing outdated 
                manual workflows with high-speed, technology-driven systems. 
                For modern schools and colleges, this transition is the key to 
                unlocking institutional agility and department-wide coordination.
              </p>
            </section>

            {/* SECTION 1 - DATA MANAGEMENT */}
            <section className="content-part">
              <h2 className="title-bordered">Technology-Driven Data Management</h2>
              <p className="standard-para">
                SES empowers institutions to move beyond paper-based limitations. 
                By adopting cloud-integrated digital platforms, schools can store, 
                track, and manage student lifecycles with 100% transparency. These 
                systems don't just reduce paperwork—they eliminate the risk of 
                data silos.
              </p>
              
              <div className="tech-stats">
                <div className="stat-item">
                  <FaCloudUploadAlt className="s-icon" />
                  <h4>Cloud Access</h4>
                  <p>Real-time data availability anywhere.</p>
                </div>
                <div className="stat-item">
                  <FaChartLine className="s-icon" />
                  <h4>Live Analytics</h4>
                  <p>Smart insights for better decisions.</p>
                </div>
              </div>

              <div className="media-container">
                <img src={techImg1} alt="Digital Data Management" />
              </div>
            </section>

            {/* SECTION 2 - OPERATIONAL EFFICIENCY */}
            <section className="content-part">
              <h2 className="title-bordered">Operational Efficiency Through Tech</h2>
              <p className="standard-para">
                Modern software solutions automate repetitive tasks like 
                attendance tracking, fee management, and library logs. This 
                automation frees up administrative staff to focus on student 
                growth while ensuring the institution is always "audit-ready" 
                with organized, exportable data insights.
              </p>
              <div className="media-container">
                <img src={techImg2} alt="Institutional Technology" />
              </div>
            </section>

            {/* VIDEO SECTION */}
            <section className="premium-video-card">
              <div className="v-header">
                <FaMicrochip className="v-logo" />
                <h3>The Digital Ecosystem</h3>
                <p>How interconnected systems drive school performance.</p>
              </div>
              <div className="v-frame">
                <iframe
                  src="https://player.cloudinary.com/embed/?public_id=data-2_sqpqik&cloud_name=dqmkivr5i&fluid=true"
                  title="Digital Solutions Video"
                  allow="autoplay; fullscreen; encrypted-media"
                  allowFullScreen
                />
              </div>
            </section>

            <section className="outro">
              <h2 className="title-bordered">Conclusion</h2>
              <p className="standard-para">
                Transitioning to a digital-first model is a journey toward 
                sustainability and excellence. SES stands as your partner in 
                navigating this smooth transition to technology-enabled record 
                systems that define the future of education.
              </p>
            </section>
          </article>

          {/* RIGHT SIDEBAR */}
          <aside className="article-sidebar">
            <div className="sidebar-sticky">
              <div className="widget info-widget">
                <FaLaptopCode className="w-icon" />
                <h3>Tech Stack Audit</h3>
                <p>Is your current software hindering your growth?</p>
                <div className="tag-list">
                  <span>Cloud ERP</span>
                  <span>LMS Tools</span>
                  <span>CRM Integration</span>
                </div>
              </div>

              <div className="widget contact-widget">
                <h3>Go Digital Today</h3>
                <p>Consult with our EdTech specialists for a custom roadmap.</p>
                <div className="cta-btns">
                  <a href="tel:+919801066182" className="btn-c call-bg"><FaPhoneAlt /> Call Now</a>
                  <a href="https://wa.me/919801066182" className="btn-c wa-bg"><FaWhatsapp /> WhatsApp</a>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <Footer />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@800&family=Poppins:wght@300;400;500;600;700&display=swap');

        .blog-wrapper { background: #fff4ea; color: #1a202c; font-family: 'Poppins', sans-serif; }

        /* Hero Styling */
        .blog-header { position: relative; height: 500px; display: flex; align-items: center; justify-content: center; text-align: center; color: white; }
        .hero-visual { position: absolute; inset: 0; z-index: 1; }
        .hero-visual img { width: 100%; height: 100%; object-fit: cover; }
        .hero-gradient { position: absolute; inset: 0; background: radial-gradient(circle, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 100%); }
        .hero-text { position: relative; z-index: 2; padding: 20px; }
        .status-pill { background: #ff6600; padding: 5px 15px; border-radius: 50px; font-family: 'Orbitron'; font-size: 0.75rem; letter-spacing: 2px; margin-bottom: 20px; display: inline-block; }
        .main-heading { font-family: 'Orbitron'; font-size: clamp(1.8rem, 6vw, 3rem); line-height: 1.2; }
        .glow-text { color: #ff6600; text-shadow: 0 0 15px rgba(255,102,0,0.3); }
        .blog-meta { margin-top: 25px; font-size: 0.9rem; display: flex; align-items: center; justify-content: center; gap: 15px; opacity: 0.9; }

        /* Layout */
        .layout-grid { max-width: 1250px; margin: 80px auto; display: grid; grid-template-columns: 1fr 350px; gap: 50px; padding: 0 25px; }
        .main-article { background: #ffffff; padding: 60px; border-radius: 40px; box-shadow: 0 30px 70px rgba(0,0,0,0.06); }
        
        .lead-para { font-size: 1.3rem; line-height: 2; color: #4a5568; margin-bottom: 50px; font-weight: 300; }
        .accent-initial { float: left; font-size: 5rem; font-weight: 800; color: #ff6600; line-height: 0.8; margin-right: 12px; font-family: 'Orbitron'; }
        
        .title-bordered { font-family: 'Orbitron'; font-size: 1.6rem; color: #111; margin: 60px 0 30px; padding-bottom: 10px; border-bottom: 3px solid #ff6600; display: inline-block; }
        .standard-para { font-size: 1.1rem; line-height: 1.9; color: #555; margin-bottom: 30px; }

        .tech-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 25px; margin: 40px 0; }
        .stat-item { background: #fff8f2; padding: 30px; border-radius: 25px; border: 1px dashed #ff6600; }
        .s-icon { font-size: 2.5rem; color: #ff6600; margin-bottom: 15px; }
        .stat-item h4 { font-family: 'Orbitron'; font-size: 1rem; margin-bottom: 8px; }
        .stat-item p { font-size: 0.85rem; opacity: 0.8; }

        .media-container { border-radius: 30px; overflow: hidden; margin: 45px 0; box-shadow: 0 20px 50px rgba(0,0,0,0.1); }
        .media-container img { width: 100%; transition: transform 0.5s ease; }
        .media-container:hover img { transform: scale(1.03); }

        /* Video Card */
        .premium-video-card { background: #0f172a; padding: 50px; border-radius: 40px; color: white; margin-top: 70px; }
        .v-logo { font-size: 3rem; color: #ff6600; margin-bottom: 20px; }
        .v-header h3 { font-family: 'Orbitron'; font-size: 1.8rem; margin-bottom: 10px; }
        .v-header p { color: #94a3b8; margin-bottom: 40px; }
        .v-frame { position: relative; padding-bottom: 56.25%; height: 0; border-radius: 20px; overflow: hidden; }
        .v-frame iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }

        /* Sidebar Widgets */
        .sidebar-sticky { position: sticky; top: 110px; display: flex; flex-direction: column; gap: 35px; }
        .widget { background: white; padding: 35px; border-radius: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.04); border: 1px solid #f1f5f9; }
        .w-icon { font-size: 3rem; color: #ff6600; margin-bottom: 20px; }
        .widget h3 { font-family: 'Orbitron'; font-size: 1.2rem; margin-bottom: 15px; }
        .tag-list { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 15px; }
        .tag-list span { background: #fef2e8; color: #ff6600; padding: 4px 12px; border-radius: 6px; font-size: 0.75rem; font-weight: 700; }

        .contact-widget { background: #ff6600; color: white; border: none; text-align: center; }
        .cta-btns { display: flex; flex-direction: column; gap: 15px; margin-top: 25px; }
        .btn-c { padding: 15px; border-radius: 12px; text-decoration: none; color: white; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 10px; transition: 0.3s; }
        .call-bg { background: rgba(0,0,0,0.25); }
        .wa-bg { background: #25d366; }
        .btn-c:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.15); }

        @media (max-width: 992px) {
          .layout-grid { grid-template-columns: 1fr; }
          .main-article { padding: 35px 25px; }
          .tech-stats { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}

export default Blog29;