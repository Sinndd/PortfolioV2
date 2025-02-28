import React from 'react';
import Image from 'next/image';
import MenuToggle from '@/components/ui/menuToggle';

const Header = () => {
  return (
    <header className="animate-fadeInDown fixed inset-x-0 top-0 z-50 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 backdrop-blur-sm bg-opacity-5 bg-zinc-900">
      <div className="flex items-center">
        <Image src="/monLogo.png" alt="Logo" width={40} height={40} className="md:w-50 md:h-50" />
      </div>
      <nav className="hidden md:flex">
      <ul className="flex space-x-2 md:space-x-4">
          <li className="nav-item"><a href="#home" className="text-sm md:text-base hover:text-neutral-400">Home</a></li>
          <li className="nav-item"><a href="#projects" className="text-sm md:text-base hover:text-neutral-400">Projects</a></li>
          <li className="nav-item"><a href="#skills" className="text-sm md:text-base hover:text-neutral-400">Skills</a></li>
          <li className="nav-item"><a href="#about" className="text-sm md:text-base hover:text-neutral-400">About</a></li>
          <li className="nav-item"><a href="#contact" className="text-sm md:text-base hover:text-neutral-400">Contact</a></li>
        </ul>
      </nav>
      <div className="flex items-center space-x-4">
        <div className="md:hidden">
          <MenuToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;