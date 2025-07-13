import "./Grid.css";
import getPets from "../api/pets";
import { useEffect, useState, useMemo } from "react";
import PetCard from "./PetCard";
import SearchBar from "./SearchBar";

const Grid = () => {
  const [allPets, setAllPets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setAllPets(getPets());
  }, []);

  const filteredPets = useMemo(() => {
    if (!searchTerm) return allPets;

    return allPets.filter(
      (pet) =>
        pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pet.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pet.specie.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allPets, searchTerm]);

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <section className="pet-grid">
      <SearchBar onSearchChange={handleSearchChange} />
      {filteredPets.map((pet) => (
        <PetCard
          key={pet.id}
          id={pet.id}
          name={pet.name}
          description={pet.description}
          specie={pet.specie}
          image={pet.image}
        />
      ))}
      {filteredPets.length === 0 && (
        <div className="no-results">
          No se encontraron mascotas con "{searchTerm}"
        </div>
      )}
    </section>
  );
};

export default Grid;
