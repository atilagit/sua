import EmployeeCard from 'components/EmployeeCard';
import { Employee } from 'types/employee';

import { Link } from 'react-router-dom';

import './styles.css';
import Pagination from 'components/Pagination';

const Employees = () => {

  const employee: Employee = {
    "id": 1,
    "name": "Leandro Inácio",
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
        <h1>
          <Link to="/">Início</Link> / <Link to="/employees"> Funcionários </Link>
        </h1>
      </div>
      <Link to="employees/1">
        <EmployeeCard employee={employee}/>
      </Link>
      <Link to="employees/1">
        <EmployeeCard employee={employee}/>
      </Link>
      <Link to="employees/1">
        <EmployeeCard employee={employee}/>
      </Link>
      <Link to="employees/1">
        <EmployeeCard employee={employee}/>
      </Link>
      <Link to="employees/1">
        <EmployeeCard employee={employee}/>
      </Link>
      <Link to="employees/1">
        <EmployeeCard employee={employee}/>
      </Link>
      <Link to="employees/1">
        <EmployeeCard employee={employee}/>
      </Link>
      <Link to="employees/1">
        <EmployeeCard employee={employee}/>
      </Link>
      <Link to="employees/1">
        <EmployeeCard employee={employee}/>
      </Link>
      <Link to="employees/1">
        <EmployeeCard employee={employee}/>
      </Link>
      <Pagination />
    </div>
  );
};

export default Employees;