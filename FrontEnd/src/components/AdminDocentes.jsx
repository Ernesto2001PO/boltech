import React, { useState, useEffect } from 'react';

const Docentes = ({
  docentes,
  docenteEditando,
  guardarDocente,
  eliminarDocente,
  setDocenteEditando,
}) => {
  const [formData, setFormData] = useState({
    registro: '',
    nombre: '',
    correo: '',
    contrasena: '',
  });

 
  useEffect(() => {
    if (docenteEditando) {
      setFormData(docenteEditando);
    } else {
      setFormData({ registro: '', nombre: '', correo: '', contrasena: '' });
    }
  }, [docenteEditando]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    guardarDocente(formData); 
    setFormData({ registro: '', nombre: '', correo: '', contrasena: '' }); 
  };

  return (
    <div id="docentes" className="detalles">
      <div className="formulario">
        <div className="formulario-titulo">
          <h2>{docenteEditando ? 'Editar Docente' : 'Crear Docente'}</h2>
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
      <div className="historial-docentes">
        <div className="historial-titulo-docentes">
          <h2>Historial de Docentes</h2>
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
            {docentes.map((docente) => (
              <tr key={docente.registro}>
                <td>{docente.registro}</td>
                <td>{docente.nombre}</td>
                <td>{docente.correo}</td>
                <td>{docente.contrasena}</td>
                <td>
                  <button
                    className="btn-editar"
                    onClick={() => setDocenteEditando(docente)}
                  >
                    <ion-icon name="pencil-outline"></ion-icon>
                  </button>
                  <button
                    className="btn-eliminar"
                    onClick={() => eliminarDocente(docente.registro)}
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

export default Docentes;