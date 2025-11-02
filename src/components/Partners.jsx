import React from "react";
import partner1 from "../assets/partner1.jpg";
import partner2 from "../assets/Vibrant.png";

function Partners() {
  const partners = [
    { name: "NAAC Mate", image: partner1, shape: "square" },
    {
      name: "Vibrant Institutional Creatives India PVT. LTD Darbhanga, Bihar",
      image: partner2,
      shape: "circle",
    },
  ];

  return (
    <section
      id="partners"
      style={{
        background: "#fdf6f0",
        padding: "100px 20px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Heading */}
        <h2
          style={{
            textAlign: "center",
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: "700",
            fontSize: "2.8rem",
            color: "#FF6600",
            textTransform: "uppercase",
            letterSpacing: "1px",
            marginBottom: "60px",
            position: "relative",
          }}
        >
          Our Partners
          <span
            style={{
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "120px",
              height: "5px",
              borderRadius: "5px",
              background: "linear-gradient(90deg, #FF6600, #D32F2F)",
            }}
          ></span>
        </h2>

        {/* Partners Grid */}
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-item">
              <div
                className={`partner-card ${
                  partner.shape === "circle" ? "circle-card" : "square-card"
                }`}
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className={`partner-image ${
                    partner.shape === "circle" ? "vibrant-image" : ""
                  }`}
                />
              </div>
              <div
                className={`partner-badge ${
                  partner.shape === "circle" ? "vibrant-badge" : ""
                }`}
              >
                {partner.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .partners-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 60px;
          justify-items: center;
          align-items: center;
        }

        .partner-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Common Card Style */
        .partner-card {
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .partner-card:hover {
          transform: scale(1.05);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
        }

        /* Square Card (NAAC Mate) */
        .square-card {
          width: 350px;
          height: 500px;
          border-radius: 20px;
          overflow: hidden;
        }

        /* Circular Card (Vibrant) */
        .circle-card {
          width: 350px;
          height: 350px;
          border-radius: 50%;
        }

        /* Image Styles */
        .partner-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: inherit;
        }

        .vibrant-image {
          width: 80%;
          height: 80%;
          object-fit: contain;
          border-radius: 50%;
          background: transparent;
        }

        /* Badge */
        .partner-badge {
          margin-top: 20px;
          width: 260px;
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          padding: 15px 0;
          border-radius: 20px;
          text-align: center;
          font-weight: 700;
          font-size: 1.3rem;
          color: #FF6600;
          border: 2px solid #FF6600;
          transition: all 0.4s ease;
        }

        .partner-badge:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 35px rgba(255, 102, 0, 0.5);
        }

        /* Vibrant Badge Clean & Centered */
        .vibrant-badge {
          width: 340px;
          line-height: 1.5;
          padding: 18px 20px;
          font-size: 1.1rem;
          border: 2px solid #FF6600;
          box-shadow: 0 10px 25px rgba(255, 102, 0, 0.2);
          word-wrap: break-word;
          white-space: normal;
          text-align: center;
        }

        @media (max-width: 768px) {
          .square-card {
            width: 280px;
            height: 400px;
          }

          .circle-card {
            width: 260px;
            height: 260px;
          }

          .partner-badge {
            width: 200px;
            font-size: 1rem;
          }

          .vibrant-badge {
            width: 260px;
            font-size: 1rem;
            padding: 15px;
            line-height: 1.4;
          }
        }
      `}</style>
    </section>
  );
}

export default Partners;
