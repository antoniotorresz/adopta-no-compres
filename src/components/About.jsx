import React from "react";
import "./About.css";
import Image from "./Image";

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <div className="hero-content">
          <h1>Sobre Adopta No Compres</h1>
          <p>Transformando vidas a través de la adopción responsable</p>
        </div>
      </section>

      <section className="about-mission">
        <div className="mission-content">
          <h2>Nuestra Misión</h2>
          <p>
            En Adopta No Compres, creemos que cada mascota merece un hogar
            amoroso. Nuestra misión es conectar animales necesitados con
            familias comprometidas, promoviendo la adopción responsable y
            reduciendo el abandono animal.
          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="story-content">
          <h2>Nuestra Historia</h2>
          <p>
            Fundada en 2018 por un grupo de amantes de los animales, comenzamos
            como un pequeño refugio local. Hoy somos una comunidad de más de
            10,000 familias que han encontrado a su compañero perfecto a través
            de nuestra plataforma.
          </p>
        </div>
        <div className="story-image">
          <img src="/team.jpeg" alt="Equipo de Adopta No Compres" />
        </div>
      </section>

      <section className="about-values">
        <h2>Nuestros Valores</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">❤️</div>
            <h3>Compasión</h3>
            <p>
              Ponemos el bienestar animal en el centro de todo lo que hacemos.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3>Responsabilidad</h3>
            <p>
              Promovemos la tenencia responsable y seguimiento post-adopción.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">🌍</div>
            <h3>Sostenibilidad</h3>
            <p>
              Trabajamos por un futuro con menos animales en situación de calle.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">🏆</div>
            <h3>Excelencia</h3>
            <p>
              Mantenemos los más altos estándares en nuestros procesos de
              adopción.
            </p>
          </div>
        </div>
      </section>

      <section className="about-team">
        <h2>Conoce al Equipo</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-image">
                <Image src="https://antoniotorres.tech/me.jpg" alt="Founder"/>
            </div>
            <h3>Antonio Torres Ramirez</h3>
            <p>Fundador</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
