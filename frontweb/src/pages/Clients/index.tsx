import ClientCard from 'components/ClientCard';
import { Client } from 'types/client';
import { useEffect, useState } from 'react';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import { AxiosRequestConfig } from 'axios';
import { Link } from 'react-router-dom';

import './styles.css';
import Pagination from 'components/Pagination';
import ListLoader from '../../components/ListLoader';


const Clients = () => {
  
  const [page, setPage] = useState<SpringPage<Client>>();
  const [isLoading, setIsLoading] = useState(false);

  const getClients = (pageNumber: number) => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: "/clients",
      withCredentials: true,
      params: {
        page: pageNumber,
        size: 20
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
  }

  useEffect(() => {
    getClients(0)
  }, []);

  return (
    <div className="page-container page-container-especific">
      <div className='clients-title-and-button-container'>
        <div className="clients-title-content-container">
          <h1>
            <Link to="/">Início</Link> / <Link to="/clients"> Clientes </Link>
          </h1>
        </div>
        <div className='clients-container-buttons-crud'>
          <Link to="/clients/create">
            <button className='clients-button'>NOVO</button>
          </Link>
        </div>
      </div>

      {isLoading ? <ListLoader /> : (
        page?.content.map(client => (
          <Link to={`clients/details/${client.id}`} key={client.id}>
            <ClientCard client={client} />
          </Link>
        )))}

      <Pagination
        pageCount={page ? page.totalPages : 0}
        range={3}
        onChange={getClients}
      />
    </div>
  );
};

export default Clients;
