import React from "react";
import Navbar from "../../mobile/components/Navbar";
import Footer from "../../mobile/components/Footer";
import { 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaRegClock, 
  FaRegCalendarAlt, 
  FaArrowRight, 
  FaProjectDiagram,
  FaMapMarkedAlt,
  FaShieldAlt
} from "react-icons/fa";

// Assets
import heroImg from "../../assets/Banner14.jpg";
import planningImg1 from "../../assets/Project3.jpg";
import planningImg2 from "../../assets/Project4.jpg";
import blogSidebar1 from "../../assets/Academic.jpg";
import blogSidebar2 from "../../assets/Admission.png";

function Blog14() {
  return (
    <>
      <Navbar />

      <div className="blog-wrapper">
        {/* PREMIUM HERO SECTION */}
        <header className="blog-header">
          <div className="hero-background-container">
            <img src={heroImg} alt="Educational Project Planning" className="hero-image" />
            <div className="hero-overlay-gradient"></div>
          </div>
          
          <div className="hero-text-content">
            <div className="meta-info-row">
              <span className="meta-item"><FaRegCalendarAlt /> April 15, 2026</span>
              <span className="meta-item"><FaRegClock /> 6 Min Read</span>
            </div>
            <h1 className="main-title">
              Planning <span className="accent-text">Educational Projects</span> <br />
              From Vision to Execution
            </h1>
          </div>
        </header>

        {/* MAIN LAYOUT */}
        <div className="blog-layout">
          <main className="blog-body">
            <section className="content-segment">
              <p className="intro-text">
                <span className="first-letter">E</span>ducational projects often begin as a visionary 
                idea, but their long-term success depends entirely on structured, phased planning. 
                At SES, we transform abstract concepts into executable blueprints by mapping 
                meticulous timelines, resource allocation, and complex compliance milestones 
                at every stage of the journey.
              </p>
            </section>

            {/* SECTION 1 - PHASED DEVELOPMENT */}
            <section className="article-section">
              <h2 className="section-title">Phased Project Development</h2>
              <p className="section-para">
                Our approach is never "one size fits all." We follow a rigorous phased methodology 
                that begins with granular land analysis and transitions seamlessly into 
                infrastructure development and academic frameworking. This discipline ensures 
                institutions launch without the typical cost overruns or regulatory bottlenecks.
              </p>
              
              <div className="compliance-checklist">
                <div className="check-item">
                  <FaMapMarkedAlt className="check-icon" />
                  <div>
                    <h4>Feasibility & Site Analysis</h4>
                    <p>Evaluating land suitability and local demographic demand for specific courses.</p>
                  </div>
                </div>
                <div className="check-item">
                  <FaProjectDiagram className="check-icon" />
                  <div>
                    <h4>Operational Mapping</h4>
                    <p>Synchronizing construction schedules with academic calendar deadlines.</p>
                  </div>
                </div>
              </div>

              <div className="content-image-box">
                <img src={planningImg1} alt="Project Management Lifecycle" />
              </div>
            </section>

            {/* SECTION 2 - MONITORING */}
            <section className="article-section">
              <h2 className="section-title">Monitoring & Strategic Control</h2>
              <p className="section-para">
                Continuous expert oversight is what separates successful launches from delayed 
                projects. We act as the central coordination hub between promoters, architects, 
                civil contractors, and state regulatory bodies to ensure the institutional 
                vision remains uncompromised.
              </p>
              <div className="content-image-box">
                <img src={planningImg2} alt="Strategic Oversight" />
              </div>
            </section>

            {/* VIDEO SECTION */}
            <section className="video-card">
              <div className="video-info">
                <FaShieldAlt className="video-icon-svg" />
                <h3>Project Command Center</h3>
                <p>Understand the critical importance of a structured project timeline in minimizing financial risk during the setup phase.</p>
              </div>
              <div className="iframe-wrapper">
                <iframe
                  src="https://player.cloudinary.com/embed/?public_id=dpr-2_h813lb&cloud_name=dqmkivr5i&fluid=true"
                  title="Educational Project Planning Guide"
                  allow="autoplay; fullscreen; encrypted-media"
                  allowFullScreen
                />
              </div>
            </section>

            <section className="conclusion-box">
              <h2 className="section-title">Conclusion</h2>
              <p className="section-para">
                Converting an idea into a thriving institution requires more than just capital; 
                it requires a roadmap. SES ensures your educational projects are executed 
                efficiently, sustainably, and in total compliance with the law.
              </p>
            </section>
          </main>

          {/* STICKY SIDEBAR */}
          <aside className="blog-sidebar">
            <div className="sticky-container">
              <div className="sidebar-card insights">
                <h3 className="sidebar-label">Management Series</h3>
                <div className="insight-links">
                  <a href="/blogs/blog13" className="link-item">
                    <img src={planningImg1} alt="DPR" />
                    <div className="link-text">
                      <h4>Importance of DPRs</h4>
                      <span>Read More <FaArrowRight /></span>
                    </div>
                  </a>
                  <a href="/blogs/blog12" className="link-item">
                    <img src={blogSidebar1} alt="Staffing" />
                    <div className="link-text">
                      <h4>Infrastructure & Staffing</h4>
                      <span>Read More <FaArrowRight /></span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="sidebar-card expert">
                <div className="expert-avatar">
                  <img src={blogSidebar2} alt="Project Lead" />
                </div>
                <h3>Project Support</h3>
                <p>Have a project in mind? Let us build the roadmap to your institution's success.</p>
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
        .main-title { font-family: 'Orbitron', sans-serif; font-size: clamp(1.6rem, 5vw, 2.8rem); font-weight: 900; line-height: 1.2; }
        .accent-text { color: #ff6600; }
        .meta-info-row { display: flex; justify-content: center; gap: 15px; margin-bottom: 15px; }
        .meta-item { background: rgba(255,102,0,0.25); padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; border: 1px solid rgba(255,255,255,0.1); }

        /* Grid */
        .blog-layout { 
          max-width: 1200px; margin: -50px auto 0; 
          display: grid; grid-template-columns: 1fr 340px; 
          gap: 30px; padding: 0 20px 80px; 
        }

        .blog-body { background: white; padding: 45px; border-radius: 25px; box-shadow: 0 15px 40px rgba(0,0,0,0.06); }
        .intro-text { font-size: 1.15rem; line-height: 1.8; color: #444; margin-bottom: 30px; text-align: justify; }
        .first-letter { float: left; font-size: 3.5rem; font-weight: 900; color: #ff6600; line-height: 1; margin-right: 12px; font-family: 'Orbitron'; }
        
        .section-para { font-size: 1.1rem; line-height: 1.7; color: #555; margin-bottom: 25px; text-align: justify; }

        .compliance-checklist { background: #fdf8f4; border-radius: 20px; padding: 30px; margin: 30px 0; display: flex; flex-direction: column; gap: 20px; }
        .check-item { display: flex; gap: 20px; align-items: flex-start; }
        .check-icon { font-size: 1.5rem; color: #ff6600; margin-top: 4px; }
        .check-item h4 { margin: 0 0 5px; font-weight: 700; font-size: 1rem; }
        .check-item p { margin: 0; font-size: 0.85rem; color: #666; }

        .section-title { font-family: 'Orbitron', sans-serif; font-size: 1.3rem; color: #111; margin: 40px 0 20px; display: flex; align-items: center; gap: 15px; }
        .section-title::after { content: ''; height: 2px; flex: 1; background: #f0f0f0; }

        .content-image-box { margin: 30px 0; border-radius: 15px; overflow: hidden; box-shadow: 0 8px 25px rgba(0,0,0,0.1); }
        .content-image-box img { width: 100%; display: block; }

        .video-card { background: #111; padding: 30px; border-radius: 20px; color: white; margin-top: 40px; }
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

export default Blog14;