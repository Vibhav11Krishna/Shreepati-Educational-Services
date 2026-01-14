import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* COMPONENTS */
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

/* AUTH */
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

/* SERVICE PAGES (DESKTOP) */
import Collaboration from "./pages/services/Collaboration";
import Affiliation from "./pages/services/Affiliation";
import NewInstitutions from "./pages/services/NewInstitutions";
import NewSchools from "./pages/services/NewSchools";
import DPRConsultancy from "./pages/services/DPRConsultancy";
import OverseasAdmissions from "./pages/services/OverseasAdmissions";
import EducationLoans from "./pages/services/EducationLoans";
import DomesticAdmissions from "./pages/services/DomesticAdmissions";
import Accreditation from "./pages/services/Accreditation";
import DataManagement from "./pages/services/DataManagement";

/* MOBILE COMPONENTS */
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

/* UTILITIES */
import ScrollToTop from "./ScrollToTop";
import Chatbot from "./Chatbot/Chatbot";

/* ASSETS */
import logo from "./assets/logo-2.png";

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
      {/* 🔥 SCROLL FIX */}
      <ScrollToTop />

      <div className={`app-wrapper ${loginOpen ? "blur-active" : ""}`}>
        <Routes>

          {/* HOME */}
          <Route path="/" element={isMobile ? <MobileSite /> : <DesktopSite />} />

          {/* AUTH */}
          <Route path="/signup" element={isMobile ? <MSignUp /> : <SignUp />} />

          {/* SERVICE PAGES */}
          <Route path="/collaboration" element={<Collaboration />} />
          <Route path="/affiliation" element={<Affiliation />} />
          <Route path="/new-institutions" element={<NewInstitutions />} />
          <Route path="/new-schools" element={<NewSchools />} />
          <Route path="/dpr-consultancy" element={<DPRConsultancy />} />
          <Route path="/overseas-admissions" element={<OverseasAdmissions />} />
          <Route path="/education-loans" element={<EducationLoans />} />
          <Route path="/domestic-admissions" element={<DomesticAdmissions />} />
          <Route path="/accreditation" element={<Accreditation />} />
          <Route path="/data-management" element={<DataManagement />} />

        </Routes>
      </div>

      {/* LOGIN OVERLAY */}
      {loginOpen &&
        (isMobile
          ? <MLogin closeLogin={handleCloseLogin} />
          : <Login closeLogin={handleCloseLogin} />
        )
      }

      {/* CHATBOT BUTTON */}
      <div
        onClick={toggleChat}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "170px",
          height: "70px",
          borderRadius: "15px",
          backgroundColor: "#fef8f4ff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 10000,
          boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
        }}
      >
        <img src={logo} alt="Shreepati Logo" style={{ width: "100px", height: "60px" }} />
      </div>

      {/* CHATBOT WINDOW */}
      {chatOpen && <Chatbot />}

      <style>{`
        .blur-active main,
        .blur-active nav,
        .blur-active footer {
          filter: blur(6px);
          pointer-events: none;
          user-select: none;
        }
      `}</style>
    </Router>
  );
}

export default App;
