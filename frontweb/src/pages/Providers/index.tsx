import { Link } from 'react-router-dom';
import { Provider } from 'types/provider';
import { useEffect, useState } from 'react';
import { SpringPage } from 'types/vendor/spring';
import { AxiosParams } from 'types/vendor/axios';
import { BASE_URL } from 'util/requests';
import axios from 'axios';
import ProviderCard from 'components/ProviderCard';
import Pagination from 'components/Pagination';
import './styles.css';

const Providers = () => {

  const [page, setPage] = useState<SpringPage<Provider>>();

  useEffect(() => {

    const params: AxiosParams = {
      method: 'GET',
      url: `${BASE_URL}/providers`,
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
          <Link to="/">Início</Link> / <Link to="/providers"> Fornecedores </Link>
        </h1>
      </div>

      {page?.content.map(provider => (
        <Link to="/providers/1" key={provider.id}>
          <ProviderCard provider={provider} />
        </Link>
      ))}

      <Pagination />
    </div>
  );
};

export default Providers;
