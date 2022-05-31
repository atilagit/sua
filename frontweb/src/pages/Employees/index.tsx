import EmployeeCard from 'components/EmployeeCard';
import { Employee } from 'types/employee';
import { useEffect, useState } from 'react';
import { SpringPage } from 'types/vendor/spring';
import { AxiosParams } from 'types/vendor/axios';
import { BASE_URL } from 'util/requests';
import axios from 'axios';

import { Link } from 'react-router-dom';

import './styles.css';
import Pagination from 'components/Pagination';

const Employees = () => {

  const [page, setPage] = useState<SpringPage<Employee>>();

  useEffect(() => {

    const params: AxiosParams = {
      method: 'GET',
      url: `${BASE_URL}/employees`,
      params: {
        page: 0,
        size: 50
      }
    }

    axios(params)
      .then(response => {
        setPage(response.data);
      });
  }, []);


  return (
    <div className="page-container page-container-especific">
      <div className="title-content-container">
        <h1>
          <Link to="/">Início</Link> / <Link to="/employees"> Funcionários </Link>
        </h1>
      </div>

      {page?.content.map(employee => (
        <Link to="employees/1" key={employee.id}>
          <EmployeeCard employee={employee}/>
        </Link>
      ))}
      
      <Pagination />
    </div>
  );
};

export default Employees;