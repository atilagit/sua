import { Employee } from 'types/employee';
import { formatCpfCnpj, formatDate } from 'util/formatters';
import './styles.css';

type Props = {
    employee: Employee
}

const EmployeeCard = ({employee} : Props) => {
    return (
        <div className="base-card pj-card">
            <div className="pf-card-line1">
                <div className="name-pf">
                    <h2>{employee.abbreviatedName}</h2>
                </div>
                <div className="admissao-pf">
                    <p>Admissão: {formatDate(employee.admissionDate)}</p>
                </div>
                <div className="cpf-pf">
                    <p>CPF: {formatCpfCnpj(employee.cpf)}</p>
                </div>
                <div className="status-pf">
                    <h2>{employee.active? "ATIVO" : "INATIVO"}</h2>
                </div>
            </div>
            <div className="pf-card-line2">
                <div className="nivel-usuario-pf">
                    <p>{employee.roles.length > 2? "Usuário Administrador" : employee.roles.length > 1? "Usuário Operador" : "Usuário Básico"}</p>
                </div>
                <div className="endereco-pf">
                    {employee.address && <p>{employee.address.street}, {employee.address.number}, {employee.address.neighborhood}, {employee.address.city}, {employee.address.state}, {employee.address.cep}</p>}
                </div>
            </div>
        </div>
    );
}

export default EmployeeCard;