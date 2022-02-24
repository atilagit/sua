import Button from 'components/Button';
import './styles.css';

const Menucard = () => {
  return (
    <>
      <div className="base-card home-card">
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
    </>
  );
}

export default Menucard;
