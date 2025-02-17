import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="p-4">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="mt-2">
        {/* Ajoutez vos projets ici */}
        <div className="project">
          <h3 className="text-2xl">Project 1</h3>
          <p>Description of the first project.</p>
        </div>
        <div className="project">
          <h3 className="text-2xl">Project 2</h3>
          <p>Description of the second project.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;