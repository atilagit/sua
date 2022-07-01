import PostingCard from 'components/PostingCard';
import { Posting } from 'types/posting';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Pagination from 'components/Pagination';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import { AxiosRequestConfig } from 'axios';

import './styles.css';
import ListLoader from '../../components/ListLoader';
import ResumeBadge from 'components/ResumeBadge';

const Postings = () => {

  const [page, setPage] = useState<SpringPage<Posting>>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    const params: AxiosRequestConfig = {
      method: 'GET',
      url: "/postings",
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
      <div className='container-filter-crud-postings'>
        <div>
          <div className='container-buttons-crud'>
            <Link to="/postings/create">
              <button className='button'>NOVO</button>
            </Link>
            <button className='button'>LIMPAR</button>
          </div>
          <ResumeBadge text= "Resumo:" total={16562.334} />
        </div>
        <div>
          <div className='filter-container'>
            <div className='field-content'>
              Search bar
            </div>
            <div className='field-content'>
              Search bar
            </div>
            <div className='field-content'>
              Search bar
            </div>
            <div className='field-content'>
              Search bar
            </div>
          </div>
          <div className='filter-container'>
            <div className='field-content'>
              Search bar
            </div>
            <div className='field-content'>
              Search bar
            </div>
            <div className='field-content-extended'>
              Search bar
            </div>
          </div>
        </div>
      </div>
      

      {isLoading ? <ListLoader /> : (
        page?.content.map(posting => (
        <Link to={`postings/details/${posting.id}`} key={posting.id}>
          <PostingCard posting={posting} />
        </Link>
      )))}

      <Pagination />
    </div>
  );
};

export default Postings;
