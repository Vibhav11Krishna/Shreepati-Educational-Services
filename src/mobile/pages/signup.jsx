import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo-2.png";
import SignUpImage from "../../assets/signup.png";
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
      {/* Header with image */}
      <div
        style={{
          ...styles.topSection,
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(-20px)",
          transition: "all 0.5s ease",
        }}
      >
        <img src={SignUpImage} alt="Illustration" style={styles.image} />
        <h1 style={styles.heading}>Create Account</h1>
        <p style={styles.subheading}>Join us to manage your HR tasks efficiently.</p>
      </div>

      {/* Form Section */}
      <div
        style={{
          ...styles.formBox,
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.6s ease",
        }}
      >
        <img src={Logo} alt="Logo" style={styles.logo} />

        <form style={styles.form}>
          {[
            { name: "firstName", label: "First Name", icon: <FaUser /> },
            { name: "lastName", label: "Last Name", icon: <FaUser /> },
            { name: "email", label: "Email", icon: <FaEnvelope /> },
            { name: "phone", label: "Phone", icon: <FaPhone /> },
            { name: "password", label: "Password", icon: <FaLock /> },
            { name: "department", label: "Department", icon: <FaUser /> },
            { name: "position", label: "Position", icon: <FaUser /> },
            { name: "company", label: "Company", icon: <FaBuilding /> },
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

          <button type="submit" style={styles.submit}>Sign Up</button>
        </form>

        <p style={styles.registerText}>
          Already have an account? <a href="/" style={styles.link}>Login</a>
        </p>
      </div>

      <style>{`
        input:focus + label,
        input:not(:placeholder-shown) + label {
          top: -10px;
          left: 40px;
          font-size: 12px;
          color: #FF6600;
          background: #fff;
          padding: 0 5px;
          transition: all 0.3s ease;
        }
        input:focus {
          border: 2px solid #FF6600;
          box-shadow: 0 0 10px rgba(255,102,0,0.3);
        }
        button:hover {
          transform: scale(1.03);
          box-shadow: 0 0 12px rgba(255,102,0,0.4);
        }
      `}</style>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
    background: "#fdf6f0",
    fontFamily: "'Poppins', sans-serif",
  },
  topSection: {
    textAlign: "center",
    marginBottom: "20px",
  },
  image: {
    width: "60%",
    maxWidth: "220px",
    borderRadius: "15px",
    marginBottom: "10px",
    boxShadow: "0 8px 18px rgba(0,0,0,0.15)",
  },
  heading: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: "26px",
    color: "#FF6600",
    fontWeight: 700,
    marginBottom: "6px",
  },
  subheading: {
    color: "#D32F2F",
    fontSize: "14px",
  },
  formBox: {
    background: "#fff",
    borderRadius: "20px",
    width: "100%",
    maxWidth: "380px",
    padding: "30px 25px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    textAlign: "center",
  },
  logo: {
    width: "140px",
    height: "auto",
    marginBottom: "15px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
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
    fontSize: "16px",
  },
  input: {
    width: "100%",
    padding: "14px 12px 14px 40px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    fontSize: "14px",
    background: "#fff",
    outline: "none",
  },
  label: {
    position: "absolute",
    left: "40px",
    top: "14px",
    fontSize: "13px",
    color: "#777",
    pointerEvents: "none",
    transition: "all 0.3s ease",
  },
  submit: {
    marginTop: "15px",
    padding: "12px",
    borderRadius: "15px",
    border: "none",
    background: "linear-gradient(90deg, #FF6600, #D32F2F)",
    color: "#fff",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  registerText: {
    marginTop: "15px",
    fontSize: "14px",
    color: "#555",
  },
  link: {
    color: "#FF6600",
    fontWeight: 600,
    textDecoration: "none",
  },
};

export default SignUp;
