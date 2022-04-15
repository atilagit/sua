import PjCard from 'components/PjCard';
import { Client } from 'types/client';

import './styles.css';

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
        <h1>Filtros / Clientes</h1>
      </div>
      <PjCard client={client}/>
      <PjCard client={client}/>
      <PjCard client={client}/>
      <PjCard client={client}/>
      <PjCard client={client}/>
      <PjCard client={client}/>
      <PjCard client={client}/>
      <PjCard client={client}/>
    </div>
  );
};

export default Clients;
