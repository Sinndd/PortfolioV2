import React from 'react';
import Header from '../components/ui/header';
import About from '../components/ui/about';
import Projects from '../components/ui/projects';
import Skills from '../components/ui/skills';
import Contact from '../components/ui/contact';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="pt-20 md:pt-24 lg:pt-32">
        <section id="about" className="p-4 md:p-8 lg:p-12 mb-20 md:mb-24 lg:mb-32">
          <About />
        </section>
        <section id="projects" className="p-4 md:p-8 lg:p-12 mb-20 md:mb-24 lg:mb-32">
          <Projects />
        </section>
        <section id="skills" className="p-4 md:p-8 lg:p-12 mb-20 md:mb-24 lg:mb-32">
          <Skills />
        </section>
        <section id="contact" className="p-4 md:p-8 lg:p-12 mb-20 md:mb-24 lg:mb-32">
          <Contact />
        </section>
      </main>
    </div>
  );
}