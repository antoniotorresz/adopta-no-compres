import React from 'react';
import './Contact.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado con éxito!');
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contáctanos</h1>
      <p className="contact-subtitle">¿Tienes preguntas? Escríbenos y te responderemos pronto.</p>
      
      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Tu nombre completo" 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="tu@email.com" 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Asunto</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              placeholder="¿Sobre qué quieres contactarnos?" 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea 
              id="message" 
              name="message" 
              rows="6" 
              placeholder="Escribe tu mensaje aquí..." 
              required
            ></textarea>
          </div>
          
          <button type="submit" className="submit-btn">Enviar Mensaje</button>
        </form>
        
        <div className="contact-info">
          <h3>Información de contacto</h3>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>Av. Principal 123, Ciudad, País</p>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <p>+1 234 567 890</p>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <p>contacto@adoptanocompres.com</p>
          </div>
          
          <div className="social-media">
            <h3>Síguenos</h3>
            <div className="social-icons">
            <button className="social-btn" aria-label="Facebook">
                <FaFacebookF />
              </button>
              <button className="social-btn" aria-label="Twitter">
                <FaTwitter />
              </button>
              <button className="social-btn" aria-label="Instagram">
                <FaInstagram />
              </button>
              <button className="social-btn" aria-label="LinkedIn">
                <FaLinkedinIn />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;