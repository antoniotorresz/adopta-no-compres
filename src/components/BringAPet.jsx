import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BringAPet.css";

const BringAPet = ({ onAddPet }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    specie: "perro",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    alert("Gracias por contribuir a un mundo mejor para ellos. Ellos no pueden hablar pero te dan las gracias.");
    navigate("/");
  };

  return (
    <div className="bring-pet-container">
      <h2>Dar en adopción</h2>
      <form onSubmit={handleSubmit} className="pet-form">
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Descripción:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
          />
        </div>

        <div className="form-group">
          <label>Especie:</label>
          <select
            name="specie"
            value={formData.specie}
            onChange={handleChange}
            required
          >
            <option value="perro">Perro</option>
            <option value="gato">Gato</option>
            <option value="conejo">Conejo</option>
            <option value="tortuga">Tortuga</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div className="form-group">
          <label>URL de la imagen:</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG8G6P8XOhw4y7XgU09vnyxSDEzeGsZeVJqA&s"
          />
        </div>

        <button type="submit" className="submit-btn">
          Registrar Mascota
        </button>
      </form>
    </div>
  );
};

export default BringAPet;
