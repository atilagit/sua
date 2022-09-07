import './styles.css';

const PostingFilter = () => {
    return (
        <div className='posting-filter-container'>
          <form action="" className='posting-filter-form'>
            <div className='posting-filter-employee-container-first-line'>
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
            <div className='posting-filter-employee-container-first-line'>
              <div className='posting-filter-date-container'>
                <input type="text" className='form-control'/>
              </div>
              <div className='posting-filter-date-container'>
                <input type="text" className='form-control'/>
              </div>
              <div className='posting-filter-ids-container'>
                <input type="text" className='form-control'/>
              </div>
            </div>

          </form>
        </div>
    );
}

export default PostingFilter;