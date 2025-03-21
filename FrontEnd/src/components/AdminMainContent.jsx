import React from 'react';
import Inicio from './AdminInicio';
import Docentes from './AdminDocentes';
import Estudiantes from './AdminEstudiantes';

const MainContent = ({
  activeSection,
  isMenuOpen,
  toggleMenu,
  docentes,
  estudiantes,
  docenteEditando,
  estudianteEditando,
  guardarDocente,
  eliminarDocente,
  guardarEstudiante,
  eliminarEstudiante,
  setDocenteEditando,
  setEstudianteEditando,
}) => {
  return (
    <div className={`principal ${isMenuOpen ? 'active' : ''}`}>
      <div className="menu-hamburguesa">
        <div className="toggle" id="toggle" onClick={toggleMenu}>
          <ion-icon name="menu-outline"></ion-icon>
        </div>
      </div>
      {activeSection === 'inicio' && <Inicio />}
      {activeSection === 'docentes' && (
        <Docentes
          docentes={docentes}
          docenteEditando={docenteEditando}
          guardarDocente={guardarDocente}
          eliminarDocente={eliminarDocente}
          setDocenteEditando={setDocenteEditando}
        />
      )}
      {activeSection === 'estudiantes' && (
        <Estudiantes
          estudiantes={estudiantes}
          estudianteEditando={estudianteEditando}
          guardarEstudiante={guardarEstudiante}
          eliminarEstudiante={eliminarEstudiante}
          setEstudianteEditando={setEstudianteEditando}
        />
      )}
    </div>
  );
};

export default MainContent;