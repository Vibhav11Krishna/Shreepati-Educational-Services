import React from "react";
import Navbar from "../../mobile/components/Navbar";
import Footer from "../../mobile/components/Footer";
import { 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaRegClock, 
  FaRegCalendarAlt, 
  FaArrowRight, 
  FaChalkboardTeacher, 
  FaBookOpen,
  FaUserGraduate 
} from "react-icons/fa";

// Assets
import heroImg from "../../assets/Banner8.jpg";
import collaborationImg from "../../assets/College3.jpg";
import researchImg from "../../assets/College4.jpg";
import blog1Img from "../../assets/Academic.jpg";
import blog2Img from "../../assets/Admission.png";
import blog3Img from "../../assets/Admission.png";

function Blog8() {
  return (
    <>
      <Navbar />

      <div className="blog-wrapper">
        {/* PREMIUM HERO SECTION */}
        <header className="blog-header">
          <div className="hero-background-container">
            <img src={heroImg} alt="Faculty and Course Setup" className="hero-image" />
            <div className="hero-overlay-gradient"></div>
          </div>
          
          <div className="hero-text-content">
            <div className="meta-info-row">
              <span className="meta-item"><FaRegCalendarAlt /> March 25, 2026</span>
              <span className="meta-item"><FaRegClock /> 4 Min Read</span>
            </div>
            <h1 className="main-title">
              Setting Up <span className="accent-text">Faculty & Courses</span> <br />
              for Academic Excellence
            </h1>
          </div>
        </header>

        {/* MAIN LAYOUT */}
        <div className="blog-layout">
          <main className="blog-body">
            <section className="content-segment">
              <p className="intro-text">
                <span className="first-letter">F</span>aculty expertise and curriculum design are the 
                dual engines that drive an institution's reputation. A college is only as strong 
                as its educators and the relevance of the knowledge it imparts. Proper planning at 
                this stage ensures long-term accreditation success and superior student outcomes.
              </p>
            </section>

            {/* SECTION 1 - FACULTY */}
            <section className="article-section">
              <h2 className="section-title">Faculty Recruitment & Management</h2>
              <p className="section-para">
                Hiring qualified educators goes beyond verifying degrees; it’s about finding 
                mentors who align with your institution's vision. SES assists in 
                defining faculty profiles, managing documentation, and maintaining 
                optimal staffing ratios to ensure compliance with regulatory norms.
              </p>
              
              <div className="component-grid">
                <div className="comp-card">
                  <FaChalkboardTeacher className="comp-icon" />
                  <h4>Staffing Ratios</h4>
                  <p>Ensuring compliance with teacher-student norms.</p>
                </div>
                <div className="comp-card">
                  <FaUserGraduate className="comp-icon" />
                  <h4>Profile Mapping</h4>
                  <p>Aligning expertise with specific course modules.</p>
                </div>
              </div>

              <div className="content-image-box">
                <img src={collaborationImg} alt="Faculty Training Session" />
              </div>
            </section>

            {/* SECTION 2 - COURSE DESIGN */}
            <section className="article-section">
              <h2 className="section-title">Course Design & Administration</h2>
              <p className="section-para">
                Modern curricula must be agile and aligned with university guidelines. 
                SES helps institutions design academic calendars, internal assessment 
                frameworks, and examination systems that are both rigorous and 
                transparent.
              </p>
              <div className="content-image-box">
                <img src={researchImg} alt="Curriculum Planning" />
              </div>
            </section>

            {/* VIDEO SECTION */}
            <section className="video-card">
              <div className="video-info">
                <FaBookOpen className="video-icon-svg" />
                <h3>The Curriculum Backbone</h3>
                <p>Learn how structured course alignment affects institutional growth and regulatory approvals.</p>
              </div>
              <div className="iframe-wrapper">
                <iframe
                  src="https://player.cloudinary.com/embed/?public_id=Fcaulty-course-setup-guidnace_g1msjw&cloud_name=dqmkivr5i&fluid=true"
                  title="Faculty and Course Guidance"
                  allow="autoplay; fullscreen; encrypted-media"
                  allowFullScreen
                />
              </div>
            </section>

            <section className="conclusion-box">
              <h2 className="section-title">Conclusion</h2>
              <p className="section-para">
                A robust academic foundation is built on elite faculty and structured learning. 
                SES empowers your institution to build systems that attract top-tier talent 
                and deliver the quality education students deserve.
              </p>
            </section>
          </main>

          {/* STICKY SIDEBAR */}
          <aside className="blog-sidebar">
            <div className="sticky-container">
              <div className="sidebar-card insights">
                <h3 className="sidebar-label">Related Insights</h3>
                <div className="insight-links">
                  {/* FIXED: Re-added opening tag and properly closed link */}
                  <a href="/blogs/blog6" className="link-item">
                    <img src={blog2Img} alt="Blog 6" />
                    <div className="link-text">
                      <h4>Affiliation Benefits</h4>
                      <span>Read More <FaArrowRight /></span>
                    </div>
                  </a>
                  <a href="/blogs/blog7" className="link-item">
                    <img src={blog3Img} alt="Blog 7" />
                    <div className="link-text">
                      <h4>Starting a College</h4>
                      <span>Read More <FaArrowRight /></span>
                    </div>
                  </a>
                  <a href="/blogs/blog1" className="link-item">
                    <img src={blog1Img} alt="Blog 1" />
                    <div className="link-text">
                      <h4>Learning Quality</h4>
                      <span>Read More <FaArrowRight /></span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="sidebar-card expert">
                <div className="expert-avatar">
                  <img src={blog1Img} alt="SES Academic Advisor" />
                </div>
                <h3>Optimize Your Faculty</h3>
                <p>Get expert help in staffing and curriculum design.</p>
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

        .component-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 30px 0; }
        .comp-card { background: #fdf8f4; padding: 20px; border-radius: 15px; border-bottom: 4px solid #ff6600; transition: 0.3s; }
        .comp-card:hover { transform: translateY(-5px); background: #fff; box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
        .comp-icon { font-size: 1.8rem; color: #ff6600; margin-bottom: 12px; }
        .comp-card h4 { margin: 0 0 8px; font-size: 0.95rem; font-weight: 700; }
        .comp-card p { font-size: 0.8rem; margin: 0; color: #666; line-height: 1.4; }

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
          .component-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}

export default Blog8;