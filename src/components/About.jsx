import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.jpg";
import Founder from "../assets/founder.jpg";
import {
  FaUserTie,
  FaUniversity,
  FaBullseye,
  FaEye,
  FaHandshake

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
        padding: "80px 20px",
        fontFamily: "'Poppins', sans-serif",
        color: "#333",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Side Icons */}
      <div
        style={{
          position: "absolute",
          left: "40px",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "80px",
          opacity: 0.07,
        }}
      >
     
      </div>

      <div
        style={{
          position: "absolute",
          right: "40px",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "80px",
          opacity: 0.07,
        }}
      >
        
      </div>

      {/* Container */}
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Heading */}
        <h2
          className={`fade-in ${loaded ? "visible" : ""}`}
          style={{
            textAlign: "center",
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: "700",
            fontSize: "2.8rem",
            color: "#FF6600",
            textTransform: "uppercase",
            letterSpacing: "1px",
            marginBottom: "70px",
            position: "relative",
          }}
        >
          About Us
          <span
            style={{
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "120px",
              height: "5px",
              borderRadius: "5px",
              background: "linear-gradient(90deg, #FF6600, #D32F2F)",
            }}
          ></span>
        </h2>

        {/* SECTION 1: About Shreepati */}
        <div
          className={`fade-in hover-card ${loaded ? "visible" : ""}`}
          style={{
            background: "#fff",
            borderRadius: "25px",
            padding: "60px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            borderTop: "6px solid #FF6600",
            marginBottom: "70px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <img
              src={Logo}
              alt="Shreepati Logo"
              style={{
                width: "230px",
                height: "125px",
                objectFit: "cover",
                marginBottom: "15px",
              }}
            />
            <h3
              style={{
                fontSize: "1.9rem",
                color: "#FF6600",
                fontWeight: "700",
                marginBottom: "15px",
              }}
            >
              Shreepati Educational Services
            </h3>
          </div>

          {/* English + Hindi in two halves */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px",
              paddingTop: "30px",
            }}
          >
            {/* English Section */}
            <p
              style={{
                fontSize: "1.1rem",
                color: "#555",
                lineHeight: "2.0",
                textAlign: "justify",
              }}
            >
              Shreepati Educational Services (SES) delivers a platform to source
              academics where education flows like a river. Educational
              institutions play a vital role in promoting education, making it
              more accessible, and fostering social awareness and change.
              <br />
              <br />
              This enterprise is led by a twenty-year experienced individual,
              Mr. Jayant Krishna — a senior procurement professional with a
              complete understanding of man-management, policy-making, liaison
              with corporate, semi-government, and government organizations,
              commissioning, and operational handling. He has strong expertise
              in institutional development and implementing strategic growth
              initiatives.
            </p>

            {/* Hindi Section */}
            <p
              style={{
                fontSize: "1.09rem",
                color: "#555",
                lineHeight: "2.1",
                textAlign: "justify",
                borderLeft: "3px solid #FF6600",
                paddingLeft: "25px",
              }}
            >
              श्रीपति एजुकेशनल सर्विसेज़ (SES) शिक्षा के क्षेत्र में काम करने
              वाले लोगों को एक ऐसा प्लेटफॉर्म देता है, जहाँ शिक्षा एक नदी की तरह
              बहती है। एजुकेशनल इंस्टीट्यूशंस शिक्षा को बढ़ावा देने में अहम
              भूमिका निभाते हैं, जिसमें इसे ज़्यादा सुलभ बनाना, सामाजिक जागरूकता
              और बदलाव लाना शामिल है।
              <br />
              <br />
              इस एंटरप्राइज का नेतृत्व बीस वर्षों के अनुभवी व्यक्ति श्री जयंत
              कृष्ण द्वारा किया जा रहा है। वे एक सीनियर प्रोक्योरमेंट प्रोफेशनल
              हैं, जिन्हें मैन-मैनेजमेंट, पॉलिसी निर्माण, कॉर्पोरेट,
              सेमी-गवर्नमेंट और सरकारी संस्थानों के साथ तालमेल, कमीशनिंग, और
              ऑपरेशनल हैंडलिंग की पूरी समझ है। संस्थान विकास और रणनीति के
              कार्यान्वयन में उनकी गहरी विशेषज्ञता है।
            </p>
          </div>
        </div>

        {/* SECTION 2: Extra Info Box */}
        {/* Additional Bilingual Section (3 paragraphs each) */}
        <div
          className={`fade-in hover-card ${loaded ? "visible" : ""}`}
          style={{
            background: "#fff",
            borderRadius: "25px",
            padding: "60px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            borderLeft: "8px solid #FF6600",
            marginBottom: "80px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "50px",
            }}
          >
            {/* English Paragraphs */}
            <div style={{ textAlign: "justify" }}>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "#555",
                  lineHeight: "1.9",
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
                  fontSize: "1.05rem",
                  color: "#555",
                  lineHeight: "1.9",
                }}
              >
                We have handled the initial operations and management of each
                stage of phased process of establishment and recognition of both
                of state government as well as central government schools.
              </p>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "#555",
                  lineHeight: "1.9",
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

            {/* Hindi Paragraphs */}
            <div
              style={{
                fontSize: "1.12rem",
                color: "#555",
                lineHeight: "2.0",
                borderLeft: "3px solid #FF6600",
                paddingLeft: "25px",
                textAlign: "justify",
              }}
            >
              <p>
                हालाँकि SES का निगम 2023 से है, लेकिन पेशेवर परामर्श सेवाएं
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
              <p>
                हमने राज्य सरकार और केंद्रीय सरकार के दोनों स्कूलों की स्थापना
                और मान्यता की चरणबद्ध प्रक्रिया के प्रत्येक चरण के प्रारंभिक
                संचालन और प्रबंधन को संभाला है।
              </p>
              <p>
                SES ने UGC के मार्गदर्शकों के तहत निजी विश्वविद्यालय की स्थापना
                के लिए विस्तृत परियोजना रिपोर्ट (DPR) तैयार की है। इसके तहत
                B.Ed. और D.Ed. कॉलेजों की स्थापना SES की सफल उपलब्धियों का
                हिस्सा है। ITI और पॉलिटेक्निक संस्थान भी हमारी परामर्श सेवाओं की
                सूची में हैं। SES का उपस्थित दर्जा मान्यता और ग्रेडिंग सेवाओं
                में भी है।
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3: Founder Box */}
        <div
          className={`fade-in hover-card ${loaded ? "visible" : ""}`}
          style={{
            background: "#fff",
            borderRadius: "25px",
            padding: "60px",
            textAlign: "center",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            borderBottom: "6px solid #D32F2F",
            marginBottom: "80px",
          }}
        >
          {/* Founder Image with Hover Effect */}
          <div
            style={{
              position: "relative",
              display: "inline-block",
              marginBottom: "25px",
            }}
            className="founder-image-container"
          >
            <img
              src={Founder}
              alt="Founder"
              className="founder-image"
              style={{
                width: "190px",
                height: "215px",
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
              marginBottom: "10px",
              fontSize: "1.4rem",
            }}
          >
            <FaUserTie
              style={{ marginRight: "6px", verticalAlign: "middle" }}
            />
            Mr. Jayant Krishna
          </h4>

          <p
            style={{
              color: "#777",
              fontSize: "0.95rem",
              marginBottom: "30px",
            }}
          >
            <FaUniversity
              style={{ marginRight: "6px", verticalAlign: "middle" }}
            />
            Founder
          </p>

          {/* English + Hindi in Two Columns */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px",
              textAlign: "justify",
              alignItems: "start",
            }}
          >
            {/* English Section */}
            <div>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "#555",
                  lineHeight: "1.8",
                }}
              >
                This enterprise is route by a twenty years well experienced
                individual Mr. Jayant Krishna senior procurement professional
                having complete understanding of man-management policy making
                liaison with corporate, semi-government & government houses
                commissioning and operational handling. Role as senior personnel
                & Strong understanding in the role of institute development and
                implementing strategies.
              </p>
            </div>

            {/* Hindi Section */}
            <div
              style={{
                fontSize: "1.09rem",
                color: "#555",
                lineHeight: "2.1",
                borderLeft: "3px solid #FF6600",
                paddingLeft: "25px",
              }}
            >
              <p>
                यह एंटरप्राइज बीस साल के अनुभवी व्यक्ति श्री जयंत कृष्ण द्वारा
                चलाया जाता है; जो एक सीनियर प्रोक्योरमेंट प्रोफेशनल हैं और
                जिन्हें मैन-मैनेजमेंट, पॉलिसी बनाने, कॉर्पोरेट, सेमी-गवर्नमेंट
                और सरकारी संस्थानों के साथ तालमेल, कमीशनिंग और ऑपरेशनल हैंडलिंग
                की पूरी समझ है। सीनियर पर्सनल के तौर पर भूमिका और इंस्टीट्यूट
                डेवलपमेंट और स्ट्रेटेजी लागू करने में मज़बूत समझ।
              </p>
            </div>
          </div>

          {/* Hover Animation Styles */}
          <style>{`
    .founder-image-container:hover .founder-image {
      transform: scale(1.1);
      box-shadow: 0 20px 45px rgba(211, 47, 47, 0.6);
      border: 3px solid #FF6600;
    }
  `}</style>
        </div>

        {/* SECTION 4: Mission Vision Values */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "40px",
            alignItems: "stretch",
          }}
        >
          {/* Dotted Connector */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "0",
              right: "0",
              borderTop: "3px dotted #FF6600",
              opacity: 0.5,
              zIndex: 0,
            }}
          ></div>

          {[
            {
              title: "Mission",
              icon: <FaBullseye />,
              color: "#FF6600",
              border: "#FF6600",
              text: "To empower students with practical knowledge and human values, fostering confidence and curiosity that lead to success in every aspect of life.",
            },
            {
              title: "Vision",
              icon: <FaEye />,
              color: "#D32F2F",
              border: "#D32F2F",
              text: "To become a leading educational institute known for academic excellence, innovation, and shaping responsible global citizens.",
            },
            {
              title: "Values",
              icon: <FaHandshake />,
              color: "#43A047",
              border: "#43A047",
              text: "Integrity, empathy, perseverance, and creativity — these are the guiding principles that drive our every decision and inspire every learner.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`fade-in hover-card ${loaded ? "visible" : ""}`}
              style={{
                flex: "1 1 320px",
                background: "#fff",
                borderRadius: "20px",
                padding: "50px 35px",
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                border: `3px solid ${item.border}`,
                position: "relative",
                zIndex: 1,
                minHeight: "350px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  margin: "0 auto 25px",
                  borderRadius: "50%",
                  background: item.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "2rem",
                }}
              >
                {item.icon}
              </div>
              <h4
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  color: item.color,
                  fontSize: "1.7rem",
                  marginBottom: "15px",
                  fontWeight: "700",
                }}
              >
                {item.title}
              </h4>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "#555",
                  lineHeight: "1.8",
                  textAlign: "justify",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s ease, transform 1s ease;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .hover-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
      `}</style>
    </section>
  );
}

export default About;
