import Button from 'components/Button';
import { Link } from 'react-router-dom';
import './styles.css';

const Menucard = () => {
  return (
    <>
      <div className="base-card home-card">
          <div className="home-content-container">
            <h2>Módulo A - Materiais e pagamentos</h2>
          </div>
          <div className="home-button-container">
            <Link to="/clients">
              <Button />
            </Link>
            <Link to="/clients">
              <Button />
            </Link>
            <Link to="/clients">
              <Button />
            </Link>
            <Link to="/clients">
              <Button />
            </Link>
          </div>
        </div>
    </>
  );
}

export default Menucard;
