import Footer from "components/Footer";

import './styles.css';

const NotFound = () => {

  return (
    <>
      <div className="not-found-container">
        <div className="not-found-card">
          <h2>
            Erro 404 - Recurso não encontrado :(
          </h2>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;