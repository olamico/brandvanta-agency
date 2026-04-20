"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
const [isOpen, setIsOpen] = useState(false);

// Function to close menu when a link is clicked
const closeMenu = () => setIsOpen(false);

return (
<nav className="bg-white text-obsidian sticky top-0 z-50 shadow-sm relative">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

    {/* Brand Logo */}
    <Link href="/" onClick={closeMenu}>
      <Image 
        src="/logo.png" 
        alt="brandvanta agency logo" 
        width={180} 
        height={50} 
        className="w-auto h-8 md:h-10"
        priority 
      />
    </Link>
<div className="absolute left-1/2 transform -translate-x-1/2 md:hidden z-0">
          <Link href="/" onClick={closeMenu} className="text-xl font-bold tracking-tighter text-obsidian">
            BRANDVANTA<span className="text-gold">.</span>
          </Link>
        </div>
    {/* Desktop Navigation Links (Hidden on Mobile) */}
    <div className="hidden md:flex space-x-8 text-sm font-bold">
      <Link href="/" className="hover:text-gold transition-colors duration-300">Home</Link>
      <Link href="/services" className="hover:text-gold transition-colors duration-300">Services</Link>
      <Link href="/programs" className="hover:text-gold transition-colors duration-300">Programs</Link>
      <Link href="/about" className="hover:text-gold transition-colors duration-300">About Us</Link>
      <Link href="/contact" className="hover:text-gold transition-colors duration-300">Contact</Link>
    </div>

    {/* Desktop Call to Action */}
    <div className="hidden md:block">
      <Link href="/contact" className="bg-obsidian text-white px-5 py-2 font-bold rounded hover:bg-gold hover:text-obsidian transition-colors duration-300">
        Let's Talk
      </Link>
    </div>

    {/* Mobile Hamburger Button */}
    <div className="md:hidden flex items-center">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="text-obsidian hover:text-gold focus:outline-none transition-colors p-2"
        aria-label="Toggle mobile menu"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)">
          {isOpen ? (
            // 'X' Icon for when menu is open
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            // Hamburger Icon for when menu is closed
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
    </div>

  </div>

  {/* Mobile Dropdown Menu */}
  {isOpen && (
    <div className="md:hidden bg-white border-t border-gray-200 absolute w-full shadow-lg left-0 top-full">
      <div className="flex flex-col px-6 py-4 space-y-4 text-center">
        <Link href="/" onClick={closeMenu} className="block text-lg font-bold text-obsidian hover:text-gold transition-colors duration-300">Home</Link>
        <Link href="/services" onClick={closeMenu} className="block text-lg font-bold text-obsidian hover:text-gold transition-colors duration-300">Services</Link>
        <Link href="/programs" onClick={closeMenu} className="block text-lg font-bold text-obsidian hover:text-gold transition-colors duration-300">Programs</Link>
        <Link href="/about" onClick={closeMenu} className="block text-lg font-bold text-obsidian hover:text-gold transition-colors duration-300">About Us</Link>
        <Link href="/contact" onClick={closeMenu} className="block text-lg font-bold text-obsidian hover:text-gold transition-colors duration-300">Contact</Link>
        
        <div className="pt-4 border-t border-gray-200">
          <Link href="/contact" onClick={closeMenu} className="inline-block bg-obsidian text-white px-8 py-3 font-bold rounded hover:bg-gold hover:text-obsidian transition-colors duration-300">
            Let's Talk
          </Link>
        </div>
      </div>
    </div>
  )}
</nav>
);
}