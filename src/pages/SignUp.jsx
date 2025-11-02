import React, { useState, useEffect } from "react";
import Logo from "../assets/logo-2.png"; // Replace with your logo
import SignUpImage from "../assets/signup.png"; // Replace with your illustration
import { FaUser, FaEnvelope, FaPhone, FaLock, FaBuilding } from "react-icons/fa";

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    department: "",
    position: "",
    company: "",
  });

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={styles.wrapper}>
      {/* Left Side */}
      <div
        style={{
          ...styles.leftSide,
          opacity: loaded ? 1 : 0,
          transform: loaded ? "scale(1)" : "scale(0.95)",
          transition: "all 0.6s ease",
        }}
      >
        <h1 style={styles.leftHeading}>SIGN UP</h1>
       
        <p style={styles.leftDesc}>
          Sign up to manage your HR tasks efficiently and professionally.
        </p>
        <div className="imageWrapper" style={styles.imageWrapper}>
          <img src={SignUpImage} alt="Illustration" style={styles.image} />
        </div>
      </div>

      {/* Vertical Line */}
      <div style={styles.verticalLine}></div>

      {/* Right Side */}
      <div
        style={{
          ...styles.rightSide,
          opacity: loaded ? 1 : 0,
          transform: loaded ? "scale(1)" : "scale(0.95)",
          transition: "all 0.6s ease",
        }}
      >
        <div className="formBox" style={styles.formBox}>
          <img src={Logo} alt="Logo" style={styles.logo} />
          <h2 style={styles.formHeading}>Create Your Account</h2>
          <p style={styles.formSubheading}>
            Fill in your details to get started with our professional HR management system.
          </p>

          <form style={styles.form}>
            <div style={styles.grid}>
              {[
                { name: "firstName", label: "First Name", icon: <FaUser /> },
                { name: "lastName", label: "Last Name", icon: <FaUser /> },
                { name: "email", label: "Email", icon: <FaEnvelope /> },
                { name: "phone", label: "Phone", icon: <FaPhone /> },
                { name: "password", label: "Password", icon: <FaLock /> },
                { name: "department", label: "Department", icon: <FaUser /> },
                { name: "position", label: "Position", icon: <FaUser /> },
                { name: "company", label: "Company Name", icon: <FaBuilding /> },
              ].map((field, index) => (
                <div key={index} style={styles.formGroup}>
                  <span style={styles.icon}>{field.icon}</span>
                  <input
                    type={field.name === "password" ? "password" : "text"}
                    name={field.name}
                    placeholder=" "
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    style={styles.input}
                  />
                  <label style={styles.label}>{field.label}</label>
                </div>
              ))}
            </div>

            <button type="submit" style={styles.submit}>
              Sign Up
            </button>
          </form>

          <p style={styles.registerText}>
            Already have an account? <a href="/" style={styles.link}>Login</a>
          </p>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        input:focus + label,
        input:not(:placeholder-shown) + label {
          top: -10px;
          left: 45px;
          font-size: 12px;
          color: #FF6600;
          background: #fff;
          padding: 0 5px;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        input:focus {
          border: 2px solid #FF6600;
          box-shadow: 0 0 12px rgba(255,102,0,0.3);
        }
        button:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(255,102,0,0.5);
        }
        .formBox:hover {
          transform: scale(1.02);
          transition: all 0.3s ease;
          border-image: linear-gradient(90deg, #FF6600, #D32F2F) 1;
        }
        .imageWrapper:hover img {
          transform: scale(1.05);
          transition: all 0.4s ease;
        }
        @media (max-width: 900px) {
          .wrapper {
            flex-direction: column;
          }
          .leftSide, .rightSide {
            width: 100% !important;
            padding: 30px;
          }
          .grid {
            grid-template-columns: 1fr !important;
          }
          .verticalLine {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "'Poppins', sans-serif",
    background: "#fdf6f0",
  },
  leftSide: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px",
    textAlign: "center",
  },
  leftHeading: {
    fontSize: "40px",
    fontFamily: "'Orbitron', sans-serif",
    fontWeight: 700,
    color: "#FF6600",
    marginBottom: "15px",
  },
  leftSubheading: {
    fontSize: "26px",
    fontWeight: 600,
    color: "#D32F2F",
    marginBottom: "15px",
  },
  leftDesc: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "30px",
    maxWidth: "400px",
  },
  imageWrapper: {
    width: "70%",
    borderRadius: "25px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  },
  image: {
    width: "100%",
    display: "block",
    borderRadius: "20px",
  },
  verticalLine: {
    width: "4px",
    margin: "0 20px",
    background: "linear-gradient(to bottom, #FF6600, #D32F2F)",
    borderRadius: "2px",
  },
  rightSide: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px",
  },
  formBox: {
    background: "#fdf6f0",
    borderRadius: "30px",
    padding: "60px 50px",
    width: "100%",
    maxWidth: "750px",
    minHeight: "90vh",
    
    borderImage: "linear-gradient(90deg, #FF6600, #D32F2F) 1",
    boxShadow: "0 25px 60px rgba(0,0,0,0.2)",
    textAlign: "center",

  },
  logo: {
    width: "250px",
    height: "auto",
    marginBottom: "20px",
  },
  formHeading: {
    fontSize: "32px",
    fontFamily: "'Orbitron', sans-serif",
    fontWeight: 700,
    color: "#FF6600",
    marginBottom: "10px",
  },
  formSubheading: {
    fontSize: "18px",
    color: "#D32F2F",
    marginBottom: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "25px",
  },
  formGroup: {
    position: "relative",
  },
  icon: {
    position: "absolute",
    top: "50%",
    left: "12px",
    transform: "translateY(-50%)",
    color: "#FF6600",
    fontSize: "18px",
  },
  input: {
    width: "100%",
    padding: "18px 16px 18px 45px",
    border: "1px solid #ccc",
    borderRadius: "12px",
    outline: "none",
    fontSize: "16px",
     background: "#fdf6f0",
    transition: "all 0.3s ease",
  },
  label: {
    position: "absolute",
    left: "45px",
    top: "18px",
    fontSize: "14px",
    color: "#999",
    pointerEvents: "none",
    transition: "all 0.3s ease",
  },
  submit: {
    marginTop: "30px",
    padding: "20px",
    borderRadius: "25px",
    border: "none",
    background: "linear-gradient(90deg, #FF6600, #D32F2F)",
    color: "#fff",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  registerText: {
    marginTop: "25px",
    fontSize: "15px",
    color: "#555",
  },
  link: {
    color: "#D32F2F",
    fontWeight: 600,
    textDecoration: "none",
  },
};

export default SignUp;
