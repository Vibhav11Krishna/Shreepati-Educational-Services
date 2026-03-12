import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../mobile/components/Footer";
import Navbar from "../mobile/components/Navbar";
// Image imports
import blog1 from "../assets/Academic.jpg";
import blog2 from "../assets/Steps.jpg";
import blog3 from "../assets/Collaboration1.jpg";

const Allinsights = () => {
  const [filter, setFilter] = useState("All");

  const allBlogs = [
    { id: 1, title: "Collaboration Guidance", desc: "Form strong partnerships with universities, industry, and networks to enhance academic growth.", image: blog1, category: "Partnerships", link: "/collaboration", date: "March 12, 2026" },
    { id: 2, title: "Affiliation Guidance", desc: "Complete support for obtaining affiliation from recognized boards and universities.", image: blog2, category: "Affiliation", link: "/affiliation", date: "March 10, 2026" },
    { id: 3, title: "New Institutions Setup", desc: "Assist in establishing and getting recognition for new colleges or institutions.", image: blog3, category: "Institutional", link: "/new-institutions", date: "March 05, 2026" },
    { id: 4, title: "New Schools Setup", desc: "Step-by-step guidance to establish schools with approvals and documentation.", image: blog1, category: "Schools", link: "/new-schools", date: "March 02, 2026" },
    { id: 5, title: "DPR & Consultancy", desc: "Detailed project reports covering finance, academics, and infrastructure.", image: blog2, category: "Planning", link: "/dpr-consultancy", date: "Feb 28, 2026" },
    { id: 6, title: "Overseas Admissions & Visa", desc: "Complete counseling and visa documentation for international studies.", image: blog3, category: "Global", link: "/overseas-admissions", date: "Feb 25, 2026" },
    { id: 7, title: "Educational Loans & HR", desc: "Guidance for education loans and institutional HR management.", image: blog1, category: "Finance & HR", link: "/education-loans", date: "Feb 20, 2026" },
    { id: 8, title: "Domestic Admission Counseling", desc: "Helping students choose the right colleges across India.", image: blog2, category: "Admissions", link: "/domestic-admissions", date: "Feb 15, 2026" },
    { id: 9, title: "Accreditation Assistance", desc: "Support for NAAC, NBA, and international accreditations.", image: blog3, category: "Accreditation", link: "/accreditation", date: "Feb 10, 2026" },
    { id: 10, title: "Data & Document Management", desc: "Secure and efficient academic & administrative data solutions.", image: blog1, category: "Digital", link: "/data-management", date: "Feb 05, 2026" },
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
            background: url(${blog1}) center/cover no-repeat;
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