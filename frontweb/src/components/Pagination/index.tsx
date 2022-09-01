import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import ReactPaginate from 'react-paginate';

import './styles.css'; 

type Props = {
    pageCount: number;
    range: number;
    onChange?: (pageNumber: number) => void;
}

const Pagination = ( {pageCount, range, onChange } : Props) => {
    return (
        <ReactPaginate
            pageCount={pageCount}
            pageRangeDisplayed={range}
            marginPagesDisplayed={1}
            containerClassName='pagination-container'
            pageLinkClassName='pagination-item base-card'
            breakClassName='pagination-item base-card'
            previousClassName='arrow'
            nextClassName='last-arrow arrow'
            activeLinkClassName='pagination-link-active'
            disabledClassName='arrow inactive'

            onPageChange={(items) =>  (onChange)? onChange(items.selected) : {}}

            previousLabel={<ArrowIcon />}
            nextLabel={<ArrowIcon />}
        />
    );
}

export default Pagination;