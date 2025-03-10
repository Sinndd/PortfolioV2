import React from 'react';
import Image from 'next/image';


const Contact = () => {
  return (
    <section id="contact" className="flex flex-col items-center justify-center p-10">
      <div className="h-px w-full bg-gradient-to-r from-black via-neutral-600 to-neutral-950 my-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        <div className="p-10">
          <h2 className="text-2xl font-semibold text-amber-100">Nathan Delestre</h2>
          <p className="mt-3 text-sm text-neutral-400">
            Help you create experiences where aesthetics & functionality seamlessly come together.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="https://github.com/Sinndd" target="_blank" className="text-neutral-300 transition-colors hover:text-neutral-100">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.42-1.305.763-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.305-.535-1.53.117-3.18 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.65.24 2.875.117 3.18.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.62-5.475 5.92.43.37.823 1.1.823 2.22v3.293c0 .32.217.694.825.577C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/nathan-delestre/" target="_blank" className="text-neutral-300 transition-colors hover:text-neutral-100">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.75v20.5C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.75V1.75C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.58c-1.14 0-2.06-.93-2.06-2.07 0-1.14.92-2.07 2.06-2.07 1.14 0 2.06.93 2.06 2.07 0 1.14-.92 2.07-2.06 2.07zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.14 1.45-2.14 2.95v5.71h-3.56V9h3.42v1.56h.05c.48-.9 1.65-1.85 3.4-1.85 3.63 0 4.3 2.39 4.3 5.5v6.24z" />
              </svg>
            </a>
          </div>
          <p className='mt-4 text-neutral-400'>delestre.nathan@gmail.com</p>
        </div>
        <div className="p-10 flex flex-col items-start md:items-center justify-center">
          <div className="flex items-center">
            <div>
              <h3 className="text-sm font-medium text-amber-100">General</h3>
              <ul className="mt-4 flex flex-col gap-y-3 text-sm">
                <li>
                  <a className="transition-colors hover:text-neutral-50" href="#home">Home</a>
                </li>
                <li>
                  <a className="transition-colors hover:text-neutral-50" href="#projects">Projects</a>
                </li>
                <li>
                  <a className="transition-colors hover:text-neutral-50" href="#skills">Skills</a>
                </li>
                <li>
                  <a className="transition-colors hover:text-neutral-50" href="#moreAbout">About</a>
                </li>
              </ul>
            </div>
            <div className="relative rounded-full bg-blue-700 p-1.5 leading-none font-medium animate-spin-slow ml-20 md:ml-40 lg:ml-40">
              <div className="relative w-[95px] h-[95px] rounded-full bg-black p-2 flex items-center justify-center">
                <Image src="/icons/star.png" alt="star" width={32} height={32} className="filter invert" />
                  <svg className="transform-origin-center-center" viewBox="0 0 100 100" overflow="visible" fill="black" style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, transformOrigin: 'center center' }}>
                    <path id="curve-wnxkz4" d="M 0 50 L 0 50 A 1 1 0 0 1 100 50 L 100 50 L 100 50 A 1 1 0 0 1 0 50 L 0 50" strokeWidth="none" fill="transparent"></path>
                    <text>
                      <textPath href="#curve-wnxkz4" startOffset="0" dominantBaseline="Hanging" style={{ fontSize: '13px', fontWeight: 600, wordSpacing: '5px', letterSpacing: '2.1px', fill: 'rgba(242, 242, 242, 0.9)' }}>OPEN TO WORK · OPEN TO WORK ·</textPath>
                    </text>
                  </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-black via-neutral-600 to-neutral-950 my-8"></div>
      <p className="container py-10 pb-6 text-center text-sm text-neutral-500">Copyright © 2025  Nathan Delestre. All rights reserved.</p>
    </section>
  );
};

export default Contact;