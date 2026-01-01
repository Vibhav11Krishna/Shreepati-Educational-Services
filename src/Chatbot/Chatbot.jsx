import React, { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Hi! I am your Shreepati Educational Services chatbot. Ask me anything.", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  // Predefined Q&A
  const knowledgeBase = [
    { question: /^(hi|hello|hey)$/i, answer: "Hello! Welcome to Shreepati Educational Services. How can I help you today?" },
    { question: /who created shreepati/i, answer: "Shreepati Educational Services was created by Mr. Jayant Krishna, a senior procurement professional." },
    { question: /when shreepati was created|year of estabilishement/i, answer: "Shreepati Educational Services was created by Mr. Jayant Krishna, a senior procurement professional,it was estabilished in the year 2023" },
    { question: /who is jayant krishna/i, answer: "Mr. Jayant Krishna is a senior procurement professional with 20 years of experience, specializing in institute development and strategy implementation." },
    { question: /what are the services|services/i, answer: `Shreepati Educational Services provides:
1. Collaboration Guidance
2. Affiliation Guidance
3. New Institutions Setup
4. New Schools Setup
5. DPR & Consultancy
6. Overseas Admissions & Visa
7. Educational Loans & HR
8. Domestic Admission Counseling
9. Accreditation Assistance
10. Data & Document Management` },
{ question: /what is collaboration guidance service|collaboration guidance|service 1/i, answer: ` (collaboration guidance) Form strong partnerships with universities, industry, and networks to enhance academic growth.` },
{ question: /what is affiliation guidance service|affiliation guidance|service 2/i, answer: ` (affiliation guidance) Complete support for obtaining affiliation from recognized boards and universities.` },
{ question: /what is new institution setup service|new institution setup|service 3/i, answer: `(new institution setup) Assist in establishing and getting recognition for new colleges or mid-level institutions.` },
{ question: /what is new schools setup service|new school setup|service 4/i, answer: `(new schools setup) Step-by-step guidance to establish schools with approvals and documentation.` },
{ question: /what is dpr and consultancy service|dpr and consultancy|dpr & consultancy|service 5/i, answer: `(dpr and consultancy) Prepare detailed project reports covering financial, academic, and infrastructure aspects.` },
{ question: /what is overseas admissions and visa service|overseas admissions and visa|overseas admission & visa|service 6/i, answer: ` (overseas admissions and visa) Counseling and application support for international studies and visa documentation.` },
{ question: /what is educational loans and hr service|education loans & hr|educational loans and hr|service 7/i, answer: ` (educational loans and hr) Consultation for securing loans and streamlining HR for institutions.` },
{ question: /what is domestic admission counseling service|domestic admission counseling|service 8/i, answer: ` (domestic admission counseling) Guide students across India in selecting the right courses and institutions.` },
{ question: /what is accreditation assistance service|accreditation assistance|service 9/i, answer: ` (accreditation assistance) Help institutions achieve national and international accreditation efficiently.` },
{ question: /what is data and document management service|data and document management|data & document management|service 10/i, answer: ` (data and document management) Customized solutions for managing institutional data, libraries, and documents.` },
    { question: /what is shreepati/i, answer: `Shreepati Educational Services is an educational consultancy enterprise run by Mr. Jayant Krishna, a 20-year experienced professional.` },
    { question: /about shreepati/i, answer: `Shreepati Educational Services is run by Mr. Jayant Krishna, specializing in management, policy making, and institute development.` },
    { question: /contact|email|phone/i, answer: `You can contact Mr. Jayant Krishna via:
Email: jayantkrishna@yahoo.in
Phone: +91 9801066182, +91 9334774083` },
    { question: /address/i, answer: `Addresses:
1. Shyam Market, opposite pillar no:75, Raza Bazar, Patna, Bihar
2. Near RPS Law College, Malti Kunj (Satya Sai Niwas Pvt. Ltd), Flat No: 403, Patna, Bihar` },
  ];

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    const matched = knowledgeBase.find(item => item.question.test(input));
    const botAnswer = matched ? matched.answer : "⚠ Sorry, I don't have the answer for that.";

    setMessages(prev => [...prev, { text: botAnswer, sender: "bot" }]);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div style={styles.chatContainer}>
      <div style={styles.header}>
        Shreepati Chatbot
      </div>
      <div style={styles.messages}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              ...styles.message,
              alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
              backgroundColor: msg.sender === "user" ? "#FF5722" : "#fff",
              color: msg.sender === "user" ? "#fff" : "#333",
              border: msg.sender === "bot" ? "1px solid #FF5722" : "none",
              boxShadow: msg.sender === "bot" ? "0 2px 6px rgba(0,0,0,0.1)" : "none",
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Type your question..."
          style={styles.input}
        />
        <button onClick={sendMessage} style={styles.button}>
          Send
        </button>
      </div>
    </div>
  );
}

const styles = {
  chatContainer: {
    position: "fixed",
    bottom: "80px",
    right: "20px",
    width: "340px",
    maxHeight: "500px",
    display: "flex",
    flexDirection: "column",
    borderRadius: "20px",
    backgroundColor: "#fff",
    border: "2px solid #FF5722",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    zIndex: 10000,
  },
  header: {
    background: "linear-gradient(135deg, #FF5722, #FF7043)",
    color: "#fff",
    padding: "14px",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    fontWeight: "bold",
    fontSize: "18px",
    textAlign: "center",
    letterSpacing: "0.5px",
  },
  messages: {
    flex: 1,
    padding: "12px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    backgroundColor: "#fff",
  },
  message: {
    padding: "10px 14px",
    borderRadius: "15px",
    maxWidth: "80%",
    lineHeight: "1.5",
    fontSize: "14.5px",
  },
  inputContainer: {
    display: "flex",
    borderTop: "1px solid #FF5722",
    padding: "10px",
    backgroundColor: "#fff",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
  },
  input: {
    flex: 1,
    padding: "12px",
    border: "1px solid #FF5722",
    borderRadius: "12px",
    outline: "none",
    marginRight: "10px",
    fontSize: "14px",
  },
  button: {
    padding: "12px 18px",
    border: "none",
    background: "linear-gradient(135deg, #FF5722, #FF7043)",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: "12px",
    transition: "all 0.2s ease-in-out",
  },
};
