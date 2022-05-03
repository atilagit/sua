import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';

import './styles.css'; 

const Pagination = () => {
    return (
        <div className='pagination-container'>
            <ArrowIcon className='arrow inactive' />
            <div className='pagination-item active base-card'>1</div>
            <div className='pagination-item base-card'>2</div>
            <div className='pagination-item base-card'>3</div>
            <div className='pagination-item base-card'>...</div>
            <div className='pagination-item base-card'>10</div>
            <ArrowIcon className='last-arrow arrow active' />
        </div>
    );
}

export default Pagination;