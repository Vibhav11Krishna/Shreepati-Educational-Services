import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../mobile/components/Footer";
import Navbar from "../mobile/components/Navbar";
// Image imports
import banner from "../assets/bannerhub.jpg";
import blog1 from "../assets/Academic.jpg";
import blog2 from "../assets/Steps.jpg";
import blog3 from "../assets/Regulatory.jpg";
import blog4 from "../assets/University.jpg";
import blog5 from "../assets/Mistakes.jpg";
import blog6 from "../assets/Credibility.jpg";
import blog7 from "../assets/Starting.jpg";
import blog8 from "../assets/Faculty.jpg";
import blog9 from "../assets/Requirements.jpg";
import blog10 from "../assets/Estabilish.jpg";
import blog11 from "../assets/Government.jpg";
import blog12 from "../assets/Staffing.jpg";
import blog13 from "../assets/Report.jpg";
import blog14 from "../assets/Planning.jpg";
import blog15 from "../assets/Support.jpg";
import blog16 from "../assets/Abroad.jpg";
import blog17 from "../assets/Selecting.jpg";
import blog18 from "../assets/Visa.jpg";
import blog19 from "../assets/Securing.jpg";
import blog20 from "../assets/Guidance.jpg";
import blog21 from "../assets/Saving.jpg";
import blog22 from "../assets/Course.jpg";
import blog23 from "../assets/Counseling.jpg";
import blog24 from "../assets/Decisions.jpg";
import blog25 from "../assets/Assistance.jpg";
import blog26 from "../assets/Preparation.jpg";
import blog27 from "../assets/Benefits.jpg";
import blog28 from "../assets/Efficient.jpg";
import blog29 from "../assets/Solutions.jpg";
import blog30 from "../assets/Compilance.jpg";

