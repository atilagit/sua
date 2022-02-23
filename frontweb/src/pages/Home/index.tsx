import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Button from 'components/Button';

import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">
            <h2>Módulo A - Materiais e pagamentos</h2>
          </div>
          <div className="home-button-container">
            <Button />
            <Button />
            <Button />
            <Button />
          </div>
        </div>
        <div className="home-card">
          <div className="home-content-container">
            <h2>Módulo B - Serviços e pagamentos</h2>
          </div>
          <div className="home-button-container">
            <Button />
            <Button />
            <Button />
            <Button />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
