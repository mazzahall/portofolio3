import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "ADZHEALTH",
      img: "https://via.placeholder.com/300x180?text=Landing+Page",
      link: "#"
    },
    {
      title: "Manajemen diri",
      img: "https://via.placeholder.com/300x180?text=Dashboard",
      link: "#"
    },
    {
      title: "Portofolio lama",
      img: "https://via.placeholder.com/300x180?text=Ecommerce",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="w-full py-16 bg-white text-[#263238]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-['Playfair_Display'] font-semibold text-center mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow bg-[#B0BEC5] hover:opacity-90 transition"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-['Playfair_Display'] font-semibold">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  className="text-sm font-['Lato'] mt-2 inline-block hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}