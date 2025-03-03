'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Screen Lister',
    description: 'Screen-lister is an Electron application that lists the screens connected to your computer using DDC/CI.',
    tags: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'TailwindCSS', 'PostCSS', 'ReactJS', 'NodeJS', 'ddc-node', 'Electron', 'Git'],
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
    tags: ['HTML', 'PicoCSS', 'JavaScript', 'VueJS', 'ViteJS', 'NodeJS', 'Git'],
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
    tags: ['PHP', 'Symfony', 'Twig', 'CSS', 'JavaScript', 'GSAP', 'Git'],
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
    tags: ['NextJS', 'NodeJS', 'TypeScript', 'ReactJS', 'TailwindCSS', 'RadixUI', 'Shadcn', 'Framer Motion', 'Git', 'Vercel'],
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
        <motion.h2
          className="z-2 relative mb-36 md:text-5xl text-center lg:text-center mt-28 mb-12! text-balance text-3xl title"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          All my <span className="projectTitle projectTitleGradient font-bold">projects</span>
        </motion.h2>
        <div className="projectContainer grid grid-cols-1 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              className="project-card p-4 rounded-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <div className={`projectNumber ${index % 2 === 0 ? 'rightNumber' : 'leftNumber'}`}>{project.number}</div>
              <div className={`projectContent ${index % 2 === 0 ? 'leftProjectContent' : 'rightProjectContent'} p-4`}>
                <div className="flex items-center mb-2">
                  <h3 className="projectHeading text-2xl font-bold">{project.title}</h3>
                  <hr className={`ml-4 border-t-2 ${project.borderColor} hr-transition`} />
                </div>
                <p className="projectSubHeading mb-2 text-gray-500">{project.description}</p>
                <div className="projectSkillsContainer flex flex-wrap mb-4 gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={`${project.title}-${tag}`}
                      className={`projectSkill inline-flex items-center rounded-md ${project.bgColor} px-3 py-0.5 text-sm font-medium ${project.textColor} ring-1 ring-inset ${project.ringColor}`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.5, delay: tagIndex * 0.2 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <div className="btnGroup flex flex-col sm:flex-row mt-6 gap-4">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="relative flex h-fit w-full sm:w-1/2 items-center justify-center gap-2 rounded-xl bg-neutral-900 px-5 py-2 shadow-[inset_0_2px_10px_#ffffff1f] btn-transition">
                      <Image src="/icons/linkIcon.svg" alt="Live link icon" width={20} height={20} />
                      <span className="text-white text-base sm:text-sm">Live link</span>
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="relative flex h-fit w-full sm:w-1/2 items-center justify-center gap-2 rounded-xl bg-neutral-900 px-5 py-2 shadow-[inset_0_2px_10px_#ffffff1f] btn-transition">
                      <Image src="/logos/github.svg" alt="GitHub icon" width={20} height={20} />
                      <span className="text-white text-base sm:text-sm">Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;