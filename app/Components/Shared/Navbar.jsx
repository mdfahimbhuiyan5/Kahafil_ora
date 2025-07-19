import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const textStyle = {
    fontFamily: 'Fragment Mono',
    fontWeight: 400,
    fontSize: '22px',
    lineHeight: '100%',
    textTransform: 'uppercase',
    color: '#444444',
  };

  const navLinks = ['HOME', 'ABOUT', 'THOUGHTS', 'MAIL'];
  const socialLinks = ['X', 'FB', 'LI'];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent py-5 px-6 lg:px-10">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Hamburger Toggle (Mobile) */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex justify-between items-center w-full">
          {/* Fluid Nav Links */}
          <div className="flex flex-1 justify-between">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="p-2.5 hover:underline"
                style={textStyle}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-6 ml-10">
            {socialLinks.map((social) => (
              <a
                key={social}
                href="#"
                className="p-2.5 hover:underline"
                style={textStyle}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 px-2 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="p-2.5 hover:underline"
              style={textStyle}
            >
              {link}
            </a>
          ))}
          <div className="flex gap-4 mt-2">
            {socialLinks.map((social) => (
              <a
                key={social}
                href="#"
                className="p-2.5 hover:underline"
                style={textStyle}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
