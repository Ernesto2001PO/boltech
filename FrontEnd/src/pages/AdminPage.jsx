import React, { useState } from 'react';
import AdminMainContent from '../components/AdminMainContent';
import AdminNavbar from '../components/AdminNavBar';
import Footer from '../components/Footer';

const AdminPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [activeSection, setActiveSection] = useState('inicio');
  const [docentes, setDocentes] = useState([]); 
  const [estudiantes, setEstudiantes] = useState([]); 
  const [docenteEditando, setDocenteEditando] = useState(null); 
  const [estudianteEditando, setEstudianteEditando] = useState(null); 

 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  const showSection = (targetId) => {
    setActiveSection(targetId);
  };


  const guardarDocente = (docente) => {
    if (docenteEditando) {
    
      setDocentes(docentes.map(d => d.registro === docente.registro ? docente : d));
    } else {
     
      setDocentes([...docentes, docente]);
    }
    setDocenteEditando(null); 
  };

 
  const eliminarDocente = (registro) => {
    setDocentes(docentes.filter(d => d.registro !== registro));
  };

  
  const guardarEstudiante = (estudiante) => {
    if (estudianteEditando) {
     
      setEstudiantes(estudiantes.map(e => e.registro === estudiante.registro ? estudiante : e));
    } else {
      
      setEstudiantes([...estudiantes, estudiante]);
    }
    setEstudianteEditando(null); 
  };

  
  const eliminarEstudiante = (registro) => {
    setEstudiantes(estudiantes.filter(e => e.registro !== registro));
  };

  return (
    <>
      <AdminNavbar showSection={showSection} isMenuOpen={isMenuOpen} />
      <AdminMainContent
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        docentes={docentes}
        estudiantes={estudiantes}
        docenteEditando={docenteEditando}
        estudianteEditando={estudianteEditando}
        guardarDocente={guardarDocente}
        eliminarDocente={eliminarDocente}
        guardarEstudiante={guardarEstudiante}
        eliminarEstudiante={eliminarEstudiante}
        setDocenteEditando={setDocenteEditando}
        setEstudianteEditando={setEstudianteEditando}
      />
      <Footer />
    </>
  );
};

export default AdminPage;