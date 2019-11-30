import React from "react";

export default function TechCard({ tech }) {
  return (
    <div className="tech-card">
      <img src={tech.avatar} alt="user-avatar" />
      <div className="info-box">
        <h3>
          <span className="primary-text">Name:</span> {tech.name}
        </h3>
        <p>
          <span className="primary-text">Skills:</span>
          {tech.skills}
        </p>
      </div>
    </div>
  );
}
