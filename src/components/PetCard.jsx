import React from 'react';
import './PetCard.css';
import Image from "./Image";
const PetCard = ({ id, name, description, specie, image }) => {
  const getSpecieIcon = () => {
    switch(specie.toLowerCase()) {
      case 'perro':
        return '🐶';
      case 'gato':
        return '🐱';
      case 'tortuga':
        return '🐢';
      case 'conejo':
        return '🐰';
      default:
        return '🐾';
    }
  };

  return (
    <div className="pet-card">
      <div className="pet-image-container">
        <Image src={image} alt={name} />
      </div>
      <div className="pet-info">
        <div className="pet-header">
          <h3 className="pet-name">{name}</h3>
          <span className="pet-specie">{getSpecieIcon()} {specie}</span>
        </div>
        <p className="pet-description">{description}</p>
        <button className="adopt-button">Ver detalles</button>
      </div>
    </div>
  );
};

export default PetCard;