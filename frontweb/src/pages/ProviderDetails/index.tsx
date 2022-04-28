import Button from "components/Button";
import FieldDetailCard from "components/FieldDetailCard";
import Footer from "components/Footer";
import { Provider } from 'types/provider';

import './styles.css';

const ProviderDetails = () => {

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
            <h1>Filtros / Fornecedores / {provider.name}</h1>
          </div>
          <div className='fields-container'>
            <div className='col5-466'>
                <FieldDetailCard title = "Nome" content = {provider.name}/>
            </div>
            <div className='col2-178'>
                <FieldDetailCard title = "CNPJ" content = {provider.cnpj}/>
            </div>
            <div className='col2-178'>
                <FieldDetailCard title = "CPF" content = {provider.cpf}/>
            </div>
            <div className='col3-274'>
                <FieldDetailCard title = "Razão social" content = {provider.corporateName}/>
            </div>
            <div className='col5-466'>
                <FieldDetailCard title = "Rua" content = {provider.address.street}/>
            </div>
            <div className='col1-82'>
                <FieldDetailCard title = "Nº" content = {provider.address.number}/>
            </div>
            <div className='col3-274'>
                <FieldDetailCard title = "Bairro" content = {provider.address.neighborhood}/>
            </div>
            <div className='col3-274'>
                <FieldDetailCard title = "Cidade" content = {provider.address.city}/>
            </div>
            <div className='col3-274'>
                <FieldDetailCard title = "Estado" content = {provider.address.state}/>
            </div>
            <div className='col2-178'>
                <FieldDetailCard title = "CEP" content = {provider.address.cep}/>
            </div>
            <div className='col5-466'>
                <FieldDetailCard title = "Comlemento" content = {provider.address.complement}/>
            </div>
            <div className='col2-178'>
                <FieldDetailCard title = "Status" content = {provider.active ? "Ativo" : "Inativo"}/>
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