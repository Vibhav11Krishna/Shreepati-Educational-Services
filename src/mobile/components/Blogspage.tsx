import React from "react";

import blog1 from "../../assets/Academic.jpg";
import blog2 from "../../assets/Steps.jpg";
import blog3 from "../../assets/Collaboration1.jpg";

function Blogspage() {
  const blogs = [
    { title: "Academic Growth", desc: "Form strong partnerships with universities to enhance academic growth.", image: blog1, service: "Strategic Partnerships", link: "/blog/academic", date: "March 12, 2026" },
    { title: "Affiliation Guidance", desc: "Complete support for obtaining affiliation from recognized boards and universities.", image: blog2, service: "Board Affiliation", link: "/blog/affiliation", date: "March 10, 2026" },
    { title: "Institutional Setup", desc: "Assist in establishing and getting recognition for new colleges or institutions.", image: blog3, service: "Campus Launch", link: "/blog/setup", date: "March 05, 2026" },
    { title: "New Schools Setup", desc: "Step-by-step guidance to establish schools with approvals and documentation.", image: blog1, service: "Institutional Setup", link: "/blog/schools", date: "March 02, 2026" },
    { title: "DPR & Consultancy", desc: "Detailed project reports covering finance, academics, and infrastructure.", image: blog2, service: "Project Planning", link: "/blog/dpr", date: "Feb 28, 2026" },
    { title: "Overseas Admissions", desc: "Complete counseling and visa documentation for international studies.", image: blog3, service: "Global Education", link: "/blog/overseas", date: "Feb 25, 2026" }
  ];

  const featuredBlogs = blogs.slice(0, 6);

  return (
    <section id="blogs" className="blog-page-root">
      
      {/* HEADER */}
      <div className="blog-header-container">
        <h2 className="custom-image-heading">
          <span className="orange-text">Our</span> <span className="red-text">Insights</span>
        </h2>
        <div className="heading-line-accent"></div>
      </div>

      <div className="blog-main-container">
        <div className="blog-grid">
          {featuredBlogs.map((blog, idx) => (
            <a href={blog.link} key={idx} className="modern-blog-card">
              <div className="card-image-wrapper">
                <img src={blog.image} alt={blog.title} />
                <div className="category-overlay">
                  <span className="category-badge">{blog.service}</span>
                </div>
              </div>
              
              <div className="card-content">
                <span className="blog-date">{blog.date}</span>
                <h4 className="blog-title">{blog.title}</h4>
                <p className="blog-desc">{blog.desc}</p>
                
                <div className="card-footer">
                  <span className="read-more-text">Explore Article</span>
                  <div className="arrow-circle">
                    <span className="arrow-icon">→</span>
                  </div>
                </div>
              </div>
              
              {/* This div handles the orange/red glow border on hover */}
              <div className="card-hover-border"></div>
            </a>
          ))}
        </div>

        {/* CENTERED CAPSULE BUTTON */}
        <div className="view-all-container">
          <a href="/Allinsights" className="all-blogs-capsule">
            <span>View All Insights</span>
            <div className="btn-arrow">→</div>
          </a>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;800&family=Poppins:wght@300;400;500;600&display=swap');

        .blog-page-root {
          background: #fdf6f0; 
          padding: 80px 20px;
          font-family: 'Poppins', sans-serif;
        }

        .blog-header-container {
          text-align: center;
          margin-bottom: 60px;
        }

        .custom-image-heading {
          font-family: 'Orbitron', sans-serif;
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 3px;
        }

        .orange-text { color: #FF6600; }
        .red-text { color: #D32F2F; }

        .heading-line-accent {
          width: 100px;
          height: 5px;
          background: linear-gradient(90deg, #FF6600, #D32F2F);
          margin: 15px auto 0;
          border-radius: 50px;
        }

        .blog-main-container {
          max-width: 1240px;
          margin: 0 auto;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 35px;
          margin-bottom: 60px;
        }

        /* --- MODERN BLOG CARD --- */
        .modern-blog-card {
          position: relative;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          border-radius: 24px;
          overflow: hidden;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          border: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
          z-index: 1;
        }

        /* Hover: Lift and Shadow */
        .modern-blog-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(255, 102, 0, 0.15);
        }

        /* Hover: The Orange/Red Glowing Border */
        .card-hover-border {
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 2px; /* Border thickness */
          background: linear-gradient(135deg, #FF6600, #D32F2F);
          -webkit-mask: 
             linear-gradient(#fff 0 0) content-box, 
             linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 2;
        }

        .modern-blog-card:hover .card-hover-border {
          opacity: 1;
        }

        /* --- IMAGE EFFECTS --- */
        .card-image-wrapper {
          height: 230px;
          position: relative;
          overflow: hidden;
        }

        .card-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .modern-blog-card:hover .card-image-wrapper img {
          transform: scale(1.1);
        }

        .category-badge {
          background: linear-gradient(135deg, #FF6600, #D32F2F);
          color: white;
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          font-family: 'Orbitron', sans-serif;
          letter-spacing: 1px;
          box-shadow: 0 4px 10px rgba(211, 47, 47, 0.3);
        }

        /* --- CONTENT EFFECTS --- */
        .card-content {
          padding: 25px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .blog-date {
          font-size: 0.8rem;
          color: #FF6600;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .blog-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.2rem;
          color: #1a1a1a;
          margin-bottom: 12px;
          line-height: 1.4;
          transition: color 0.3s ease;
        }

        .modern-blog-card:hover .blog-title {
          color: #FF6600;
        }

        .blog-desc {
          font-size: 0.95rem;
          color: #555;
          line-height: 1.6;
          margin-bottom: 25px;
        }

        /* --- FOOTER & ARROW --- */
        .card-footer {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 15px;
          border-top: 1px solid rgba(0,0,0,0.06);
        }

        .read-more-text {
          font-weight: 700;
          font-size: 0.8rem;
          color: #1a1a1a;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .arrow-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #f8f8f8;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          border: 1px solid rgba(0,0,0,0.03);
        }

        .arrow-icon {
          color: #FF6600;
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }

        /* Hover state for arrow */
        .modern-blog-card:hover .arrow-circle {
          background: linear-gradient(135deg, #FF6600, #D32F2F);
          border-color: transparent;
          transform: rotate(-45deg);
        }

        .modern-blog-card:hover .arrow-icon {
          color: #fff;
        }

        /* --- VIEW ALL BUTTON --- */
        .all-blogs-capsule {
          display: inline-flex;
          align-items: center;
          gap: 15px;
          background: #1a1a1a;
          color: white;
          padding: 16px 40px;
          border-radius: 50px;
          text-decoration: none;
          font-family: 'Orbitron', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          transition: 0.3s ease;
        }

        .all-blogs-capsule:hover {
          background: linear-gradient(90deg, #FF6600, #D32F2F);
          transform: scale(1.05);
          box-shadow: 0 10px 20px rgba(255, 102, 0, 0.3);
        }

        /* --- RESPONSIVE --- */
        @media (max-width: 1024px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr); gap: 25px; }
        }

        @media (max-width: 768px) {
          .blog-grid { grid-template-columns: 1fr; }
          .blog-page-root { padding: 60px 20px; }
          .modern-blog-card { max-width: 450px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}

export default Blogspage;