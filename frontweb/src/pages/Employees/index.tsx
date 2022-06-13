import EmployeeCard from 'components/EmployeeCard';
import { Employee } from 'types/employee';
import { useEffect, useState } from 'react';
import { SpringPage } from 'types/vendor/spring';
import { BASE_URL } from 'util/requests';
import axios, { AxiosRequestConfig } from 'axios';

import { Link } from 'react-router-dom';
import ListLoader from '../../components/ListLoader';

import './styles.css';
import Pagination from 'components/Pagination';

const Employees = () => {

  const [page, setPage] = useState<SpringPage<Employee>>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    const params: AxiosRequestConfig = {
      method: 'GET',
      url: "/employees",
      baseURL: BASE_URL,
      params: {
        page: 0,
        size: 50
      }
    }

    setIsLoading(true);
    axios(params)
      .then(response => {
        setPage(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);


  return (
    <div className="page-container page-container-especific">
      <div className="title-content-container">
        <h1>
          <Link to="/">Início</Link> / <Link to="/employees"> Funcionários </Link>
        </h1>
      </div>

      {isLoading ? <ListLoader /> : (
        page?.content.map(employee => (
          <Link to="employees/1" key={employee.id}>
            <EmployeeCard employee={employee} />
          </Link>
        )))}

      <Pagination />
    </div>
  );
};

export default Employees;