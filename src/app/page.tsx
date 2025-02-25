import React from 'react';
import Header from '../components/ui/header';
import About from '../components/ui/about';
import Projects from '../components/ui/projects';
import Skills from '../components/ui/skills';
import Contact from '../components/ui/contact';
import MoreAbout from '@/components/ui/moreAbout';
import Banner from '@/components/ui/banner';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="pt-20 md:pt-24 lg:pt-32">
        <section id="about" className="p-4 md:p-8 lg:p-12 mb-20 md:mb-24 lg:mb-32 lg:mx-80">
          <About />
        </section>
        <section id="projects" className="p-4 md:p-8 lg:p-12 mb-20 md:mb-24 lg:mb-32 lg:mx-80">
          <Projects />
        </section>
        <section id="skills" className="p-4 md:p-8 lg:p-12 mb-20 md:mb-24 lg:mb-32 lg:mx-80">
          <Skills />
        </section>
        <section id="banner" className="p-4 md:p-8 lg:p-12 mb-5 md:mb-24 lg:mb-32 lg:mx-80">
          <Banner />
        </section>
        <section id="moreAbout" className="p-4 md:p-8 lg:p-12 mb-20 md:mb-24 lg:mb-32 lg:mx-80">
          <MoreAbout />
        </section>
        <section id="contact" className="p-4 md:p-8 lg:p-12 mb-20 md:mb-24 lg:mb-32 lg:mx-80">
          <Contact />
        </section>
      </main>
    </div>
  );
}