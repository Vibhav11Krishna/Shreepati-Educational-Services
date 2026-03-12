import React from "react";
import Navbar from "../../mobile/components/Navbar";
import Footer from "../../mobile/components/Footer";
// Icons
import { 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaRegClock, 
  FaRegCalendarAlt, 
  FaQuoteLeft, 
  FaCheckCircle,
  FaArrowRight 
} from "react-icons/fa";

// Assets
import heroImg from "../../assets/Banner2.jpg";
import collaborationImg from "../../assets/Collaboration3.jpg";
import researchImg from "../../assets/Collaboration4.jpg";
import blog1Img from "../../assets/Academic.jpg"; // Asset for Blog 1 link
import blog2Img from "../../assets/steps.jpg";    // Avatar for sidebar
import blog3Img from "../../assets/Banner3.jpg";  // Asset for Blog 3 link

function Blog2() {
  return (
    <>
      <Navbar />

      <div className="blog-wrapper">
        {/* PREMIUM HERO SECTION */}
        <header className="blog-header">
          <div className="hero-background-container">
            <img src={heroImg} alt="Collaboration Process" className="hero-image" />
            <div className="hero-overlay-gradient"></div>
          </div>
          
          <div className="hero-text-content">
            <div className="meta-info-row">
              <span className="meta-item"><FaRegCalendarAlt /> March 14, 2026</span>
              <span className="meta-item"><FaRegClock /> 4 Min Read</span>
            </div>
            <h1 className="main-title">
              Steps to Build <br />
              <span className="accent-text">Successful Collaborations</span>
            </h1>
          </div>
        </header>

        {/* CONTENT LAYOUT */}
        <div className="blog-layout">
          <main className="blog-body">
            {/* INTRO */}
            <p className="intro-text">
              <span className="first-letter">E</span>ffective collaborations start with identifying the right partner
              whose vision and academic standards match the institution. SES helps
              institutions evaluate potential partners for long-term mutual
              benefit through a structured, data-driven framework.
            </p>

            <div className="inspirational-quote">
              <FaQuoteLeft className="q-icon" />
              <p>Great partnerships are not found; they are built through transparency, compliance, and shared vision.</p>
            </div>

            {/* SECTION 1 */}
            <section className="article-section">
              <h2 className="section-title">01. Documentation & Compliance</h2>
              <p>
                Feasibility analysis, formal agreements, and regulatory compliance
                are the bedrock of any partnership. Proper documentation ensures:
              </p>
              <ul className="benefit-list">
                <li><FaCheckCircle className="bullet-icon" /> Legally sound operational frameworks.</li>
                <li><FaCheckCircle className="bullet-icon" /> Alignment with national and international academic boards.</li>
                <li><FaCheckCircle className="bullet-icon" /> Sustainable long-term growth and resource sharing.</li>
              </ul>
              
              <div className="content-image-box">
                <img src={collaborationImg} alt="Documentation Process" />
              </div>
            </section>

            {/* SECTION 2 */}
            <section className="article-section">
              <h2 className="section-title">02. Implementation & Support</h2>
              <p>
                SES guides institutions through the entire collaboration lifecycle.
                Step-by-step support ensures that partnerships move from "paper" to 
                "practice" seamlessly, delivering measurable academic excellence.
              </p>
              <div className="content-image-box">
                <img src={researchImg} alt="Implementation Support" />
              </div>
            </section>

            {/* VIDEO BOX */}
            <section className="video-card">
              <div className="video-info">
                <h3>Visual Roadmap</h3>
                <p>Understand the critical milestones in building a global partnership.</p>
              </div>
              <div className="iframe-wrapper">
                <iframe
                  src="https://player.cloudinary.com/embed/?public_id=steps-to-build-collboration-process_mpwjyi&cloud_name=dqmkivr5i&fluid=true"
                  title="Collaboration Process Video"
                  allow="autoplay; fullscreen; encrypted-media"
                  allowFullScreen
                />
              </div>
            </section>

            {/* CONCLUSION */}
            <section className="conclusion-box">
                <h2 className="section-title">Conclusion</h2>
                <p>
                  Building collaborations requires structured planning, compliance,
                  and continuous support. SES ensures each step is carefully executed
                  to create strong and sustainable academic partnerships. By following 
                  this roadmap, institutions can bridge the gap between local potential 
                  and global recognition.
                </p>
            </section>
          </main>

          {/* STICKY SIDEBAR */}
          <aside className="blog-sidebar">
            {/* LATEST INSIGHTS IN SIDEBAR */}
            <div className="sidebar-insights-card">
                <h3 className="sidebar-title">Latest Insights</h3>
                <div className="sidebar-insight-list">
                    <a href="/blogs/blog1" className="mini-insight">
                        <img src={blog1Img} alt="Benefits of Collaboration" />
                        <div>
                            <h4>Collaboration Benefits</h4>
                            <span>Read More <FaArrowRight /></span>
                        </div>
                    </a>
                    <a href="/blogs/blog3" className="mini-insight">
                        <img src={blog3Img} alt="Regulatory Compliance" />
                        <div>
                            <h4>Compliance Guide</h4>
                            <span>Read More <FaArrowRight /></span>
                        </div>
                    </a>
                </div>
            </div>

            <div className="sidebar-contact-card">
              <div className="avatar-box">
                <img src={blog2Img} alt="SES Expert" />
              </div>
              <h3>Talk to an Expert</h3>
              <p>Ready to start your collaboration journey? Our consultants are ready.</p>
              <div className="sidebar-actions">
                <a href="tel:+919801066182" className="s-btn call"><FaPhoneAlt /> Call Now</a>
                <a href="https://wa.me/919801066182" className="s-btn wa"><FaWhatsapp /> WhatsApp</a>
              </div>
            </div>
          </aside>
        </div>

        <Footer />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Poppins:wght@300;400;600;700&display=swap');

        .blog-wrapper { background: #fff4ea; color: #333; font-family: 'Poppins', sans-serif; }

        .blog-header { position: relative; height: 500px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .hero-background-container { position: absolute; inset: 0; z-index: 1; }
        .hero-image { width: 100%; height: 100%; object-fit: cover; }
        .hero-overlay-gradient { 
            position: absolute; inset: 0; 
            background: linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.4), #fff4ea); 
        }

        .hero-text-content { position: relative; z-index: 2; text-align: center; color: white; padding: 20px; }
        .meta-info-row { display: flex; justify-content: center; gap: 20px; margin-bottom: 20px; font-size: 0.85rem; font-weight: 600; }
        .meta-item { background: rgba(255,102,0,0.2); padding: 5px 15px; border-radius: 50px; backdrop-filter: blur(5px); border: 1px solid rgba(255,255,255,0.2); }
        
        .main-title { font-family: 'Orbitron', sans-serif; font-size: clamp(2rem, 8vw, 3.5rem); font-weight: 900; line-height: 1.2; }
        .accent-text { color: #ff6600; }

        .blog-layout { max-width: 1200px; margin: -60px auto 0; display: grid; grid-template-columns: 1fr 340px; gap: 40px; padding: 0 20px 100px; position: relative; z-index: 10; }

        .blog-body { background: white; padding: 50px; border-radius: 30px; box-shadow: 0 20px 50px rgba(0,0,0,0.05); }

        .intro-text { font-size: 1.2rem; line-height: 1.8; color: #444; margin-bottom: 40px; text-align: justify; }
        .first-letter { float: left; font-size: 4rem; font-weight: 900; color: #ff6600; line-height: 1; margin-right: 10px; font-family: 'Orbitron'; }

        .inspirational-quote { margin: 40px 0; padding: 30px; background: #fff4ea; border-radius: 20px; border-left: 6px solid #ff6600; position: relative; }
        .q-icon { font-size: 2rem; color: #ff6600; opacity: 0.2; position: absolute; top: 10px; left: 10px; }
        .inspirational-quote p { font-style: italic; font-weight: 600; font-size: 1.1rem; color: #1a1a1a; padding-left: 20px; }

        .section-title { font-family: 'Orbitron', sans-serif; font-size: 1.6rem; color: #1a1a1a; margin: 40px 0 20px; display: flex; align-items: center; gap: 10px; }
        .section-title::after { content: ''; height: 2px; flex: 1; background: #eee; }

        .benefit-list { list-style: none; padding: 0; margin-bottom: 30px; }
        .benefit-list li { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; font-weight: 500; }
        .bullet-icon { color: #ff6600; font-size: 1rem; }

        .content-image-box { margin: 30px 0; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .content-image-box img { width: 100%; display: block; }

        .conclusion-box { margin-top: 50px; padding-top: 30px; border-top: 1px solid #eee; }

        .video-card { background: #1a1a1a; padding: 40px; border-radius: 25px; color: white; margin-top: 50px; }
        .video-info h3 { font-family: 'Orbitron', sans-serif; color: #ff6600; margin-bottom: 5px; }
        .iframe-wrapper { position: relative; padding-bottom: 56.25%; height: 0; border-radius: 15px; overflow: hidden; margin-top: 20px; }
        .iframe-wrapper iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }

        /* SIDEBAR STYLING */
        .blog-sidebar { position: sticky; top: 100px; height: fit-content; display: flex; flex-direction: column; gap: 30px; }
        .sidebar-insights-card { background: white; padding: 25px; border-radius: 25px; border: 1px solid #eee; }
        .sidebar-title { font-family: 'Orbitron'; font-size: 1.1rem; margin-bottom: 20px; color: #ff6600; }
        .sidebar-insight-list { display: flex; flex-direction: column; gap: 15px; }
        .mini-insight { display: flex; align-items: center; gap: 15px; text-decoration: none; color: inherit; transition: 0.3s; }
        .mini-insight img { width: 60px; height: 60px; border-radius: 10px; object-fit: cover; }
        .mini-insight h4 { font-size: 0.9rem; margin: 0; font-weight: 700; }
        .mini-insight span { font-size: 0.75rem; color: #ff6600; font-weight: 600; display: flex; align-items: center; gap: 4px; }
        .mini-insight:hover { transform: translateX(5px); }

        .sidebar-contact-card { background: white; padding: 35px 25px; border-radius: 25px; text-align: center; border: 1px solid #eee; box-shadow: 0 10px 30px rgba(0,0,0,0.03); }
        .avatar-box { width: 80px; height: 80px; margin: 0 auto 20px; border-radius: 50%; border: 3px solid #ff6600; padding: 3px; }
        .avatar-box img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
        .sidebar-actions { display: flex; flex-direction: column; gap: 10px; }
        .s-btn { display: flex; align-items: center; justify-content: center; gap: 10px; padding: 12px; border-radius: 50px; text-decoration: none; color: white; font-weight: 700; transition: 0.3s; }
        .s-btn.call { background: #ff6600; }
        .s-btn.wa { background: #25d366; }

        @media (max-width: 992px) {
          .blog-layout { grid-template-columns: 1fr; }
          .blog-sidebar { position: static; }
          .blog-body { padding: 30px 20px; }
        }
      `}</style>
    </>
  );
}

export default Blog2;