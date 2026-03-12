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
  FaChevronRight,
  FaArrowRight 
} from "react-icons/fa";

// Assets
import heroImg from "../../assets/Banner1.jpg";
import collaborationImg from "../../assets/Collaboration1.jpg";
import researchImg from "../../assets/Collaboration2.jpg";
import blog1 from "../../assets/Academic.jpg"; 
import blog2 from "../../assets/Banner2.jpg"; 
import blog3 from "../../assets/Banner3.jpg"; 

function Blog1() {
  return (
    <>
      <Navbar />

      <div className="blog-wrapper">
        {/* PREMIUM HERO SECTION */}
        <header className="blog-header">
          <div className="hero-background-container">
            <img src={heroImg} alt="Header" className="hero-image" />
            <div className="hero-overlay-gradient"></div>
          </div>
          
          <div className="hero-text-content">
            <div className="meta-info-row">
              <span className="meta-item"><FaRegCalendarAlt /> March 12, 2026</span>
              <span className="meta-item"><FaRegClock /> 5 Min Read</span>
            </div>
            <h1 className="main-title">
              Benefits of Academic <br />
              <span className="accent-text">Collaborations</span>
            </h1>
          </div>
        </header>

        {/* CONTENT LAYOUT */}
        <div className="blog-layout">
          <main className="blog-body">
            {/* INTRO */}
            <p className="intro-text">
              <span className="first-letter">A</span>cademic collaboration allows educational institutions to build
              meaningful partnerships with universities, academic boards, and
              industry organizations. These collaborations improve academic
              quality, credibility, and access to resources.
            </p>

            <div className="inspirational-quote">
              <FaQuoteLeft className="q-icon" />
              <p>Strengthening institutions through innovation, global engagement, and shared success.</p>
            </div>

            {/* SECTION 1 */}
            <section className="article-section">
              <h2 className="section-title">Why Collaboration Matters?</h2>
              <p>
                Institutions operating independently often face challenges such as
                limited exposure and outdated curriculum. Collaboration addresses these gaps by:
              </p>
              <ul className="benefit-list">
                <li><FaChevronRight className="bullet-icon" /> Enhancing teaching quality through global standards.</li>
                <li><FaChevronRight className="bullet-icon" /> Aligning curriculum with current industry needs.</li>
                <li><FaChevronRight className="bullet-icon" /> Providing students with practical, hands-on learning.</li>
              </ul>
              
              <div className="content-image-box">
                <img src={collaborationImg} alt="Partnership" />
              </div>
            </section>

            {/* SECTION 2 */}
            <section className="article-section">
              <h2 className="section-title">The SES Strategic Approach</h2>
              <p>
                At Shreepati Educational Services (SES), we ensure that every partnership is
                practical, goal-oriented, and transparent. We help you navigate the complexities 
                of compliance to ensure long-term growth.
              </p>
              <div className="content-image-box">
                <img src={researchImg} alt="Research" />
              </div>
            </section>

            {/* VIDEO BOX */}
            <section className="video-card">
              <div className="video-info">
                <h3>Visual Insight</h3>
                <p>A breakdown of how collaborations drive excellence.</p>
              </div>
              <div className="iframe-wrapper">
                <iframe
                  src="https://player.cloudinary.com/embed/?public_id=Bebefits-of-collaboration-guidance_j4qb0w&cloud_name=dqmkivr5i&fluid=true"
                  title="SES Video"
                  allow="autoplay; fullscreen; encrypted-media"
                  allowFullScreen
                />
              </div>
            </section>

            {/* CONCLUSION SECTION */}
            <section className="conclusion-box">
                <h2 className="section-title">Conclusion</h2>
                <p>
                  In conclusion, academic collaborations are no longer optional but a necessity for 
                  institutions aiming for global excellence. By partnering with the right organizations 
                  and maintaining a strategic approach, your institution can provide superior education 
                  while ensuring sustainable growth and regulatory compliance.
                </p>
            </section>
          </main>

          {/* STICKY SIDEBAR */}
          <aside className="blog-sidebar">
            {/* LATEST INSIGHTS IN SIDEBAR */}
            <div className="sidebar-insights-card">
                <h3 className="sidebar-title">Latest Insights</h3>
                <div className="sidebar-insight-list">
                    <a href="/blogs/blog2" className="mini-insight">
                        <img src={blog2} alt="Blog 2" />
                        <div>
                            <h4>Building Success</h4>
                            <span>Read More <FaArrowRight /></span>
                        </div>
                    </a>
                    <a href="/blogs/blog3" className="mini-insight">
                        <img src={blog3} alt="Blog 3" />
                        <div>
                            <h4>Compliance Guide</h4>
                            <span>Read More <FaArrowRight /></span>
                        </div>
                    </a>
                </div>
            </div>

            {/* CONTACT CARD */}
            <div className="sidebar-contact-card">
              <div className="avatar-box">
                <img src={blog1} alt="Consultant" />
              </div>
              <h3>Consult an Expert</h3>
              <p>Get personalized guidance for your institutional setup.</p>
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
        .meta-info-row { display: flex; justify-content: center; gap: 20px; margin-bottom: 20px; font-size: 0.85rem; font-weight: 600; letter-spacing: 1px; }
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
        .bullet-icon { color: #ff6600; font-size: 0.8rem; }

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

export default Blog1;