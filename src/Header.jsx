import { useState, useEffect } from 'react';
import { FaCar, FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuActive(!menuActive);
  const closeMenu = () => setMenuActive(false);

  return (
    <header 
      id="header" 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-gray-900/95' : 'py-6 bg-gray-900/90'
      } backdrop-blur-md shadow-lg`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          {/* Logo (using NavLink instead of <a> for SPA behavior) */}
          <NavLink 
            to="/" 
            className="logo flex items-center text-2xl font-bold text-white"
            onClick={closeMenu}
          >
            <FaCar className="mr-2 text-red-500" />
            Marsidi<span className="text-red-500">Cars</span>
          </NavLink>

          {/* Mobile Menu Toggle */}
          <div 
            className="menu-toggle md:hidden cursor-pointer text-xl text-white" 
            onClick={toggleMenu}
          >
            <FaBars />
          </div>

          {/* Navigation Links */}
          <ul 
            className={`nav-links ${
              menuActive ? 'left-0' : '-left-full'
            } fixed md:static md:flex md:items-center md:space-x-8 top-20 md:top-0 w-full md:w-auto h-[calc(100vh-80px)] md:h-auto bg-gray-900 md:bg-transparent transition-all duration-500 ease-in-out z-40`}
          >
            {[
              { path: "/", text: "Home" },
              { path: "/about", text: "About" },
              { path: "/cars", text: "Cars" },
              { path: "/gallery", text: "Gallery" },
              { path: "/contact", text: "Contact" },
            ].map((item) => (
              <li key={item.path} className="my-6 md:my-0 text-center">
                <NavLink
                  to={item.path}
                  className={({ isActive }) => 
                    `group text-white hover:text-red-500 text-lg font-medium relative transition-colors duration-300 ${
                      isActive ? "text-red-500" : ""
                    }`
                  }
                  onClick={closeMenu}
                  caseSensitive={false}
                >
                  {item.text}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}