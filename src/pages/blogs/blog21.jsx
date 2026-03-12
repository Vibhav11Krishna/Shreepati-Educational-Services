import React from "react";
import Navbar from "../../mobile/components/Navbar";
import Footer from "../../mobile/components/Footer";
import { 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaRegClock, 
  FaRegCalendarAlt, 
  FaArrowRight, 
  FaWallet,
  FaBalanceScale,
  FaPiggyBank
} from "react-icons/fa";

// Assets
import heroImg from "../../assets/Banner21.jpg";
import finImg1 from "../../assets/Education5.jpg";
import finImg2 from "../../assets/Education6.jpg";
import blogSidebar1 from "../../assets/Academic.jpg";
import blogSidebar2 from "../../assets/Admission.png";

function Blog21() {
  return (
    <>
      <Navbar />

      <div className="blog-wrapper">
        {/* STRATEGIC FINANCE HERO */}
        <header className="blog-header">
          <div className="hero-background-container">
            <img src={heroImg} alt="Institutional Financial Planning" className="hero-image" />
            <div className="hero-overlay-gradient"></div>
          </div>
          
          <div className="hero-text-content">
            <div className="meta-info-row">
              <span className="meta-item"><FaRegCalendarAlt /> August 20, 2026</span>
              <span className="meta-item"><FaRegClock /> 7 Min Read</span>
            </div>
            <h1 className="main-title">
              Strategic <span className="accent-text">Financial Planning</span> <br />
              For Sustainable Institutions
            </h1>
          </div>
        </header>

        {/* MAIN LAYOUT */}
        <div className="blog-layout">
          <main className="blog-body">
            <section className="content-segment">
              <p className="intro-text">
                <span className="first-letter">E</span>ffective financial management is the 
                foundation upon which academic excellence is built. In an era of rising 
                operational costs and technological shifts, institutions must move beyond 
                simple bookkeeping to advanced financial forecasting. Strategic planning 
                ensures that your vision for growth remains solvent and stress-free.
              </p>
            </section>

            {/* SECTION 1 - BUDGETING */}
            <section className="article-section">
              <h2 className="section-title">Budgeting & Resource Allocation</h2>
              <p className="section-para">
                SES supports institutions in transitioning from traditional budgeting to 
                **Zero-Based Budgeting (ZBB)**. We help you scrutinize every expense, 
                ensuring that funds are prioritized for high-impact areas like research 
                grants, digital infrastructure, and student support services.
              </p>
              
              <div className="finance-grid">
                <div className="stat-box">
                  <FaWallet className="s-icon" />
                  <h4>OpEx Control</h4>
                  <p>Streamlining operational costs without affecting quality.</p>
                </div>
                <div className="stat-box">
                  <FaBalanceScale className="s-icon" />
                  <h4>Risk Mitigation</h4>
                  <p>Building reserves for market and regulatory fluctuations.</p>
                </div>
              </div>

              <div className="content-image-box">
                <img src={finImg1} alt="Budget Planning Dashboard" />
              </div>
            </section>

            {/* SECTION 2 - STABILITY */}
            <section className="article-section">
              <h2 className="section-title">Long-Term Financial Stability</h2>
              <p className="section-para">
                Sustainability is about the next decade, not just the next semester. 
                Our consultancy focuses on creating diversified revenue streams—including 
                alumni funds, corporate partnerships, and auxiliary services—to 
                strengthen your balance sheet against economic volatility.
              </p>
              <div className="content-image-box">
                <img src={finImg2} alt="Long term Growth Chart" />
              </div>
            </section>

            {/* VIDEO SECTION */}
            <section className="video-card">
              <div className="video-info">
                <FaPiggyBank className="video-icon-svg" />
                <h3>Financial Literacy for Trustees</h3>
                <p>A deep dive into institutional budgeting, resource optimization, and the pillars of sustainable development.</p>
              </div>
              <div className="iframe-wrapper">
                <iframe
                  src="https://player.cloudinary.com/embed/?public_id=loans-3_pehdka&cloud_name=dqmkivr5i&fluid=true"
                  title="Financial Planning Video"
                  allow="autoplay; fullscreen; encrypted-media"
                  allowFullScreen
                />
              </div>
            </section>

            <section className="conclusion-box">
              <h2 className="section-title">Conclusion</h2>
              <p className="section-para">
                Clarity in finances leads to confidence in leadership. By partnering 
                with SES, your institution gains a dedicated financial advisory desk 
                committed to turning your academic roadmap into a fiscally 
                responsible reality.
              </p>
            </section>
          </main>

          {/* SIDEBAR */}
          <aside className="blog-sidebar">
            <div className="sticky-container">
              <div className="sidebar-card insights">
                <h3 className="sidebar-label">Strategy Series</h3>
                <div className="insight-links">
                  <a href="/blogs/blog20" className="link-item">
                    <img src={finImg1} alt="HR" />
                    <div className="link-text">
                      <h4>HR Solutions</h4>
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
                  <img src={blogSidebar2} alt="Strategic Consultant" />
                </div>
                <h3>Strategy Desk</h3>
                <p>Need a custom financial audit or a 5-year growth budget? Connect with our senior financial consultants today.</p>
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
        .blog-header { position: relative; height: 500px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .hero-background-container { position: absolute; inset: 0; }
        .hero-image { width: 100%; height: 100%; object-fit: cover; }
        .hero-overlay-gradient { 
            position: absolute; inset: 0; 
            background: linear-gradient(180deg, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.5) 60%, #fff4ea 100%); 
        }
        .hero-text-content { position: relative; z-index: 2; text-align: center; color: white; padding: 20px; }
        .main-title { font-family: 'Orbitron', sans-serif; font-size: clamp(1.8rem, 6vw, 3rem); font-weight: 900; line-height: 1.1; letter-spacing: -1px; }
        .accent-text { color: #ff6600; text-shadow: 0 0 20px rgba(255,102,0,0.4); }
        .meta-info-row { display: flex; justify-content: center; gap: 15px; margin-bottom: 20px; }
        .meta-item { background: rgba(255,255,255,0.1); padding: 5px 15px; border-radius: 50px; font-size: 0.75rem; border: 1px solid rgba(255,255,255,0.2); backdrop-filter: blur(5px); }

        /* Layout */
        .blog-layout { 
          max-width: 1200px; margin: -60px auto 0; 
          display: grid; grid-template-columns: 1fr 350px; 
          gap: 30px; padding: 0 20px 80px; 
        }

        .blog-body { background: white; padding: 50px; border-radius: 30px; box-shadow: 0 25px 60px rgba(0,0,0,0.08); }
        .intro-text { font-size: 1.2rem; line-height: 1.9; color: #334155; margin-bottom: 40px; text-align: justify; }
        .first-letter { float: left; font-size: 4rem; font-weight: 900; color: #ff6600; line-height: 1; margin-right: 15px; font-family: 'Orbitron'; }

        .finance-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 25px; margin: 40px 0; }
        .stat-box { border: 1px solid #e2e8f0; padding: 30px; border-radius: 20px; transition: 0.3s; background: #f8fafc; }
        .stat-box:hover { border-color: #ff6600; transform: translateY(-5px); }
        .s-icon { font-size: 2.2rem; color: #ff6600; margin-bottom: 20px; }
        .stat-box h4 { font-family: 'Orbitron'; font-size: 0.9rem; margin-bottom: 10px; color: #0f172a; }
        .stat-box p { font-size: 0.85rem; color: #64748b; margin: 0; line-height: 1.6; }

        .section-title { font-family: 'Orbitron', sans-serif; font-size: 1.4rem; color: #0f172a; margin: 50px 0 25px; display: flex; align-items: center; gap: 20px; }
        .section-title::after { content: ''; height: 2px; flex: 1; background: linear-gradient(90deg, #e2e8f0, transparent); }

        .content-image-box { margin: 35px 0; border-radius: 20px; overflow: hidden; box-shadow: 0 12px 30px rgba(0,0,0,0.12); }
        .content-image-box img { width: 100%; display: block; }

        .video-card { background: #0f172a; padding: 40px; border-radius: 25px; color: white; margin-top: 50px; border: 1px solid rgba(255,102,0,0.3); }
        .video-icon-svg { font-size: 3rem; color: #ff6600; margin-bottom: 20px; }
        .video-info h3 { font-family: 'Orbitron', sans-serif; color: #ff6600; font-size: 1.4rem; margin-bottom: 12px; }
        .iframe-wrapper { position: relative; padding-bottom: 56.25%; height: 0; border-radius: 15px; overflow: hidden; margin-top: 25px; border: 2px solid #1e293b; }
        .iframe-wrapper iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }

        /* Sidebar */
        .sticky-container { position: sticky; top: 110px; display: flex; flex-direction: column; gap: 30px; }
        .sidebar-card { background: white; padding: 30px; border-radius: 25px; border: 1px solid #f1f5f9; box-shadow: 0 10px 30px rgba(0,0,0,0.04); }
        .sidebar-label { font-family: 'Orbitron'; font-size: 0.8rem; color: #64748b; margin-bottom: 20px; letter-spacing: 1px; }
        
        .link-item { display: flex; gap: 15px; text-decoration: none; color: inherit; align-items: center; margin-bottom: 20px; }
        .link-item img { width: 60px; height: 60px; border-radius: 12px; object-fit: cover; }
        .link-text h4 { font-size: 0.85rem; margin: 0; font-weight: 700; color: #1e293b; }
        .link-text span { font-size: 0.7rem; color: #ff6600; display: flex; align-items: center; gap: 5px; margin-top: 4px; font-weight: 600; }
        
        .expert { text-align: center; background: linear-gradient(145deg, #ffffff, #fff4ea); }
        .expert-avatar { width: 80px; height: 80px; margin: 0 auto 15px; border: 3px solid #ff6600; border-radius: 50%; padding: 4px; background: white; }
        .expert-avatar img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
        .btn { padding: 12px; border-radius: 50px; text-decoration: none; color: white; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 10px; font-size: 0.9rem; margin-top: 15px; transition: 0.3s; }
        .btn.call { background: #0f172a; }
        .btn.wa { background: #25d366; }
        .btn:hover { transform: scale(1.03); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }

        @media (max-width: 992px) {
          .blog-layout { grid-template-columns: 1fr; margin-top: -40px; }
          .blog-body { padding: 35px 20px; }
          .finance-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}

export default Blog21;