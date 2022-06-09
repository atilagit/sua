import Footer from 'components/Footer';
import Menucard from 'components/Menucard';

import './styles.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Menucard
          text="Materias e pagamentos" 
          btn1="ENTRADAS" btn1rota="/entries" 
          btn2="ESTOQUE" btn2rota="/inventory" 
          btn3="FORNECEDORES" btn3rota="/providers" 
          btn4="-" btn4rota="/"
        />
        <Menucard
          text="Serviços e pagamentos" 
          btn1="DIÁRIAS" btn1rota="/postings" 
          btn2="CLIENTES" btn2rota="/clients" 
          btn3="FORNECEDORES" btn3rota="/providers" 
          btn4="FUNCIONÁRIOS" btn4rota="/employees"
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
