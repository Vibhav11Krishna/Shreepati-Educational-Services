import React from "react";
import Navbar from "../../mobile/components/Navbar";
import Footer from "../../mobile/components/Footer";
import { 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaRegClock, 
  FaRegCalendarAlt, 
  FaArrowRight, 
  FaBuilding,
  FaUserTie,
  FaClipboardCheck
} from "react-icons/fa";

// Assets
import heroImg from "../../assets/Banner12.jpg";
import infraImg from "../../assets/School5.jpg";
import staffImg from "../../assets/School6.jpg";
import blogSidebar1 from "../../assets/Academic.jpg";
import blogSidebar2 from "../../assets/Admission.png";

function Blog12() {
  return (
    <>
      <Navbar />

      <div className="blog-wrapper">
        {/* PREMIUM HERO SECTION */}
        <header className="blog-header">
          <div className="hero-background-container">
            <img src={heroImg} alt="Infrastructure & Staffing" className="hero-image" />
            <div className="hero-overlay-gradient"></div>
          </div>
          
          <div className="hero-text-content">
            <div className="meta-info-row">
              <span className="meta-item"><FaRegCalendarAlt /> April 5, 2026</span>
              <span className="meta-item"><FaRegClock /> 7 Min Read</span>
            </div>
            <h1 className="main-title">
              Infrastructure & <span className="accent-text">Staffing</span> <br />
              Building Excellence
            </h1>
          </div>
        </header>

        {/* MAIN LAYOUT */}
        <div className="blog-layout">
          <main className="blog-body">
            <section className="content-segment">
              <p className="intro-text">
                <span className="first-letter">I</span>nfrastructure is far more than just bricks and 
                mortar; it is a key factor in government approvals and student confidence. Classrooms, 
                laboratories, and playgrounds must not only follow education department norms but 
                also foster a positive, safe learning environment that parents trust.
              </p>
            </section>

            {/* SECTION 1 - STAFFING */}
            <section className="article-section">
              <h2 className="section-title">Qualified Staffing & Academic Balance</h2>
              <p className="section-para">
                Hiring qualified teachers and administrative staff is essential for operational 
                success. SES guides institutions in determining precise staffing requirements, 
                verifying teacher eligibility, and maintaining the documentation necessary to 
                pass rigorous state inspections.
              </p>
              
              <div className="compliance-checklist">
                <div className="check-item">
                  <FaUserTie className="check-icon" />
                  <div>
                    <h4>Teacher Eligibility (NCTE)</h4>
                    <p>Ensuring all teaching staff meet the required B.Ed/TET qualifications.</p>
                  </div>
                </div>
                <div className="check-item">
                  <FaBuilding className="check-icon" />
                  <div>
                    <h4>Smart Infrastructure</h4>
                    <p>Planning for modern amenities like smart labs and secure playgrounds.</p>
                  </div>
                </div>
              </div>

              <div className="content-image-box">
                <img src={infraImg} alt="Modern School Infrastructure" />
              </div>
            </section>

            {/* SECTION 2 - READINESS */}
            <section className="article-section">
              <h2 className="section-title">Achieving Operational Readiness</h2>
              <p className="section-para">
                Beyond the physical campus, your internal systems—academic schedules, student 
                management software, and administrative workflows—must be synchronized. 
                SES ensures your school is fully operational and "admissions-ready" from day one.
              </p>
              <div className="content-image-box">
                <img src={staffImg} alt="Administrative Staff Planning" />
              </div>
            </section>

            {/* VIDEO SECTION */}
            <section className="video-card">
              <div className="video-info">
                <FaClipboardCheck className="video-icon-svg" />
                <h3>The Operational Blueprint</h3>
                <p>Learn how to balance high-quality infrastructure with a talented workforce to create a top-tier educational institution.</p>
              </div>
              <div className="iframe-wrapper">
                <iframe
                  src="https://player.cloudinary.com/embed/?public_id=school-3_wdw5hh&cloud_name=dqmkivr5i&fluid=true"
                  title="Infrastructure and Staffing Guide"
                  allow="autoplay; fullscreen; encrypted-media"
                  allowFullScreen
                />
              </div>
            </section>

            <section className="conclusion-box">
              <h2 className="section-title">Conclusion</h2>
              <p className="section-para">
                Strong infrastructure and qualified staff form the backbone of a successful school. 
                With SES expertise, you can build a compliant, efficient, and student-focused 
                environment that stands the test of time.
              </p>
            </section>
          </main>

          {/* STICKY SIDEBAR */}
          <aside className="blog-sidebar">
            <div className="sticky-container">
              <div className="sidebar-card insights">
                <h3 className="sidebar-label">Consultancy Series</h3>
                <div className="insight-links">
                  <a href="/blogs/blog11" className="link-item">
                    <img src={infraImg} alt="Approvals" />
                    <div className="link-text">
                      <h4>Government Approvals</h4>
                      <span>Read More <FaArrowRight /></span>
                    </div>
                  </a>
                  <a href="/blogs/blog10" className="link-item">
                    <img src={blogSidebar1} alt="Starting School" />
                    <div className="link-text">
                      <h4>How to Start a School</h4>
                      <span>Read More <FaArrowRight /></span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="sidebar-card expert">
                <div className="expert-avatar">
                  <img src={blogSidebar2} alt="SES Specialist" />
                </div>
                <h3>Building Help</h3>
                <p>Need help with campus planning or staff recruitment? Our team is ready.</p>
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

        /* Layout Grid */
        .blog-layout { 
          max-width: 1200px; margin: -50px auto 0; 
          display: grid; grid-template-columns: 1fr 340px; 
          gap: 30px; padding: 0 20px 80px; 
        }

        /* Content Body */
        .blog-body { background: white; padding: 45px; border-radius: 25px; box-shadow: 0 15px 40px rgba(0,0,0,0.06); }
        .intro-text { font-size: 1.15rem; line-height: 1.8; color: #444; margin-bottom: 30px; text-align: justify; }
        .first-letter { float: left; font-size: 3.5rem; font-weight: 900; color: #ff6600; line-height: 1; margin-right: 12px; font-family: 'Orbitron'; }
        
        .section-para { font-size: 1.1rem; line-height: 1.7; color: #555; margin-bottom: 25px; text-align: justify; }

        .compliance-checklist { background: #fdf8f4; border-radius: 20px; padding: 30px; margin: 30px 0; display: flex; flex-direction: column; gap: 20px; }
        .check-item { display: flex; gap: 20px; align-items: flex-start; }
        .check-icon { font-size: 1.5rem; color: #ff6600; margin-top: 4px; }
        .check-item h4 { margin: 0 0 5px; font-weight: 700; font-size: 1rem; }
        .check-item p { margin: 0; font-size: 0.85rem; color: #666; }

        .section-title { font-family: 'Orbitron', sans-serif; font-size: 1.4rem; color: #111; margin: 40px 0 20px; display: flex; align-items: center; gap: 15px; }
        .section-title::after { content: ''; height: 2px; flex: 1; background: #f0f0f0; }

        .content-image-box { margin: 30px 0; border-radius: 15px; overflow: hidden; box-shadow: 0 8px 25px rgba(0,0,0,0.1); }
        .content-image-box img { width: 100%; display: block; }

        .video-card { background: #111; padding: 30px; border-radius: 20px; color: white; margin-top: 40px; }
        .video-icon-svg { font-size: 2.5rem; color: #ff6600; margin-bottom: 15px; }
        .video-info h3 { font-family: 'Orbitron', sans-serif; color: #ff6600; font-size: 1.2rem; margin-bottom: 10px; }
        .iframe-wrapper { position: relative; padding-bottom: 56.25%; height: 0; border-radius: 10px; overflow: hidden; margin-top: 20px; }
        .iframe-wrapper iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }

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

export default Blog12;