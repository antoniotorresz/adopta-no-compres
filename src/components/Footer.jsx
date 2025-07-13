import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
        <span>© {new Date().getFullYear()} Adopta No Compres. Todos los derechos reservados.</span>
        <nav className="footer-nav">
          <a href="/about">Sobre Nosotros</a>
          <a href="/contact">Contacto</a>
          <a href="/privacy">Privacidad</a>
        </nav>
    </footer>
  );
};

export default Footer;
