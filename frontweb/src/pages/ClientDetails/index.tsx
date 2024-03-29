import Button from 'components/Button';
import FieldDetailCard from 'components/FieldDetailCard';
import Footer from 'components/Footer';
import { Client } from 'types/client';
import { formatCEP, formatCpfCnpj } from 'util/formatters';

import { Link, useParams } from 'react-router-dom';

import './styles.css';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';
import { useEffect, useState } from 'react';
import DetailLoader from 'components/DetailLoader';
import { toast } from 'react-toastify';

type UrlParams = {
    clientId: string;
}

const ClientDetails = () => {

    const { clientId } = useParams<UrlParams>();
    const [client, setClient] = useState<Client>();
    const [isLoading, setIsLoading] = useState(false);

    const handleInvertActiveStatus = (clientId: string, active: boolean) => {

        if(!window.confirm(`Tem certeza que deseja ${active ? "inativar" : "ativar"}?`)) {
          return;
        }
        
        const config: AxiosRequestConfig = {
            method: 'PUT',
            url: `/clients/active/${clientId}`,
            withCredentials: true
        };

        setIsLoading(true);
        requestBackend(config)
        .then(response => {
            const client = response.data as Client;
            const action = client.active ? "ativado" : "inativado";
            toast.success('Cliente ' +  action + ' com sucesso!');
            setClient(client)
        })
        .catch(() => {
            toast.error('Erro ao tentar alterar cliente');
        })
        .finally(() => {
            setIsLoading(false);
        });
      }

    useEffect(() => {

        const params: AxiosRequestConfig = {
            method: 'GET',
            url: `/clients/${clientId}`,
            withCredentials: true
        }

        setIsLoading(true);
        requestBackend(params)
            .then(response => {
                setClient(response.data)
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [clientId]);

    return (
        <div className="page-container page-container-especific">
            <div className="title-content-container">
                <h1>
                    <Link to="/">Início</Link> / <Link to="/clients"> Clientes </Link> / {client?.contact}
                </h1>
            </div>
            {isLoading ? <DetailLoader /> : (
                <div className='fields-container'>
                    <div className='col5-466'>
                        {client && <FieldDetailCard title="Nome do Contato" content={client.contact} />}
                    </div>
                    <div className='col2-178'>
                        {client && <FieldDetailCard title="CNPJ" content={(client.cnpj != null) ? formatCpfCnpj(client.cnpj) : ""} />}
                    </div>
                    <div className='col2-178'>
                        {client && <FieldDetailCard title="CPF" content={(client.cpf != null) ? formatCpfCnpj(client.cpf) : ""} />}
                    </div>
                    <div className='col3-274'>
                        {client && <FieldDetailCard title="Razão social" content={client.corporateName} />}
                    </div>
                    <div className='col5-466'>
                        {client && <FieldDetailCard title="Rua" content={(client.address != null) ? client.address.street : ""} />}
                    </div>
                    <div className='col1-82'>
                        {client && <FieldDetailCard title="Nº" content={(client.address != null) ? client.address.number : ""} />}
                    </div>
                    <div className='col3-274'>
                        {client && <FieldDetailCard title="Bairro" content={(client.address != null) ? client.address.neighborhood : ""} />}
                    </div>
                    <div className='col3-274'>
                        {client && <FieldDetailCard title="Cidade" content={(client.address != null) ? client.address.city : ""} />}
                    </div>
                    <div className='col3-274'>
                        {client && <FieldDetailCard title="Estado" content={(client.address != null) ? client.address.state : ""} />}
                    </div>
                    <div className='col2-178'>
                        {client && <FieldDetailCard title="CEP" content={(client.address != null && client.address.cep != null) ? formatCEP(client.address.cep) : ""} />}
                    </div>
                    <div className='col5-466'>
                        {client && <FieldDetailCard title="Complemento" content={(client.address != null) ? client.address.complement : ""} />}
                    </div>
                    <div className='col2-178'>
                        <FieldDetailCard title="Status" content={client?.active ? "Ativo" : "Inativo"} />
                    </div>
                </div>
            )}
            <div className='buttons-container'>
                <Link to={`/clients/${client?.id}`}>
                    <Button text='EDITAR' />
                </Link>
                
                <button
                    onClick={() => handleInvertActiveStatus(clientId, client?.active ? client.active : false)}
                    className="button-container">
                    <p>{client?.active ? 'INATIVAR' : 'ATIVAR'}</p>
                </button>
            </div>
            <Footer />
        </div>
    );
}

export default ClientDetails;