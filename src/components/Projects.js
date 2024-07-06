import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects">
        <div>
          <h3>My Journal App</h3>
          <p><strong>April 2023</strong></p>
          <p>Developed a platform for efficient daily planning with features such as Week View, Event and Task Creation, and Commitment Warnings.</p>
          <p><a href="https://github.com/Anyueow/MyJournalApp">GitHub Repository</a></p>
        </div>
        <div>
          <h3>Vera</h3>
          <p><strong>April 2024</strong></p>
          <p>Created a deep learning project to predict fashion trends by analyzing images from fashion events.</p>
          <p><a href="https://github.com/Anyueow/Vera">GitHub Repository</a></p>
        </div>
        <div>
          <h3>Flood Risk and Mitigation Analysis for Mass Ave</h3>
          <p><strong>June 2023</strong></p>
          <p>Developed a data-driven project to identify flood-prone areas and propose suitable tree-planting sites to mitigate water runoff.</p>
          <p><a href="https://github.com/Anyueow/FloodRiskAnalysis">GitHub Repository</a></p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
