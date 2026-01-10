import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import OfficeShowcase from "./components/OfficeShowcase";
import KnowledgeVideoSection from "./components/KnowledgeVideoSection"; 
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

// Logo import
import logo from "./assets/logo-2.png";


import MNavbar from "./mobile/components/Navbar";
import MFooter from "./mobile/components/Footer";
import MHome from "./mobile/components/Home";
import MAbout from "./mobile/components/About";
import MServices from "./mobile/components/Services";
import MProjects from "./mobile/components/Projects";
import MPartners from "./mobile/components/Partners";
import MContact from "./mobile/components/Contact";
import MOfficeShowcase from "./mobile/components/OfficeShowcase";
import MKnowledgeVideoSection from "./mobile/components/KnowledgeVideoSection"; 
import MLogin from "./mobile/pages/Login";
import MSignUp from "./mobile/pages/signup";


import Chatbot from "./Chatbot/Chatbot";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [loginOpen, setLoginOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const handleOpenLogin = () => setLoginOpen(true);
  const handleCloseLogin = () => setLoginOpen(false);
  const toggleChat = () => setChatOpen(prev => !prev);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const DesktopSite = () => (
    <>
      <Navbar openLogin={handleOpenLogin} />
      <main>
        <Home />
        <OfficeShowcase />
        <About />
        <Services />
        <Projects />
        <Partners />
        <KnowledgeVideoSection />
        <Contact />
      </main>
      <Footer />
    </>
  );

  const MobileSite = () => (
    <>
      <MNavbar openLogin={handleOpenLogin} />
      <main>
        <MHome />
        <MOfficeShowcase />
        <MAbout />
        <MServices />
        <MProjects />
        <MPartners />
        <MKnowledgeVideoSection />
        <MContact />
      </main>
      <MFooter />
    </>
  );

  return (
    <Router>
      <div className={`app-wrapper ${loginOpen ? "blur-active" : ""}`}>
        <Routes>
          <Route path="/" element={isMobile ? <MobileSite /> : <DesktopSite />} />
          <Route path="/signup" element={isMobile ? <MSignUp /> : <SignUp />} />
        </Routes>
      </div>

      {/* Login overlay */}
      {loginOpen &&
        (isMobile ? <MLogin closeLogin={handleCloseLogin} /> : <Login closeLogin={handleCloseLogin} />)}
{/* Chatbot toggle button */}
<div
  onClick={toggleChat}
  style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "170px",       // wider rectangle
    height: "70px",       // taller rectangle
    borderRadius: "15px", // slightly rounded corners
    backgroundColor: "#fef8f4ff", // white background
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 10000,
    boxShadow: "0 5px 20px rgba(0,0,0,0.3)"
  }}
>
  <img
    src={logo}   // imported logo
    alt="Shreepati Logo"
    style={{ width: "100px", height: "60px" }} // logo fits inside nicely
  />
</div>


      {/* Chatbot window */}
      {chatOpen && <Chatbot />}

      <style>{`
        .blur-active main, 
        .blur-active nav, 
        .blur-active footer {
          filter: blur(6px);
          pointer-events: none;
          user-select: none;
          transition: filter 0.3s ease;
        }

        .login-page-wrapper, .login-box {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10000;
        }

        .login-page-overlay {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          z-index: 9999;
        }
      `}</style>
    </Router>
  );
}

export default App;
