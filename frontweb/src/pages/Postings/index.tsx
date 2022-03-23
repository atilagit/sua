import PostingCard from 'components/PostingCard';
import { Posting } from 'types/posting';

import './styles.css';

const Clients = () => {

  const posting: Posting = {
    "id": 1,
    "date": "2021-07-24",
    "unit": "KG",
    "quantity": 120.52,
    "price": 0.50,
    "note": "Um exemplo de observaçao legal e de tamanho razoavelmente grand...",
    "salaryAdvance": false,
    "resolved": true,
    "employee": {
      "id": 4,
      "name": "Marianalva Vieira"
    },
    "client": {
      "id": 1,
      "contact": "Jonielson Silva"
    },
    "provider": {
      "id": 1,
      "name": "Antônio Vieira"
    }
  }
  return (
    <div className="page-container page-container-especific">
      <div className="title-content-container">
        <h1>Filtros / Diárias</h1>
      </div>
      <PostingCard posting={posting} />
      <PostingCard posting={posting} />
      <PostingCard posting={posting} />
      <PostingCard posting={posting} />
      <PostingCard posting={posting} />
      <PostingCard posting={posting} />
      <PostingCard posting={posting} />
      <PostingCard posting={posting} />
    </div>
  );
};

export default Clients;
