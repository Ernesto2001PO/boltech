import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Sobre Nosotros</h4>
          <p>
            Somos una universidad líder en educación superior, comprometidos con la excelencia académica y 
            la formación profesional de nuestros estudiantes.
            contamos con modalidesdes de estudio presencial y en línea.
            los mejores profesores y un ambiente de aprendizaje único. conoce más sobre nosotros.
          </p>
        </div>
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>📍 Av. Universidad 123, EEUU , California</p>
          <p>📞 +123 456 789</p>
          <p>📧 contacto@universidad.com</p>
        </div>
        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="#">Carreras</a></li>
            <li><a href="#">Registro</a></li>
            <li><a href="#">Becas</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Universidad. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
