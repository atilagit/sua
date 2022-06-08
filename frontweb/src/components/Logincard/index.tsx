import Button from 'components/Button';
import FieldDetailCard from 'components/FieldDetailCard';
import { Link } from 'react-router-dom';
import './styles.css';

type Props = {
  text: String;
  btn4: string;
  btn4rota: string;
}

const Logincard = ({ text, btn4, btn4rota }: Props) => {
  return (
    <>
      <div className="base-card auth-card">
        <div className="auth-content-container">
          <h2>{text}</h2>
        </div>
        <FieldDetailCard
          title=""
          content="Email"
        />
        <FieldDetailCard
          title=""
          content="Senha"
        />
        <div className="auth-button-container">
          <Link to={btn4rota}>
            <Button text={btn4} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Logincard;
