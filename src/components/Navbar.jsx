import React, { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import Image from "./Image";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo-container">
          <Link to="/" className="logo-image">
            <Image src={"/logo.png"} alt={"Adopta No Compres web"} />
          </Link>
          <span className="logo-text">Adopta No Compres</span>
        </div>

        {/* Menú de navegación (desktop) */}
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
            <Link to="/new">Dar en adopción</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
            <li>
              <Link to="/about">Acerca de nosotros</Link>
            </li>
          </ul>
        </nav>

        {/* Botón hamburguesa (mobile) */}
        <button
          className="hamburger-btn"
          onClick={toggleMobileMenu}
          aria-label="Menú móvil"
        >
          <FaBars />{" "}
        </button>
      </div>

      {/* Menú móvil (solo visible en mobile) */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMobileMenu}>
              Inicio
            </Link>
          </li>
          <li>
          <Link to="/new" onClick={toggleMobileMenu}>
              Dar en adopción
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMobileMenu}>
              Contacto
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMobileMenu}>
              Acerca de nosotros
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
