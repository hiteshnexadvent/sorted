import React, { useState } from "react";
import "./section2.css";

const faqData = [
  { question: "How fast will I receive my designs?", answer: "You will receive your designs within 24-48 hours depending on complexity." },
  { question: "How does onboarding work?", answer: "Onboarding is simple. After signing up, you’ll receive an email with all details to get started." },
  { question: "Who works on my designs and code?", answer: "Our professional designers and developers handle your requests." },
  { question: "Is there a limit to how many requests I can make?", answer: "You can make unlimited requests, but they will be handled one at a time." },
  { question: "Can I pause my subscription?", answer: "Yes, you can pause or cancel anytime from your account dashboard." },
  { question: "What about projects like full websites or apps?", answer: "We do handle larger projects like websites or apps with custom planning." },
  { question: "What tools do you use?", answer: "We use industry-standard tools such as Figma, React, and Node.js." }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">
        <span className="italic">Frequently</span> Asked Questions.
      </h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
  <div key={index} className="faq-item">
    <button className="faq-question" onClick={() => toggleFAQ(index)}>
      {item.question}
      <span className={`faq-icon ${activeIndex === index ? "open" : ""}`}>
        {activeIndex === index ? "−" : "+"}
      </span>
    </button>
    <div className={`faq-answer ${activeIndex === index ? "open" : ""}`}>
      {item.answer}
    </div>
  </div>
))}

      </div>
    </div>
  );
};

export default FAQ;
