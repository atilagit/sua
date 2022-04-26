import './styles.css';
import { Client } from 'types/client';

type Props = {
    client: Client;
}

const ClientCard = ( {client} : Props) => {
    return (
        <div className="base-card pj-card">
            <div className="pj-card-line1">
                <div className="name-pj">
                    <h2>{client.contact}</h2>
                </div>
                <div className="cnpj-pj">
                    <p>CNPJ: {client.cnpj}</p>
                </div>
                <div className="cpf-pj">
                    <p>CPF: {client.cpf}</p>
                </div>
                <div className="status-pj">
                    <h2>{client.active? "ATIVO" : "INATIVO"}</h2>
                </div>
            </div>
            <div className="pj-card-line2">
                <div className="razao-social-pj">
                    <p>{client.corporateName}</p>
                </div>
                <div className="endereco-pj">
                    <p>{client.address.street}, {client.address.number}, {client.address.neighborhood}, {client.address.city}, {client.address.state}, {client.address.cep}</p>
                </div>
            </div>
        </div>
    );
}

export default ClientCard;