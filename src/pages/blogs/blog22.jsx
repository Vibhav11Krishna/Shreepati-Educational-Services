import React from "react";
import Navbar from "../../mobile/components/Navbar";
import Footer from "../../mobile/components/Footer";
import { 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaRegClock, 
  FaRegCalendarAlt, 
  FaArrowRight, 
  FaGraduationCap,
  FaLightbulb,
  FaRoute
} from "react-icons/fa";

// Assets
import heroImg from "../../assets/Banner22.jpg";
import studentImg1 from "../../assets/Admission1.jpg";
import studentImg2 from "../../assets/Admission2.jpg";
import blogSidebar1 from "../../assets/Academic.jpg";
import blogSidebar2 from "../../assets/Admission.png";

function Blog22() {
  return (
    <>
      <Navbar />

      <div className="blog-wrapper">
        {/* STUDENT CAREER HERO */}
        <header className="blog-header">
          <div className="hero-background-container">
            <img src={heroImg} alt="Career Counseling for Students" className="hero-image" />
            <div className="hero-overlay-gradient"></div>
          </div>
          
          <div className="hero-text-content">
            <div className="meta-info-row">
              <span className="meta-item"><FaRegCalendarAlt /> Sept 05, 2026</span>
              <span className="meta-item"><FaRegClock /> 5 Min Read</span>
            </div>
            <h1 className="main-title">
              Choosing The <span className="accent-text">Right Course</span> <br />
              For A Bright Future
            </h1>
          </div>
        </header>

        {/* MAIN LAYOUT */}
        <div className="blog-layout">
          <main className="blog-body">
            <section className="content-segment">
              <p className="intro-text">
                <span className="first-letter">C</span>hoosing the right course is one of the 
                most significant milestones in a student’s life. It is the compass that 
                sets the direction for your entire career. At SES, we believe that 
                informed decisions today lead to professional excellence tomorrow. Our 
                structured counseling helps bridge the gap between passion and profession.
              </p>
            </section>

            {/* SECTION 1 - STRENGTHS */}
            <section className="article-section">
              <h2 className="section-title">Understanding Interests & Strengths</h2>
              <p className="section-para">
                Every student is a unique blend of talent and ambition. We use a 
                personalized evaluation process to map your academic background and 
                innate skills. By identifying your core strengths early, we can 
                recommend courses that aren't just "popular" but are the right 
                fit for your personality.
              </p>
              
              <div className="roadmap-grid">
                <div className="roadmap-step">
                  <div className="step-num">01</div>
                  <h4>Skill Analysis</h4>
                  <p>Evaluating technical and soft skills.</p>
                </div>
                <div className="roadmap-step">
                  <div className="step-num">02</div>
                  <h4>Aspiration Mapping</h4>
                  <p>Aligning dreams with reality.</p>
                </div>
              </div>

              <div className="content-image-box">
                <img src={studentImg1} alt="Student Career Counseling Session" />
              </div>
            </section>

            {/* SECTION 2 - ALIGNMENT */}
            <section className="article-section">
              <h2 className="section-title">Aligning Courses with Career Goals</h2>
              <p className="section-para">
                The global job market is evolving rapidly. SES ensures that your 
                chosen course is aligned with current industry demands, future 
                employment trends, and higher education opportunities. This data-driven 
                approach helps students avoid the "degree without a destination" trap.
              </p>
              <div className="content-image-box">
                <img src={studentImg2} alt="Students discussing career pathways" />
              </div>
              <div className="highlight-quote">
                <FaLightbulb className="q-icon" />
                <p>"The best course is the one that challenges your mind while securing your future."</p>
              </div>
            </section>

            {/* VIDEO SECTION */}
            <section className="video-card">
              <div className="video-info">
                <FaRoute className="video-icon-svg" />
                <h3>The Path to Success</h3>
                <p>Watch our expert counselor explain the step-by-step process of selecting a major that guarantees long-term growth.</p>
              </div>
              <div className="iframe-wrapper">
                <iframe
                  src="https://player.cloudinary.com/embed/?public_id=counseling-1_tk7g2f&cloud_name=dqmkivr5i&fluid=true"
                  title="Course Selection Video"
                  allow="autoplay; fullscreen; encrypted-media"
                  allowFullScreen
                />
              </div>
            </section>

            <section className="conclusion-box">
              <h2 className="section-title">Conclusion</h2>
              <p className="section-para">
                A well-chosen course is the foundation of a successful life. With SES 
                by your side, you gain the clarity and confidence needed to embark on 
                your academic journey with a clear roadmap to success.
              </p>
            </section>
          </main>

          {/* SIDEBAR */}
          <aside className="blog-sidebar">
            <div className="sticky-container">
              <div className="sidebar-card insights">
                <h3 className="sidebar-label">Counseling Series</h3>
                <div className="insight-links">
                  <a href="/blogs/blog21" className="link-item">
                    <img src={studentImg1} alt="Finance" />
                    <div className="link-text">
                      <h4>Financial Planning</h4>
                      <span>Read More <FaArrowRight /></span>
                    </div>
                  </a>
                  <a href="/blogs/blog19" className="link-item">
                    <img src={blogSidebar1} alt="Loans" />
                    <div className="link-text">
                      <h4>Educational Loans</h4>
                      <span>Read More <FaArrowRight /></span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="sidebar-card expert">
                <div className="expert-avatar">
                  <img src={blogSidebar2} alt="Career Counselor" />
                </div>
                <h3>Counseling Desk</h3>
                <p>Confused between two courses? Get a free 15-minute consultation with our expert counselors.</p>
                <div className="btn-group">
                  <a href="tel:+919801066182" className="btn call"><FaPhoneAlt /> Book a Call</a>
                  <a href="https://wa.me/919801066182" className="btn wa"><FaWhatsapp /> Chat Now</a>
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
        .blog-header { position: relative; height: 450px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .hero-background-container { position: absolute; inset: 0; }
        .hero-image { width: 100%; height: 100%; object-fit: cover; }
        .hero-overlay-gradient { 
            position: absolute; inset: 0; 
            background: linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(255,102,0,0.2) 60%, #fff4ea 100%); 
        }
        .hero-text-content { position: relative; z-index: 2; text-align: center; color: white; padding: 20px; }
        .main-title { font-family: 'Orbitron', sans-serif; font-size: clamp(1.6rem, 5vw, 2.8rem); font-weight: 900; line-height: 1.2; text-shadow: 0 4px 15px rgba(0,0,0,0.3); }
        .accent-text { color: #ff6600; }
        .meta-info-row { display: flex; justify-content: center; gap: 15px; margin-bottom: 15px; }
        .meta-item { background: rgba(0,0,0,0.5); padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; border: 1px solid rgba(255,255,255,0.2); }

        /* Grid */
        .blog-layout { 
          max-width: 1200px; margin: -40px auto 0; 
          display: grid; grid-template-columns: 1fr 340px; 
          gap: 30px; padding: 0 20px 80px; 
        }

        .blog-body { background: white; padding: 45px; border-radius: 30px; box-shadow: 0 20px 50px rgba(0,0,0,0.05); }
        .intro-text { font-size: 1.15rem; line-height: 1.8; color: #444; margin-bottom: 35px; text-align: justify; }
        .first-letter { float: left; font-size: 3.5rem; font-weight: 900; color: #ff6600; line-height: 1; margin-right: 12px; font-family: 'Orbitron'; }
        
        .section-para { font-size: 1.1rem; line-height: 1.7; color: #555; margin-bottom: 25px; text-align: justify; }

        .roadmap-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 30px 0; }
        .roadmap-step { background: #fffcf9; padding: 25px; border-radius: 15px; border: 1px dashed #ff6600; position: relative; }
        .step-num { position: absolute; top: -10px; right: 20px; background: #ff6600; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 0.8rem; }
        .roadmap-step h4 { font-family: 'Orbitron'; font-size: 0.9rem; margin-bottom: 8px; color: #111; }
        .roadmap-step p { font-size: 0.85rem; color: #666; margin: 0; }

        .highlight-quote { background: #111; color: white; padding: 30px; border-radius: 20px; display: flex; align-items: center; gap: 20px; margin-top: 30px; }
        .q-icon { font-size: 2.5rem; color: #ff6600; }
        .highlight-quote p { margin: 0; font-style: italic; font-size: 1rem; line-height: 1.5; }

        .section-title { font-family: 'Orbitron', sans-serif; font-size: 1.3rem; color: #111; margin: 45px 0 20px; position: relative; padding-left: 15px; }
        .section-title::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 5px; background: #ff6600; border-radius: 10px; }

        .content-image-box { margin: 30px 0; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .content-image-box img { width: 100%; display: block; }

        .video-card { background: #fdf2f8; padding: 35px; border-radius: 25px; margin-top: 50px; border: 1px solid #ff660022; }
        .video-icon-svg { font-size: 2.5rem; color: #ff6600; margin-bottom: 15px; }
        .video-info h3 { font-family: 'Orbitron', sans-serif; color: #111; font-size: 1.2rem; margin-bottom: 10px; }
        .video-info p { font-size: 0.95rem; color: #555; }
        .iframe-wrapper { position: relative; padding-bottom: 56.25%; height: 0; border-radius: 15px; overflow: hidden; margin-top: 25px; box-shadow: 0 15px 40px rgba(0,0,0,0.15); }
        .iframe-wrapper iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }

        /* Sidebar */
        .sticky-container { position: sticky; top: 100px; display: flex; flex-direction: column; gap: 25px; }
        .sidebar-card { background: white; padding: 25px; border-radius: 25px; border: 1px solid #f0f0f0; }
        .sidebar-label { font-family: 'Orbitron'; font-size: 0.8rem; color: #ff6600; margin-bottom: 15px; }
        
        .link-item { display: flex; gap: 12px; text-decoration: none; color: inherit; align-items: center; margin-bottom: 15px; }
        .link-item img { width: 55px; height: 55px; border-radius: 10px; object-fit: cover; }
        .link-text h4 { font-size: 0.8rem; margin: 0; font-weight: 700; }
        .link-text span { font-size: 0.65rem; color: #ff6600; display: flex; align-items: center; gap: 4px; font-weight: 600; }
        
        .expert { text-align: center; background: #fff4ea; border: 1px solid #ff660033; }
        .expert-avatar { width: 75px; height: 75px; margin: 0 auto 15px; border: 2px solid #ff6600; border-radius: 50%; padding: 4px; background: white; }
        .expert-avatar img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
        .btn { padding: 10px; border-radius: 50px; text-decoration: none; color: white; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 0.85rem; margin-top: 10px; transition: 0.3s; }
        .btn.call { background: #111; }
        .btn.wa { background: #25d366; }
        .btn:hover { transform: translateY(-3px); }

        @media (max-width: 992px) {
          .blog-layout { grid-template-columns: 1fr; }
          .roadmap-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}

export default Blog22;