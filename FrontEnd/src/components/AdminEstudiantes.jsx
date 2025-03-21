import React, { useState, useEffect } from 'react';

const Estudiantes = ({
  estudiantes,
  estudianteEditando,
  guardarEstudiante,
  eliminarEstudiante,
  setEstudianteEditando,
}) => {
  const [formData, setFormData] = useState({
    registro: '',
    nombre: '',
    correo: '',
    contrasena: '',
  });

  useEffect(() => {
    if (estudianteEditando) {
      setFormData(estudianteEditando);
    } else {
      setFormData({ registro: '', nombre: '', correo: '', contrasena: '' });
    }
  }, [estudianteEditando]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    guardarEstudiante(formData); 
    setFormData({ registro: '', nombre: '', correo: '', contrasena: '' }); 
  };

  return (
    <div id="estudiantes" className="detalles">
      <div className="formulario">
        <div className="formulario-titulo">
          <h2>{estudianteEditando ? 'Editar Estudiante' : 'Crear Estudiante'}</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="contenedor-input-formulario">
            <label htmlFor="registro">Registro</label>
            <input
              type="text"
              id="registro"
              name="registro"
              value={formData.registro}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contenedor-input-formulario">
            <label htmlFor="nombre">Nombre Completo:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contenedor-input-formulario">
            <label htmlFor="correo">Correo:</label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contenedor-input-formulario">
            <label htmlFor="contrasena">Contraseña:</label>
            <input
              type="password"
              id="contrasena"
              name="contrasena"
              value={formData.contrasena}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contenedor-input-formulario">
            <button type="submit">Guardar</button>
          </div>
        </form>
      </div>
      <div className="historial-estudiantes">
        <div className="historial-titulo-estudiantes">
          <h2>Historial de Estudiantes</h2>
        </div>
        <table>
          <thead>
            <tr>
              <td>Registro</td>
              <td>Nombre Completo</td>
              <td>Correo</td>
              <td>Contraseña</td>
              <td>Acciones</td>
            </tr>
          </thead>
          <tbody>
            {estudiantes.map((estudiante) => (
              <tr key={estudiante.registro}>
                <td>{estudiante.registro}</td>
                <td>{estudiante.nombre}</td>
                <td>{estudiante.correo}</td>
                <td>{estudiante.contrasena}</td>
                <td>
                  <button
                    className="btn-editar"
                    onClick={() => setEstudianteEditando(estudiante)}
                  >
                    <ion-icon name="pencil-outline"></ion-icon>
                  </button>
                  <button
                    className="btn-eliminar"
                    onClick={() => eliminarEstudiante(estudiante.registro)}
                  >
                    <ion-icon name="trash-outline"></ion-icon>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Estudiantes;