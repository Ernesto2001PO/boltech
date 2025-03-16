import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Universidad Gringa de Estados Unidos </h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#">Inicio</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
