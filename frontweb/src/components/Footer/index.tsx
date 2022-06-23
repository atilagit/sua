import { ReactComponent as LogoImage } from 'assets/images/logo-image.svg';
import { Link } from 'react-router-dom';
import './styles.css';

const Footer = () => {
  return (
    <footer className="card-footer bg-primary footer-container">
        <Link to="/">
          <LogoImage />
        </Link>
    </footer>
  );
};

export default Footer;
