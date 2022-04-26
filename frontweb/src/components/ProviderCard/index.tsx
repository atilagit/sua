import './styles.css';
import { Provider } from 'types/provider';

type Props = {
    provider: Provider;
}

const ProviderCard = ( {provider} : Props) => {
    return (
        <div className="base-card pj-card">
            <div className="pj-card-line1">
                <div className="name-pj">
                    <h2>{provider.name}</h2>
                </div>
                <div className="cnpj-pj">
                    <p>CNPJ: {provider.cnpj}</p>
                </div>
                <div className="cpf-pj">
                    <p>CPF: {provider.cpf}</p>
                </div>
                <div className="status-pj">
                    <h2>{provider.active? "ATIVO" : "INATIVO"}</h2>
                </div>
            </div>
            <div className="pj-card-line2">
                <div className="razao-social-pj">
                    <p>{provider.corporateName}</p>
                </div>
                <div className="endereco-pj">
                    <p>{provider.address.street}, {provider.address.number}, {provider.address.neighborhood}, {provider.address.city}, {provider.address.state}, {provider.address.cep}</p>
                </div>
            </div>
        </div>
    );
}

export default ProviderCard;