import React from 'react';
import Header from '../components/ui/header';
import Home from '../components/ui/home';
import Projects from '../components/ui/projects';
import Skills from '../components/ui/skills';
import Contact from '../components/ui/contact';
import MoreAbout from '@/components/ui/moreAbout';
import Banner from '@/components/ui/banner';

export default function Site() {
  return (
    <div>
      <Header />
      <main className="pt-0 md:pt-0 lg:pt-0">
        <section id="home" className="">
          <Home />
        </section>
        <section id="projects" className="p-4 md:p-8 lg:p-12 mb-20 md:mb-24 lg:mb-32 lg:mx-40">
          <Projects />
        </section>
        <section id="skills" className="p-4 md:p-8 lg:p-12 mb-20 md:mb-24 lg:mb-32 lg:mx-40">
          <Skills />
        </section>
        <section id="banner" className="p-4 md:p-8 lg:p-12 mb-5 md:mb-24 lg:mb-32 lg:mx-50">
          <Banner />
        </section>
        <section id="moreAbout" className="p-4 md:p-8 lg:p-12 mb-20 md:mb-24 lg:mb-32 lg:mx-20">
          <MoreAbout />
        </section>
      </main>
      <footer>
        <Contact />
      </footer>
    </div>
  );
}