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
import PostingFilter, { PostingFilterData } from 'components/PostingFilter';

type ControlComponentsData = {
  activePage: number;
  filterData: PostingFilterData;
}

const Postings = () => {

  const [page, setPage] = useState<SpringPage<Posting>>();
  const [isLoading, setIsLoading] = useState(false);

  const [controlComponentsData, setControlComponentsData] = useState<ControlComponentsData>(
    {
      activePage: 0,
      filterData: { employee: null, client: null, provider: null, fromDate: null, toDate: null, exclusionList: "", situation: null }
    }
  );

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({ activePage: pageNumber, filterData:  controlComponentsData.filterData })
  }

  const handleSubmitFilter = (data: PostingFilterData) => {
    setControlComponentsData({ activePage: 0, filterData: data });
  };

  const getPostings = useCallback(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: "/postings",
      withCredentials: true,
      params: {
        page: controlComponentsData.activePage,
        size: 50,
        employeeId: controlComponentsData.filterData?.employee?.id,
        clientId: controlComponentsData.filterData?.client?.id,
        providerId: controlComponentsData.filterData?.provider?.id,
        fromDate: controlComponentsData.filterData?.fromDate?.toISOString().slice(0,10),
        toDate: controlComponentsData.filterData?.toDate?.toISOString().slice(0,10),
        resolved: controlComponentsData.filterData?.situation?.value,
        exclusionList: controlComponentsData.filterData?.exclusionList
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
          <div className='container-buttons-crud'>
            <Link to="/postings/posting/create">
              <button className='button-new'>
                NOVO
              </button>
            </Link>
          </div>
          <PostingFilter onSubmitFilter={handleSubmitFilter} />
        </div>
      )}

      {isLoading ? <ListLoader /> : (
        page?.content.map(posting => (
          <Link to={`postings/details/${posting.id}`} key={posting.id}>
            <PostingCard posting={posting} />
          </Link>
        )))}

      <Pagination
        forcePage={page?.number}
        pageCount={page ? page.totalPages : 0}
        range={3}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default Postings;
