import { useState } from "react";
import "../styles/docente.css";
import UserImg from "/src/assets/user.jpg";

const Sidebar = () => {
  const [materiasOpen, setMateriasOpen] = useState(false);

  const materias = [
    "materias Disponibles",
    "Matemáticas",
    "Programación",
    "Historia",
    "Física",
    "Inglés",
  ];

  return (
    <nav className="navegacion">
      {/* 📌 Perfil del Docente */}
      <div className="perfil-docente-sidebar">
        <img src={UserImg} alt="Foto del docente" className="user-img" />
        <p className="nombre-docente">Mauricio Paz</p>
      </div>

      {/* 📌 Menú de Materias */}
      <div className="menu-sidebar">
        <button
          className="materia-btn"
          onClick={() => setMateriasOpen(!materiasOpen)}
        >
          📚 Materias
        </button>
        <ul className={`materia-lista ${materiasOpen ? "open" : ""}`}>
          {materias.map((materia, index) => (
            <li key={index}>{materia}</li>
          ))}
        </ul>
      </div>

      {/* 📌 Botón de Cerrar Sesión */}
      <div className="cerrar-sesion-container">
        <button className="cerrar-sesion-btn">🔑 Cerrar Sesión</button>
      </div>
    </nav>
  );
};

export default Sidebar;
