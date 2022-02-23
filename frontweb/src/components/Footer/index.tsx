import { ReactComponent as LogoImage } from 'assets/images/logo-image.svg';
import './styles.css';

const Footer = () => {
  return (
    <footer className="card-footer bg-primary footer-container">
        <a href="link">
          <LogoImage />
        </a>
    </footer>
  );
};

export default Footer;
