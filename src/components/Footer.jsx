import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
        <span>© {new Date().getFullYear()} Adopta No Compres. Todos los derechos reservados.</span>
        <nav className="footer-nav">
          <Link to="/about">Acerca de nosotros</Link>
          <Link to="/contact">Contacto</Link>
          <a href="/privacy">Privacidad</a>
        </nav>
    </footer>
  );
};

export default Footer;
