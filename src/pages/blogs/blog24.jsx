import React from "react";
import Navbar from "../../mobile/components/Navbar";
import Footer from "../../mobile/components/Footer";
import { 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaRegClock, 
  FaRegCalendarAlt, 
  FaArrowRight, 
  FaBullseye,
  FaCompass,
  FaCogs
} from "react-icons/fa";

// Assets
import heroImg from "../../assets/Banner24.jpg";
import actionImg1 from "../../assets/Admission5.jpg";
import actionImg2 from "../../assets/Admission6.jpg";
import blogSidebar1 from "../../assets/Academic.jpg";
import blogSidebar2 from "../../assets/Admission.png";

function Blog24() {
  return (
    <>
      <Navbar />

      <div className="blog-wrapper">
        {/* STRATEGIC VISION HERO */}
        <header className="blog-header">
          <div className="hero-background-container">
            <img src={heroImg} alt="Strategic Career Planning" className="hero-image" />
            <div className="hero-overlay-gradient"></div>
          </div>
          
          <div className="hero-text-content">
            <div className="meta-info-row">
              <span className="meta-item"><FaRegCalendarAlt /> Sept 20, 2026</span>
              <span className="meta-item"><FaRegClock /> 4 Min Read</span>
            </div>
            <h1 className="main-title">
              Informed Decisions & <br />
              <span className="accent-text">Right Career Paths</span>
            </h1>
          </div>
        </header>

        {/* MAIN LAYOUT */}
        <div className="blog-layout">
          <main className="blog-body">
            <section className="content-segment">
              <p className="intro-text">
                <span className="first-letter">M</span>aking a career choice is not a 
                one-time event, but a strategic process. Many students find themselves 
                swayed by temporary trends or peer pressure, often leading to mid-career 
                fatigue. At SES, we help you replace impulse with insight, ensuring 
                your academic choices are rooted in long-term professional vision.
              </p>
            </section>

            {/* SECTION 1 - CAREER PATH PLANNING */}
            <section className="article-section">
              <h2 className="section-title">Career Path Planning with SES</h2>
              <p className="section-para">
                Our consultancy approach involves a multi-dimensional exploration of 
                career options. We don't just look at what you can do; we look at where 
                the industry is heading. By mapping your capabilities against future 
                market needs, we create a structured plan that minimizes risk and 
                maximizes potential.
              </p>
              
              <div className="planning-grid">
                <div className="plan-item">
                  <FaBullseye className="p-icon" />
                  <h4>Market Analysis</h4>
                  <p>Studying growth sectors for 2030 and beyond.</p>
                </div>
                <div className="plan-item">
                  <FaCompass className="p-icon" />
                  <h4>Path Discovery</h4>
                  <p>Identifying niche roles that match your passion.</p>
                </div>
              </div>

              <div className="content-image-box">
                <img src={actionImg1} alt="Career Planning Workshop" />
              </div>
            </section>

            {/* SECTION 2 - LONG TERM SUCCESS */}
            <section className="article-section">
              <h2 className="section-title">Clarity for Long-Term Success</h2>
              <p className="section-para">
                The ultimate goal of SES is to provide "Future-Proof" guidance. Whether 
                it's selecting the right undergraduate major or planning for 
                international post-graduate studies, our roadmap ensures you move 
                forward with absolute confidence and a clear competitive edge.
              </p>
              <div className="content-image-box">
                <img src={actionImg2} alt="Successful career development" />
              </div>
            </section>

            {/* VIDEO SECTION - HIGH IMPACT */}
            <section className="video-card-dark">
              <div className="video-header">
                <div className="v-label">
                    <FaCogs /> STRATEGY SESSION
                </div>
                <h3>Breaking the Cycle of Peer Pressure</h3>
                <p>Learn how to filter out external noise and make a decision that belongs truly to you.</p>
              </div>
              <div className="iframe-wrapper">
                <iframe
                  src="https://player.cloudinary.com/embed/?public_id=counseling-3_hnqm5q&cloud_name=dqmkivr5i&fluid=true"
                  title="Informed Decisions Video"
                  allow="autoplay; fullscreen; encrypted-media"
                  allowFullScreen
                />
              </div>
            </section>

            <section className="conclusion-box">
              <h2 className="section-title">Final Thoughts</h2>
              <p className="section-para">
                Your career path is yours to walk, but you don't have to map it alone. 
                Informed decisions today pave the way for a legacy of success tomorrow. 
                Let SES be the partner in your professional journey.
              </p>
            </section>
          </main>

          {/* SIDEBAR */}
          <aside className="blog-sidebar">
            <div className="sticky-container">
              <div className="sidebar-card directory">
                <h3 className="sidebar-label">Complete the Journey</h3>
                <div className="path-tracker">
                  <div className="path-step completed">
                    <span className="dot"></span>
                    <p>Understanding Counseling (Blog 23)</p>
                  </div>
                  <div className="path-step completed">
                    <span className="dot"></span>
                    <p>Course Selection (Blog 22)</p>
                  </div>
                  <div className="path-step active">
                    <span className="dot"></span>
                    <p>Strategic Planning (Blog 24)</p>
                  </div>
                </div>
              </div>

              <div className="sidebar-card expert-gold">
                <h3>Take the Next Step</h3>
                <p>Ready to finalize your academic roadmap? Our senior consultants are available for one-on-one sessions.</p>
                <div className="btn-group-vertical">
                  <a href="tel:+919801066182" className="btn call"><FaPhoneAlt /> Call Consultant</a>
                  <a href="https://wa.me/919801066182" className="btn wa"><FaWhatsapp /> WhatsApp Now</a>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <Footer />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Poppins:wght@300;400;500;600;700&display=swap');

        .blog-wrapper { background: #fff4ea; color: #2d3748; font-family: 'Poppins', sans-serif; }

        /* Hero */
        .blog-header { position: relative; height: 500px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .hero-background-container { position: absolute; inset: 0; }
        .hero-image { width: 100%; height: 100%; object-fit: cover; }
        .hero-overlay-gradient { 
            position: absolute; inset: 0; 
            background: linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(255,102,0,0.2) 60%, #fff4ea 100%); 
        }
        .hero-text-content { position: relative; z-index: 2; text-align: center; color: white; padding: 20px; }
        .main-title { font-family: 'Orbitron', sans-serif; font-size: clamp(1.8rem, 6vw, 3.2rem); font-weight: 900; line-height: 1.1; }
        .accent-text { color: #ff6600; }
        .meta-info-row { display: flex; justify-content: center; gap: 15px; margin-bottom: 25px; }
        .meta-item { background: rgba(255,102,0,0.2); padding: 6px 16px; border-radius: 4px; font-size: 0.75rem; border: 1px solid #ff660055; font-weight: 600; }

        /* Content Layout */
        .blog-layout { 
          max-width: 1250px; margin: -60px auto 0; 
          display: grid; grid-template-columns: 1fr 360px; 
          gap: 40px; padding: 0 20px 120px; 
        }

        .blog-body { background: white; padding: 70px; border-radius: 40px; box-shadow: 0 40px 80px rgba(0,0,0,0.08); }
        .intro-text { font-size: 1.3rem; line-height: 2.1; color: #4a5568; margin-bottom: 50px; font-weight: 300; }
        .first-letter { float: left; font-size: 5rem; font-weight: 900; color: #1a202c; line-height: 1; margin-right: 15px; font-family: 'Orbitron'; }
        
        .section-para { font-size: 1.15rem; line-height: 1.9; color: #555; margin-bottom: 35px; }

        .planning-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 25px; margin: 45px 0; }
        .plan-item { background: #f8fafc; padding: 35px; border-radius: 20px; border-top: 4px solid #ff6600; }
        .p-icon { font-size: 2.2rem; color: #ff6600; margin-bottom: 20px; }
        .plan-item h4 { font-family: 'Orbitron'; font-size: 1rem; margin-bottom: 12px; }
        .plan-item p { font-size: 0.9rem; color: #718096; margin: 0; }

        .section-title { font-family: 'Orbitron', sans-serif; font-size: 1.6rem; color: #1a202c; margin: 60px 0 30px; }
        .content-image-box { margin: 45px 0; border-radius: 25px; overflow: hidden; box-shadow: 0 25px 55px rgba(0,0,0,0.12); }
        .content-image-box img { width: 100%; display: block; }

        /* Dark Video Section */
        .video-card-dark { background: #0f172a; padding: 50px; border-radius: 40px; color: white; margin-top: 70px; }
        .v-label { color: #ff6600; font-weight: 800; font-family: 'Orbitron'; font-size: 0.8rem; letter-spacing: 2px; margin-bottom: 15px; display: flex; align-items: center; gap: 10px; }
        .video-header h3 { font-family: 'Orbitron', sans-serif; font-size: 1.8rem; margin-bottom: 15px; }
        .video-header p { color: #94a3b8; margin-bottom: 35px; max-width: 600px; }
        .iframe-wrapper { position: relative; padding-bottom: 56.25%; height: 0; border-radius: 20px; overflow: hidden; }
        .iframe-wrapper iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }

        /* Sidebar Tracker */
        .sticky-container { position: sticky; top: 120px; display: flex; flex-direction: column; gap: 35px; }
        .sidebar-card { background: white; padding: 35px; border-radius: 35px; border: 1px solid #e2e8f0; }
        .sidebar-label { font-family: 'Orbitron'; font-size: 0.9rem; color: #1a202c; margin-bottom: 25px; border-bottom: 2px solid #ff6600; display: inline-block; }
        
        .path-tracker { display: flex; flex-direction: column; gap: 20px; }
        .path-step { display: flex; gap: 15px; align-items: center; color: #94a3b8; }
        .path-step.completed { color: #ff6600; }
        .path-step.active { color: #1a202c; font-weight: 700; }
        .dot { width: 10px; height: 10px; border-radius: 50%; background: currentColor; }
        .path-step p { font-size: 0.85rem; margin: 0; }
        
        .expert-gold { background: linear-gradient(135deg, #1e293b, #0f172a); color: white; text-align: center; }
        .btn-group-vertical { display: flex; flex-direction: column; gap: 15px; margin-top: 25px; }
        .btn { padding: 16px; border-radius: 12px; text-decoration: none; color: white; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 12px; transition: 0.3s; }
        .btn.call { background: #ff6600; }
        .btn.wa { background: #25d366; }
        .btn:hover { transform: scale(1.03); }

        @media (max-width: 992px) {
          .blog-layout { grid-template-columns: 1fr; }
          .blog-body { padding: 45px 30px; }
          .planning-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}

export default Blog24;