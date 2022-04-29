import Button from "components/Button";
import FieldDetailCard from "components/FieldDetailCard";
import Footer from "components/Footer";
import { Employee } from "types/employee";
import { formatCEP, formatCpfCnpj, formatDate } from "util/formatters";

import './styles.css';

const EmployeeDetails = () => {

    const employee: Employee = {
        "id": 1,
        "name": "Leandro Santos Silva Pereira Inácio",
        "cpf": "39856849978",
        "admissionDate": "2018-10-18",
        "login": "leandro@gmail.com",
        "active": true,
        "address": {
          "id": 2,
          "street": "Rua Alessandro Bonci",
          "number": "520",
          "neighborhood": "Eldorado",
          "complement": "Perto do posto Ipiranga",
          "city": "São Paulo",
          "state": "SP",
          "cep": "04476280"
          },
        "roles": [
            {
                "id": 3,
                "authority": "ROLE_ADMIN"
            },
            {
                "id": 1,
                "authority": "ROLE_BASIC"
            },
            {
                "id": 2,
                "authority": "ROLE_OPERATOR"
            }
        ]
    }

    return (
        <div className="page-container page-container-especific">
          <div className="title-content-container">
            <h1>Filtros / Funcionários / {employee.name}</h1>
          </div>
          <div className='fields-container'>
            <div className='col5-466'>
                <FieldDetailCard title = "Nome do Contato" content = {employee.name}/>
            </div>
            <div className='col2-178'>
                <FieldDetailCard title = "Data Admissão" content = {formatDate(employee.admissionDate)}/>
            </div>
            <div className='col2-178'>
                <FieldDetailCard title = "CPF" content = {formatCpfCnpj(employee.cpf)}/>
            </div>
            <div className='col3-274'>
                <FieldDetailCard title = "Acesso" content = {employee.roles.length > 2? "Administrador" : employee.roles.length > 1? "Operador" : "Básico"}/>
            </div>
            <div className='col5-466'>
                <FieldDetailCard title = "Rua" content = {employee.address.street}/>
            </div>
            <div className='col1-82'>
                <FieldDetailCard title = "Nº" content = {employee.address.number}/>
            </div>
            <div className='col3-274'>
                <FieldDetailCard title = "Bairro" content = {employee.address.neighborhood}/>
            </div>
            <div className='col3-274'>
                <FieldDetailCard title = "Cidade" content = {employee.address.city}/>
            </div>
            <div className='col3-274'>
                <FieldDetailCard title = "Estado" content = {employee.address.state}/>
            </div>
            <div className='col2-178'>
                <FieldDetailCard title = "CEP" content = {formatCEP(employee.address.cep)}/>
            </div>
            <div className='col5-466'>
                <FieldDetailCard title = "Comlemento" content = {employee.address.complement}/>
            </div>
            <div className='col2-178'>
                <FieldDetailCard title = "Status" content = {employee.active ? "Ativo" : "Inativo"}/>
            </div>
          </div>
          <div className='buttons-container'>
              <Button text='EDITAR'/>
              <Button text='Resetar Senha'/>
              <Button text='INATIVAR'/>
          </div>
          <Footer/>
        </div>
      );
}

export default EmployeeDetails;