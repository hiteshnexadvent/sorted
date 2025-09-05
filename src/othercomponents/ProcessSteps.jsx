import React from "react";
import "./other.css"; // external css file

const steps = [
  {
    id: "01^",
    title: "Discover",
    desc: "We dive deep into your brand, audience, and goals to lay a strong, strategic foundation that guides everything forward.",
    dark: true,
  },
  {
    id: "02^",
    title: "Design",
    desc: "We create bold, cohesive, and purposeful visuals that reflect your identity, vision, and market positioning with clarity.",
  },
  {
    id: "03^",
    title: "Develop",
    desc: "We bring designs to life through clean, responsive, and high-performance development across devices & screens.",
  },
  {
    id: "04^",
    title: "Deliver",
    desc: "We refine, test, and launch with precision, then support you post-launch with updates, designs and optimizations.",
  },
];

const ProcessSteps = () => {
  return (
    <div className="process-container">
      {steps.map((step, index) => (
        <div
          key={step.id}
          className={`process-card ${step.dark ? "dark" : ""} ${
            index % 2 === 0 ? "left" : "right"
          }`}
        >
          <div className="process-header">
            <span className="process-id">{step.id}</span>
            <h2 className="process-title">{step.title}</h2>
          </div>
          <p className="process-desc">{step.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default ProcessSteps;
