import { ReactComponent as LogoImage } from 'assets/images/logo-image.svg';
import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { Link, NavLink } from 'react-router-dom';
import { getAuthData, isAuthenticated } from 'util/requests';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid nav-container">
        <Link to="/">
          <LogoImage />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sualimentos-navbar"
          aria-controls="sualimentos-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="sualimentos-navbar">
          <ul className="navbar-nav main-menu">
            <li>
              <NavLink to="/postings" activeClassName="active">
                DIÁRIAS
              </NavLink>
            </li>
            <li>
              <NavLink to="/entries" activeClassName="active">
                ENTRADAS
              </NavLink>
            </li>
            <li>
              <NavLink to="/inventory" activeClassName="active">
                ESTOQUE
              </NavLink>
            </li>
          </ul>
          <div className='hello-user'>
            <h3>Olá {isAuthenticated() ? getAuthData().userName : ""}</h3>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
