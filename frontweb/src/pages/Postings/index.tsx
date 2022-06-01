import PostingCard from 'components/PostingCard';
import { Posting } from 'types/posting';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Pagination from 'components/Pagination';
import { SpringPage } from 'types/vendor/spring';
import { AxiosParams } from 'types/vendor/axios';
import { BASE_URL } from 'util/requests';
import axios from 'axios';

import './styles.css';
import ListLoader from './ListLoader';

const Postings = () => {

  const [page, setPage] = useState<SpringPage<Posting>>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    const params: AxiosParams = {
      method: 'GET',
      url: `${BASE_URL}/postings`,
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
          <Link to="/">Início</Link> / <Link to="/postings"> Lançamentos </Link>
        </h1>
      </div>

      {isLoading ? <ListLoader /> : (
        page?.content.map(posting => (
        <Link to="postings/1" key={posting.id}>
          <PostingCard posting={posting} />
        </Link>
      )))}

      <Pagination />
    </div>
  );
};

export default Postings;
