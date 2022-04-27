import Button from 'components/Button';
import FieldDetailCard from 'components/FieldDetailCard';
import Footer from 'components/Footer';
import { Client } from 'types/client';

import './styles.css';

const ClientDetails = () => {

    const client: Client = {
        "id": 1,
        "contact": "Jonielson Cleibisson Cleber e Kauan da Silva",
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
            <h1>Filtros / Clientes / {client.contact}</h1>
          </div>
          <div className='fields-container'>
            <div className='col5-466'>
                <FieldDetailCard title = "Nome do Contato" content = {client.contact}/>
            </div>
            <div className='col2-178'>
                <FieldDetailCard title = "CNPJ" content = {client.cnpj}/>
            </div>
            <div className='col2-178'>
                <FieldDetailCard title = "CPF" content = {client.cpf}/>
            </div>
            <div className='col3-274'>
                <FieldDetailCard title = "Razão social" content = {client.corporateName}/>
            </div>
            <div className='col5-466'>
                <FieldDetailCard title = "Rua" content = {client.address.street}/>
            </div>
            <div className='col1-82'>
                <FieldDetailCard title = "Nº" content = {client.address.number}/>
            </div>
            <div className='col3-274'>
                <FieldDetailCard title = "Bairro" content = {client.address.neighborhood}/>
            </div>
            <div className='col3-274'>
                <FieldDetailCard title = "Cidade" content = {client.address.city}/>
            </div>
            <div className='col3-274'>
                <FieldDetailCard title = "Estado" content = {client.address.state}/>
            </div>
            <div className='col2-178'>
                <FieldDetailCard title = "CEP" content = {client.address.cep}/>
            </div>
            <div className='col5-466'>
                <FieldDetailCard title = "Comlemento" content = {client.address.complement}/>
            </div>
            <div className='col2-178'>
                <FieldDetailCard title = "Status" content = {client.active ? "Ativo" : "Inativo"}/>
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

export default ClientDetails;