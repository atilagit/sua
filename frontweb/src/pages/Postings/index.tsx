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
      <div className="title-content-container">
        <h1>
          <Link to="/">Início</Link> / <Link to="/postings"> Lançamentos </Link>
        </h1>
      </div>

      {isLoading ? <ListLoader /> : (
        page?.content.map(posting => (
        <Link to="postings/details/1" key={posting.id}>
          <PostingCard posting={posting} />
        </Link>
      )))}

      <Pagination />
    </div>
  );
};

export default Postings;
