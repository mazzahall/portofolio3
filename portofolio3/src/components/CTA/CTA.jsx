import React from "react";

export default function CTA() {
  return (
    <section id="contact" className="w-full py-16 bg-white text-[#263238]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-['Playfair_Display'] font-semibold mb-4">
          Let's Build Something Together
        </h2>
        <p className="text-sm font-['Lato'] mb-8 opacity-80">
          Available for freelance projects & collaborations. Let's discuss how I can help
          bring your ideas to life.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="px-5 py-2 rounded-md bg-[#B0BEC5] text-[#263238] font-['Lato'] font-semibold hover:opacity-80"
          >
            Start a Project
          </a>
          <a
            href="#"
            className="px-5 py-2 rounded-md border border-[#263238] text-[#263238] font-['Lato'] hover:bg-[#B0BEC5]/40"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
