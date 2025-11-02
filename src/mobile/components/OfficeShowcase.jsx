import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Office1 from "../../assets/office1.png";
import Office2 from "../../assets/office2.png";
import Office3 from "../../assets/office3.png";
import FatherClient from "../../assets/founder.jpg";

const slides = [
  {
    image: Office1,
    title: "Welcoming Campus",
    description: "Step into a vibrant space where architecture meets inspiration."
  },
  {
    image: Office2,
    title: "Modern Classrooms",
    description: "Smart classrooms with digital tools and ergonomic comfort."
  },
  {
    image: Office3,
    title: "Student Lounge",
    description: "Relax and collaborate in our beautiful student lounge."
  },
  {
    image: FatherClient,
    title: "With Our Clients",
    description: "Guiding students personally, every step of the way."
  }
];

const OfficeShowcase = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section className="office-showcase-mobile">
      <h2 className="mobile-title">Inside Shreepati</h2>

      <div className="slider-container">
        <div
          className="slides-wrapper"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div className="slide" key={i}>
              <img src={slide.image} alt={slide.title} className="slide-image" />
              <div className="text-overlay">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <FaChevronLeft className="arrow left" onClick={prevSlide} />
        <FaChevronRight className="arrow right" onClick={nextSlide} />

        {/* Dots */}
        <div className="dots">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`dot ${current === index ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>

      <style>{`
        .office-showcase-mobile {
          width: 100%;
          background: #fff9f3;
          padding: 50px 10px;
          text-align: center;
          font-family: 'Poppins', sans-serif;
        }

        .mobile-title {
          font-family: 'Orbitron', sans-serif;
          font-weight: 700;
          font-size: 1.8rem;
          color: #FF6600;
          margin-bottom: 25px;
        }

        .slider-container {
          position: relative;
          overflow: hidden;
          border-radius: 18px;
          width: 100%;
          max-width: 95%;
          margin: 0 auto;
        }

        .slides-wrapper {
          display: flex;
          transition: transform 0.6s ease-in-out;
        }

        .slide {
          min-width: 100%;
          position: relative;
        }

        .slide-image {
          width: 100%;
          height: 280px;
          object-fit: cover;
          border-radius: 18px;
        }

        .text-overlay {
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          background: rgba(0,0,0,0.5);
          color: #fff;
          padding: 10px 15px;
          border-radius: 12px;
          backdrop-filter: blur(4px);
        }

        .text-overlay h3 {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 5px;
        }

        .text-overlay p {
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.6rem;
          color: #fff;
          background: rgba(0,0,0,0.3);
          border-radius: 50%;
          padding: 6px;
          cursor: pointer;
        }

        .left { left: 12px; }
        .right { right: 12px; }

        .dots {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 15px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ccc;
          transition: 0.3s;
        }

        .dot.active {
          background: #FF6600;
          transform: scale(1.2);
        }

        @media (min-width: 769px) {
          .office-showcase-mobile {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default OfficeShowcase;
