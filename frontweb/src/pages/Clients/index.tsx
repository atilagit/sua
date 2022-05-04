import ClientCard from 'components/ClientCard';
import { Client } from 'types/client';
import { Link } from 'react-router-dom';

import './styles.css';
import Pagination from 'components/Pagination';

const Clients = () => {
  
  const client: Client = {
    "id": 1,
    "contact": "Jonielson Silva",
    "corporateName": "Citrus e Cia",
    "cpf": "97717222041",
    "cnpj": "18107334000121",
    "active": true,
    "address": {
        "id": 1,
        "street": "Rua da Confibra",
        "number": "541",
        "neighborhood": "Jardim Campos Verdes",
        "complement": "Exemplo de complemento",
        "city": "Hortolândia",
        "state": "SP",
        "cep": "13186070"
    }
  }

  return (
    <div className="page-container page-container-especific">
      <div className="title-content-container">
        <h1>
          <Link to="/">Início</Link> / <Link to="/clients"> Clientes </Link>
        </h1>
      </div>
      <Link to="clients/1">
        <ClientCard client={client}/>
      </Link>
      <Link to="clients/1">
        <ClientCard client={client}/>
      </Link>
      <Link to="clients/1">
        <ClientCard client={client}/>
      </Link>
      <Link to="clients/1">
        <ClientCard client={client}/>
      </Link>
      <Link to="clients/1">
        <ClientCard client={client}/>
      </Link>
      <Link to="clients/1">
        <ClientCard client={client}/>
      </Link>
      <Link to="clients/1">
        <ClientCard client={client}/>
      </Link>
      <Link to="clients/1">
        <ClientCard client={client}/>
      </Link>
      <Link to="clients/1">
        <ClientCard client={client}/>
      </Link>
      <Link to="clients/1">
        <ClientCard client={client}/>
      </Link>
      <Pagination />
    </div>
  );
};

export default Clients;
