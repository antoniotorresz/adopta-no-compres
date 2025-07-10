import React, { useState } from "react";
import "./Header.css";
// Opcional: Si usas íconos de FontAwesome
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <a href="/" className="logo">
          <span className="logo-text">Adopta No Compres</span>
        </a>

        {/* Menú de navegación (desktop) */}
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="/">Inicio</a></li>
            <li><a href="/adoptar">Adoptar</a></li>
            <li><a href="/dar-en-adopcion">Dar en adopción</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </nav>

        {/* Botón hamburguesa (mobile) */}
        <button 
          className="hamburger-btn" 
          onClick={toggleMobileMenu}
          aria-label="Menú móvil"
        >
          <FaBars /> {/* Opcional: Reemplazar por <i className="fas fa-bars"></i> si no usas react-icons */}
        </button>
      </div>

      {/* Menú móvil (solo visible en mobile) */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <ul>
          <li><a href="/" onClick={toggleMobileMenu}>Inicio</a></li>
          <li><a href="/adoptar" onClick={toggleMobileMenu}>Adoptar</a></li>
          <li><a href="/dar-en-adopcion" onClick={toggleMobileMenu}>Dar en adopción</a></li>
          <li><a href="/contacto" onClick={toggleMobileMenu}>Contacto</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;