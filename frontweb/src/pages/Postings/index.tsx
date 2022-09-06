import PostingCard from 'components/PostingCard';
import { Posting } from 'types/posting';
import { Link } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import Pagination from 'components/Pagination';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import { AxiosRequestConfig } from 'axios';

import './styles.css';
import ListLoader from '../../components/ListLoader';
import ResumeBadge from 'components/ResumeBadge';
import PostingFilter from 'components/PostingFilter';

type ControlComponentsData = {
  activePage: number;
}

const Postings = () => {

  const [page, setPage] = useState<SpringPage<Posting>>();
  const [isLoading, setIsLoading] = useState(false);

  const [controlComponentsData, setControlComponentsData] = useState<ControlComponentsData>(
    {
      activePage: 0
    }
  );

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({ activePage: pageNumber })
  }

  const getPostings = useCallback(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: "/postings",
      withCredentials: true,
      params: {
        page: controlComponentsData.activePage,
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
  }, [controlComponentsData]);

  useEffect(() => {
    getPostings();
  }, [getPostings]);

  return (
    <div className="page-container page-container-especific">
      {isLoading ? <ListLoader /> : (
      <div className='container-filter-crud-postings'>
        <div>
          <div className='container-buttons-crud'>
            <Link to="/postings/posting/create">
              <button className='button'>NOVO</button>
            </Link>
            <button className='button'>LIMPAR</button>
          </div>
          <ResumeBadge text= "Resumo:" total={16562.334} />
        </div>
        <PostingFilter />
      </div>
      )}

      {isLoading ? <ListLoader /> : (
        page?.content.map(posting => (
        <Link to={`postings/details/${posting.id}`} key={posting.id}>
          <PostingCard posting={posting} />
        </Link>
      )))}

      <Pagination
        pageCount={page ? page.totalPages : 0}
        range={3}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default Postings;
