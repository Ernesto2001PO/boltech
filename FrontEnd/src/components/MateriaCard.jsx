import "../styles/docente.css";

const MateriaCard = ({ nombre, descripcion }) => {
  return (
    <div className="tarjeta">
      <div>
        <h3 className="materia-nombre">{nombre}</h3>
        <p className="materia-descripcion">{descripcion}</p>
      </div>
    </div>
  );
};

export default MateriaCard;
