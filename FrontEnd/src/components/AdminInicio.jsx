import React from 'react';

const Inicio = () => {
  return (
    <div id="inicio" className="contenedor-tarjetas">
      <div className="tarjeta">
        <div>
          <div className="numero">2</div>
          <div className="tarjeta-nombre">Cantidad Admins</div>
        </div>
        <div className="icono-tarjeta">
          <ion-icon name="eye-outline"></ion-icon>
        </div>
      </div>
      <div className="tarjeta">
        <div>
          <div className="numero">80</div>
          <div className="tarjeta-nombre">Cantidad Docentes</div>
        </div>
        <div className="icono-tarjeta">
          <ion-icon name="people-outline"></ion-icon>
        </div>
      </div>
      <div className="tarjeta">
        <div>
          <div className="numero">1.550</div>
          <div className="tarjeta-nombre">Cantidad Estudiantes</div>
        </div>
        <div className="icono-tarjeta">
          <ion-icon name="people-outline"></ion-icon>
        </div>
      </div>
      <div className="tarjeta">
        <div>
          <div className="numero">20</div>
          <div className="tarjeta-nombre">Cantidad Carreras</div>
        </div>
        <div className="icono-tarjeta">
          <ion-icon name="book-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default Inicio;