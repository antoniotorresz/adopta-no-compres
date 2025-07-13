import React from 'react';
import { useParams, Link } from 'react-router-dom';
import getPets from '../api/pets';
import './PetDetail.css'; // Estilos básicos
import Image from './Image';

const PetDetail = () => {
  const { id } = useParams();
  const pet = getPets().find(pet => pet.id === parseInt(id));

  if (!pet) {
    return (
      <div className="pet-detail-error">
        <p>No encontramos esta mascota</p>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="pet-detail">
      <div className="pet-image">
        <Image src={pet.image} alt={pet.name} />
      </div>
      
      <div className="pet-info">
        <h1>{pet.name}</h1>
        <p className="pet-specie">{pet.specie}</p>
        <p className="pet-description">{pet.description}</p>
        
        <Link to="/" className="back-button">
          ← Volver
        </Link>
      </div>
    </div>
  );
};

export default PetDetail;