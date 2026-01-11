import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import expert from "../assets/expert.jpg";
import campus from "../assets/campus.jpg";
import digital from "../assets/digital.jpg";
import vision from "../assets/vision.jpg";

const slides = [
  {
    image: expert,
    title: "Expert Educational Consultancy",
    description: "We guide institutions in planning, strategy, and operations to build a strong foundation for academic success. "
  },
  {
    image: campus,
    title: "Campus & Infrastructure Planning",
    description: "From classrooms and labs to libraries and auditoriums, we design modern, functional college setups that foster learning, innovation, and student engagement."
  },
  {
    image: digital,
    title: "Digital & Administrative Solutions",
    description: "We implement smart management systems, digital tools, and administrative processes to streamline operations and enhance institutional efficiency."
  },
  {
    image: vision,
    title: "From Vision to Reality",
    description: "We turn your educational vision into a fully operational institution, ensuring modern infrastructure, smooth administration, and sustainable growth."
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
