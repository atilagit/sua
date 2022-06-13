import { Link } from 'react-router-dom';
import { Provider } from 'types/provider';
import { useEffect, useState } from 'react';
import { SpringPage } from 'types/vendor/spring';
import { BASE_URL } from 'util/requests';
import axios, { AxiosRequestConfig } from 'axios';
import ProviderCard from 'components/ProviderCard';
import Pagination from 'components/Pagination';
import ListLoader from '../../components/ListLoader';
import './styles.css';

const Providers = () => {

  const [page, setPage] = useState<SpringPage<Provider>>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    const params: AxiosRequestConfig = {
      method: 'GET',
      url: "/providers",
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
          <Link to="/">Início</Link> / <Link to="/providers"> Fornecedores </Link>
        </h1>
      </div>

      {isLoading ? <ListLoader /> : (
        page?.content.map(provider => (
          <Link to="/providers/1" key={provider.id}>
            <ProviderCard provider={provider} />
          </Link>
        )))}

      <Pagination />
    </div>
  );
};

export default Providers;
