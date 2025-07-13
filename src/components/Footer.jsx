import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
        <span>{new Date().getFullYear()} Adopta No Compres. Una tarea de UNIR México.</span>
        <nav className="footer-nav">
          <Link to="/about">Acerca de nosotros</Link>
          <Link to="/contact">Contacto</Link>
          <Link to="/privacy">Privacidad</Link>
        </nav>
    </footer>
  );
};

export default Footer;
