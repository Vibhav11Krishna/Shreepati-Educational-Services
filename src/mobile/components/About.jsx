import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.jpg";
import Founder from "../../assets/founder.jpg";
import {
  FaUserTie,
  FaUniversity,
  FaBullseye,
  FaEye,
  FaHandshake,
  FaSchool,
  FaBookOpen,
  FaLaptopCode,
} from "react-icons/fa";

function About() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
  }, []);

  return (
    <section
      id="about"
      style={{
        background: "#fdf6f0",
        padding: "50px 15px",
        fontFamily: "'Poppins', sans-serif",
        color: "#333",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle Background Icons */}
      <div
        style={{
          position: "absolute",
          left: "10px",
          top: "30%",
          display: "flex",
          flexDirection: "column",
          gap: "60px",
          opacity: 0.05,
        }}
      >
        <FaSchool size={40} color="#FF6600" />
        <FaBookOpen size={40} color="#E53935" />
        <FaLaptopCode size={40} color="#0288D1" />
      </div>

      {/* Heading */}
      <h2
        className={`fade-in ${loaded ? "visible" : ""}`}
        style={{
          textAlign: "center",
          fontFamily: "'Orbitron', sans-serif",
          fontWeight: "700",
          fontSize: "1.9rem",
          color: "#FF6600",
          textTransform: "uppercase",
          marginBottom: "40px",
          position: "relative",
        }}
      >
        About Us
        <span
          style={{
            position: "absolute",
            bottom: "-8px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "90px",
            height: "4px",
            borderRadius: "4px",
            background: "linear-gradient(90deg, #FF6600, #D32F2F)",
          }}
        ></span>
      </h2>

      {/* 🔸 About Shreepati Section */}
      <div
        className={`fade-in ${loaded ? "visible" : ""}`}
        style={{
          background: "#fff",
          borderRadius: "20px",
          padding: "25px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          marginBottom: "40px",
          borderTop: "4px solid #FF6600",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img
            src={Logo}
            alt="Shreepati Logo"
            style={{
              width: "160px",
              height: "80px",
              objectFit: "cover",
              marginBottom: "10px",
            }}
          />
          <h3
            style={{
              fontSize: "1.3rem",
              color: "#FF6600",
              fontWeight: "700",
              marginBottom: "10px",
            }}
          >
            Shreepati Educational Services
          </h3>
        </div>

        {/* English */}
        <div style={{ marginBottom: "20px" }}>
          <p
            style={{
              fontSize: "1rem",
              color: "#555",
              lineHeight: "1.8",
              textAlign: "justify",
              marginBottom: "15px",
            }}
          >
            Shreepati Educational Services (SES) delivers a platform to source
            academics where education flows like a river. Educational
            institutions play a vital role in promoting education, making it
            more accessible, and fostering social awareness and change.
          </p>

          <p
            style={{
              fontSize: "1rem",
              color: "#555",
              lineHeight: "1.8",
              textAlign: "justify",
            }}
          >
            This enterprise is led by a twenty-year experienced individual,
            Mr. Jayant Krishna — a senior procurement professional with a
            complete understanding of man-management, policy-making, liaison
            with corporate, semi-government, and government organizations,
            commissioning, and operational handling. He has strong expertise in
            institutional development and implementing strategic growth
            initiatives.
          </p>
        </div>

        {/* 🔸 Separator */}
        <div
          style={{
            width: "100%",
            height: "3px",
            background: "linear-gradient(90deg, #FF6600, #D32F2F)",
            borderRadius: "2px",
            margin: "20px 0",
          }}
        ></div>

        {/* Hindi */}
        <div>
          <p
            style={{
              fontSize: "1rem",
              color: "#555",
              lineHeight: "1.8",
              textAlign: "justify",
              marginBottom: "15px",
            }}
          >
            श्रीपति एजुकेशनल सर्विसेज़ (SES) शिक्षा के क्षेत्र में काम करने वाले
            लोगों को एक ऐसा प्लेटफॉर्म देता है, जहाँ शिक्षा एक नदी की तरह बहती है।
            एजुकेशनल इंस्टीट्यूशंस शिक्षा को बढ़ावा देने में अहम भूमिका निभाते हैं,
            जिसमें इसे ज़्यादा सुलभ बनाना, सामाजिक जागरूकता और बदलाव लाना शामिल है।
          </p>

          <p
            style={{
              fontSize: "1rem",
              color: "#555",
              lineHeight: "1.8",
              textAlign: "justify",
            }}
          >
            इस एंटरप्राइज का नेतृत्व बीस वर्षों के अनुभवी व्यक्ति श्री जयंत कृष्ण
            द्वारा किया जा रहा है। वे एक सीनियर प्रोक्योरमेंट प्रोफेशनल हैं, जिन्हें
            मैन-मैनेजमेंट, पॉलिसी निर्माण, कॉर्पोरेट, सेमी-गवर्नमेंट और सरकारी
            संस्थानों के साथ तालमेल, कमीशनिंग, और ऑपरेशनल हैंडलिंग की पूरी समझ है।
            संस्थान विकास और रणनीति के कार्यान्वयन में उनकी गहरी विशेषज्ञता है।
          </p>
        </div>
      </div>

      {/* 🔸 Consultancy Section */}
      <div
        className={`fade-in ${loaded ? "visible" : ""}`}
        style={{
          background: "#fff",
          borderRadius: "20px",
          padding: "25px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          marginBottom: "40px",
          borderTop: "4px solid #D32F2F",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <p
            style={{
              fontSize: "1rem",
              color: "#555",
              lineHeight: "1.8",
              textAlign: "justify",
              marginBottom: "15px",
            }}
          >
                  However the corporation of SES is with 2023 but the professional
                consultancy services have been for more than last five years
                particularly in education domain. We have been acting as
                consultant to our high level educational institution for their
                establishment and accreditation for the last five years. We have
                provided our services as chief consultant to health education
                (Nursing,Paramedical & Pharmacy) institutions from grassroots
                idea to final establishment with apex level accreditation. This
                consultancy starts from infrastructures development to final
                accreditation and reaching up to mobilization of students and
                ends with admission. In the same sequence we have successfully
                performed the responsibility of chief advisor and guide for the
                establishment and validation work of each level for the
                management institutions of higher education for the courses BBA,
                MBA, BCA, and MCA & PGDM.
          </p>

          <p
            style={{
              fontSize: "1rem",
              color: "#555",
              lineHeight: "1.8",
              textAlign: "justify",
              marginBottom: "15px",
            }}
          >
            We have handled the initial operations and management of each
                stage of phased process of establishment and recognition of both
                of state government as well as central government schools.
          </p>

          <p
            style={{
              fontSize: "1rem",
              color: "#555",
              lineHeight: "1.8",
              textAlign: "justify",
            }}
          >
           SES has accomplished DPR (Detailed Project report) for
                Establishment of private university under guidelines of UGC.
                Hereto establishment of B.Ed. and D.Ed. colleges are the part of
                successful achievements of SES. ITI and polytechnic institutions
                are also in our consultancy services list. SES has presence also
                in accreditation and grading services .
          </p>
        </div>

        {/* 🔸 Separator */}
        <div
          style={{
            width: "100%",
            height: "3px",
            background: "linear-gradient(90deg, #FF6600, #D32F2F)",
            borderRadius: "2px",
            margin: "20px 0",
          }}
        ></div>

        {/* Hindi */}
        <div>
          <p
            style={{
              fontSize: "1rem",
              color: "#555",
              lineHeight: "1.8",
              textAlign: "justify",
              marginBottom: "15px",
            }}
          >
             हालाँकि SES का निगम 2023 में है, लेकिन पेशेवर परामर्श सेवाएं
                पिछले पांच वर्षों से अधिक समय से विशेष रूप से शिक्षा क्षेत्र में
                रही हैं। हम पिछले पांच वर्षों से अपने उच्च स्तरीय शैक्षणिक
                संस्थानों के लिए उनके स्थापना और मान्यता के लिए सलाहकार के रूप
                में कार्य कर रहे हैं। हमने स्वास्थ्य शिक्षा (नर्सिंग, पैरामेडिकल
                और फार्मेसी) संस्थानों को मुख्य सलाहकार के रूप में सेवा प्रदान
                की है, प्रारंभिक विचार से लेकर अंतिम स्थापना और उच्च स्तरीय
                मान्यता तक। यह परामर्श अवसंरचना विकास से लेकर अंतिम मान्यता और
                छात्रों की अभिव्यक्ति तक शुरू होता है और प्रवेश के साथ समाप्त
                होता है। इसी क्रम में, हमने उच्च शिक्षा के प्रबंधन संस्थानों के
                लिए प्रत्येक स्तर के स्थापना और वैधकरण कार्य में मुख्य सलाहकार
                और मार्गदर्शक की जिम्मेदारी सफलतापूर्वक निभाई है, जिनमें
                पाठ्यक्रम BBA, MBA, BCA, MCA और PGDM शामिल हैं।
          </p>

          <p
            style={{
              fontSize: "1rem",
              color: "#555",
              lineHeight: "1.8",
              textAlign: "justify",
              marginBottom: "15px",
            }}
          >
            हमने राज्य सरकार और केंद्रीय सरकार के दोनों स्कूलों की स्थापना
                और मान्यता की चरणबद्ध प्रक्रिया के प्रत्येक चरण के प्रारंभिक
                संचालन और प्रबंधन को संभाला है।
          </p>

          <p
            style={{
              fontSize: "1rem",
              color: "#555",
              lineHeight: "1.8",
              textAlign: "justify",
            }}
          >
              SES ने UGC के मार्गदर्शकों के तहत निजी विश्वविद्यालय की स्थापना
                के लिए विस्तृत परियोजना रिपोर्ट (DPR) तैयार की है। इसके तहत
                B.Ed. और D.Ed. कॉलेजों की स्थापना SES की सफल उपलब्धियों का
                हिस्सा है। ITI और पॉलिटेक्निक संस्थान भी हमारी परामर्श सेवाओं की
                सूची में हैं। SES का उपस्थित दर्जा मान्यता और ग्रेडिंग सेवाओं
                में भी है।
          </p>
        </div>
      </div>

      {/* 🔸 Founder Section (Square Image + Centered) */}
      <div
        className={`fade-in ${loaded ? "visible" : ""}`}
        style={{
          background: "#fff",
          borderRadius: "20px",
          padding: "25px",
          textAlign: "center",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          borderBottom: "4px solid #D32F2F",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginBottom: "15px",
          }}
        >
          <img
            src={Founder}
            alt="Founder"
            style={{
              width: "180px",
              height: "210px",
              borderRadius: "10px",
              objectFit: "cover",
              boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
              display: "block",
            }}
          />
        </div>

        <h4
          style={{
            color: "#D32F2F",
            fontWeight: "700",
            fontSize: "1.2rem",
            marginBottom: "8px",
          }}
        >
          <FaUserTie style={{ marginRight: "6px" }} />
          Mr. Jayant Krishna
        </h4>
        <p style={{ color: "#777", fontSize: "0.9rem", marginBottom: "20px" }}>
          <FaUniversity style={{ marginRight: "6px" }} />
          Founder
        </p>

        <p
          style={{
            fontSize: "1rem",
            color: "#555",
            lineHeight: "1.8",
            textAlign: "justify",
            marginBottom: "20px",
          }}
        >
          This enterprise is routed by a twenty-year well-experienced individual,
          Mr. Jayant Krishna a senior procurement professional having complete
          understanding of man-management, policy-making, liaison with corporate,
          semi-government, and government organizations, commissioning, and operational
          handling. He plays a senior role with a strong understanding of institutional
          development and implementing growth strategies.
        </p>

        <div
          style={{
            width: "100%",
            height: "3px",
            background: "linear-gradient(90deg, #FF6600, #D32F2F)",
            borderRadius: "2px",
            margin: "20px 0",
          }}
        ></div>

        <p
          style={{
            fontSize: "1rem",
            color: "#555",
            lineHeight: "1.8",
            textAlign: "justify",
          }}
        >
          इस एंटरप्राइज का नेतृत्व बीस वर्षों के अनुभवी व्यक्ति श्री जयंत कृष्ण
          द्वारा किया जा रहा है। वे एक सीनियर प्रोक्योरमेंट प्रोफेशनल हैं जिन्हें
          मैन-मैनेजमेंट, पॉलिसी निर्माण, कॉर्पोरेट, सेमी-गवर्नमेंट और सरकारी
          संस्थानों के साथ तालमेल, कमीशनिंग और ऑपरेशनल हैंडलिंग की पूरी समझ है।
          उन्होंने संस्थान विकास और रणनीतिक योजनाओं के क्रियान्वयन में महत्वपूर्ण
          भूमिका निभाई है।
        </p>
      </div>

      {/* Mission / Vision / Values */}
      <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
        {[
          {
            title: "Mission",
            icon: <FaBullseye />,
            color: "#FF6600",
            text: "To empower students with practical knowledge and values for life.",
          },
          {
            title: "Vision",
            icon: <FaEye />,
            color: "#D32F2F",
            text: "To be a leading educational institute known for excellence and innovation.",
          },
          {
            title: "Values",
            icon: <FaHandshake />,
            color: "#43A047",
            text: "Integrity, empathy, perseverance, and creativity guide every learner.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className={`fade-in ${loaded ? "visible" : ""}`}
            style={{
              background: "#fff",
              borderRadius: "18px",
              padding: "25px",
              textAlign: "center",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              border: `2px solid ${item.color}`,
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                margin: "0 auto 15px",
                borderRadius: "50%",
                background: item.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "1.5rem",
              }}
            >
              {item.icon}
            </div>
            <h4
              style={{
                color: item.color,
                fontFamily: "'Orbitron', sans-serif",
                fontWeight: "700",
                marginBottom: "10px",
                fontSize: "1.3rem",
              }}
            >
              {item.title}
            </h4>
            <p style={{ fontSize: "1rem", color: "#555", lineHeight: "1.7" }}>
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}

export default About;
