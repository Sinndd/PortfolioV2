"use client";

import React from 'react';

const Home = () => {
  return (
    <section id="home" className="about-section md:mt-5 min-h-screen flex flex-col justify-center relative p-0">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/background/skyStars.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="relative z-20 mx-auto flex max-w-full flex-col items-center justify-center px-3 delay-200 md:max-w-4xl lg:max-w-5xl">
          <h1 className="text-4xl md:text-5xl lg:text-5xl text-center text-white title">
            Hello, I'm Nathan
          </h1>
          <h2 className="text-4xl md:text-4xl lg:text-4xl text-center text-white title homeTitle homeTitleGradient">
            a Full Stack Developer
          </h2>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-neutral-950 z-10"></div>
    </section>
  );
};

export default Home;