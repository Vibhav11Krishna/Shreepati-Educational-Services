import React from "react";
import Navbar from "../../mobile/components/Navbar";
import Footer from "../../mobile/components/Footer";
import { 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaRegClock, 
  FaRegCalendarAlt, 
  FaArrowRight, 
  FaDraftingCompass, 
  FaUniversity 
} from "react-icons/fa";

// Assets
import heroImg from "../../assets/Banner7.jpg";
import collaborationImg from "../../assets/College1.jpg";
import researchImg from "../../assets/College2.jpg";
import blog1Img from "../../assets/Academic.jpg";
import blog2Img from "../../assets/Admission.png";
import blog3Img from "../../assets/Admission.png";

function Blog7() {
  return (
    <>
      <Navbar />

      <div className="blog-wrapper">
        {/* PREMIUM HERO SECTION */}
        <header className="blog-header">
          <div className="hero-background-container">
            <img src={heroImg} alt="Starting A New College" className="hero-image" />
            <div className="hero-overlay-gradient"></div>
          </div>
          
          <div className="hero-text-content">
            <div className="meta-info-row">
              <span className="meta-item"><FaRegCalendarAlt /> March 22, 2026</span>
              <span className="meta-item"><FaRegClock /> 5 Min Read</span>
            </div>
            <h1 className="main-title">
              The Blueprint for <br />
              <span className="accent-text">Starting a New College</span>
            </h1>
          </div>
        </header>

        {/* MAIN LAYOUT */}
        <div className="blog-layout">
          <main className="blog-body">
            <section className="content-segment">
              <p className="intro-text">
                <span className="first-letter">E</span>stablishing a new college is a visionary undertaking that 
                demands meticulous planning and strict adherence to academic norms. From initial course 
                selection to the final ribbon-cutting, success depends on aligning every operational 
                facet with regulatory standards.
              </p>
            </section>

            {/* SECTION 1 - ROADMAP */}
            <section className="article-section">
              <h2 className="section-title">Planning & Vision</h2>
              <p className="section-para">
                The journey begins with a clear definition of your academic mission. This involves 
                identifying your target demographic, selecting high-demand programs, and creating 
                a sustainable financial model. SES assists in mapping this vision against regulatory 
                feasibility to ensure a smooth approval process.
              </p>
              
              <div className="roadmap-grid">
                <div className="step-card">
                  <span className="step-num">01</span>
                  <h4>Vision Mapping</h4>
                  <p>Defining academic goals and niche programs.</p>
                </div>
                <div className="step-card">
                  <span className="step-num">02</span>
                  <h4>Feasibility Study</h4>
                  <p>Analyzing local demand and regulatory hurdles.</p>
                </div>
              </div>

              <div className="content-image-box">
                <img src={collaborationImg} alt="Strategic Planning" />
              </div>
            </section>

            {/* SECTION 2 - INFRASTRUCTURE */}
            <section className="article-section">
              <h2 className="section-title">Infrastructure Excellence</h2>
              <p className="section-para">
                Modern educational infrastructure is more than just buildings; it is a critical 
                component of student trust and accreditation success. Laboratories, smart 
                classrooms, and administrative safety norms must meet exact board specifications 
                to pass initial inspections.
              </p>
              <div className="content-image-box">
                <img src={researchImg} alt="Modern Infrastructure" />
              </div>
            </section>

            {/* VIDEO SECTION */}
            <section className="video-card">
              <div className="video-info">
                <FaDraftingCompass className="video-icon-svg" />
                <h3>Infrastructure & Trust</h3>
                <p>Watch how physical setup directly impacts your college's approval rating and student enrollment.</p>
              </div>
              <div className="iframe-wrapper">
                <iframe
                  src="https://player.cloudinary.com/embed/?public_id=key-steps-in-making-college_tlud9e&cloud_name=dqmkivr5i&fluid=true"
                  title="Starting A College Video"
                  allow="autoplay; fullscreen; encrypted-media"
                  allowFullScreen
                />
              </div>
            </section>

            <section className="conclusion-box">
              <h2 className="section-title">Conclusion</h2>
              <p className="section-para">
                Moving from a concept to a thriving institution requires a structured approach. 
                With SES as your strategic partner, you can navigate the path to establishment with 
                confidence, ensuring compliance, quality education, and long-term sustainability.
              </p>
            </section>
          </main>

          {/* STICKY SIDEBAR */}
          <aside className="blog-sidebar">
            <div className="sticky-container">
              <div className="sidebar-card insights">
                <h3 className="sidebar-label">Related Insights</h3>
                <div className="insight-links">
                  <a href="/blogs/blog1" className="link-item">
                    <img src={blog1Img} alt="Blog 1" />
                    <div className="link-text">
                      <h4>Learning Quality</h4>
                      <span>Read More <FaArrowRight /></span>
                    </div>
                  </a>
                  <a href="/blogs/blog5" className="link-item">
                    <img src={blog2Img} alt="Blog 5" />
                    <div className="link-text">
                      <h4>Common Mistakes</h4>
                      <span>Read More <FaArrowRight /></span>
                    </div>
                  </a>
                  <a href="/blogs/blog6" className="link-item">
                    <img src={blog3Img} alt="Blog 6" />
                    <div className="link-text">
                      <h4>Affiliation Benefits</h4>
                      <span>Read More <FaArrowRight /></span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="sidebar-card expert">
                <div className="expert-avatar">
                  <img src={blog1Img} alt="SES Consultant" />
                </div>
                <h3>Build Your College</h3>
                <p>Consult with our experts to start your institutional journey today.</p>
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

        .roadmap-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 30px 0; }
        .step-card { background: #fdf8f4; padding: 25px; border-radius: 15px; position: relative; border-left: 4px solid #ff6600; }
        .step-num { position: absolute; top: 15px; right: 20px; font-family: 'Orbitron'; font-size: 1.5rem; color: rgba(255,102,0,0.15); font-weight: 900; }
        .step-card h4 { margin: 0 0 10px; font-weight: 700; color: #111; }
        .step-card p { font-size: 0.85rem; margin: 0; color: #666; line-height: 1.5; }

        .section-title { font-family: 'Orbitron', sans-serif; font-size: 1.4rem; color: #111; margin: 40px 0 20px; display: flex; align-items: center; gap: 15px; }
        .section-title::after { content: ''; height: 2px; flex: 1; background: #f0f0f0; }

        .content-image-box { margin: 30px 0; border-radius: 15px; overflow: hidden; box-shadow: 0 8px 25px rgba(0,0,0,0.1); }
        .content-image-box img { width: 100%; display: block; }

        .video-card { background: #111; padding: 30px; border-radius: 20px; color: white; margin-top: 40px; }
        .video-icon-svg { font-size: 2.5rem; color: #ff6600; margin-bottom: 15px; }
        .video-info h3 { font-family: 'Orbitron', sans-serif; color: #ff6600; font-size: 1.2rem; margin-bottom: 10px; }
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
          .roadmap-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}

export default Blog7;