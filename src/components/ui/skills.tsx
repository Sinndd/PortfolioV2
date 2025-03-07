'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript', logo: '/logos/javascript.svg' },
  { name: 'React', logo: '/logos/react.svg' },
  { name: 'CSS', logo: '/logos/css3.svg' },
  { name: 'Git', logo: '/logos/git.svg' },
  { name: 'GSAP', logo: '/logos/gsap.svg' },
  { name: 'Github', logo: '/logos/github.svg' },
  { name: 'MySQL', logo: '/logos/mysql.svg' },
  { name: 'NextJS', logo: '/logos/nextdotjs.svg' },
  { name: 'NodeJS', logo: '/logos/nodedotjs.svg' },
  { name: 'HTML', logo: '/logos/html5.svg' },
  { name: 'npm', logo: '/logos/npm.svg' },
  { name: 'Shadcn', logo: '/logos/shadcnui.svg' },
  { name: 'TailwindCSS', logo: '/logos/tailwindcss.svg' },
  { name: 'Typescript', logo: '/logos/typescript.svg' },
  { name: 'Vercel', logo: '/logos/vercel.svg' },
  { name: 'PHP', logo: '/logos/php.svg' },
  { name: 'Symfony', logo: '/logos/symfony.svg' },
  { name: 'Framer Motion', logo: '/logos/framerMotion.svg' },
  { name: 'ExpressJS', logo: '/logos/express-js.svg' },
  { name: 'Vite', logo: '/logos/vite.svg' },
  { name: 'VueJS', logo: '/logos/vue-js.svg' },
  // Ajoutez d'autres compétences ici
];

const Skills = () => {
  return (
    <section id="skills" className="skillsSection p-4">
      <div className="outerSectionDiv">
        <motion.h2
          className="title z-2 relative mb-36 md:text-5xl text-center lg:text-center mt-28 mb-12! text-balance text-3xl"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Tech Stack
        </motion.h2>
        <motion.ul
          className="mt-10 flex flex-wrap gap-4 justify-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          {skills.map((skill) => (
            <li key={skill.name} className="relative flex items-center justify-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-4 py-1.5 text-sm text-white/80 lg:text-base">
              <Image src={skill.logo} alt={`${skill.name} logo`} width={20} height={20} className="w-5 h-5" />
              <span>{skill.name}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Skills;