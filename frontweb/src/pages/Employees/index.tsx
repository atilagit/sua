import EmployeeCard from 'components/EmployeeCard';
import { Employee } from 'types/employee';
import { useEffect, useState } from 'react';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import { AxiosRequestConfig } from 'axios';

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
      withCredentials: true,
      params: {
        page: 0,
        size: 50
      }
    }

    setIsLoading(true);
    requestBackend(params)
      .then(response => {
        setPage(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);


  return (
    <div className="page-container page-container-especific">
      <div className='employees-title-and-button-container'>
        <div className="employees-title-content-container">
          <h1>
            <Link to="/">Início</Link> / <Link to="/employees"> Funcionários </Link>
          </h1>
        </div>
        <div className='employees-container-buttons-crud'>
          <Link to="/employees/create">
            <button className='employees-button'>NOVO</button>
          </Link>
        </div>
      </div>

      {isLoading ? <ListLoader /> : (
        page?.content.map(employee => (
          <Link to={`employees/details/${employee.id}`} key={employee.id}>
            <EmployeeCard employee={employee} />
          </Link>
        )))}

      <Pagination />
    </div>
  );
};

export default Employees;