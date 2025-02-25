import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'Screen Lister',
    description: 'Screen-lister is an Electron application that lists the screens connected to your computer using DDC/CI.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind', 'Vercel'],
    liveLink: 'http://localhost:3000/',
    githubLink: 'https://github.com/Sinndd/screen-lister',
    number: '01',
    borderColor: 'border-pink-400', // Couleur du trait
    bgColor: 'bg-pink-600/20', // Couleur de fond pour les badges
    textColor: 'text-pink-400', // Couleur du texte pour les badges
    ringColor: 'ring-pink-500/10', // Couleur de l'anneau pour les badges
  },
  {
    title: 'TODO List',
    description: 'List all your tasks and manage them easily.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind', 'Vercel'],
    liveLink: 'http://localhost:3000/',
    githubLink: 'https://github.com/Sinndd/TODO-List',
    number: '02',
    borderColor: 'border-blue-400', // Couleur du trait
    bgColor: 'bg-blue-600/20', // Couleur de fond pour les badges
    textColor: 'text-blue-400', // Couleur du texte pour les badges
    ringColor: 'ring-blue-500/10', // Couleur de l'anneau pour les badges
  },
  {
    title: 'Portfolio',
    description: 'A simple portfolio website to showcase my work.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    liveLink: 'http://localhost:3000/',
    githubLink: 'https://github.com/Sinndd/portfolio',
    number: '03',
    borderColor: 'border-emerald-400', // Couleur du trait
    bgColor: 'bg-emerald-600/20', // Couleur de fond pour les badges
    textColor: 'text-emerald-400', // Couleur du texte pour les badges
    ringColor: 'ring-emerald-500/10', // Couleur de l'anneau pour les badges
  },
  {
    title: 'PorfolioV2',
    description: 'The new version of my portfolio website to showcase my work.',
    tags: ['Next.js', 'Tailwind', 'Vercel'],
    liveLink: 'http://localhost:3000/',
    githubLink: 'https://github.com/Sinndd/PortfolioV2',
    number: '04',
    borderColor: 'border-purple-400', // Couleur du trait
    bgColor: 'bg-purple-600/20', // Couleur de fond pour les badges
    textColor: 'text-purple-400', // Couleur du texte pour les badges
    ringColor: 'ring-purple-500/10', // Couleur de l'anneau pour les badges
  },
  // Ajoutez plus de projets ici
];

const Projects = () => {
  return (
    <section id="projects" className="projectSection p-4">
      <div className="outerSectionDiv">
        <h2 className="z-2 relative mb-36 md:text-5xl text-center lg:text-center mt-28 mb-12! text-balance text-3xl title">
          All my <span className="projectTitle projectTitleGradient font-bold">projects</span>
        </h2>
        <div className="projectContainer grid grid-cols-1 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="projectCard p-4 rounded-lg">
              <div className={`projectNumber ${index % 2 === 0 ? 'rightNumber' : 'leftNumber'}`}>{project.number}</div>
              <div className={`projectContent ${index % 2 === 0 ? 'leftProjectContent' : 'rightProjectContent'} p-4`}>
                <div className="flex items-center mb-2">
                  <h3 className="projectHeading text-2xl font-bold">{project.title}</h3>
                  <hr className={`ml-4 border-t-2 ${project.borderColor}`} style={{ width: '50px' }} />
                </div>
                <p className="projectSubHeading mb-2 text-gray-500">{project.description}</p>
                <div className="projectSkillsContainer flex flex-wrap mb-4 gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={`projectSkill inline-flex items-center rounded-md ${project.bgColor} px-3 py-0.5 text-sm font-medium ${project.textColor} ring-1 ring-inset ${project.ringColor}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="btnGroup flex flex-col sm:flex-row mt-6 gap-4">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="relative flex h-fit w-full sm:w-1/2 items-center justify-center gap-2 rounded-xl bg-neutral-900 px-5 py-2 shadow-[inset_0_2px_10px_#ffffff1f]">
                      <Image src="/icons/linkIcon.svg" alt="Live link icon" width={20} height={20} />
                      <span className="text-white text-base sm:text-sm">Live link</span>
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="relative flex h-fit w-full sm:w-1/2 items-center justify-center gap-2 rounded-xl bg-neutral-900 px-5 py-2 shadow-[inset_0_2px_10px_#ffffff1f]">
                      <Image src="/logos/github.svg" alt="GitHub icon" width={20} height={20} />
                      <span className="text-white text-base sm:text-sm">Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;