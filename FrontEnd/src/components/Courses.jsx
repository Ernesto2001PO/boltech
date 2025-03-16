import '../styles/course.css';

const Courses = () => {
  return (
    <section className="courses">
      <h2 className="section-title">Curso faboritos botados por los estudiantes internacionales</h2>
      <div className="courses-container">
        <div className="course-image">
          {/* Aquí pondrás la imagen */}
          <img src="/src/assets/course.jpg" alt="Cursos populares" />
        </div>
        <ul className="course-list">
          <li>Estudios empresariales</li>
          <li>Ingeniería Software</li>
          <li>Finanzas</li>
          <li>Ciencia de la computación</li>
          <li>Marketing</li>
          <li>Contabilidad</li>
          <li>Base de Datos</li>
        </ul>
      </div>
    </section>
  );
};

export default Courses;
