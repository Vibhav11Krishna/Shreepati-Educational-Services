import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import Logo from "../../assets/logo-2.png";

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
              <input type="checkbox" style={{ marginRight: 6 }} /> Remember
            </label>
            <Link to="/forgot-password" style={styles.link}>Forgot?</Link>
          </div>

          <button type="submit" style={styles.submit}>Login</button>
        </form>

        <p style={styles.registerText}>
          Don't have an account?{" "}
          <Link to="/signup" style={styles.link}>Register</Link>
        </p>
      </div>

      {/* Mobile-specific tweaks */}
      <style>{`
        input:focus + label,
        input:not(:placeholder-shown) + label {
          top: -10px;
          left: 40px;
          font-size: 12px;
          color: #ff6600;
          background: #fff;
          padding: 0 5px;
          transition: all 0.3s ease;
        }

        input:focus {
          border: 2px solid #ff6600;
          box-shadow: 0 0 10px rgba(255,102,0,0.3);
        }

        button:hover {
          transform: scale(1.05);
          box-shadow: 0 0 15px rgba(255,102,0,0.4);
        }

        @media (max-width: 600px) {
          .loginBox {
            width: 90% !important;
            padding: 35px 25px !important;
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
    background: "rgba(255,255,255,0.85)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(6px)",
    zIndex: 1000,
  },
  loginBox: {
    position: "relative",
    background: "#fff",
    borderRadius: "20px",
    padding: "50px 35px",
    width: "90%",
    maxWidth: "380px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  closeBtn: {
    position: "absolute",
    top: "12px",
    right: "18px",
    background: "transparent",
    border: "none",
    fontSize: "28px",
    color: "#ff6600",
    cursor: "pointer",
  },
  logo: {
    width: "120px",
    marginBottom: "15px",
  },
  brand: {
    fontFamily: "'Orbitron', sans-serif",
    color: "#ff6600",
    fontWeight: 700,
    fontSize: "22px",
    marginBottom: "8px",
  },
  welcome: {
    fontSize: "14px",
    color: "#ff4400d4",
    marginBottom: "22px",
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  formGroup: {
    position: "relative",
    width: "100%",
  },
  icon: {
    position: "absolute",
    top: "50%",
    left: "12px",
    transform: "translateY(-50%)",
    color: "#ff6600",
    fontSize: "16px",
  },
  input: {
    width: "100%",
    padding: "14px 12px 14px 40px",
    border: "1px solid #ff6600",
    borderRadius: "10px",
    fontSize: "14px",
    outline: "none",
    background: "#fff",
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
  optionsRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "13px",
    marginTop: "5px",
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    color: "#444",
  },
  link: {
    fontSize: "13px",
    color: "#ff6600",
    textDecoration: "none",
    fontWeight: 500,
  },
  submit: {
    width: "100%",
    padding: "12px",
    marginTop: "12px",
    border: "none",
    borderRadius: "14px",
    background: "linear-gradient(90deg, #ff6600, #d32f2f)",
    color: "#fff",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  registerText: {
    marginTop: "14px",
    fontSize: "14px",
    color: "#555",
  },
};

export default Login;
