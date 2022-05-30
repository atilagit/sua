import ClientCard from 'components/ClientCard';
import { Client } from 'types/client';
import { useEffect, useState } from 'react';
import { SpringPage } from 'types/vendor/spring';
import { AxiosParams } from 'types/vendor/axios';
import { BASE_URL } from 'util/requests';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './styles.css';
import Pagination from 'components/Pagination';

const Clients = () => {
  
  const [page, setPage] = useState<SpringPage<Client>>();

  useEffect(() => {

    const params: AxiosParams = {
      method: 'GET',
      url: `${BASE_URL}/clients`,
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
          <Link to="/">Início</Link> / <Link to="/clients"> Clientes </Link>
        </h1>
      </div>

      {page?.content.map(client => (
        <Link to="clients/1" key={client.id}>
          <ClientCard client={client}/>
        </Link>
      ))}
      
      <Pagination />
    </div>
  );
};

export default Clients;
