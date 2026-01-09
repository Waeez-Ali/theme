import { useState, useEffect } from "react";
import logo from "../assets/Logo.svg";
import { Menu, Close } from "@/assets/icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔒 Scroll lock when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative z-20">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Browser Themes" className="w-56 h-12" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-row items-center gap-8 text-sm font-medium text-text-blue">
          <a href="/themes" className="relative after:absolute after:left-1/2 after:h-0.5 after:w-0 after:bg-text-light-blue after:transition-all hover:text-text-light-blue hover:after:w-5 hover:after:-translate-x-1/2 after:-bottom-1">
            Themes
          </a>
          <a href="/build-new-tab" className="relative after:absolute after:left-1/2 after:h-0.5 after:w-0 after:bg-text-light-blue after:transition-all hover:text-text-light-blue hover:after:w-15 hover:after:-translate-x-1/2 after:-bottom-1">
            Build A New Tab
          </a>
          <a href="/build-new-tab" className="relative after:absolute after:left-1/2 after:h-0.5 after:w-0 after:bg-text-light-blue after:transition-all hover:text-text-light-blue hover:after:w-15 hover:after:-translate-x-1/2 after:-bottom-1">
            How To Build
          </a>
          <a href="/how-to-upload" className="relative after:absolute after:left-1/2 after:h-0.5 after:w-0 after:bg-text-light-blue after:transition-all hover:text-text-light-blue hover:after:w-15 hover:after:-translate-x-1/2 after:-bottom-1">
            How To Upload
          </a>
          <a href="/about" className="relative after:absolute after:left-1/2 after:h-0.5 after:w-0 after:bg-text-light-blue after:transition-all hover:text-text-light-blue hover:after:w-5 hover:after:-translate-x-1/2 after:-bottom-1">
            About
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden ">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <img src={Close} alt="Close" className="cursor-pointer" />
            ) : (
              <img src={Menu} alt="Menu" className="cursor-pointer"/>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 text-lg font-medium text-text-blue z-10 lg:hidden">
          <a href="/themes" onClick={() => setMenuOpen(false)}>Themes</a>
          <a href="/build-new-tab" onClick={() => setMenuOpen(false)}>Build A New Tab</a>
          <a href="/build-new-tab" onClick={() => setMenuOpen(false)}>How To Build</a>
          <a href="/how-to-upload" onClick={() => setMenuOpen(false)}>How To Upload</a>
          <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
        </div>
      )}
    </header>
  );
};

export default Header;