const Allinsights = () => {
  const [filter, setFilter] = useState("All");

  const allBlogs = [
    { id: 1, title: "Benefits of Academic Collaborations", desc: "How partnerships with universities and industry enhance learning and credibility.", image: blog1, category: "Collaboration", link: "../blogs/blog1", date: "March 12, 2026" },
    { id: 2, title: "Steps to build successful collaborations", desc: "Key steps institutions must take for effective , growing and long lasting partnership.", image: blog2, category: "Collaboration", link: "../blogs/blog2", date: "March 10, 2026" },
    { id: 3, title: "Regulatory Compliance in Collaborations", desc: "Real Examples of SES guided and suggested collaborations that created impact.", image: blog3, category: "Collaboration", link: "../blogs/blog3", date: "March 05, 2026" },
    { id: 4, title: "How to get Affiliation from universities & Board", desc: "Step-by-step guidance to establish schools with approvals and documentation.", image: blog4, category: "Affiliation", link: "../blogs/blog4", date: "March 02, 2026" },
    { id: 5, title: "Common Affiliation Mistakes & How to Avoid Them", desc: "Avoid errors that can delay approval with SES expert guidance", image: blog5, category: "Affiliation", link: "../blogs/blog5", date: "Feb 28, 2026" },
    { id: 6, title: "Benefits of Board & University Affiliation", desc: "Why affiliation increases credibility and opportunities for institutions", image: blog6, category: "Affiliation", link: "../blogs/blog6", date: "Feb 25, 2026" },
    { id: 7, title: "The Blueprint for Starting a New College", desc: "Key steps from planning to infrastructure and staff setup", image: blog7, category: "Institutions", link: "../blogs/blog7", date: "Feb 20, 2026" },
    { id: 8, title: "Setting Up Faculty & Courses for Academic Excellence", desc: "SES guidance on hiring, course design, and administration", image: blog8, category: "Institutions", link: "../blogs/blog8", date: "Feb 15, 2026" },
    { id: 9, title: "Regulatory Compliance Made Effortless", desc: "Meet all legal and academic requirements smoothly", image: blog9, category: "Institutions", link: "../blogs/blog9", date: "Feb 10, 2026" },
    { id: 10, title: "How to Start a School The SES Blueprint", desc: "Step by step guidance to estabilish a fully compliant school", image: blog10, category: "Schools", link: "../blogs/blog10", date: "Feb 05, 2026" },
    { id: 11, title: "Government Approvals Simplified for Schools", desc: "SES helps secure all necessary state or central approvals", image: blog11, category: "Schools", link: "../blogs/blog11", date: "Feb 15, 2026" },
    { id: 12, title: "Infrastructure & Staffing Building Excellence", desc: "Guidance on building classrooms and hiring qualified staff", image: blog12, category: "Schools", link: "../blogs/blog12", date: "Feb 10, 2026" },
    { id: 13, title: "The Strategic Power of Detailed Project Reports", desc: "Detailed Project Report helps plan finances, academics", image: blog13, category: "Reports", link: "../blogs/blog13", date: "Feb 05, 2026" },
    { id: 14, title: "Planning Educational Projects From Vision to Execution", desc: "How SES ensures smooth execution from concept to completion", image: blog14, category: "Reports", link: "../blogs/blog14", date: "Feb 15, 2026" },
    { id: 15, title: "Expert Consultancy Support & Institutional Growth", desc: "Avoid mistakes and get professional guidance for institutional Growth", image: blog15, category: "Reports", link: "../blogs/blog15", date: "Feb 10, 2026" },
    { id: 16, title: "How To Study Abroad Your Global Career Roadmap", desc: "Step by step guidance for International and admission visa processes", image: blog16, category: "Overseas", link: "../blogs/blog16", date: "Feb 05, 2026" },
    { id: 17, title: "Selecting The Right University A Strategic Choice", desc: "SES helps students pick programs aligned with their carrer goals", image: blog17, category: "Overseas", link: "../blogs/blog17", date: "Feb 15, 2026" },
    { id: 18, title: "Visa Support Made Easy Precision & Compliance", desc: "Expert Help for documentation, applications and approvals", image: blog18, category: "Overseas", link: "../blogs/blog18", date: "Feb 10, 2026" },
    { id: 19, title: "Securing Educational Loans Institutional Growth Funding", desc: "How SES helps institutions access funding efficiently", image: blog19, category: "Loans", link: "../blogs/blog19", date: "Feb 05, 2026" },
    { id: 20, title: "Staffing & HR Solutions Building Your Core Team", desc: "Expert guidance on faculty and administrative HR systems", image: blog20, category: "Loans", link: "../blogs/blog20", date: "Feb 15, 2026" },
    { id: 21, title: "Strategic Financial Planning For Sustainable Institutions", desc: "Plan Budgets and resources efficiently with SES consultancy", image: blog21, category: "Loans", link: "../blogs/blog21", date: "Feb 10, 2026" },
    { id: 22, title: "Choosing The Right Course For A Bright Future", desc: "SES guides students to select courses aligned with their carrer goals", image: blog22, category: "Domestic", link: "../blogs/blog22", date: "Feb 05, 2026" },
    { id: 23, title: "The Power Of Academic Counseling Beyond Just Advice", desc: "Personalized guidance to enhance academic success and confidence", image: blog23, category: "Domestic", link: "../blogs/blog23", date: "Feb 15, 2026" },
    { id: 24, title: "Informed Decisions & Right Career Paths", desc: "Helping students plan carrer paths with clarity and direction", image: blog24, category: "Domestic", link: "../blogs/blog24", date: "Feb 10, 2026" },
    { id: 25, title: "The Critical Importance Of Academic Accreditation", desc: "How national & international accreditation boosts credibility", image: blog25, category: "Accreditation", link: "../blogs/blog25", date: "Feb 05, 2026" },
    { id: 26, title: "Preparing for Accreditation Success", desc: "SES ensures all documentation and compilance are ready for inspection", image: blog26, category: "Accreditation", link: "../blogs/blog26", date: "Feb 15, 2026" },
    { id: 27, title: "The Strategic Benefits of Accreditation", desc: "Increase reputation, student enrollement and institutional growth", image: blog27, category: "Accreditation", link: "../blogs/blog27", date: "Feb 10, 2026" },
    { id: 28, title: "Efficient Record Management Systems", desc: "We helps institutions manage academic, administrative, data securely", image: blog28, category: "Data", link: "../blogs/blog28", date: "Feb 05, 2026" },
    { id: 29, title: "Digital Solutions for Schools & Colleges", desc: "Use techonology to store, track, and retrieve the data records efficiently", image: blog29, category: "Data", link: "../blogs/blog29", date: "Feb 15, 2026" },
    { id: 30, title: "Compliance, Organization & Operations", desc: "Maintain regulatory compilance while streamlining operations", image: blog30, category: "Data", link: "../blogs/blog30", date: "Feb 10, 2026" },
    
  ];

  const categories = ["All", ...new Set(allBlogs.map(blog => blog.category))];

  const filteredBlogs = filter === "All" 
    ? allBlogs 
    : allBlogs.filter(blog => blog.category === filter);

  return (
    <>
      <Navbar />

      <div className="all-insights-root">
        {/* HEADER SECTION */}
        <header className="insights-header">
          <div className="header-overlay"></div>
          <div className="header-content">
            <h1 className="hero-title">
              <span className="orange-text">KNOWLEDGE</span> <span className="red-text">HUB</span>
            </h1>
            <p className="hero-subtitle">Comprehensive guides and expert perspectives on institutional excellence.</p>
            <div className="accent-bar"></div>
          </div>
        </header>

        {/* MAIN CONTENT AREA */}
        <main className="content-container">
          {/* CATEGORY FILTER BAR */}
          <div className="filter-wrapper">
            {categories.map((cat, idx) => (
              <button 
                key={idx} 
                className={`filter-tag ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* INSIGHTS GRID */}
          <div className="insights-modern-grid">
            {filteredBlogs.map((blog) => (
              <Link to={blog.link} key={blog.id} className="modern-insight-card">
                <div className="image-box">
                  <img src={blog.image} alt={blog.title} />
                  <div className="cat-tag">{blog.category}</div>
                </div>
                
                <div className="text-box">
                  <div className="card-top-meta">
                      <span className="date-label">{blog.date}</span>
                  </div>
                  <h3>{blog.title}</h3>
                  <p>{blog.desc}</p>
                  
                  <div className="card-action">
                      <span className="action-label">Read Full Insight</span>
                      <div className="action-circle">→</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>

        <Footer />

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Poppins:wght@300;400;600&display=swap');

          .all-insights-root {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: #fdf6f0;
            font-family: 'Poppins', sans-serif;
            color: #1a1a1a;
          }

          .insights-header {
            position: relative;
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            background: url(${banner}) center/cover no-repeat;
            flex-shrink: 0;
            margin-bottom: 60px;
          }

          .header-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.5), #fdf6f0);
            z-index: 1;
          }

          .header-content { position: relative; z-index: 2; padding: 0 20px; }

          .hero-title {
            font-family: 'Orbitron', sans-serif;
            font-size: clamp(2.2rem, 7vw, 4rem);
            font-weight: 900;
            letter-spacing: 4px;
            margin: 0;
          }

          .orange-text { color: #FF6600; }
          .red-text { color: #D32F2F; }

          .hero-subtitle {
            font-size: 1rem;
            color: #ddd;
            max-width: 650px;
            margin: 15px auto;
            letter-spacing: 0.5px;
          }

          .accent-bar {
            width: 100px; height: 4px;
            background: linear-gradient(90deg, #FF6600, #D32F2F);
            margin: 20px auto;
            border-radius: 50px;
          }

          .content-container { 
            flex: 1 0 auto;
            max-width: 1300px; 
            width: 100%;
            margin: 0 auto; 
            padding: 0 25px 80px 25px; 
          }

          .filter-wrapper {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px;
            margin-bottom: 50px;
            margin-top: 40px;
          }

          .filter-tag {
            padding: 10px 22px;
            background: #fff;
            border: 1px solid #e0d5cb;
            color: #555;
            border-radius: 50px;
            cursor: pointer;
            font-family: 'Orbitron', sans-serif;
            font-size: 0.7rem;
            font-weight: 700;
            transition: 0.3s ease;
            text-transform: uppercase;
          }

          .filter-tag.active, .filter-tag:hover {
            background: #FF6600;
            color: white;
            border-color: #FF6600;
            box-shadow: 0 5px 15px rgba(255, 102, 0, 0.2);
            transform: translateY(-2px);
          }

          .insights-modern-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 35px;
          }

          .modern-insight-card {
            background: #fff;
            border-radius: 25px;
            overflow: hidden;
            text-decoration: none;
            color: inherit;
            transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            border: 1px solid #f0e6dd;
            display: flex;
            flex-direction: column;
          }

          .modern-insight-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            border-color: #FF6600;
          }

          .image-box { position: relative; height: 210px; overflow: hidden; }
          .image-box img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
          .modern-insight-card:hover .image-box img { transform: scale(1.08); }

          .cat-tag {
            position: absolute; top: 15px; left: 15px;
            background: #FF6600; color: white;
            padding: 5px 12px; border-radius: 6px;
            font-family: 'Orbitron', sans-serif; font-size: 0.6rem; font-weight: 700;
          }

          .text-box { padding: 25px; flex-grow: 1; display: flex; flex-direction: column; }
          .date-label { color: #D32F2F; font-weight: 700; font-size: 0.75rem; }
          
          .text-box h3 {
            font-family: 'Orbitron', sans-serif;
            font-size: 1.15rem; margin: 12px 0;
            line-height: 1.4; color: #1a1a1a;
          }

          .modern-insight-card:hover h3 { color: #FF6600; }
          .text-box p { font-size: 0.9rem; color: #666; line-height: 1.6; margin-bottom: 20px; }

          .card-action {
            margin-top: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 15px;
            border-top: 1px solid #f5f5f5;
          }

          .action-label { font-weight: 800; font-size: 0.75rem; text-transform: uppercase; color: #1a1a1a; }
          .action-circle {
            width: 35px; height: 35px; border-radius: 50%;
            background: #fdf6f0;
            display: flex; align-items: center; justify-content: center;
            color: #FF6600; font-size: 1.1rem; transition: 0.3s;
            border: 1px solid #eee;
          }

          .modern-insight-card:hover .action-circle {
            background: #FF6600; color: white; transform: rotate(-45deg); border-color: #FF6600;
          }

          @media (max-width: 768px) {
            .insights-header { 
              height: 340px; 
              margin-bottom: 80px; /* Moves header further down from content */
              padding-top: 40px;  /* Moves "Knowledge Hub" text down from top */
            }

            .header-overlay {
              background: linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.6), #fdf6f0);
            }
            
            .hero-title { 
              font-size: 2.2rem; 
            }

            .content-container { 
              padding: 0 20px 60px 20px; 
            }

            .filter-wrapper {
              margin-bottom: 40px;
              gap: 8px;
            }

            .insights-modern-grid { 
              grid-template-columns: 1fr; 
              gap: 25px; 
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Allinsights;