import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg'
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { ResolvedDTO } from 'types/resolvedDto';
import { ShortClient } from 'types/shortClient';
import { ShortEmployee } from 'types/shortEmployee';
import { ShortProvider } from 'types/shortProvider';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './styles.css';

export type PostingFilterData = {
  employee: ShortEmployee | null;
  client: ShortClient | null;
  provider: ShortProvider | null;
  fromDate: Date | null;
  toDate: Date | null;
  exclusionList: string;
  situation: ResolvedDTO | null;
};

type Props = {
  onSubmitFilter: (data: PostingFilterData ) => void;
}

const BasicPostingFilter = ( {onSubmitFilter}: Props) => {
  const [selectResolved, setselectResolved] = useState<ResolvedDTO[]>([]);
  const [fromDate, setFromDate] = useState<Date | null>();
  const [toDate, setToDate] = useState<Date | null>();

  const {
    handleSubmit,
    setValue,
    getValues,
    control
  } = useForm<PostingFilterData>();

  const onSubmit = (formData: PostingFilterData) => {
    setValue('fromDate', fromDate ? fromDate: null)
    setValue('toDate', toDate ? toDate : null);

    const obj: PostingFilterData = {
      employee: getValues('employee'),
      client: getValues('client'),
      provider: getValues('provider'),
      fromDate: getValues('fromDate'),
      toDate: getValues('toDate'),
      exclusionList: getValues('exclusionList'),
      situation: getValues('situation')
    }
    onSubmitFilter(obj);
  }

  useEffect(() => {
    setselectResolved(
        [
            { value: true, label: 'Resolvidos' },
            { value: false, label: 'Pendentes' },
            { value: null, label: 'Todos' }
        ]
    )
}, []);

  return (
    <div className='posting-filter-container'>
      <form onSubmit={handleSubmit(onSubmit)} className='posting-filter-form-basic-user'>
        <div className='posting-filter-container-first-line'>
          <div className='posting-filter-select-container'>
            <Controller
              name='situation'
              control={control}
              render={({ field }) => (
                <Select {...field}
                  options={selectResolved}
                  classNamePrefix="posting-filter-select"
                  placeholder="Situação"
                />
              )}
            />
          </div>
        </div>
        <div className='posting-filter-container-second-line'>
          <div className='posting-filter-input-container small-input'>
            <DatePicker
              selected={fromDate}
              onChange={(date: Date) => setFromDate(date)}
              className="form-control"
              dateFormat="dd/MM/yyyy"
              placeholderText="De"
              id="fromDate"
            />
          </div>
          <div className='posting-filter-input-container small-input'>
            <DatePicker
              selected={toDate}
              onChange={(date: Date) => setToDate(date)}
              className="form-control"
              dateFormat="dd/MM/yyyy"
              placeholderText="Até"
              id="toDate"
            />
          </div>
        </div>
        <button className='product-filter-search-icon-basic-users'>
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}

export default BasicPostingFilter;