import Button from "components/Button";
import FieldDetailCard from "components/FieldDetailCard";
import Footer from "components/Footer";
import { Provider } from 'types/provider';
import { formatCEP, formatCpfCnpj } from "util/formatters";

import { Link, useParams } from 'react-router-dom';

import './styles.css';
import axios from 'axios';
import { BASE_URL } from 'util/requests';
import { useEffect, useState } from 'react';

type UrlParams = {
    providerId: string;
}

const ProviderDetails = () => {

    const { providerId } = useParams<UrlParams>();

    const [provider, setProvider] = useState<Provider>();

    useEffect(() => {
        axios.get(`${BASE_URL}/providers/${providerId}`)
            .then(response => {
                setProvider(response.data)
            });
    }, [providerId]);

    return (
        <div className="page-container page-container-especific">
          <div className="title-content-container">
            <h1>
                <Link to="/">Início</Link> / <Link to="/providers"> Fornecedores </Link> / {provider?.name}
            </h1>
          </div>
          <div className='fields-container'>
            <div className='col5-466'>
                {provider && <FieldDetailCard title = "Nome" content = {provider.name}/>}
            </div>
            <div className='col2-178'>
                {provider && <FieldDetailCard title = "CNPJ" content = {(provider.cnpj != null) ? formatCpfCnpj(provider.cnpj) : ""}/>}
            </div>
            <div className='col2-178'>
                {provider && <FieldDetailCard title = "CPF" content = {(provider.cpf != null) ? formatCpfCnpj(provider.cpf) : ""}/>}
            </div>
            <div className='col3-274'>
                {provider && <FieldDetailCard title = "Razão social" content = {(provider.corporateName != null) ? provider.corporateName : ""}/>}
            </div>
            <div className='col5-466'>
                {provider && <FieldDetailCard title = "Rua" content = {(provider.address != null) ? provider.address.street : ""}/>}
            </div>
            <div className='col1-82'>
                {provider && <FieldDetailCard title = "Nº" content = {(provider.address != null) ? provider.address.number : ""}/>}
            </div>
            <div className='col3-274'>
                {provider && <FieldDetailCard title = "Bairro" content = {(provider.address != null) ? provider.address.neighborhood : ""}/>}
            </div>
            <div className='col3-274'>
                {provider && <FieldDetailCard title = "Cidade" content = {(provider.address != null) ? provider.address.city : ""}/>}
            </div>
            <div className='col3-274'>
                {provider && <FieldDetailCard title = "Estado" content = {(provider.address != null) ? provider.address.state : ""}/>}
            </div>
            <div className='col2-178'>
                {provider && <FieldDetailCard title = "CEP" content = {(provider.address != null) ? formatCEP(provider.address.cep) : ""}/>}
            </div>
            <div className='col5-466'>
                {provider && <FieldDetailCard title = "Comlemento" content = {(provider.address != null) ? provider.address.complement : ""}/>}
            </div>
            <div className='col2-178'>
                <FieldDetailCard title = "Status" content = {provider?.active ? "Ativo" : "Inativo"}/>
            </div>
          </div>
          <div className='buttons-container'>
              <Button text='EDITAR'/>
              <Button text='INATIVAR'/>
          </div>
          <Footer/>
        </div>
      );
}

export default ProviderDetails;