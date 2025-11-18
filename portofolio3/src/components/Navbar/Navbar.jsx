import React, { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-white font-semibold">
                A
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-semibold text-gray-800">Portfolio</span>
              </div>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-700 hover:text-cyan-600">Home</a>
            <a href="#about" className="text-gray-700 hover:text-cyan-600">About</a>
            <a href="#projects" className="text-gray-700 hover:text-cyan-600">Projects</a>
            <a href="#skills" className="text-gray-700 hover:text-cyan-600">Skills</a>
            <a href="#contact" className="px-4 py-2 rounded-md bg-cyan-600 text-white text-sm hover:bg-cyan-700">Contact</a>
          </nav>

          <div className="md:hidden flex items-center">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md inline-flex items-center justify-center text-gray-700 hover:bg-gray-100"
            >
              {open ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white/95">
          <div className="max-w-4xl mx-auto px-4 py-4 flex flex-col gap-3">
            <a href="#" className="text-gray-700 py-2">Home</a>
            <a href="#about" className="text-gray-700 py-2">About</a>
            <a href="#skills" className="text-gray-700 py-2">Skills</a>
            <a href="#projects" className="text-gray-700 py-2">Projects</a>
            <a href="#contact" className="py-2 inline-block rounded-md text-center bg-cyan-600 text-white">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
