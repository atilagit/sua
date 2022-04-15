import PostingCard from 'components/PostingCard';
import { Posting } from 'types/posting';

import './styles.css';

const Postings = () => {

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
      "contact": "Jonielson"
    },
    "provider": {
      "id": 1,
      "name": "Antônio"
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

export default Postings;
