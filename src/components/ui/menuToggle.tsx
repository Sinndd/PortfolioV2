'use client';

import React from 'react';
import { FaBars, FaUser, FaProjectDiagram, FaTools, FaEnvelope } from 'react-icons/fa';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { Button } from '@/components/ui/button';

const MenuToggle = () => {
  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <FaBars className="h-6 w-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="absolute right-0 top-full z-10000 mt-2 w-80 rounded-xl bg-zinc-900/95 p-2 backdrop-blur-md" style={{ right: '-30px' }}>
        <nav className="flex flex-col gap-1">
          <DropdownMenuItem asChild>
            <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="group flex w-full items-start gap-3 rounded-xl p-3 transition-all duration-300 hover:bg-zinc-800/50">
              <div className="mt-0.5 rounded-lg bg-zinc-700/70 p-2 text-neutral-300 group-hover:bg-white/80 group-hover:text-black">
                <FaUser className="size-5" />
              </div>
              <div className="flex flex-col">
                <span className="line-clamp-1 text-sm">About</span>
                <span className="mt-0.5 line-clamp-1 text-xs text-neutral-400 group-hover:text-white">Learn about me !</span>
              </div>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="group flex w-full items-start gap-3 rounded-xl p-3 transition-all duration-300 hover:bg-zinc-800/50">
              <div className="mt-0.5 rounded-lg bg-zinc-700/70 p-2 text-neutral-300 group-hover:bg-white/80 group-hover:text-black">
                <FaProjectDiagram className="size-5" />
              </div>
              <div className="flex flex-col">
                <span className="line-clamp-1 text-sm">Projects</span>
                <span className="mt-0.5 line-clamp-1 text-xs text-neutral-400 group-hover:text-white">Showcase of my projects</span>
              </div>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className="group flex w-full items-start gap-3 rounded-xl p-3 transition-all duration-300 hover:bg-zinc-800/50">
              <div className="mt-0.5 rounded-lg bg-zinc-700/70 p-2 text-neutral-300 group-hover:bg-white/80 group-hover:text-black">
                <FaTools className="size-5" />
              </div>
              <div className="flex flex-col">
                <span className="line-clamp-1 text-sm">Skills</span>
                <span className="mt-0.5 line-clamp-1 text-xs text-neutral-400 group-hover:text-white">Languages ​​I have already worked with</span>
              </div>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="group flex w-full items-start gap-3 rounded-xl p-3 transition-all duration-300 hover:bg-zinc-800/50">
              <div className="mt-0.5 rounded-lg bg-zinc-700/70 p-2 text-neutral-300 group-hover:bg-white/80 group-hover:text-black">
                <FaEnvelope className="size-5" />
              </div>
              <div className="flex flex-col">
                <span className="line-clamp-1 text-sm">Contact</span>
                <span className="mt-0.5 line-clamp-1 text-xs text-neutral-400 group-hover:text-white">Contact me if you need !</span>
              </div>
            </a>
          </DropdownMenuItem>
        </nav>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuToggle;