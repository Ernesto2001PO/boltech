import '../styles/Header.css';
import {Link} from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';

const Header = () => {

  const {logged} = useAuth();

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Universidad Gringa de Estados Unidos </h1>
        <nav>
          <ul className="nav-links">
            {
              !logged ? (
                <>
                <li><Link to='/loginPage'>Iniciar Sesion</Link></li>
                <li><Link to='/registerPage'>Registrarse</Link></li>
                </>
              ):
              (<li>Hola usuario</li>)
            
            }
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
