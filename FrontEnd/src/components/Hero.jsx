import { useState, useEffect } from "react";
import "../styles/hero.css";

const images = [
  "/src/assets/hero1.jpg",
  "/src/assets/hero2.jpg",
  "/src/assets/hero3.jpg",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h2>Únete a la comunidad universitaria más prestigiosa del país</h2>
          <p>Encuentra tu camino hacia el éxito</p>
          <div className="buttons">
            <button className="btn">Arquitectura</button>
            <button className="btn">Programación</button>
            <button className="btn">Negocios</button>
            <button className="btn">Medicina</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
