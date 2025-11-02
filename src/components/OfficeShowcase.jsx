import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Office1 from "../assets/office1.png";
import Office2 from "../assets/office2.png";
import Office3 from "../assets/office3.png";
import FatherClient from "../assets/founder.jpg";

const slides = [
  {
    image: Office1,
    title: "Welcoming Campus",
    description: "Step into a vibrant environment where architecture meets inspiration. Our campus sparks creativity and community."
  },
  {
    image: Office2,
    title: "Modern Classrooms",
    description: "Experience learning in smart classrooms with interactive boards, digital tools, and ergonomic seating."
  },
  {
    image: Office3,
    title: "Student Lounge",
    description: "Unwind, collaborate, and recharge in thoughtfully curated lounge spaces for every learner."
  },
  {
    image: FatherClient,
    title: "With Our Clients",
    description: "Building strong relationships and guiding students with a personal touch, every step of the way."
  }
];

function OfficeShowcase() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section style={{ width: "100%", minHeight: "600px", padding: "80px 20px", background: "#fdf6f0", position: "relative", fontFamily: "'Poppins', sans-serif" }}>
      <h2 style={{ textAlign: "center", fontFamily: "'Orbitron', sans-serif", fontWeight: "700", fontSize: "2.8rem", color: "#FF6600", marginBottom: "60px" }}>
        Inside Shreepati
      </h2>

      <div style={{ position: "relative", maxWidth: "1400px", margin: "0 auto", overflow: "hidden", borderRadius: "25px" }}>
        <div style={{
          display: "flex",
          transition: "transform 0.8s ease-in-out",
          transform: `translateX(-${current * 100}%)`
        }}>
          {slides.map((slide, index) => (
            <div key={index} style={{ minWidth: "100%", position: "relative" }}>
              <img src={slide.image} alt={slide.title} style={{
                width: "100%",
                height: "600px",
                objectFit: "cover",
                borderRadius: "20px",
              }} />

              {/* Glass-style text box */}
              <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                padding: "25px 35px",
                borderRadius: "20px",
                textAlign: "center",
                maxWidth: "80%",
                color: "#fff",
                backdropFilter: "blur(8px) brightness(0.7)",
                WebkitBackdropFilter: "blur(8px) brightness(0.7)",
              }}>
                <h3 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "15px" }}>{slide.title}</h3>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <FaChevronLeft onClick={prevSlide} style={{ position: "absolute", top: "50%", left: "20px", transform: "translateY(-50%)", fontSize: "2.5rem", color: "#fff", cursor: "pointer", zIndex: 10 }} />
        <FaChevronRight onClick={nextSlide} style={{ position: "absolute", top: "50%", right: "20px", transform: "translateY(-50%)", fontSize: "2.5rem", color: "#fff", cursor: "pointer", zIndex: 10 }} />
      </div>

      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "30px" }}>
        {slides.map((_, index) => (
          <div key={index} onClick={() => setCurrent(index)} style={{
            width: current === index ? "18px" : "14px",
            height: current === index ? "18px" : "14px",
            borderRadius: "50%",
            background: current === index ? "#FF6600" : "#ccc",
            cursor: "pointer",
            transition: "0.3s",
          }} />
        ))}
      </div>

      <style>{`
        @media(max-width: 992px){
          section img {
            height: 350px !important;
          }
          div[style*="backdropFilter"] {
            padding: 15px 20px !important;
          }
          div[style*="backdropFilter"] h3 {
            font-size: 1.5rem !important;
          }
          div[style*="backdropFilter"] p {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}

export default OfficeShowcase;
