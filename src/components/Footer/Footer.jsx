import React, { useEffect, useState } from "react";

export default function Footer() {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mazzahall/assets-port/main/data/footer.json")
      .then((res) => res.json())
      .then((data) => setFooterData(data))
      .catch((err) => console.error("Footer JSON Error:", err));
  }, []);

  return (
    <footer className="bg-[#B3C1C8] py-12 px-8">
      <div className="flex flex-col md:flex-row md:items-start md:gap-20">

        {/* LOGO — selalu di kiri */}
        <div className="mb-8 md:mb-0">
          {footerData && (
            <img
              src={footerData.logo}
              alt="Footer Logo"
              className="w-16 h-16 object-contain"
            />
          )}
        </div>

        {/* MENU */}
        <div className="grid grid-cols-2 gap-10 md:flex md:gap-20">
          <ul className="space-y-2 text-gray-800 text-[16px]">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Services</a></li>
          </ul>

          <ul className="space-y-2 text-gray-800 text-[16px]">
            <li><a href="#">Terms-And-Conditions</a></li>
            <li><a href="#">Privacy-Policy</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Gallery</a></li>
          </ul>
        </div>
      </div>

      <p className="mt-10 text-gray-900 text-[15px] text-center max-w-6xl mx-auto">
        © 2025 Portofolio. All rights reserved.
      </p>
    </footer>
  );
}
