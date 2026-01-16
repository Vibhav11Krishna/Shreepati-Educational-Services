import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* COMPONENTS */
import DekstopNavbar from "./components/DekstopNavbar";
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

/* BLOGS PAGES */
import Blog1 from "./pages/blogs/blog1";
import Blog2 from "./pages/blogs/blog2";
import Blog3 from "./pages/blogs/blog3";
import Blog4 from "./pages/blogs/blog4";
import Blog5 from "./pages/blogs/blog5";
import Blog6 from "./pages/blogs/blog6";
import Blog7 from "./pages/blogs/blog7";
import Blog8 from "./pages/blogs/blog8";
import Blog9 from "./pages/blogs/blog9";
import Blog10 from "./pages/blogs/blog10";
import Blog11 from "./pages/blogs/blog11";
import Blog12 from "./pages/blogs/blog12";
import Blog13 from "./pages/blogs/blog13";
import Blog14 from "./pages/blogs/blog14";
import Blog15 from "./pages/blogs/blog15";
import Blog16 from "./pages/blogs/blog16";
import Blog17 from "./pages/blogs/blog17";
import Blog18 from "./pages/blogs/blog18";
import Blog19 from "./pages/blogs/blog19";
import Blog20 from "./pages/blogs/blog20";
import Blog21 from "./pages/blogs/blog21";
import Blog22 from "./pages/blogs/blog22";
import Blog23 from "./pages/blogs/blog23";
import Blog24 from "./pages/blogs/blog24";
import Blog25 from "./pages/blogs/blog25";
import Blog26 from "./pages/blogs/blog26";
import Blog27 from "./pages/blogs/blog27";
import Blog28 from "./pages/blogs/blog28";
import Blog29 from "./pages/blogs/blog29";
import Blog30 from "./pages/blogs/blog30";

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
  const toggleChat = () => setChatOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const DesktopSite = () => (
    <>
      <DekstopNavbar openLogin={handleOpenLogin} />
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
          <Route
            path="/"
            element={isMobile ? <MobileSite /> : <DesktopSite />}
          />

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

          {/* BLOG PAGES */}
          <Route path="/blogs/blog1" element={<Blog1 />} />
          <Route path="/blogs/blog2" element={<Blog2 />} />
          <Route path="/blogs/blog3" element={<Blog3 />} />
          <Route path="/blogs/blog4" element={<Blog4 />} />
          <Route path="/blogs/blog5" element={<Blog5 />} />
          <Route path="/blogs/blog6" element={<Blog6 />} />
          <Route path="/blogs/blog7" element={<Blog7 />} />
          <Route path="/blogs/blog8" element={<Blog8 />} />
          <Route path="/blogs/blog9" element={<Blog9 />} />
          <Route path="/blogs/blog10" element={<Blog10 />} />

          <Route path="/blogs/blog11" element={<Blog11 />} />
          <Route path="/blogs/blog12" element={<Blog12 />} />
          <Route path="/blogs/blog13" element={<Blog13 />} />
          <Route path="/blogs/blog14" element={<Blog14 />} />
          <Route path="/blogs/blog15" element={<Blog15 />} />
          <Route path="/blogs/blog16" element={<Blog16 />} />
          <Route path="/blogs/blog17" element={<Blog17 />} />
          <Route path="/blogs/blog18" element={<Blog18 />} />
          <Route path="/blogs/blog19" element={<Blog19 />} />
          <Route path="/blogs/blog20" element={<Blog20 />} />

          <Route path="/blogs/blog21" element={<Blog21 />} />
          <Route path="/blogs/blog22" element={<Blog22 />} />
          <Route path="/blogs/blog23" element={<Blog23 />} />
          <Route path="/blogs/blog24" element={<Blog24 />} />
          <Route path="/blogs/blog25" element={<Blog25 />} />
          <Route path="/blogs/blog26" element={<Blog26 />} />
          <Route path="/blogs/blog27" element={<Blog27 />} />
          <Route path="/blogs/blog28" element={<Blog28 />} />
          <Route path="/blogs/blog29" element={<Blog29 />} />
          <Route path="/blogs/blog30" element={<Blog30 />} />
        </Routes>
      </div>

      {/* LOGIN OVERLAY */}
      {loginOpen &&
        (isMobile ? (
          <MLogin closeLogin={handleCloseLogin} />
        ) : (
          <Login closeLogin={handleCloseLogin} />
        ))}

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
        <img
          src={logo}
          alt="Shreepati Logo"
          style={{ width: "100px", height: "60px" }}
        />
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
