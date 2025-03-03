'use client';

import React from 'react';
import Image from 'next/image';
import MenuToggle from '@/components/ui/menuToggle';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="animate-fadeInDown fixed inset-x-0 top-0 z-50 mx-auto flex w-full max-w-10xl items-center justify-between px-6 py-4 lg:px-40 backdrop-blur-sm bg-opacity-5 bg-zinc-900 bg-gradient-to-r from-transparent to-transparent"
    >
      <div className="flex items-center">
        <Image src="/monLogo.png" alt="Logo" width={40} height={40} className="md:w-50 md:h-50" />
      </div>
      <nav className="hidden md:flex">
        <ul className="flex space-x-2 md:space-x-4">
          <li className="nav-item"><a href="#home" className="text-sm md:text-base hover:text-neutral-400">Home</a></li>
          <li className="nav-item"><a href="#projects" className="text-sm md:text-base hover:text-neutral-400">Projects</a></li>
          <li className="nav-item"><a href="#skills" className="text-sm md:text-base hover:text-neutral-400">Skills</a></li>
          <li className="nav-item"><a href="#moreAbout" className="text-sm md:text-base hover:text-neutral-400">About</a></li>
          <li className="nav-item"><a href="#contact" className="text-sm md:text-base hover:text-neutral-400">Contact</a></li>
        </ul>
      </nav>
      <div className="flex items-center space-x-4">
        <div className="md:hidden">
          <MenuToggle />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;