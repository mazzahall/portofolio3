import React, { useState, useEffect } from "react";
import navbarData from "../../assets/navbar.json";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") === "dark";
    setDark(saved);
    document.documentElement.classList.toggle("dark", saved);
  }, []);

  const toggleDark = () => {
    const newTheme = !dark;
    setDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" }
  ];

  const colors = {
    background: dark ? "#121212" : "#FAFAFA",
    text: dark ? "#ECEFF1" : "#263238",
    buttonBg: dark ? "#37474F" : "#B0BEC5"
  };

  return (
    <header
      style={{ backgroundColor: colors.background }}
      className="w-full sticky top-0 z-50 shadow-sm"
    >
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md flex items-center justify-center">
            <img
              src={navbarData.logo}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <span
            style={{ color: colors.text }}
            className="hidden sm:block text-lg font-semibold"
          >
            Portfolio
          </span>
        </a>

        <nav className="hidden md:flex gap-6">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              style={{ color: colors.text }}
              className="hover:text-cyan-500 transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 rounded-md bg-cyan-600 text-white text-sm hover:bg-cyan-700 transition-colors duration-200"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleDark}
            style={{ backgroundColor: colors.buttonBg, color: colors.text }}
            className="p-2 rounded-md hover:opacity-80 transition-opacity duration-200"
          >
            {dark ? "🌞" : "🌙"}
          </button>

          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              style={{ color: colors.text }}
              className="p-2 rounded-md inline-flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
            >
              {open ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          style={{ backgroundColor: colors.background }}
          className="md:hidden border-t"
        >
          <div className="flex flex-col gap-3 px-4 py-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{ color: colors.text }}
                className="py-2 hover:text-cyan-500 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="py-2 inline-block rounded-md text-center bg-cyan-600 text-white hover:bg-cyan-700 transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
