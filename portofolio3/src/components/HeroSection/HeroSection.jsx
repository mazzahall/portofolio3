import React from 'react';

export default function HeroSection() {
  return (
    <section id="about" className="w-full py-16 bg-white text-[#263238]">
      <div className="max-w-4xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-3xl font-['Playfair_Display'] font-semibold mb-4">Hi, I’m Azzam</h1>
            <p className="font-['Lato'] leading-relaxed mb-6 opacity-80">
A frontend developer focused on modern UI, fast performance, and solid user experiences. I enjoy crafting code that looks simple on the surface but works with precision behind the scenes..
            </p>
          </div>

          <div className="flex justify-center"></div>
        </div>

        <div className="mt-12 bg-[#B0BEC5] p-6 rounded-lg text-center">
          <h2 className="text-xl font-['Playfair_Display'] font-semibold">Web Developer & UI/UX Designer</h2>
          <p className="font-['Lato'] mt-2 text-sm opacity-90">
I transform ideas into elegant, functional digital products through thoughtful 
design and clean code. Specializing in user-centered interfaces and seamless
 web experiences.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <a
              href="#projects"
              className="px-5 py-2 rounded-md bg-white text-[#263238] font-['Lato'] font-semibold hover:opacity-80"
            >
              Lihat Project
            </a>
            <a
              href="#contact"
              className="px-5 py-2 rounded-md bg-[#263238] text-white font-['Lato'] hover:opacity-80"
            >
              Get in Touch
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}