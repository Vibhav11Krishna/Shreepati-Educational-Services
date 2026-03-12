import React from "react";
import Navbar from "../../mobile/components/Navbar";
import Footer from "../../mobile/components/Footer";
import { 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaAward, 
  FaGraduationCap, // Replaces FaUserGrad for better compatibility
  FaChartLine, 
  FaCheckCircle,
  FaClock,         // Standard FA5 Clock
  FaRegCalendar    // Standard FA5 Calendar
} from "react-icons/fa";

// Assets
import heroImg from "../../assets/Banner27.jpg";
import benefitImg1 from "../../assets/Accreditation5.jpg";
import benefitImg2 from "../../assets/Accreditation6.jpg";

function Blog27() {
  return (
    <>
      <Navbar />

      <div className="blog-container">
        {/* PRESTIGE HERO SECTION */}
        <header className="hero-section">
          <div className="hero-bg">
            <img src={heroImg} alt="Academic Excellence" />
            <div className="hero-shade"></div>
          </div>
          
          <div className="hero-content">
            <div className="category-tag">INSTITUTIONAL GROWTH</div>
            <h1 className="title-h1">
              The Strategic Benefits <br />
              <span className="highlight">of Accreditation</span>
            </h1>
         <div className="meta-bar">
  <span><FaRegCalendar /> March 12, 2026</span>
  <span className="sep">•</span>
  <span><FaClock /> 5 Min Read</span>
</div>
          </div>
        </header>

        {/* CONTENT LAYOUT */}
        <div className="content-grid">
          <article className="article-main">
            <section className="intro-section">
              <p className="summary-text">
                <span className="drop-cap">A</span>ccreditation is more than 
                a regulatory milestone; it is a seal of quality that enhances 
                an institution’s public image and academic standing. It signals 
                to the world a relentless commitment to quality education and 
                a culture of continuous improvement.
              </p>
            </section>

            {/* SECTION 1 - STUDENT GROWTH */}
            <section className="article-part">
              <h2 className="heading-underline">Student Enrollment & Growth</h2>
              <p className="body-text">
                Accredited institutions consistently attract higher student 
                enrollment. This is driven by increased trust among parents 
                and students who seek globally recognized credentials. 
                Beyond numbers, accreditation provides the framework 
                necessary for program diversification and sustainable 
                institutional expansion.
              </p>
              
              <div className="impact-cards">
                <div className="i-card">
  <FaGraduationCap className="i-icon" />
  <h4>Global Trust</h4>
  <p>Increased student confidence and application rates.</p>
</div>
                <div className="i-card">
                  <FaChartLine className="i-icon" />
                  <h4>Scalability</h4>
                  <p>Streamlined paths for adding new academic programs.</p>
                </div>
              </div>

              <div className="image-wrapper">
                <img src={benefitImg1} alt="Student Growth and Success" />
              </div>
            </section>

            {/* SECTION 2 - EXCELLENCE */}
            <section className="article-part">
              <h2 className="heading-underline">Development & Excellence</h2>
              <p className="body-text">
                Accreditation promotes long-term strategic planning and 
                accountability. By establishing measurable benchmarks, 
                institutions can track performance improvements over time. 
                SES acts as a partner in this journey, helping you leverage 
                accreditation not just as a certificate, but as a growth catalyst.
              </p>
              <div className="image-wrapper">
                <img src={benefitImg2} alt="Institutional Excellence" />
              </div>
            </section>

            {/* VIDEO SECTION */}
            <section className="video-spotlight">
              <div className="v-info">
                <FaAward className="v-top-icon" />
                <h3>Quality Benchmarking</h3>
                <p>Understanding how accreditation elevates your institution's profile.</p>
              </div>
              <div className="v-player">
                <iframe
                  src="https://player.cloudinary.com/embed/?public_id=acreditatton-3_yjfjat&cloud_name=dqmkivr5i&fluid=true"
                  title="Accreditation Benefits Video"
                  allow="autoplay; fullscreen; encrypted-media"
                  allowFullScreen
                />
              </div>
            </section>

            <section className="conclusion">
              <h2 className="heading-underline">Conclusion</h2>
              <p className="body-text">
                In a competitive academic market, accreditation drives 
                credibility and excellence. SES provides the professional 
                oversight and expertise required to help your institution 
                achieve and sustain a legacy of accreditation success.
              </p>
            </section>
          </article>

          {/* PRESTIGE SIDEBAR */}
          <aside className="article-aside">
            <div className="sticky-sidebar">
              <div className="sidebar-box gold-box">
                <FaCheckCircle className="b-icon" />
                <h3>Value Proposition</h3>
                <ul className="benefit-list">
                  <li>Global Recognition</li>
                  <li>Financial Aid Eligibility</li>
                  <li>Transfer Credits Ease</li>
                  <li>Employer Preference</li>
                </ul>
              </div>

              <div className="sidebar-box contact-box">
                <h3>Elevate Your Status</h3>
                <p>Let our consultants guide you through the accreditation roadmap.</p>
                <div className="sidebar-actions">
                  <a href="tel:+919801066182" className="cta-link call-bg"><FaPhoneAlt /> Call</a>
                  <a href="https://wa.me/919801066182" className="cta-link wa-bg"><FaWhatsapp /> WhatsApp</a>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <Footer />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Poppins:wght@300;400;600;700&display=swap');

        .blog-container { background: #fff4ea; color: #1a1a1a; font-family: 'Poppins', sans-serif; overflow-x: hidden; }

        /* Hero Styling */
        .hero-section { position: relative; height: 500px; display: flex; align-items: center; justify-content: center; text-align: center; color: white; }
        .hero-bg { position: absolute; inset: 0; }
        .hero-bg img { width: 100%; height: 100%; object-fit: cover; }
        .hero-shade { position: absolute; inset: 0; background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 100%); }
        .hero-content { position: relative; z-index: 10; padding: 0 20px; }
        .category-tag { background: #ff6600; padding: 4px 12px; border-radius: 2px; font-family: 'Orbitron'; font-size: 0.7rem; letter-spacing: 2px; margin-bottom: 20px; display: inline-block; }
        .title-h1 { font-family: 'Orbitron'; font-size: clamp(1.8rem, 6vw, 3.2rem); margin: 0; line-height: 1.2; }
        .highlight { color: #ffb400; }
        .meta-bar { margin-top: 20px; font-size: 0.9rem; opacity: 0.8; }
        .sep { margin: 0 10px; }

        /* Content Grid */
        .content-grid { max-width: 1200px; margin: 80px auto; display: grid; grid-template-columns: 1fr 340px; gap: 50px; padding: 0 20px; }
        .article-main { background: white; padding: 60px; border-radius: 8px; box-shadow: 0 10px 40px rgba(0,0,0,0.05); }
        
        .summary-text { font-size: 1.25rem; line-height: 2; color: #444; margin-bottom: 50px; }
        .drop-cap { float: left; font-size: 4.5rem; line-height: 0.8; padding-top: 4px; padding-right: 8px; font-weight: 700; color: #ff6600; font-family: 'Orbitron'; }
        
        .heading-underline { font-family: 'Orbitron'; font-size: 1.5rem; margin: 60px 0 30px; position: relative; padding-bottom: 12px; border: none; }
        .heading-underline::after { content: ''; position: absolute; bottom: 0; left: 0; width: 60px; height: 4px; background: #ff6600; }
        
        .body-text { font-size: 1.1rem; line-height: 1.9; color: #555; margin-bottom: 30px; }

        .impact-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 40px 0; }
        .i-card { background: #fffaf5; padding: 30px; border-radius: 12px; border: 1px solid #ffe6d5; text-align: center; }
        .i-icon { font-size: 2rem; color: #ff6600; margin-bottom: 15px; }
        .i-card h4 { font-family: 'Orbitron'; font-size: 0.9rem; margin-bottom: 10px; }
        .i-card p { font-size: 0.85rem; color: #777; }

        .image-wrapper { border-radius: 12px; overflow: hidden; margin: 45px 0; box-shadow: 0 15px 35px rgba(0,0,0,0.1); }
        .image-wrapper img { width: 100%; display: block; transition: 0.5s; }
        .image-wrapper:hover img { transform: scale(1.05); }

        /* Video */
        .video-spotlight { background: #1a1a1a; padding: 50px; border-radius: 15px; color: white; margin-top: 70px; }
        .v-top-icon { font-size: 2.5rem; color: #ffb400; margin-bottom: 20px; }
        .v-info h3 { font-family: 'Orbitron'; font-size: 1.6rem; margin-bottom: 10px; }
        .v-info p { color: #aaa; margin-bottom: 40px; }
        .v-player { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px; }
        .v-player iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }

        /* Sidebar */
        .sticky-sidebar { position: sticky; top: 100px; display: flex; flex-direction: column; gap: 30px; }
        .sidebar-box { background: white; padding: 35px; border-radius: 12px; box-shadow: 0 5px 20px rgba(0,0,0,0.05); }
        .gold-box { border-top: 5px solid #ffb400; }
        .b-icon { font-size: 2.5rem; color: #ffb400; margin-bottom: 20px; }
        .benefit-list { list-style: none; padding: 0; margin-top: 20px; }
        .benefit-list li { font-size: 0.9rem; padding: 8px 0; border-bottom: 1px solid #eee; color: #555; }
        .benefit-list li:last-child { border: none; }

        .contact-box { background: #ff6600; color: white; text-align: center; }
        .sidebar-actions { display: flex; flex-direction: column; gap: 12px; margin-top: 25px; }
        .cta-link { padding: 14px; border-radius: 6px; text-decoration: none; color: white; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 10px; transition: 0.3s; }
        .call-bg { background: rgba(0,0,0,0.2); }
        .wa-bg { background: #25d366; }
        .cta-link:hover { transform: translateY(-3px); box-shadow: 0 5px 15px rgba(0,0,0,0.2); }

        @media (max-width: 992px) {
          .content-grid { grid-template-columns: 1fr; }
          .article-main { padding: 35px 20px; }
          .impact-cards { grid-template-columns: 1fr; }
          .hero-section { height: 400px; }
        }
      `}</style>
    </>
  );
}

export default Blog27;