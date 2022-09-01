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

  const getProviders = (pageNumber: number) => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: "/providers",
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
    getProviders(0)
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

      <Pagination
        pageCount={page ? page.totalPages : 0}
        range={3}
        onChange={getProviders}
      />
    </div>
  );
};

export default Providers;
