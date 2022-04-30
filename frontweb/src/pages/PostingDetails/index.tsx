import Button from 'components/Button';
import FieldDetailCard from 'components/FieldDetailCard';
import Footer from 'components/Footer';
import { Posting } from 'types/posting';
import { formatDate, formatPrice } from 'util/formatters';

import { Link } from 'react-router-dom';

import './styles.css';

const PostingDetails = () => {

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
            <h1>
              <Link to="/">Início</Link> / <Link to="/postings"> Lançamentos </Link> / {posting.id}
            </h1>
          </div>
          <div className='fields-container'>
            <div className='col4-370'>
                <FieldDetailCard title = "Funcionário" content = {posting.employee.name}/>
            </div>
            <div className='col2-178'>
                <FieldDetailCard title = "Data" content = {formatDate(posting.date)}/>
            </div>
            <div className='col2-178'>
                <FieldDetailCard title = "Quantidade" content = {posting.quantity + " " + posting.unit}/>
            </div>
            <div className='col2-178'>
                <FieldDetailCard title = "Preço" content = {formatPrice(posting.price)}/>
            </div>
            <div className='col2-178'>
                <FieldDetailCard title = "Total" content = {formatPrice(posting.quantity * posting.price)}/>
            </div>
            <div className='col4-370'>
                <FieldDetailCard title = "Fornecedor" content = {posting.provider.name}/>
            </div>
            <div className='col4-370'>
                <FieldDetailCard title = "Cliente" content = {posting.client.contact}/>
            </div>
            <div className='col4-370'>
                <FieldDetailCard title = "Status" content = {posting.resolved ? "RESOLVIDO" : "PENDENTE"}/>
            </div>
            <div className='col12-1140'>
                <FieldDetailCard title = "Observação" content = {posting.note}/>
            </div>
          </div>
          <div className='buttons-container'>
              <Button text='EDITAR'/>
              <Button text={posting.resolved ? "PENDENCIAR" : "RESOLVER"}/>
              <Button text='EXCLUIR'/>
          </div>
          <Footer/>
        </div>
    );
}

export default PostingDetails;