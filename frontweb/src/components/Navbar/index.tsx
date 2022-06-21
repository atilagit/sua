import { ReactComponent as LogoImage } from 'assets/images/logo-image.svg';
import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { Link, NavLink } from 'react-router-dom';
import { getAuthData, getTokenData, isAuthenticated, removeAuthData, TokenData } from 'util/requests';
import { useEffect, useState } from 'react';
import history from 'util/history';

type AuthData = {
  authenticated: boolean;
  tokenData?: TokenData;
}

const Navbar = () => {
  const[authData, setAuthData] = useState<AuthData>({authenticated: false});

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthData({
        authenticated: true,
        tokenData: getTokenData()
      });
    }else {
      setAuthData({
        authenticated: false
      });
    }
  }, []);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthData({
      authenticated: false
    });
    history.replace('/auth')
  }

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
            {authData.authenticated ? (
              <>
                <h3>Olá {getAuthData().userName}</h3>
                <a href="/auth" onClick={handleLogoutClick}>LOGOUT</a>
              </>
            ) : (
              <Link to="/auth">Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
