import ClientCard from 'components/ClientCard';
import { Client } from 'types/client';
import { useEffect, useState } from 'react';
import { SpringPage } from 'types/vendor/spring';
import { BASE_URL } from 'util/requests';
import axios, { AxiosRequestConfig } from 'axios';
import { Link } from 'react-router-dom';

import './styles.css';
import Pagination from 'components/Pagination';
import ListLoader from '../../components/ListLoader';


const Clients = () => {
  
  const [page, setPage] = useState<SpringPage<Client>>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    const params: AxiosRequestConfig = {
      method: 'GET',
      url: "/clients",
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
          <Link to="/">Início</Link> / <Link to="/clients"> Clientes </Link>
        </h1>
      </div>

      {isLoading ? <ListLoader /> : (
        page?.content.map(client => (
          <Link to="clients/1" key={client.id}>
            <ClientCard client={client} />
          </Link>
        )))}

      <Pagination />
    </div>
  );
};

export default Clients;
