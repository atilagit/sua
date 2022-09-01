import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import ReactPaginate from 'react-paginate';

import './styles.css'; 

const Pagination = () => {
    return (
        <ReactPaginate
            pageCount={50}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            containerClassName='pagination-container'
            pageLinkClassName='pagination-item base-card'
            breakClassName='pagination-item base-card'
            previousClassName='arrow'
            nextClassName='last-arrow arrow'
            activeLinkClassName='pagination-link-active'
            disabledClassName='arrow inactive'

            previousLabel={<ArrowIcon />}
            nextLabel={<ArrowIcon />}
        />
    );
}

export default Pagination;