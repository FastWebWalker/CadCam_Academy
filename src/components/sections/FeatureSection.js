import React from "react";
import FadeInUp from "../animation/FadeInUp";

const FeaturesSection = () => {
  const features = [
    { title: "Feature 1", description: "Lorem ipsum dolor sit amet." },
    { title: "Feature 2", description: "Consectetur adipiscing elit." },
    { title: "Feature 3", description: "Sed do eiusmod tempor incididunt." },
  ];

  return (
    <section className="features-section">
      <h2>Our Key Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <FadeInUp key={index} delay={index * 0.2}>
            <div className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </FadeInUp>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
