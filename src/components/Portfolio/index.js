import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'BUDGET TRACKER',
      description: 'MONGO DB',
      link: "https://fathomless-taiga-88092.herokuapp.com/",
      repo: "https://github.com/maa-hub/budget-tracker.git"
    },
    {
      name: 'React Portfolio',
      description: 'React ',
      link: "https://github.com/maa-hub/react-portfolio.git",
      repo: "https://github.com/maa-hub/react-portfolio.git"
    },
    {
      name: 'run-buddy',
      description: 'HTML/CSS',
      link: "https://github.com",
      repo: "https://maa-hub.github.io/run-buddy/"
    },

  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
