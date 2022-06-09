import Button from 'components/Button';
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
        <form>
          <div className="mb-4 mt-4">
            <input
              type="text"
              className="form-control base-input"
              placeholder="Email ou CPF"
              name="username"
            />
          </div>
          <div className="mb-1">
            <input
              type="password"
              className="form-control base-input "
              placeholder="Password"
              name="password"
            />
          </div>
          <Link to="/auth/recover" className="login-link-recover">
            Esqueci a senha
          </Link>
          <div className="auth-button-container">
            <Button text="ENTRAR" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Logincard;
