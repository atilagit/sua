import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg'
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { ResolvedDTO } from 'types/resolvedDto';
import { ShortClient } from 'types/shortClient';
import { ShortEmployee } from 'types/shortEmployee';
import { ShortProvider } from 'types/shortProvider';
import { requestBackend } from 'util/requests';


import './styles.css';
const PostingFilter = () => {
  const [selectEmployees, setSelectEmployees] = useState<ShortEmployee[]>([]);
  const [selectClients, setSelectClients] = useState<ShortClient[]>([]);
  const [selectProviders, setSelectProviders] = useState<ShortProvider[]>([]);
  const [selectResolved, setselectResolved] = useState<ResolvedDTO[]>([]);

  type PostingFilterData = {
    employee: ShortEmployee;
    client: ShortClient;
    provider: ShortProvider;
    fromDate: string;
    toDate: string;
    exclusionList: string;
    situation: ResolvedDTO;
  };

  const {
    register,
    handleSubmit,
    control
  } = useForm<PostingFilterData>();

  const onSubmit = (formData: PostingFilterData) => {
    console.log("ENVIOU: ", formData)
  }

  useEffect(() => {
    requestBackend({ url: '/employees/active-names', withCredentials: true })
      .then(response => {
        setSelectEmployees(response.data)
      })
  }, []);

  useEffect(() => {
    requestBackend({ url: '/clients/active-names', withCredentials: true })
      .then(response => {
        setSelectClients(response.data)
      })
  }, []);

  useEffect(() => {
    requestBackend({ url: '/providers/active-names', withCredentials: true })
      .then(response => {
        setSelectProviders(response.data)
      })
  }, []);

  useEffect(() => {
    setselectResolved(
        [
            { value: true, label: 'Resolvido' },
            { value: false, label: 'Pendente' }
        ]
    )
}, []);

  return (
    <div className='posting-filter-container'>
      <form onSubmit={handleSubmit(onSubmit)} className='posting-filter-form'>
        <div className='posting-filter-container-first-line'>
          <div className='posting-filter-select-container'>
            <Controller
              name='employee'
              control={control}
              render={({ field }) => (
                <Select {...field}
                  options={selectEmployees}
                  classNamePrefix="posting-filter-select"
                  placeholder="Funcionário"
                  isClearable
                  getOptionLabel={(employee: ShortEmployee) => employee.name}
                  getOptionValue={(employee: ShortEmployee) => String(employee.id)}
                />
              )}
            />
          </div>
          <div className='posting-filter-select-container'>
            <Controller
              name='situation'
              control={control}
              render={({ field }) => (
                <Select {...field}
                  options={selectResolved}
                  classNamePrefix="posting-filter-select"
                  placeholder="Situação"
                  isClearable
                />
              )}
            />
          </div>
          <div className='posting-filter-select-container'>
            <Controller
              name='provider'
              control={control}
              render={({ field }) => (
                <Select {...field}
                  options={selectProviders}
                  classNamePrefix="posting-filter-select"
                  placeholder="Fornecedor"
                  isClearable
                  getOptionLabel={(provider: ShortProvider) => provider.firstAndLastName}
                  getOptionValue={(provider: ShortProvider) => String(provider.id)}
                />
              )}
            />
          </div>
          <div className='posting-filter-select-container'>
            <Controller
              name='client'
              control={control}
              render={({ field }) => (
                <Select {...field}
                  options={selectClients}
                  classNamePrefix="posting-filter-select"
                  placeholder="Cliente"
                  isClearable
                  getOptionLabel={(client: ShortClient) => client.firstAndLastName}
                  getOptionValue={(client: ShortClient) => String(client.id)}
                />
              )}
            />
          </div>
          <button className='clean-button'>
            LIMPAR
          </button>
        </div>
        <div className='posting-filter-container-second-line'>
          <div className='posting-filter-input-container small-input'>
            <input
              {...register("fromDate")}
              type='date'
              className='form-control'
              placeholder="De"
              name="fromDate"
            />
            <button className='product-filter-search-icon'>
              <SearchIcon />
            </button>
          </div>
          <div className='posting-filter-input-container small-input'>
            <input
              {...register("toDate")}
              type='date'
              className='form-control'
              placeholder="De"
              name="toDate"
            />
            <button className='product-filter-search-icon'>
              <SearchIcon />
            </button>
          </div>
          <div className='posting-filter-input-container large-input'>
            <input
              {...register("exclusionList")}
              type="text"
              className='form-control'
              placeholder="Omitir Id's: 158,982,58"
              name="exclusionList"
            />
            <button className='product-filter-search-icon'>
              <SearchIcon />
            </button>
          </div>
        </div>

      </form>
    </div>
  );
}

export default PostingFilter;