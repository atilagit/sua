import Button from 'components/Button';
import FieldDetailCard from 'components/FieldDetailCard';
import Footer from 'components/Footer';
import { Posting } from 'types/posting';
import { formatDate, formatPrice, formatNumber } from 'util/formatters';

import { Link, useHistory, useParams } from 'react-router-dom';

import './styles.css';
import { requestBackend } from 'util/requests';
import { useEffect, useState } from 'react';
import DetailLoader from 'components/DetailLoader';
import { AxiosRequestConfig } from 'axios';
import { hasAnyRoles } from 'util/auth';
import { toast } from 'react-toastify';

type UrlParams = {
  postingId: string;
}

const PostingDetails = () => {

  const { postingId } = useParams<UrlParams>();
  const [posting, setPosting] = useState<Posting>();
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleDelete = (postingId: string) => {

    if(!window.confirm("Tem certeza que deseja deletar?")) {
      return;
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/postings/${postingId}`,
      withCredentials: true
    };

    requestBackend(config)
      .then(() => {
        toast.success('Deletado com sucesso!');
        history.replace("/postings");
      });
  }

  const handleInvertResolvedStatus = (postingId: string, resolved: boolean) => {

    if(!window.confirm(`Tem certeza que deseja ${resolved ? "pendenciar" : "resolver"}?`)) {
      return;
    }
    
    const config: AxiosRequestConfig = {
        method: 'PUT',
        url: `/postings/resolved/${postingId}`,
        withCredentials: true
    };

    setIsLoading(true);
    requestBackend(config)
    .then(response => {
      const posting = response.data as Posting;
      const action = posting.resolved ? "resolvido" : "pendenciado";
      toast.success('Lançamento ' +  action + ' com sucesso!');
      setPosting(response.data)
    })
    .catch(() => {
        toast.error('Erro ao tentar alterar lançamento');
    })
    .finally(() => {
        setIsLoading(false);
    });
  }

  useEffect(() => {

    const params: AxiosRequestConfig = {
      method: 'GET',
      url: `/postings/${postingId}`,
      withCredentials: true
    }

    setIsLoading(true);
    requestBackend(params)
      .then(response => {
        setPosting(response.data)
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [postingId]);

  return (
    <div className="page-container page-container-especific">
      <div className="title-content-container">
        <h1>
          <Link to="/">Início</Link> / <Link to="/postings"> Lançamentos </Link> / {posting?.id}
        </h1>
      </div>
      {isLoading ? <DetailLoader /> : (
        <div className='fields-container'>
          <div className='col4-370'>
            {posting && <FieldDetailCard title="Funcionário" content={posting.employee.name} />}
          </div>
          <div className='col2-178'>
            {posting && <FieldDetailCard title="Data" content={formatDate(posting.date)} />}
          </div>
          <div className='col2-178'>
            <FieldDetailCard title="Quantidade" content={formatNumber(posting?.quantity ? posting.quantity : 0) + " " + posting?.unit.label} />
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
      )}

      <div className='buttons-container'>
        {hasAnyRoles(['ROLE_ADMIN', 'ROLE_OPERATOR']) && (
          <>
            <Link to={`${(posting?.salaryAdvance) ?
              `/postings/salary-advance/${posting?.id}` :
              `/postings/posting/${posting?.id}`}`}>
              <Button text='EDITAR' />
            </Link>
            <button
                    onClick={() => handleInvertResolvedStatus(postingId, posting?.resolved ? posting?.resolved : false)}
                    className="button-container">
                    <p>{posting?.resolved ? "PENDENCIAR" : "RESOLVER"}</p>
                </button>
            <button
              onClick={() => handleDelete(postingId)}
              className="button-container">
              <p>EXCLUIR</p>
            </button>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default PostingDetails;