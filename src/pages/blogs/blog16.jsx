import React from "react";
import Navbar from "../../mobile/components/Navbar";
import Footer from "../../mobile/components/Footer";
import { 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaRegClock, 
  FaRegCalendarAlt, 
  FaArrowRight, 
  FaGlobeAmericas,
  FaPassport,
  FaGraduationCap
} from "react-icons/fa";

// Assets
import heroImg from "../../assets/Banner16.jpg";
import overseasImg1 from "../../assets/Overseas1.jpg";
import overseasImg2 from "../../assets/Overseas2.jpg";
import blogSidebar1 from "../../assets/Academic.jpg";
import blogSidebar2 from "../../assets/Admission.png";

function Blog16() {
  return (
    <>
      <Navbar />

      <div className="blog-wrapper">
        {/* PREMIUM HERO SECTION */}
        <header className="blog-header">
          <div className="hero-background-container">
            <img src={heroImg} alt="Study Abroad Global Opportunities" className="hero-image" />
            <div className="hero-overlay-gradient"></div>
          </div>
          
          <div className="hero-text-content">
            <div className="meta-info-row">
              <span className="meta-item"><FaRegCalendarAlt /> May 05, 2026</span>
              <span className="meta-item"><FaRegClock /> 8 Min Read</span>
            </div>
            <h1 className="main-title">
              How To <span className="accent-text">Study Abroad</span> <br />
              Your Global Career Roadmap
            </h1>
          </div>
        </header>

        {/* MAIN LAYOUT */}
        <div className="blog-layout">
          <main className="blog-body">
            <section className="content-segment">
              <p className="intro-text">
                <span className="first-letter">S</span>tudying abroad is more than just an academic 
                pursuit; it is a gateway to international exposure, diverse cultural experiences, 
                and a competitive edge in the global job market. While the prospect is exciting, 
                the journey requires a meticulous roadmap involving documentation, financial 
                planning, and precise timing.
              </p>
            </section>

            {/* SECTION 1 - PLANNING */}
            <section className="article-section">
              <h2 className="section-title">Application & Admission Planning</h2>
              <p className="section-para">
                The foundation of a successful overseas application lies in understanding 
                university-specific eligibility and entrance requirements (like GRE, GMAT, or IELTS). 
                SES provides personalized coaching to help students draft compelling Statements 
                of Purpose (SOP) and curate academic portfolios that resonate with elite 
                global admissions committees.
              </p>
              
              <div className="compliance-checklist">
                <div className="check-item">
                  <FaGraduationCap className="check-icon" />
                  <div>
                    <h4>University Selection</h4>
                    <p>Matching your career goals with the right global institutions and courses.</p>
                  </div>
                </div>
                <div className="check-item">
                  <FaGlobeAmericas className="check-icon" />
                  <div>
                    <h4>Timeline Management</h4>
                    <p>Navigating different intake seasons (Fall, Spring, Summer) without missing deadlines.</p>
                  </div>
                </div>
              </div>

              <div className="content-image-box">
                <img src={overseasImg1} alt="International Campus Life" />
              </div>
            </section>

            {/* SECTION 2 - VISA READINESS */}
            <section className="article-section">
              <h2 className="section-title">Admission to Visa Readiness</h2>
              <p className="section-para">
                Once the offer letter is secured, the focus shifts to the critical "Final Mile": 
                Visa documentation and financial proof. SES guides students through the complexities 
                of student visa interviews, health insurance requirements, and finding safe, 
                reputable accommodation near their chosen campus.
              </p>
              <div className="content-image-box">
                <img src={overseasImg2} alt="Visa and Travel Planning" />
              </div>
            </section>

            {/* VIDEO SECTION */}
            <section className="video-card">
              <div className="video-info">
                <FaPassport className="video-icon-svg" />
                <h3>Overseas Journey Explained</h3>
                <p>Watch our step-by-step video guide on how to navigate the transition from a local student to an international scholar.</p>
              </div>
              <div className="iframe-wrapper">
                <iframe
                  src="https://player.cloudinary.com/embed/?public_id=overseas-1_exws0j&cloud_name=dqmkivr5i&fluid=true"
                  title="Study Abroad Video Guide"
                  allow="autoplay; fullscreen; encrypted-media"
                  allowFullScreen
                />
              </div>
            </section>

            <section className="conclusion-box">
              <h2 className="section-title">Conclusion</h2>
              <p className="section-para">
                With the right guidance, the dream of an international degree is well within your 
                reach. SES stands by you from the first counseling session to the moment you 
                step onto your new campus, ensuring a stress-free transition to your global future.
              </p>
            </section>
          </main>

          {/* STICKY SIDEBAR */}
          <aside className="blog-sidebar">
            <div className="sticky-container">
              <div className="sidebar-card insights">
                <h3 className="sidebar-label">Student Resources</h3>
                <div className="insight-links">
                  <a href="/blogs/blog15" className="link-item">
                    <img src={overseasImg1} alt="Consultancy" />
                    <div className="link-text">
                      <h4>Expert Consultancy</h4>
                      <span>Explore <FaArrowRight /></span>
                    </div>
                  </a>
                  <a href="/blogs/blog12" className="link-item">
                    <img src={blogSidebar1} alt="Admission" />
                    <div className="link-text">
                      <h4>Admission Support</h4>
                      <span>Explore <FaArrowRight /></span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="sidebar-card expert">
                <div className="expert-avatar">
                  <img src={blogSidebar2} alt="Overseas Counselor" />
                </div>
                <h3>Overseas Help</h3>
                <p>Planning to study in the USA, UK, Canada, or Australia? Talk to our specialists.</p>
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

export default Blog16;