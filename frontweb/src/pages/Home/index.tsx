import Footer from 'components/Footer';
import Menucard from 'components/Menucard';

import './styles.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Menucard text="Módulo A - Materias e pagamentos" btn1="ENTRADAS" btn2="ESTOQUE" btn3="FORNECEDORES" btn4="-" />
        <Menucard text="Módulo B - Serviços e pagamentos" btn1="DIÁRIAS" btn2="CLIENTES" btn3="FORNECEDORES" btn4="FUNCIONÁRIOS" />
      </div>
      <Footer />
    </>
  );
};

export default Home;
