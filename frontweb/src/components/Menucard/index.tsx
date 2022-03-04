import Button from 'components/Button';
import { Link } from 'react-router-dom';
import './styles.css';

type Props = {
  text: String;
  btn1: string;
  btn1rota: string;
  btn2: string;
  btn2rota: string;
  btn3: string;
  btn3rota: string;
  btn4: string;
  btn4rota: string;
}

const Menucard = ({ text, btn1, btn1rota, btn2, btn2rota, btn3, btn3rota, btn4, btn4rota }: Props) => {
  return (
    <>
      <div className="base-card home-card">
          <div className="home-content-container">
            <h2>{text}</h2>
          </div>
          <div className="home-button-container">
            <Link to = {btn1rota}>
              <Button text={btn1} />
            </Link>
            <Link to = {btn2rota}>
              <Button text={btn2} />
            </Link>
            <Link to = {btn3rota}>
              <Button text={btn3} />
            </Link>
            <Link to = {btn4rota}>
              <Button text={btn4} />
            </Link>
          </div>
        </div>
    </>
  );
}

export default Menucard;
