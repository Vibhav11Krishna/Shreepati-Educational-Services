import React from "react";
import Navbar from "../../mobile/components/Navbar";
import Footer from "../../mobile/components/Footer";
import { 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaRegClock, 
  FaRegCalendarAlt, 
  FaArrowRight, 
  FaUserShield,
  FaLightbulb,
  FaHeartbeat
} from "react-icons/fa";

// Assets
import heroImg from "../../assets/Banner23.jpg";
import counselingImg1 from "../../assets/Admission3.jpg";
import counselingImg2 from "../../assets/Admission4.jpg";
import blogSidebar1 from "../../assets/Academic.jpg";
import blogSidebar2 from "../../assets/Admission.png";

function Blog23() {
  return (
    <>
      <Navbar />

      <div className="blog-wrapper">
        {/* EMPATHY-DRIVEN HERO */}
        <header className="blog-header">
          <div className="hero-background-container">
            <img src={heroImg} alt="Student Counseling Session" className="hero-image" />
            <div className="hero-overlay-gradient"></div>
          </div>
          
          <div className="hero-text-content">
            <div className="meta-info-row">
              <span className="meta-item"><FaRegCalendarAlt /> Sept 12, 2026</span>
              <span className="meta-item"><FaRegClock /> 6 Min Read</span>
            </div>
            <h1 className="main-title">
              The Power Of <span className="accent-text">Academic Counseling</span> <br />
              Beyond Just Advice
            </h1>
          </div>
        </header>

        {/* MAIN LAYOUT */}
        <div className="blog-layout">
          <main className="blog-body">
            <section className="content-segment">
              <p className="intro-text">
                <span className="first-letter">A</span>cademic counseling is the bridge 
                between confusion and conviction. In today's high-pressure educational 
                landscape, students often face decision paralysis. Proper counseling 
                isn't just about picking subjects; it's about building the resilience 
                and clarity needed to navigate a lifelong career path.
              </p>
            </section>

            {/* SECTION 1 - PERSONALIZED APPROACH */}
            <section className="article-section">
              <h2 className="section-title">A Personalized Counseling Approach</h2>
              <p className="section-para">
                At SES, we move away from "one-size-fits-all" advice. We dive deep into 
                a student’s unique academic history, emotional readiness, and long-term 
                aspirations. This individual-focused approach ensures that the guidance 
                is not just practical, but deeply relevant to the student's specific life 
                context.
              </p>
              
              <div className="benefits-flex">
                <div className="benefit-card">
                  <FaUserShield className="b-icon" />
                  <h4>Safe Space</h4>
                  <p>A judgment-free environment to discuss fears and doubts.</p>
                </div>
                <div className="benefit-card">
                  <FaHeartbeat className="b-icon" />
                  <h4>Stress Reduction</h4>
                  <p>Replacing anxiety with a structured action plan.</p>
                </div>
              </div>

              <div className="content-image-box">
                <img src={counselingImg1} alt="Personalized Counseling Discussion" />
              </div>
            </section>

            {/* SECTION 2 - CONFIDENCE */}
            <section className="article-section">
              <h2 className="section-title">Building Confidence & Direction</h2>
              <p className="section-para">
                Confidence stems from knowing *why* you are making a choice. Through 
                our sessions, students discover their hidden strengths and learn how to 
                leverage them. We help transform academic challenges into growth 
                opportunities, ensuring every student leaves with a clear sense of 
                purpose.
              </p>
              <div className="content-image-box">
                <img src={counselingImg2} alt="Confident student after counseling" />
              </div>
            </section>

            {/* VIDEO SECTION */}
            <section className="video-card">
              <div className="video-info">
                <FaLightbulb className="video-icon-svg" />
                <h3>Clarity in Motion</h3>
                <p>Understand how professional counseling helps students overcome academic pressure and uncertainty through real-world strategies.</p>
              </div>
              <div className="iframe-wrapper">
                <iframe
                  src="https://player.cloudinary.com/embed/?public_id=counselling-2_xhpp7j&cloud_name=dqmkivr5i&fluid=true"
                  title="Counseling Benefits Video"
                  allow="autoplay; fullscreen; encrypted-media"
                  allowFullScreen
                />
              </div>
            </section>

            <section className="conclusion-box">
              <h2 className="section-title">Conclusion</h2>
              <p className="section-para">
                Counseling is an investment in a student's mental and professional 
                well-being. SES is committed to providing the reliable guidance 
                necessary for both personal growth and academic success.
              </p>
            </section>
          </main>

          {/* SIDEBAR */}
          <aside className="blog-sidebar">
            <div className="sticky-container">
              <div className="sidebar-card insights">
                <h3 className="sidebar-label">Related Support</h3>
                <div className="insight-links">
                  <a href="/blogs/blog22" className="link-item">
                    <img src={counselingImg1} alt="Course Selection" />
                    <div className="link-text">
                      <h4>Course Selection</h4>
                      <span>Read More <FaArrowRight /></span>
                    </div>
                  </a>
                  <a href="/blogs/blog21" className="link-item">
                    <img src={blogSidebar1} alt="Finance" />
                    <div className="link-text">
                      <h4>Institutional Finance</h4>
                      <span>Read More <FaArrowRight /></span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="sidebar-card expert">
                <div className="expert-avatar">
                  <img src={blogSidebar2} alt="Counseling Expert" />
                </div>
                <h3>Student Support</h3>
                <p>Feeling overwhelmed by choices? Our counselors are ready to help you find your path. Start your journey with a chat.</p>
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
            background: linear-gradient(to bottom, rgba(45, 20, 0, 0.8) 0%, rgba(255, 102, 0, 0.1) 60%, #fff4ea 100%); 
        }
        .hero-text-content { position: relative; z-index: 2; text-align: center; color: white; padding: 20px; }
        .main-title { font-family: 'Orbitron', sans-serif; font-size: clamp(1.8rem, 6vw, 3rem); font-weight: 900; line-height: 1.1; }
        .accent-text { color: #ffb400; text-shadow: 0 0 15px rgba(255,180,0,0.3); }
        .meta-info-row { display: flex; justify-content: center; gap: 15px; margin-bottom: 20px; }
        .meta-item { background: rgba(255,255,255,0.15); padding: 6px 16px; border-radius: 50px; font-size: 0.8rem; backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.3); }

        /* Layout */
        .blog-layout { 
          max-width: 1200px; margin: -50px auto 0; 
          display: grid; grid-template-columns: 1fr 340px; 
          gap: 30px; padding: 0 20px 100px; 
        }

        .blog-body { background: white; padding: 60px; border-radius: 40px; box-shadow: 0 30px 70px rgba(0,0,0,0.06); }
        .intro-text { font-size: 1.25rem; line-height: 2; color: #4a5568; margin-bottom: 45px; font-weight: 300; }
        .first-letter { float: left; font-size: 4.5rem; font-weight: 900; color: #ff6600; line-height: 1; margin-right: 15px; font-family: 'Orbitron'; }
        
        .section-para { font-size: 1.1rem; line-height: 1.9; color: #555; margin-bottom: 30px; }

        .benefits-flex { display: flex; gap: 20px; margin: 40px 0; }
        .benefit-card { flex: 1; background: #fff8f1; padding: 30px; border-radius: 25px; transition: 0.3s; border: 1px solid #ffe8d6; }
        .benefit-card:hover { transform: translateY(-8px); box-shadow: 0 15px 30px rgba(255,102,0,0.1); }
        .b-icon { font-size: 2.5rem; color: #ff6600; margin-bottom: 15px; }
        .benefit-card h4 { font-family: 'Orbitron'; font-size: 0.95rem; margin-bottom: 10px; }
        .benefit-card p { font-size: 0.85rem; color: #718096; margin: 0; }

        .section-title { font-family: 'Orbitron', sans-serif; font-size: 1.5rem; color: #1a202c; margin: 55px 0 25px; display: flex; align-items: center; gap: 15px; }
        .section-title::after { content: ''; height: 3px; flex: 1; background: linear-gradient(90deg, #ff6600, transparent); border-radius: 10px; }

        .content-image-box { margin: 40px 0; border-radius: 30px; overflow: hidden; box-shadow: 0 20px 45px rgba(0,0,0,0.1); }
        .content-image-box img { width: 100%; display: block; }

        .video-card { background: #1a202c; padding: 45px; border-radius: 35px; color: white; margin-top: 60px; }
        .video-icon-svg { font-size: 2.8rem; color: #ff6600; margin-bottom: 20px; }
        .video-info h3 { font-family: 'Orbitron', sans-serif; font-size: 1.5rem; margin-bottom: 12px; color: #ffb400; }
        .iframe-wrapper { position: relative; padding-bottom: 56.25%; height: 0; border-radius: 20px; overflow: hidden; margin-top: 30px; }
        .iframe-wrapper iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }

        /* Sidebar */
        .sticky-container { position: sticky; top: 110px; display: flex; flex-direction: column; gap: 30px; }
        .sidebar-card { background: white; padding: 30px; border-radius: 30px; border: 1px solid #edf2f7; box-shadow: 0 10px 30px rgba(0,0,0,0.03); }
        .sidebar-label { font-family: 'Orbitron'; font-size: 0.85rem; color: #ff6600; margin-bottom: 20px; letter-spacing: 1px; }
        
        .link-item { display: flex; gap: 15px; text-decoration: none; color: inherit; align-items: center; margin-bottom: 20px; transition: 0.2s; }
        .link-item:hover { opacity: 0.8; }
        .link-item img { width: 65px; height: 65px; border-radius: 15px; object-fit: cover; }
        .link-text h4 { font-size: 0.9rem; margin: 0; font-weight: 700; color: #2d3748; }
        .link-text span { font-size: 0.7rem; color: #ff6600; display: flex; align-items: center; gap: 5px; margin-top: 5px; font-weight: 700; }
        
        .expert { text-align: center; background: linear-gradient(135deg, #ffffff, #fff4ea); border: 1px solid #ff660022; }
        .expert-avatar { width: 85px; height: 85px; margin: 0 auto 18px; border: 3px solid #ff6600; border-radius: 50%; padding: 5px; background: white; }
        .expert-avatar img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
        .btn { padding: 14px; border-radius: 50px; text-decoration: none; color: white; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 10px; font-size: 0.95rem; margin-top: 15px; transition: 0.3s; }
        .btn.call { background: #1a202c; }
        .btn.wa { background: #25d366; }
        .btn:hover { transform: translateY(-3px); box-shadow: 0 12px 25px rgba(0,0,0,0.1); }

        @media (max-width: 992px) {
          .blog-layout { grid-template-columns: 1fr; margin-top: -30px; }
          .blog-body { padding: 40px 25px; }
          .benefits-flex { flex-direction: column; }
        }
      `}</style>
    </>
  );
}

export default Blog23;