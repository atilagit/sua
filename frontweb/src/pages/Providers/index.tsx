import ProviderCard from 'components/ProviderCard';
import { Provider } from 'types/provider';

import { Link } from 'react-router-dom';

import './styles.css';

const Providers = () => {

  const provider: Provider = {
    "id": 1,
    "name": "Antônio Vieira",
    "corporateName": "Toninho & Cia",
    "cpf": "20262197021",
    "cnpj": "37405765000111",
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
        <Link to="/">Início</Link> / <Link to="/providers"> Fornecedores </Link>
      </h1>
      </div>
      <Link to="/providers/1">
        <ProviderCard provider={provider}/>
      </Link>
      <Link to="/providers/1">
        <ProviderCard provider={provider}/>
      </Link>
      <Link to="/providers/1">
        <ProviderCard provider={provider}/>
      </Link>
      <Link to="/providers/1">
        <ProviderCard provider={provider}/>
      </Link>
      <Link to="/providers/1">
        <ProviderCard provider={provider}/>
      </Link>
      <Link to="/providers/1">
        <ProviderCard provider={provider}/>
      </Link>
      <Link to="/providers/1">
        <ProviderCard provider={provider}/>
      </Link>
      <Link to="/providers/1">
        <ProviderCard provider={provider}/>
      </Link>
      <Link to="/providers/1">
        <ProviderCard provider={provider}/>
      </Link>
      <Link to="/providers/1">
        <ProviderCard provider={provider}/>
      </Link>
    </div>
  );
};

export default Providers;
