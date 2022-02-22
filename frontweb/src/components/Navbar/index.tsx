import './styles.css';
import 'bootstrap/js/src/collapse.js'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid">
        <a href="link" className="nav-log-text">
          <h4>SU Alimentos</h4>
        </a>

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
              <a href="link" className="active">
                DIÁRIAS
              </a>
            </li>
            <li>
              <a href="link">ENTRADAS</a>
            </li>
            <li>
              <a href="link">ESTOQUE</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
