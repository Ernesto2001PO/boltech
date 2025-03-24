import Sidebar from "../components/Sidebar";
import MateriaCard from "../components/MateriaCard";
import "../styles/docente.css";

const DocentePage = () => {
  const materias = [
    { nombre: "Matemáticas", descripcion: "Álgebra y cálculo avanzado" },
    { nombre: "Programación", descripcion: "Desarrollo en React y Vite" },
    { nombre: "Historia", descripcion: "Historia universal y contemporánea" },
  ];

  return (
    <div className="contenedor">
      <Sidebar />
      <section className="principal">
        <header className="perfil-docente">
          <h2>👨‍🏫 Perfil del Docente</h2>
          <button className="btn-cerrar-sesion">Cerrar Sesión</button>
        </header>
        <div className="contenedor-tarjetas">
          {materias.map((materia, index) => (
            <MateriaCard key={index} nombre={materia.nombre} descripcion={materia.descripcion} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default DocentePage;
