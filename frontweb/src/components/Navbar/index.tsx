import { ReactComponent as LogoImage } from 'assets/images/logo-image.svg';
import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { Link, NavLink } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import history from 'util/history';
import { AuthContext } from 'AuthContext';
import { getTokenData, hasAnyRoles, isAuthenticated } from 'util/auth';
import { getAuthData, removeAuthData } from 'util/storage';

const Navbar = () => {

  const { authContextData, setAuthContextData } = useContext(AuthContext);
  
  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData()
      });
    }else {
      setAuthContextData({
        authenticated: false
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
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
            {hasAnyRoles(['ROLE_ADMIN', 'ROLE_OPERATOR']) && (
              <>
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
              </>
            )}
          </ul>
          <div className='nav-hello-user-logout'>
            {authContextData.authenticated ? (
              <>
                <span className='nav-hello-user'>Olá {getAuthData().userName}</span>
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
