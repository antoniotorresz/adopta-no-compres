import React from 'react';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-container">
      <header className="privacy-header">
        <h1>Política de Privacidad</h1>
        <p className="last-updated">Última actualización: 15 de junio, 2023</p>
      </header>

      <main className="privacy-content">
        <section className="privacy-section">
          <h2>1. Introducción</h2>
          <p>
            En Adopta No Compres, valoramos y respetamos tu privacidad. Esta política describe cómo 
            recopilamos, usamos y protegemos tu información personal cuando utilizas nuestro sitio web.
          </p>
        </section>

        <section className="privacy-section">
          <h2>2. Información que Recopilamos</h2>
          <p>Podemos recopilar los siguientes tipos de información:</p>
          <ul>
            <li>Información de contacto (nombre, email, teléfono)</li>
            <li>Datos de registro para adopciones</li>
            <li>Información de navegación y cookies</li>
            <li>Comunicaciones que nos envías</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>3. Uso de tu Información</h2>
          <p>Utilizamos tu información para:</p>
          <ul>
            <li>Procesar solicitudes de adopción</li>
            <li>Mejorar nuestros servicios</li>
            <li>Enviar actualizaciones importantes</li>
            <li>Garantizar la seguridad de nuestra plataforma</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>4. Compartir Información</h2>
          <p>
            No vendemos ni compartimos tu información personal con terceros, excepto cuando sea 
            necesario para:
          </p>
          <ul>
            <li>Cumplir con requisitos legales</li>
            <li>Proteger nuestros derechos y seguridad</li>
            <li>Proveer servicios esenciales (ej: procesamiento de pagos)</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>5. Tus Derechos</h2>
          <p>Tienes derecho a:</p>
          <ul>
            <li>Acceder a tu información personal</li>
            <li>Solicitar correcciones</li>
            <li>Pedir la eliminación de tus datos</li>
            <li>Oponerte al procesamiento de tus datos</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>6. Cookies y Tecnologías Similares</h2>
          <p>
            Utilizamos cookies para mejorar tu experiencia. Puedes gestionar tus preferencias 
            de cookies en la configuración de tu navegador.
          </p>
        </section>

        <section className="privacy-section">
          <h2>7. Cambios a esta Política</h2>
          <p>
            Podemos actualizar esta política ocasionalmente. Te notificaremos sobre cambios 
            significativos publicando la nueva política en nuestro sitio.
          </p>
        </section>

        <section className="privacy-section contact-section">
          <h2>8. Contacto</h2>
          <p>
            Si tienes preguntas sobre esta política, contáctanos en:
            <br />
            <a href="mailto:privacidad@adoptanocompres.com">privacidad@adoptanocompres.com</a>
          </p>
        </section>
      </main>
    </div>
  );
};

export default Privacy;