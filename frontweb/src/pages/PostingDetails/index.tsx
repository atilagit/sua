import Button from 'components/Button';
import FieldDetailCard from 'components/FieldDetailCard';
import Footer from 'components/Footer';
import { Posting } from 'types/posting';
import { formatDate, formatPrice } from 'util/formatters';

import { Link, useParams } from 'react-router-dom';

import './styles.css';
import axios from 'axios';
import { BASE_URL } from 'util/requests';
import { useEffect, useState } from 'react';

type UrlParams = {
  postingId: string;
}

const PostingDetails = () => {

  const { postingId } = useParams<UrlParams>();

  const [posting, setPosting] = useState<Posting>();

  useEffect(() => {
    axios.get(`${BASE_URL}/postings/${postingId}`)
      .then(response => {
        setPosting(response.data)
      });
  }, [postingId]);

  return (
    <div className="page-container page-container-especific">
      <div className="title-content-container">
        <h1>
          <Link to="/">Início</Link> / <Link to="/postings"> Lançamentos </Link> / {posting?.id}
        </h1>
      </div>
      <div className='fields-container'>
        <div className='col4-370'>
          {posting && <FieldDetailCard title="Funcionário" content={posting.employee.name} />}
        </div>
        <div className='col2-178'>
          {posting && <FieldDetailCard title="Data" content={formatDate(posting.date)} />}
        </div>
        <div className='col2-178'>
          <FieldDetailCard title="Quantidade" content={posting?.quantity + " " + posting?.unit} />
        </div>
        <div className='col2-178'>
          {posting && <FieldDetailCard title="Preço" content={formatPrice(posting.price)} />}
        </div>
        <div className='col2-178'>
          {posting && <FieldDetailCard title="Total" content={formatPrice(posting.quantity * posting.price)} />}
        </div>
        <div className='col4-370'>
          {posting && <FieldDetailCard title="Fornecedor" content={(posting.provider != null) ? posting.provider.name : "-"} />}
        </div>
        <div className='col4-370'>
          {posting && <FieldDetailCard title="Cliente" content={(posting.client != null) ? posting.client.contact : "-"} />}
        </div>
        <div className='col4-370'>
          <FieldDetailCard title="Status" content={posting?.resolved ? "RESOLVIDO" : "PENDENTE"} />
        </div>
        <div className='col12-1140'>
          {posting && <FieldDetailCard title="Observação" content={posting?.note} />}
        </div>
      </div>
      <div className='buttons-container'>
        <Button text='EDITAR' />
        <Button text={posting?.resolved ? "PENDENCIAR" : "RESOLVER"} />
        <Button text='EXCLUIR' />
      </div>
      <Footer />
    </div>
  );
}

export default PostingDetails;