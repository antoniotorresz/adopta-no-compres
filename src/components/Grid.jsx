import "./Grid.css";
import pets from "../data.json";
import { useState } from "react";
import PetCard from "./PetCard"; // Asegúrate de importar el componente PetCard

const Grid = () => {
  const [currentPets, setCurrentPets] = useState(pets);
  
  return (
    <section className="pet-grid">
      {currentPets.map((pet) => (
        <PetCard
          key={pet.id} // Importantísimo: key única para cada elemento
          id={pet.id}
          name={pet.name}
          description={pet.description}
          specie={pet.specie}
          image={pet.image}
        />
      ))}
    </section>
  );
};

export default Grid;