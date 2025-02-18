'use client';

import React, { useState } from 'react';
import { FaBars, FaTimes, FaUser, FaProjectDiagram, FaTools, FaEnvelope } from 'react-icons/fa';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { Button } from '@/components/ui/button';

const MenuToggle = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
      <DropdownMenuTrigger asChild>
      <Button variant="outline" size="icon" onClick={handleMenuToggle} className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:ring-0 focus-visible:outline-0 aria-invalid:focus-visible:ring-0 hover:text-accent-foreground size-9 group rounded-md">
          <span className={`transition-transform duration-300 ${menuOpen ? 'rotate-90' : ''}`}>
            <FaBars className={`h-6 w-6 ${menuOpen ? 'hidden' : 'block'}`} />
            <FaTimes className={`h-6 w-6 ${menuOpen ? 'block' : 'hidden'}`} />
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="absolute right-0 top-full z-10000 mt-2 w-80 rounded-xl p-2 bg-neutral-900/95 text-neutral-100 backdrop-blur-md"
        style={{ right: '-30px', backdropFilter: 'blur(100px)' }}
      >
        <nav className="flex flex-col gap-1">
          <DropdownMenuItem asChild>
            <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="group flex w-full items-start gap-3 rounded-xl p-3 transition-all duration-300">
              <div className="mt-0.5 rounded-lg p-2 bg-neutral-700 text-neutral-300 group-hover:bg-neutral-300 group-hover:text-neutral-900">
                <FaUser className="size-5" />
              </div>
              <div className="flex flex-col">
                <span className="line-clamp-1 text-sm">About</span>
                <span className="mt-0.5 line-clamp-1 text-xs text-neutral-400 group-hover:text-neutral-50">Learn about me !</span>
              </div>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="group flex w/full items-start gap-3 rounded-xl p-3 transition-all duration-300">
              <div className="mt-0.5 rounded-lg p-2 bg-neutral-700 text-neutral-300 group-hover:bg-neutral-300 group-hover:text-neutral-900">
                <FaProjectDiagram className="size-5" />
              </div>
              <div className="flex flex-col">
                <span className="mt-0.5 line-clamp-1 text-sm">Projects</span>
                <span className="mt-0.5 line-clamp-1 text-xs text-neutral-400 group-hover:text-neutral-50">Showcase of my projects</span>
              </div>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className="group flex w/full items-start gap-3 rounded-xl p-3 transition-all duration-300">
              <div className="mt-0.5 rounded-lg p-2 bg-neutral-700 text-neutral-300 group-hover:bg-neutral-300 group-hover:text-neutral-900">
                <FaTools className="size-5" />
              </div>
              <div className="flex flex-col">
                <span className="line-clamp-1 text-sm">Skills</span>
                <span className="mt-0.5 line-clamp-1 text-xs text-neutral-400 group-hover:text-neutral-50">Languages ​​I have already worked with</span>
              </div>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="group flex w/full items-start gap-3 rounded-xl p-3 transition-all duration-300">
              <div className="mt-0.5 rounded-lg p-2 bg-neutral-700 text-neutral-300 group-hover:bg-neutral-300 group-hover:text-neutral-900">
                <FaEnvelope className="size-5" />
              </div>
              <div className="flex flex-col">
                <span className="line-clamp-1 text-sm">Contact</span>
                <span className="mt-0.5 line-clamp-1 text-xs text-neutral-400 group-hover:text-neutral-50">Contact me if you need !</span>
              </div>
            </a>
          </DropdownMenuItem>
        </nav>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuToggle;