import Button from 'components/Button';
import { Link } from 'react-router-dom';
import './styles.css';

type Props = {
  text: String;
  btn1: string;
  btn2: string;
  btn3: string;
  btn4: string;
}

const Menucard = ({ text, btn1, btn2, btn3, btn4 }: Props) => {
  return (
    <>
      <div className="base-card home-card">
          <div className="home-content-container">
            <h2>{text}</h2>
          </div>
          <div className="home-button-container">
            <Link to="/clients">
              <Button text={btn1} />
            </Link>
            <Link to="/clients">
              <Button text={btn2} />
            </Link>
            <Link to="/clients">
              <Button text={btn3} />
            </Link>
            <Link to="/clients">
              <Button text={btn4} />
            </Link>
          </div>
        </div>
    </>
  );
}

export default Menucard;
