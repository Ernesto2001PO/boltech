import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import userImage from '../assets/user.jpg';

const Navbar = ({ showSection, isMenuOpen }) => {
  const navigate = useNavigate(); 

  const handleClick = (event, targetId) => {
    event.preventDefault();
    showSection(targetId);
  };

  const handleLogout = () => {
    navigate('/'); 
  };

  return (
    <div className={`navegacion ${isMenuOpen ? 'active' : ''}`} id="navegacion">
      <ul>
        <li>
          <br />
          <a href="#">
            <span className="icon">
              <img src={userImage} alt="Usuario" className="user-img" />
            </span>
            <span className="titulo">Mauricio Paz Cabrera</span>
          </a>
        </li>
        <li>
          <a href="#" onClick={(e) => handleClick(e, 'inicio')}>
            <span className="icon">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className="titulo">Inicio</span>
          </a>
        </li>
        <li>
          <a href="#" onClick={(e) => handleClick(e, 'docentes')}>
            <span className="icon">
              <ion-icon name="people-outline"></ion-icon>
            </span>
            <span className="titulo">Docentes</span>
          </a>
        </li>
        <li>
          <a href="#" onClick={(e) => handleClick(e, 'estudiantes')}>
            <span className="icon">
              <ion-icon name="people-outline"></ion-icon>
            </span>
            <span className="titulo">Estudiantes</span>
          </a>
        </li>
        <li>
          <a href="#" onClick={handleLogout}> {/* Botón de cerrar sesión */}
            <span className="icon">
              <ion-icon name="log-out-outline"></ion-icon>
            </span>
            <span className="titulo">Cerrar Sesión</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;