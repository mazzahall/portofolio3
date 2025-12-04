import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [navbarData, setNavbarData] = useState(null);


  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mazzahall/assets-port/main/data/navbar.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Navbar JSON:", data);
        setNavbarData(data);
      })
      .catch((err) => console.error("Navbar JSON Error:", err));
  }, []);


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
        

        <div className="w-10 h-10 rounded-md flex items-center justify-center bg-transparent">
          {navbarData ? (
            <img
              src={navbarData.logo}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="w-full h-full bg-gray-300 animate-pulse rounded-md" />
          )}
        </div>


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
