import React from "react";
import partner1 from "../../assets/partner1.jpg";
import partner2 from "../../assets/Vibrant.png";

const Partners = () => {
  return (
    <section id="partners" className="partners-mobile">
      <h2 className="partners-title">Our Partners</h2>

      <div className="partners-list">
        {/* NAAC Mate */}
        <div className="partner-wrapper">
          <div className="partner-card square-card">
            <img src={partner1} alt="NAAC Mate" className="partner-image" />
          </div>
          <div className="partner-badge">NAAC Mate</div>
        </div>

        {/* Vibrant */}
        <div className="partner-wrapper">
          <div className="partner-card circle-card">
            <img
              src={partner2}
              alt="Vibrant"
              className="partner-image vibrant-image"
            />
          </div>
          <div className="partner-badge">Vibrant Institutional Creatives India PVT. LTD Darbhanga,Bihar</div>
        </div>
      </div>

      <style>{`
        .partners-mobile {
          background: #fff9f3;
          padding: 60px 15px;
          text-align: center;
          font-family: 'Poppins', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .partners-title {
          font-family: 'Orbitron', sans-serif;
          font-weight: 700;
          font-size: 1.8rem;
          color: #FF6600;
          margin-bottom: 40px;
          position: relative;
          text-transform: uppercase;
        }

        .partners-title::after {
          content: "";
          position: absolute;
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          border-radius: 3px;
          background: linear-gradient(90deg, #FF6600, #D32F2F);
        }

        .partners-list {
          display: flex;
          flex-direction: column;
          gap: 50px;
          align-items: center;
        }

        .partner-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        /* Shared card base */
        .partner-card {
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          transition: all 0.4s ease;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
        }

        .partner-card:active {
          transform: scale(0.97);
        }

        /* NAAC Mate – Square */
        .square-card {
          width: 280px;
          height: 400px;
          border-radius: 18px;
        }

        /* Vibrant – Circular */
        .circle-card {
          width: 260px;
          height: 260px;
          border-radius: 50%;
        }

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

        .partner-badge {
        
          border: 2px solid #FF6600;
          width: 200px;
          text-align: center;
          border-radius: 20px;
          padding: 10px 15px;
          color: #FF6600;
          font-weight: 700;
          font-size: 1.1rem;
          backdrop-filter: blur(6px);
          transition: all 0.3s ease;
        }

        .partner-badge:active {
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(255,102,0,0.4);
        }

        @media (min-width: 769px) {
          .partners-mobile {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Partners;
