import { Link } from 'react-router-dom';
import { Provider } from 'types/provider';
import { useEffect, useState } from 'react';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import { AxiosRequestConfig } from 'axios';
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
      <div className='providers-title-and-button-container'>
        <div className="providers-title-content-container">
          <h1>
            <Link to="/">Início</Link> / <Link to="/providers"> Fornecedores </Link>
          </h1>
        </div>
        <div className='providers-container-buttons-crud'>
          <Link to="/providers/create">
            <button className='providers-button'>NOVO</button>
          </Link>
        </div>
      </div>
      

      {isLoading ? <ListLoader /> : (
        page?.content.map(provider => (
          <Link to={`/providers/details/${provider.id}`} key={provider.id}>
            <ProviderCard provider={provider} />
          </Link>
        )))}

      <Pagination />
    </div>
  );
};

export default Providers;
