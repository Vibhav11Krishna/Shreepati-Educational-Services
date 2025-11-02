import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import Logo from "../assets/logo-2.png";

function Login({ closeLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={styles.overlay}>
      <div style={styles.loginBox}>
        <button onClick={closeLogin} style={styles.closeBtn}>×</button>
        <img src={Logo} alt="Logo" style={styles.logo} />
        <h1 style={styles.brand}>Consultancy Services</h1>
        <h2 style={styles.welcome}>Welcome back! Please login</h2>

        <form style={styles.form}>
          {/* Username */}
          <div style={styles.formGroup}>
            <FaUser style={styles.icon} />
            <input
              type="text"
              required
              placeholder=" "
              style={styles.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label style={styles.label}>Username or Email</label>
          </div>

          {/* Password */}
          <div style={styles.formGroup}>
            <FaLock style={styles.icon} />
            <input
              type="password"
              required
              placeholder=" "
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label style={styles.label}>Password</label>
          </div>

          <div style={styles.optionsRow}>
            <label style={styles.checkboxLabel}>
              <input type="checkbox" name="remember" style={{ marginRight: "8px" }} /> Remember Me
            </label>
            <Link to="/forgot-password" style={styles.link}>Forgot Password?</Link>
          </div>

          <button type="submit" style={styles.submit}>Login</button>
        </form>

        <p style={styles.registerText}>
          Don't have an account? <Link to="/signup" style={styles.link}>Register here</Link>
        </p>

        <div style={styles.footer}>
          <Link to="/privacy" style={styles.footerLink}>Privacy Policy</Link>
          <Link to="/terms" style={styles.footerLink}>Terms of Use</Link>
          <Link to="/help" style={styles.footerLink}>Help Center</Link>
        </div>
      </div>

      {/* Floating label animation */}
      <style>{`
        input:focus + label,
        input:not(:placeholder-shown) + label {
          top: -10px;
          left: 45px; /* align with input text, after icon */
          font-size: 13px;
          color: #ff6600;
          background: #fdf6f0;
          padding: 0 5px;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        input:focus {
          border: 2px solid #ff6600;
          box-shadow: 0 0 10px rgba(255,102,0,0.3);
        }

        button:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(255,102,0,0.5);
        }

        @media (max-width: 768px) {
          .loginBox {
            width: 90% !important;
            padding: 40px !important;
          }
        }
      `}</style>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    zIndex: 1000,
    background: "rgba(255,255,255,0.3)", // light gray blur
  },
  loginBox: {
    position: "relative",
    background: "#fdf6f0",
    
    borderRadius: "25px",
    padding: "60px 50px",
    width: "480px",
    maxWidth: "95%",
    textAlign: "center",
    boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  closeBtn: {
    position: "absolute",
    top: "15px",
    right: "20px",
    background: "transparent",
    border: "none",
    fontSize: "28px",
    cursor: "pointer",
    color: "#ff6600",
  },
  logo: {
    width: "180px",
    height: "auto",
    marginBottom: "20px",
    borderRadius: "15px",
  },
  brand: {
    fontFamily: "'Orbitron', sans-serif",
    fontWeight: 700,
    fontSize: "30px",
    color: "#ff6600",
    marginBottom: "10px",
  },
  welcome: {
    fontSize: " 17px",
    fontWeight: 400,
    fontFamily: "poppins",
    color: "#ff4400d4",
    marginBottom: "25px",
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  formGroup: {
    position: "relative",
    width: "100%",
  },
  icon: {
    position: "absolute",
    top: "50%",
    left: "15px",
    transform: "translateY(-50%)",
    color: "#ff6600",
    fontSize: "18px",
  },
  input: {
    width: "100%",
    padding: "16px 16px 16px 45px", // padding-left for icon
    border: "1px solid #ff6600",
    borderRadius: "12px",
    fontSize: "15px",
    outline: "none",
    background: "#fff",
    color: "#000",
    transition: "all 0.3s ease",
  },
  label: {
    position: "absolute",
    left: "45px", // same as padding-left
    top: "16px",
    fontSize: "14px",
    color: "#555",
    pointerEvents: "none",
    transition: "all 0.3s ease",
    background: "transparent",
  },
  optionsRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "14px",
    marginTop: "5px",
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    fontSize: "17px",
    color: "#333",
  },
  link: {
    fontSize: "17px",
    color: "#ff6600",
    textDecoration: "none",
    fontWeight: "500",
  },
  submit: {
    width: "100%",
    padding: "14px",
    marginTop: "15px",
    border: "none",
    borderRadius: "18px",
    background: "linear-gradient(90deg, #ff6600, #d32f2f)",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 5px 18px rgba(255,102,0,0.5)",
  },
  registerText: {
    marginTop: "18px",
    fontSize: "17px",
    color: "#555",
  },
  footer: {
    marginTop: "20px",
    textAlign: "center",
    fontSize: "17px",
  },
  footerLink: {
    margin: "0 6px",
    color: "#ff6600",
    textDecoration: "none",
  },
};

export default Login;
