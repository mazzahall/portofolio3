import React from "react";

export default function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "TailwindCSS", "Node.js", "UI/UX", "Figma"
  ];

  return (
    <section id="skills" className="w-full py-16 bg-white text-[#263238]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-['Playfair_Display'] font-semibold text-center mb-10">
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 bg-[#B0BEC5] rounded-lg text-center font-['Lato'] font-semibold hover:opacity-90 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
