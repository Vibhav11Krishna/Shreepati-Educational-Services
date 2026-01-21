import React from "react";
import Navbar from "../../mobile/components/Navbar";
import Footer from "../../mobile/components/Footer";

// Assets
import heroImg from "../../assets/Banner17.jpg";
import collaborationImg from "../../assets/Overseas3.jpg";
import researchImg from "../../assets/Overseas4.jpg";

function Blog17() {
  return (
    <>
      <Navbar />

      {/* PAGE WRAPPER */}
      <div className="blog-page">
        {/* HERO SECTION */}
        <div className="blog-hero">
          <img src={heroImg} alt="Academic Collaboration" />
          <div className="hero-overlay">
            <h1 className="gradient-heading">Selecting The Right University</h1>
          </div>
        </div>

        {/* BLOG CONTENT */}
        <article className="blog-article">
          {/* INTRO */}
          <p className="blog-intro">
            Choosing the right university is crucial for academic success and
            career growth. Factors such as ranking, course structure, country
            regulations, and future opportunities must be evaluated carefully
            before making a decision.
          </p>

          {/* SECTION 1 */}
          <h2 className="gradient-heading">SES University Selection Support</h2>
          <p>
            SES helps students shortlist universities based on academic
            background, budget, career goals, and country preferences. This
            personalized approach ensures students choose institutions aligned
            with long-term success.
          </p>

          <div className="blog-image">
            <img src={collaborationImg} alt="Industry Collaboration" />
          </div>

          {/* SECTION 2 */}
          <h2 className="gradient-heading">
            Career-Oriented Program Alignment
          </h2>
          <p>
            SES focuses on programs that offer practical exposure, global
            recognition, and post-study opportunities. This ensures students
            gain both academic value and career advantage.
          </p>

          <div className="blog-image">
            <img src={researchImg} alt="Research Collaboration" />
          </div>

          {/* VIDEO SECTION */}
          <h2 className="gradient-heading">Video Explanation</h2>

          <div className="blog-video">
            <iframe
              src="https://player.cloudinary.com/embed/?public_id=overseas-2_fqwpap&cloud_name=dqmkivr5i&fluid=true"
              title="Academic Collaboration Video"
              allow="autoplay; fullscreen; encrypted-media"
              allowFullScreen
            />
          </div>

          <p>
            This video explains how Choosing the right university is crucial for academic success and
            career growth.
          </p>

          {/* CONCLUSION */}
          <h2 className="gradient-heading">Conclusion</h2>
          <p>
            The right university shapes future success. SES provides expert
            guidance to help students make informed and confident decisions.
          </p>
        </article>

        <Footer />
      </div>

      {/* STYLES */}
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          background: #fff4ea;
        }

        .blog-page {
          background: #fff4ea;
          font-family: 'Poppins', sans-serif;
          color: #000;
        }

        /* HERO */
        .blog-hero {
          position: relative;
          height: 420px;
          overflow: hidden;
        }

        .blog-hero img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
        }

        .hero-overlay h1 {
          font-size: 3.2rem;
          max-width: 900px;
        }

        /* BLOG ARTICLE */
        .blog-article {
          max-width: 760px;
          margin: 80px auto 0;
          padding: 0 16px 80px;
          text-align: justify;
        }

        .blog-intro {
          font-size: 1.3rem;
          line-height: 1.9;
          margin-bottom: 50px;
        }

        .gradient-heading {
          font-family: 'Orbitron', sans-serif;
          background: linear-gradient(90deg, #ff6600, #d32f2f);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
          margin: 60px 0 20px;
        }

        .blog-article h2 {
          font-size: 2rem;
          margin-top: 60px;
          margin-bottom: 20px;
        }

        .blog-article p {
          font-size: 1.15rem;
          line-height: 1.9;
          margin-bottom: 28px;
        }

        /* IMAGES */
        .blog-image {
          margin: 40px 0;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 18px 45px rgba(0,0,0,0.18);
        }

        .blog-image img {
          width: 100%;
          display: block;
        }

        /* VIDEO */
        .blog-video {
          margin: 40px 0;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 18px 45px rgba(0,0,0,0.25);
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
        }

        .blog-video iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        /* MOBILE RESPONSIVE */
        @media (max-width: 768px) {
          .blog-article {
            padding: 0 12px 60px;
            text-align: justify;
          }

          .blog-article h2 {
            font-size: 1.6rem;
            margin-top: 40px;
            margin-bottom: 16px;
          }

          .blog-article p {
            font-size: 1rem;
            line-height: 1.6;
            margin-bottom: 20px;
          }

          .blog-article .blog-intro {
            font-size: 1.1rem;
            line-height: 1.7;
            margin-bottom: 30px;
          }

          .blog-video iframe {
            height: 200px;
          }

          .hero-overlay h1 {
            font-size: 2rem;
            padding: 10px;
          }
        }
      `}</style>
    </>
  );
}

export default Blog17;
