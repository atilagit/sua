import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg'

import './styles.css';

const PostingFilter = () => {
  return (
    <div className='posting-filter-container'>
      <form action="" className='posting-filter-form'>
        <div className='posting-filter-container-first-line'>
          <div className='posting-filter-select-container'>
            <select name='' id='' >
              <option value="">Átila Silva</option>
            </select>
          </div>
          <div className='posting-filter-select-container'>
            <select name='' id='' >
              <option value="">Resolvido</option>
            </select>
          </div>
          <div className='posting-filter-select-container'>
            <select name='' id='' >
              <option value="">Antônio Ferreira</option>
            </select>
          </div>
          <div className='posting-filter-select-container'>
            <select name='' id='' >
              <option value="">Jobiscleiton Casimiro</option>
            </select>
          </div>
          <button className='clean-button'>
            LIMPAR
          </button>
        </div>
        <div className='posting-filter-container-second-line'>
          <div className='posting-filter-input-container small-input'>
            <input
              type="text"
              className='form-control'
              placeholder='De'
            />
            <SearchIcon />
          </div>
          <div className='posting-filter-input-container small-input'>
            <input
              type="text"
              className='form-control'
              placeholder='Até'
            />
            <SearchIcon />
          </div>
          <div className='posting-filter-input-container large-input'>
            <input
              type="text"
              className='form-control'
              placeholder="Omitir Id's: 158,982,58"
            />
            <SearchIcon />
          </div>
        </div>

      </form>
    </div>
  );
}

export default PostingFilter;