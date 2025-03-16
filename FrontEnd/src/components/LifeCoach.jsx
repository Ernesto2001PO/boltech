import '../styles/life-coach.css';

const LifeCoach = () => {
  return (
    <section className="life-coach">
      <div className="life-coach-container">
        <div className="coach-image">
          {/* Aquí pondrás la imagen */}
          <img src="/src/assets/life.jpg" alt="Life Coach" />
        </div>
        <div className="coach-info">
          <h2>¿Porque trabarar con nosotros ?</h2>
          <ul className="coach-benefits">
            <li>Te ayudaremos a establecer metas claras.</li>
            <li>Brinda orientación personalizada y profecionl.</li>
            <li>Mejora tu confianza y motivación.</li>
            <li>Te da herramientas para tomar mejores decisiones en el mundo laboral.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LifeCoach;
