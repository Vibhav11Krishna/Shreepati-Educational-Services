import React from "react";
import Navbar from "../../mobile/components/Navbar";
import Footer from "../../mobile/components/Footer";
import { 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaRegClock, 
  FaRegCalendarAlt, 
  FaArrowRight, 
  FaChartLine,
  FaFileInvoiceDollar,
  FaCogs
} from "react-icons/fa";

// Assets
import heroImg from "../../assets/Banner19.jpg";
import loanImg1 from "../../assets/Education1.jpg";
import loanImg2 from "../../assets/Education2.jpg";
import blogSidebar1 from "../../assets/Academic.jpg";
import blogSidebar2 from "../../assets/Admission.png";

function Blog19() {
  return (
    <>
      <Navbar />

      <div className="blog-wrapper">
        {/* FINANCIAL HERO SECTION */}
        <header className="blog-header">
          <div className="hero-background-container">
            <img src={heroImg} alt="Institutional Funding" className="hero-image" />
            <div className="hero-overlay-gradient"></div>
          </div>
          
          <div className="hero-text-content">
            <div className="meta-info-row">
              <span className="meta-item"><FaRegCalendarAlt /> June 05, 2026</span>
              <span className="meta-item"><FaRegClock /> 5 Min Read</span>
            </div>
            <h1 className="main-title">
              Securing <span className="accent-text">Educational Loans</span> <br />
              Institutional Growth Funding
            </h1>
          </div>
        </header>

        {/* MAIN LAYOUT */}
        <div className="blog-layout">
          <main className="blog-body">
            <section className="content-segment">
              <p className="intro-text">
                <span className="first-letter">S</span>ustaining a modern educational institution 
                requires more than just academic excellence; it demands robust infrastructure 
                and advanced technology. Securing the right funding is a strategic necessity 
                to bridge the gap between vision and operational reality without 
                compromising financial stability.
              </p>
            </section>

            {/* SECTION 1 - PLANNING */}
            <section className="article-section">
              <h2 className="section-title">Loan Planning & Documentation</h2>
              <p className="section-para">
                Financial institutions require deep transparency. SES assists colleges 
                and universities in drafting comprehensive project feasibility reports, 
                audited financial statements, and compliance checklists. Our goal is 
                to present your institution as a low-risk, high-impact investment to 
                major lenders.
              </p>
              
              <div className="financial-milestones">
                <div className="milestone-card">
                  <FaFileInvoiceDollar className="m-icon" />
                  <h4>Audit Ready</h4>
                  <p>Organizing compliance records for seamless bank scrutiny.</p>
                </div>
                <div className="milestone-card">
                  <FaChartLine className="m-icon" />
                  <h4>ROI Projections</h4>
                  <p>Data-driven forecasting to justify large scale investments.</p>
                </div>
              </div>

              <div className="content-image-box">
                <img src={loanImg1} alt="Financial Planning Session" />
              </div>
            </section>

            {/* SECTION 2 - UTILIZATION */}
            <section className="article-section">
              <h2 className="section-title">Efficient Funding Utilization</h2>
              <p className="section-para">
                Securing the loan is only half the battle. SES provides a roadmap for 
                structured fund utilization, ensuring that capital is deployed toward 
                revenue-generating assets like specialized laboratories, smart 
                classrooms, and accreditation-linked infrastructure.
              </p>
              <div className="content-image-box">
                <img src={loanImg2} alt="Modern Campus Infrastructure" />
              </div>
            </section>

            {/* VIDEO SECTION */}
            <section className="video-card">
              <div className="video-info">
                <FaCogs className="video-icon-svg" />
                <h3>Financial Growth Strategy</h3>
                <p>Learn how to navigate the documentation requirements and selection process for institutional development loans.</p>
              </div>
              <div className="iframe-wrapper">
                <iframe
                  src="https://player.cloudinary.com/embed/?public_id=loans-1_lv6xq6&cloud_name=dqmkivr5i&fluid=true"
                  title="Loan Support Video"
                  allow="autoplay; fullscreen; encrypted-media"
                  allowFullScreen
                />
              </div>
            </section>

            <section className="conclusion-box">
              <h2 className="section-title">Conclusion</h2>
              <p className="section-para">
                With SES as your financial advisory partner, educational loans 
                transform from a liability into a growth catalyst. We ensure your 
                funding journey is transparent, compliant, and perfectly aligned 
                with your long-term expansion goals.
              </p>
            </section>
          </main>

          {/* SIDEBAR */}
          <aside className="blog-sidebar">
            <div className="sticky-container">
              <div className="sidebar-card insights">
                <h3 className="sidebar-label">Financial Series</h3>
                <div className="insight-links">
                  <a href="/blogs/blog14" className="link-item">
                    <img src={loanImg1} alt="Planning" />
                    <div className="link-text">
                      <h4>Project Planning</h4>
                      <span>Read More <FaArrowRight /></span>
                    </div>
                  </a>
                  <a href="/blogs/blog15" className="link-item">
                    <img src={blogSidebar1} alt="Compliance" />
                    <div className="link-text">
                      <h4>Govt. Compliance</h4>
                      <span>Read More <FaArrowRight /></span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="sidebar-card expert">
                <div className="expert-avatar">
                  <img src={blogSidebar2} alt="Financial Consultant" />
                </div>
                <h3>Funding Desk</h3>
                <p>Ready to scale your institution's infrastructure? Consult our financial experts for a feasibility review.</p>
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
            background: linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, #fff4ea 100%); 
        }
        .hero-text-content { position: relative; z-index: 2; text-align: center; color: white; padding: 20px; }
        .main-title { font-family: 'Orbitron', sans-serif; font-size: clamp(1.6rem, 5vw, 2.8rem); font-weight: 900; line-height: 1.2; }
        .accent-text { color: #ff6600; }
        .meta-info-row { display: flex; justify-content: center; gap: 15px; margin-bottom: 15px; }
        .meta-item { background: rgba(255,102,0,0.3); padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; border: 1px solid rgba(255,255,255,0.1); }

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

        .financial-milestones { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 30px 0; }
        .milestone-card { background: #fdf8f4; padding: 25px; border-radius: 20px; text-align: center; border: 1px solid #fae1d0; }
        .m-icon { font-size: 2rem; color: #ff6600; margin-bottom: 15px; }
        .milestone-card h4 { margin-bottom: 8px; font-size: 1rem; color: #111; }
        .milestone-card p { font-size: 0.8rem; color: #666; margin: 0; }

        .section-title { font-family: 'Orbitron', sans-serif; font-size: 1.3rem; color: #111; margin: 40px 0 20px; display: flex; align-items: center; gap: 15px; }
        .section-title::after { content: ''; height: 2px; flex: 1; background: #f0f0f0; }

        .content-image-box { margin: 30px 0; border-radius: 15px; overflow: hidden; box-shadow: 0 8px 25px rgba(0,0,0,0.1); }
        .content-image-box img { width: 100%; display: block; }

        .video-card { background: #0f172a; padding: 30px; border-radius: 20px; color: white; margin-top: 40px; }
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
          .financial-milestones { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}

export default Blog19;