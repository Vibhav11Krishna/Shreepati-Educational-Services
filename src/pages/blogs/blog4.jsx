import React from "react";
import Navbar from "../../mobile/components/Navbar";
import Footer from "../../mobile/components/Footer";

function blog4() {
  return (
    <>
      <Navbar />

      <div
        style={{
          background: "#fff4ea",
          minHeight: "100vh",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <section
          style={{
            padding: "100px 16px 70px",
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {/* BLOG HEADING */}
          <h1 className="blog-heading">
            How to get Affiliation from universities & Board
          </h1>

          {/* DIVIDER */}
          <div className="blog-divider" />

          {/* CONTENT CARD */}
          <div className="blog-card-content">
            <p className="blog-text">
              This blog will be updated soon.
            </p>
          </div>
        </section>
      </div>

      <Footer />

      {/* RESPONSIVE STYLES */}
      <style>{`
        .blog-heading {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 28px;
          font-family: 'Orbitron', sans-serif;
          background: linear-gradient(90deg, #FF6600, #D32F2F);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .blog-divider {
          width: 90px;
          height: 5px;
          margin: 0 auto 36px;
          border-radius: 10px;
          background: linear-gradient(90deg, #FF6600, #D32F2F);
        }

        .blog-card-content {
          background: #fff;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 18px 45px rgba(0,0,0,0.18);
        }

        .blog-text {
          font-size: 1.25rem;
          line-height: 1.8;
          color: #D32F2F;
          margin: 0;
        }

        /* 🔥 TABLET */
        @media (max-width: 768px) {
          .blog-heading {
            font-size: 2.4rem;
          }

          .blog-card-content {
            padding: 30px;
          }

          .blog-text {
            font-size: 1.1rem;
          }
        }

        /* 🔥 MOBILE */
        @media (max-width: 480px) {
          .blog-heading {
            font-size: 2rem;
            line-height: 1.3;
          }

          .blog-divider {
            width: 65px;
            height: 4px;
            margin-bottom: 28px;
          }

          .blog-card-content {
            padding: 22px;
            border-radius: 16px;
          }

          .blog-text {
            font-size: 1rem;
            line-height: 1.7;
          }
        }
      `}</style>
    </>
  );
}

export default blog4;
