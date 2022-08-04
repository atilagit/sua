import Button from "components/Button";
import FieldDetailCard from "components/FieldDetailCard";
import Footer from "components/Footer";
import { Employee } from "types/employee";
import { formatCEP, formatCpfCnpj, formatDate } from "util/formatters";

import { Link, useParams } from 'react-router-dom';

import './styles.css';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';
import { useEffect, useState } from 'react';
import DetailLoader from 'components/DetailLoader';
import { ADMIN, hasAnyRoles, OPERATOR } from "util/auth";

type UrlParams = {
    employeeId: string;
}

const EmployeeDetails = () => {

    const { employeeId } = useParams<UrlParams>();
    const [employee, setEmployee] = useState<Employee>();
    const [isLoading, setIsLoading] = useState(false);

    const handleInvertActivStatus = (employeeId: string, active: boolean) => {

        if(!window.confirm(`Tem certeza que deseja ${active ? "inativar" : "ativar"}?`)) {
          return;
        }
        
        const config: AxiosRequestConfig = {
            method: 'PUT',
            url: `/employees/active/${employeeId}`,
            withCredentials: true
        };

        setIsLoading(true);
        requestBackend(config)
        .then(response => {
            setEmployee(response.data)
        })
        .finally(() => {
            setIsLoading(false);
        });
      }

    useEffect(() => {

        const params: AxiosRequestConfig = {
            method: 'GET',
            url: `/employees/${employeeId}`,
            withCredentials: true
        }

        setIsLoading(true);
        requestBackend(params)
            .then(response => {
                setEmployee(response.data)
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [employeeId]);

    return (
        <div className="page-container page-container-especific">
            <div className="title-content-container">
                <h1>
                    <Link to="/">Início</Link> / <Link to="/employees"> Funcionários </Link> / {employee?.name}
                </h1>
            </div>
            {isLoading ? <DetailLoader /> : (
                <div className='fields-container'>
                    <div className='col5-466'>
                        {employee && <FieldDetailCard title="Nome do Contato" content={employee.name} />}
                    </div>
                    <div className='col2-178'>
                        {employee && <FieldDetailCard title="Data Admissão" content={(employee.admissionDate != null) ? formatDate(employee.admissionDate) : ""} />}
                    </div>
                    <div className='col2-178'>
                        {employee && <FieldDetailCard title="CPF" content={(employee.cpf != null) ? formatCpfCnpj(employee.cpf) : ""} />}
                    </div>
                    <div className='col3-274'>
                        {employee && <FieldDetailCard
                            title="Acesso"
                            content={employee.roles.map(role => role.authority).includes(ADMIN) ? "Administrador"
                                : employee.roles.map(role => role.authority).includes(OPERATOR) ? "Operador"
                                    : "Básico"} />
                        }
                    </div>
                    <div className='col5-466'>
                        {employee && <FieldDetailCard title="Rua" content={(employee.address != null) ? employee.address.street : ""} />}
                    </div>
                    <div className='col1-82'>
                        {employee && <FieldDetailCard title="Nº" content={(employee.address != null) ? employee.address.number : ""} />}
                    </div>
                    <div className='col3-274'>
                        {employee && <FieldDetailCard title="Bairro" content={(employee.address != null) ? employee.address.neighborhood : ""} />}
                    </div>
                    <div className='col3-274'>
                        {employee && <FieldDetailCard title="Cidade" content={(employee.address != null) ? employee.address.city : ""} />}
                    </div>
                    <div className='col3-274'>
                        {employee && <FieldDetailCard title="Estado" content={(employee.address != null) ? employee.address.state : ""} />}
                    </div>
                    <div className='col2-178'>
                        {employee && <FieldDetailCard title="CEP" content={(employee.address != null && employee.address.cep != null) ? formatCEP(employee.address.cep) : ""} />}
                    </div>
                    <div className='col5-466'>
                        {employee && <FieldDetailCard title="Complemento" content={(employee.address != null) ? employee.address.complement : ""} />}
                    </div>
                    <div className='col2-178'>
                        <FieldDetailCard title="Status" content={employee?.active ? "Ativo" : "Inativo"} />
                    </div>
                </div>
            )}
            <div className='buttons-container'>
                {hasAnyRoles(['ROLE_ADMIN', 'ROLE_OPERATOR']) && (
                    <>
                        <Link to={`/employees/${employee?.id}`}>
                            <Button text='EDITAR' />
                        </Link>

                        <Button text='Resetar Senha' />
                        <button
                            onClick={() => handleInvertActivStatus(employeeId, employee?.active ? employee.active : false)}
                            className="button-container">
                            <p>{employee?.active ? 'INATIVAR' : 'ATIVAR'}</p>
                        </button>
                    </>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default EmployeeDetails;